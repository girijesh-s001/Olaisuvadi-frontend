import React, { useState, FormEvent } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Github, Mail, Lock, Key, AlertCircle, Chrome, Apple } from 'lucide-react';

export function LoginPage() {
  const { login, loginSocial, isLoading, error } = useAuth();
  const [loginMethod, setLoginMethod] = useState<'token' | 'credentials'>('token');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocalError(null);
    setSuccessMessage(null);

    try {
      if (loginMethod === 'credentials') {
        if (!email.trim()) {
          setLocalError('Email address is required');
          return;
        }
        if (!password.trim()) {
          setLocalError('Password is required');
          return;
        }
        await login(email.trim(), password.trim(), 'credentials');
      } else {
        if (!username.trim()) {
          setLocalError('GitHub username is required');
          return;
        }
        if (!token.trim()) {
          setLocalError('Personal access token is required');
          return;
        }
        await login(username.trim(), token.trim(), 'token');
      }
    } catch (err: any) {
      setLocalError(err.message || 'Authentication failed. Please check your credentials.');
    }
  };

  const handleSocialLogin = async (method: 'google' | 'apple') => {
    setLocalError(null);
    try {
      await loginSocial(method);
    } catch (err: any) {
      setLocalError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] flex flex-col items-center justify-center p-4 selection:bg-green-500/30">
      {/* Background patterns */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-[440px] z-10 animate-in fade-in zoom-in duration-500">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-white tracking-tight mb-2">Sign in to GitHub</h1>
        </div>

        {/* Success Alert (Mocked from screenshot) */}
        {successMessage && (
          <div className="mb-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-md flex items-center justify-between">
            <p className="text-sm text-blue-100">{successMessage}</p>
            <button onClick={() => setSuccessMessage(null)} className="text-blue-200 hover:text-white transition-colors">
              <span className="text-lg">×</span>
            </button>
          </div>
        )}

        {/* Form Container */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Login Method Toggle */}
            <div className="flex p-1 bg-[#0d1117] rounded-md border border-[#30363d] mb-2">
              <button
                type="button"
                onClick={() => setLoginMethod('token')}
                className={`flex-1 py-1.5 px-3 rounded text-xs font-medium transition-all ${loginMethod === 'token'
                    ? 'bg-[#21262d] text-white shadow-sm'
                    : 'text-gray-400 hover:text-gray-200'
                  }`}
              >
                Token
              </button>
            </div>

            {loginMethod === 'credentials' ? (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-normal text-white">
                    Username or email address
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="block text-sm font-normal text-white">Password</label>
                    <a href="#" className="text-xs text-[#2f81f7] hover:underline">Forgot password?</a>
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all disabled:opacity-50"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-normal text-white">GitHub Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={isLoading}
                    placeholder="Enter your github username"
                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="block text-sm font-normal text-white">Personal Access Token</label>
                    <a
                      href="https://github.com/settings/tokens/new?scopes=repo&description=Olaisuvadi%20Annotator"
                      target="_blank"
                      className="text-xs text-[#2f81f7] hover:underline"
                    >
                      Create token
                    </a>
                  </div>
                  <input
                    type="password"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    disabled={isLoading}
                    placeholder="ghp_..."
                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all disabled:opacity-50"
                  />
                </div>
              </>
            )}

            {/* Error Message */}
            {(error || localError) && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-md flex items-start gap-2 animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <p className="text-xs text-red-200 leading-normal">{error || localError}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#238636] hover:bg-[#2ea043] text-white font-medium py-1.5 px-4 rounded-md transition-all active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100 flex items-center justify-center h-9 mt-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'Sign in'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6 pb-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-[#30363d]"></span>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-[#161b22] px-2 text-gray-500">or</span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => handleSocialLogin('google')}
              disabled={isLoading}
              className="w-full bg-[#21262d] border border-[#30363d] hover:bg-[#30363d] text-white py-2 px-4 rounded-md flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              <Chrome className="w-4 h-4 text-[#4285F4]" />
              <span className="text-sm font-medium">Continue with Google</span>
            </button>
            <button
              type="button"
              onClick={() => handleSocialLogin('apple')}
              disabled={isLoading}
              className="w-full bg-[#21262d] border border-[#30363d] hover:bg-[#30363d] text-white py-2 px-4 rounded-md flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              <Apple className="w-4 h-4 text-white" />
              <span className="text-sm font-medium">Continue with Apple</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 text-center">
          <p className="text-xs text-gray-500 mb-2">Tamil Character Annotation Tool</p>
          <div className="flex justify-center gap-4 text-xs">
            <a href="#" className="text-gray-400 hover:text-blue-500 hover:underline">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-blue-500 hover:underline">Security</a>
            <a href="#" className="text-gray-400 hover:text-blue-500 hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
