import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import GitHubService, { RepositoryInfo } from '../../services/GitHubService';
import { Send, X, Check, AlertCircle, Folder, MessageSquare, Database, Loader2 } from 'lucide-react';

interface SaveToGitHubProps {
  yamlContent: string;
  fileName: string;
}

export function SaveToGitHub({ yamlContent, fileName }: SaveToGitHubProps) {
  const { user, token } = useAuth();
  const [showDialog, setShowDialog] = useState(false);
  const [repositories, setRepositories] = useState<RepositoryInfo[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<RepositoryInfo | null>(null);
  const [folderPath, setFolderPath] = useState('annotations');
  const [commitMessage, setCommitMessage] = useState(`Add annotation: ${fileName}`);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Load repositories when dialog opens
  useEffect(() => {
    if (showDialog && token && !repositories.length) {
      loadRepositories();
    }
  }, [showDialog, token, repositories.length]);

  const loadRepositories = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const authMethod = localStorage.getItem('github_auth_method') || 'token';
      const isBasicAuth = authMethod === 'credentials';
      const service = new GitHubService(token!, isBasicAuth);
      const repos = await service.getUserRepositories();
      setRepositories(repos);

      // Auto-select first repo
      if (repos.length > 0) {
        setSelectedRepo(repos[0]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load repositories');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    if (!selectedRepo || !token) return;

    try {
      setIsLoading(true);
      setError(null);

      const authMethod = localStorage.getItem('github_auth_method') || 'token';
      const isBasicAuth = authMethod === 'credentials';
      const service = new GitHubService(token, isBasicAuth);
      const filePath = `${folderPath}/${fileName}`;

      await service.commitFile({
        owner: selectedRepo.owner.login,
        repo: selectedRepo.name,
        path: filePath,
        message: commitMessage,
        content: yamlContent,
      });

      setSuccess(true);
      setTimeout(() => {
        setShowDialog(false);
        setSuccess(false);
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save to GitHub');
    } finally {
      setIsLoading(false);
    }
  };

  if (!user || !token) {
    return null;
  }

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setShowDialog(true)}
        className="flex items-center gap-2 px-3 py-1.5 bg-[#238636] text-white rounded-md hover:bg-[#2ea043] transition-all active:scale-[0.98] text-xs font-medium shadow-sm hover:shadow-green-500/20"
        title="Save annotations to GitHub"
      >
        <Send size={14} />
        <span className="hidden sm:inline">Save to GitHub</span>
      </button>

      {/* Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div 
            className="bg-[#161b22] border border-[#30363d] rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] flex flex-col animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-[#30363d] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database size={18} className="text-blue-500" />
                <h2 className="text-base font-semibold text-white">Save Progress</h2>
              </div>
              <button
                onClick={() => setShowDialog(false)}
                disabled={isLoading}
                className="text-gray-500 hover:text-white transition-colors disabled:opacity-50"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5 flex-1 overflow-y-auto space-y-5 custom-scrollbar">
              {/* Error */}
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-md flex items-start gap-2 shadow-inner">
                  <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-red-200 leading-normal">{error}</p>
                </div>
              )}

              {/* Success */}
              {success && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-md flex items-start gap-2 shadow-inner animate-in slide-in-from-top-2">
                  <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-green-200 leading-normal">Changes committed successfully!</p>
                </div>
              )}

              {/* Repository Selection */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-medium text-gray-400">
                  <Database size={14} /> Repository
                </label>
                <div className="relative group">
                  <select
                    value={selectedRepo?.full_name || ''}
                    onChange={(e) => {
                      const repo = repositories.find(r => r.full_name === e.target.value);
                      setSelectedRepo(repo || null);
                    }}
                    disabled={isLoading || repositories.length === 0}
                    className="w-full bg-[#0d1117] border border-[#30363d] text-white text-sm rounded-md px-3 py-2 outline-none focus:border-blue-500 transition-all appearance-none disabled:opacity-50"
                  >
                    {isLoading && repositories.length === 0 ? (
                      <option>Loading your repositories...</option>
                    ) : repositories.length === 0 ? (
                      <option>No repositories found</option>
                    ) : (
                      repositories.map((repo) => (
                        <option key={repo.full_name} value={repo.full_name}>
                          {repo.full_name}
                        </option>
                      ))
                    )}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500 group-hover:text-gray-300">
                    <ChevronDown size={14} />
                  </div>
                </div>
              </div>

              {/* Folder Path */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-medium text-gray-400">
                  <Folder size={14} /> Folder Path
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={folderPath}
                    onChange={(e) => setFolderPath(e.target.value)}
                    placeholder="e.g. data/annotations"
                    disabled={isLoading}
                    className="w-full bg-[#0d1117] border border-[#30363d] text-white text-sm rounded-md px-3 py-2 outline-none focus:border-blue-500 transition-all disabled:opacity-50 placeholder:text-gray-600"
                  />
                </div>
                <p className="text-[10px] text-gray-500 pl-1 italic">
                  Destination: <span className="text-blue-400">{folderPath}/{fileName}</span>
                </p>
              </div>

              {/* Commit Message */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-medium text-gray-400">
                  <MessageSquare size={14} /> Commit Message
                </label>
                <textarea
                  value={commitMessage}
                  onChange={(e) => setCommitMessage(e.target.value)}
                  disabled={isLoading}
                  rows={2}
                  className="w-full bg-[#0d1117] border border-[#30363d] text-white text-sm rounded-md px-3 py-2 outline-none focus:border-blue-500 transition-all disabled:opacity-50 resize-none placeholder:text-gray-600"
                  placeholder="What did you change?"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-[#30363d] flex gap-3 justify-end bg-[#0d1117]/30 rounded-b-xl">
              <button
                onClick={() => setShowDialog(false)}
                disabled={isLoading}
                className="px-4 py-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isLoading || !selectedRepo || !yamlContent}
                className="px-5 py-1.5 text-xs font-medium bg-[#238636] hover:bg-[#2ea043] text-white rounded-md transition-all active:scale-95 disabled:opacity-50 flex items-center gap-2 shadow-sm"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Committing...
                  </>
                ) : (
                  <>
                    <Check size={14} />
                    Commit Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Internal component for dropdown icon
function ChevronDown({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}
