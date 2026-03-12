/**
 * GitHub API Service for managing repository operations
 */

export interface CommitOptions {
  owner: string;
  repo: string;
  path: string;
  message: string;
  content: string;
  branch?: string;
}

export interface RepositoryInfo {
  name: string;
  full_name: string;
  description: string | null;
  private: boolean;
  owner: {
    login: string;
    avatar_url: string;
  };
}

class GitHubService {
  private token: string;
  private isBasicAuth: boolean;

  constructor(token: string, isBasicAuth: boolean = false) {
    this.token = token;
    this.isBasicAuth = isBasicAuth;
  }

  private async request<T>(
    method: string,
    url: string,
    body?: unknown
  ): Promise<T> {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };

    if (this.isBasicAuth) {
      headers['Authorization'] = `Basic ${this.token}`;
    } else {
      headers['Authorization'] = `token ${this.token}`;
    }

    const options: RequestInit = {
      method,
      headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
      headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(url, options);

    if (response.status === 404) {
      throw new Error('Not found');
    }

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || `GitHub API error: ${response.statusText}`);
    }

    if (response.status === 204) {
      return {} as T;
    }

    return response.json() as Promise<T>;
  }

  /**
   * Get user's repositories
   */
  async getUserRepositories(): Promise<RepositoryInfo[]> {
    return this.request<RepositoryInfo[]>('GET', 'https://api.github.com/user/repos?per_page=100');
  }

  /**
   * Get a specific repository
   */
  async getRepository(owner: string, repo: string): Promise<RepositoryInfo> {
    return this.request<RepositoryInfo>(
      'GET',
      `https://api.github.com/repos/${owner}/${repo}`
    );
  }

  /**
   * Get file from repository
   */
  async getFile(
    owner: string,
    repo: string,
    path: string,
    branch = 'main'
  ): Promise<{ sha: string; content: string } | null> {
    try {
      const response = await this.request<{
        sha: string;
        content: string;
        encoding: string;
      }>(
        'GET',
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`
      );

      // Decode base64 content
      const content = atob(response.content);
      return { sha: response.sha, content };
    } catch (err) {
      if (err instanceof Error && err.message.includes('Not found')) {
        return null;
      }
      throw err;
    }
  }

  /**
   * Commit file to repository
   */
  async commitFile(options: CommitOptions): Promise<{ sha: string; url: string }> {
    const { owner, repo, path, message, content, branch = 'main' } = options;

    // First, try to get the file to get its SHA (needed for updates)
    let sha: string | undefined;
    try {
      const existing = await this.getFile(owner, repo, path, branch);
      if (existing) {
        sha = existing.sha;
      }
    } catch {
      // File doesn't exist, that's fine
    }

    // Encode content to base64
    const encodedContent = btoa(unescape(encodeURIComponent(content)));

    const body: Record<string, unknown> = {
      message,
      content: encodedContent,
      branch,
    };

    if (sha) {
      body.sha = sha;
    }

    const response = await this.request<{ commit: { sha: string }; content: { html_url: string } }>(
      'PUT',
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
      body
    );

    return {
      sha: response.commit.sha,
      url: response.content.html_url,
    };
  }

  /**
   * Create a tree and commit
   */
  async createCommit(
    owner: string,
    repo: string,
    message: string,
    files: Array<{ path: string; content: string }>,
    branch = 'main'
  ): Promise<string> {
    // Get current commit reference
    const refResponse = await this.request<{ object: { sha: string } }>(
      'GET',
      `https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branch}`
    );
    const parentSha = refResponse.object.sha;

    // Create tree
    const treeItems = files.map((file) => ({
      path: file.path,
      mode: '100644' as const,
      type: 'blob' as const,
      content: file.content,
    }));

    const treeResponse = await this.request<{ sha: string }>(
      'POST',
      `https://api.github.com/repos/${owner}/${repo}/git/trees`,
      { tree: treeItems, base_tree: parentSha }
    );

    // Create commit
    const commitResponse = await this.request<{ sha: string }>(
      'POST',
      `https://api.github.com/repos/${owner}/${repo}/git/commits`,
      {
        message,
        tree: treeResponse.sha,
        parents: [parentSha],
      }
    );

    // Update ref
    await this.request('PATCH', `https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branch}`, {
      sha: commitResponse.sha,
    });

    return commitResponse.sha;
  }
}

export default GitHubService;
