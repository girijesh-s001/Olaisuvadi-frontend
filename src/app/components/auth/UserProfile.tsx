import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { LogOut, Github, User, ChevronDown } from 'lucide-react';

export function UserProfile() {
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  if (!user) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 pl-1.5 pr-2 py-1.5 hover:bg-[#1e293b] rounded-md transition-all active:scale-95 group"
        title="User profile"
      >
        <div className="relative">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-7 h-7 rounded-full border border-[#30363d] group-hover:border-blue-500/50 transition-colors"
          />
          <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-[#060f1e] rounded-full" />
        </div>
        <span className="text-xs font-medium text-slate-300 hidden sm:inline group-hover:text-white transition-colors">
          {user.name || user.login}
        </span>
        <ChevronDown 
          size={14} 
          className={`text-slate-500 transition-transform duration-200 ${showMenu ? 'rotate-180' : ''}`} 
        />
      </button>

      {showMenu && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowMenu(false)}
          />

          {/* Menu */}
          <div className="absolute right-0 mt-2 w-56 bg-[#161b22] border border-[#30363d] rounded-lg shadow-2xl z-20 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="px-4 py-3 border-b border-[#30363d] bg-[#0d1117]/50">
              <p className="text-sm font-semibold text-white truncate">{user.name || user.login}</p>
              <p className="text-xs text-slate-500 truncate">@{user.login}</p>
            </div>

            <div className="py-1">
              {user.bio && (
                <div className="px-4 py-2 border-b border-[#30363d]">
                  <p className="text-[11px] leading-relaxed text-slate-400 italic">
                    {user.bio}
                  </p>
                </div>
              )}

              <a
                href={`https://github.com/${user.login}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full px-4 py-2 text-xs text-slate-300 hover:bg-[#1e293b] hover:text-white transition-colors"
              >
                <Github size={14} />
                <span>View GitHub Profile</span>
              </a>

              <button
                onClick={() => {
                  logout();
                  setShowMenu(false);
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-xs text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors border-t border-[#30363d] mt-1"
              >
                <LogOut size={14} />
                <span>Sign out</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
