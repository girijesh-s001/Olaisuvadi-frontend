import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
}

interface AuthContextType {
  user: GitHubUser | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (identifier: string, credential: string, method?: 'credentials' | 'token') => Promise<void>;
  loginSocial: (method: 'google' | 'apple') => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load auth from localStorage on mount
  useEffect(() => {
    try {
      const storedToken = localStorage.getItem('github_token');
      const storedUser = localStorage.getItem('github_user');
      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    } catch (err) {
      console.error('Failed to restore auth:', err);
    }
  }, []);

  const loginSocial = useCallback(async (method: 'google' | 'apple') => {
    setIsLoading(true);
    setError(null);
    try {
      // Mock social login for now
      console.log(`Social login with ${method} initiated`);
      await new Promise(resolve => setTimeout(resolve, 1500));
      throw new Error(`${method.charAt(0).toUpperCase() + method.slice(1)} login is coming soon!`);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Login failed';
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback(async (identifier: string, credential: string, method: 'credentials' | 'token' = 'token') => {
    setIsLoading(true);
    setError(null);

    try {
      if (method === 'credentials') {
        // Email + Password authentication
        // GitHub API Basic Auth: base64(email:password)
        const authString = btoa(`${identifier}:${credential}`);
        
        const response = await fetch('https://api.github.com/user', {
          headers: {
            'Authorization': `Basic ${authString}`,
            'Accept': 'application/vnd.github.v3+json',
          },
        });

        if (!response.ok) {
          throw new Error('Invalid email/password combination or authentication failed');
        }

        const userData = (await response.json()) as GitHubUser;
        setToken(authString);
        setUser(userData);

        // Save to localStorage
        localStorage.setItem('github_token', authString);
        localStorage.setItem('github_user', JSON.stringify(userData));
        localStorage.setItem('github_auth_method', 'credentials');
      } else {
        // Personal Access Token authentication
        const response = await fetch('https://api.github.com/user', {
          headers: {
            'Authorization': `token ${credential}`,
            'Accept': 'application/vnd.github.v3+json',
          },
        });

        if (!response.ok) {
          throw new Error('Invalid Personal Access Token');
        }

        const userData = (await response.json()) as GitHubUser;

        setToken(credential);
        setUser(userData);

        // Save to localStorage
        localStorage.setItem('github_token', credential);
        localStorage.setItem('github_user', JSON.stringify(userData));
        localStorage.setItem('github_auth_method', 'token');
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Login failed';
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    setError(null);
    localStorage.removeItem('github_token');
    localStorage.removeItem('github_user');
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, isLoading, error, login, loginSocial, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
