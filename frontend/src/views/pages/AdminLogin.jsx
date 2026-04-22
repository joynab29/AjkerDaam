import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../controllers/useAuth';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login, loading, error } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      // Error is handled in the controller and exposed via the `error` variable
    }
  };

  return (
    <div className="bg-surface-bright font-body-md text-on-surface flex flex-col min-h-screen relative overflow-hidden">
      <main className="flex-grow flex items-center justify-center p-gutter">
        <div className="w-full max-w-md">
          {/* Logo Section */}
          <div className="text-center mb-lg">
            <h1 className="font-headline-xl text-primary tracking-tighter mb-2">AjkerDaam</h1>
            <p className="font-label-sm text-on-primary-container tracking-widest uppercase">Admin Portal</p>
          </div>
          
          {/* Login Card */}
          <div className="bg-surface-container-lowest rounded-xl p-lg shadow-xl border border-outline-variant/30 relative">
            <div className="relative">
              <h2 className="font-headline-md text-on-background mb-sm">System Administration</h2>
              <p className="font-body-md text-on-surface-variant mb-lg">Access the central control panel.</p>
              
              {error && <div className="mb-4 text-error text-sm font-semibold">{error}</div>}

              <form className="space-y-sm" onSubmit={handleLogin}>
                {/* Email Input */}
                <div className="space-y-xs">
                  <label className="font-label-sm text-on-surface-variant ml-1" htmlFor="email">Admin Email</label>
                  <div className="relative group">
                    <input 
                      className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all px-4 py-3 font-body-md placeholder-on-surface-variant/40 rounded-t-lg" 
                      id="email" 
                      name="email" 
                      placeholder="admin@ajkerdaam.com" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                {/* Password Input */}
                <div className="space-y-xs">
                  <div className="flex justify-between items-end ml-1">
                    <label className="font-label-sm text-on-surface-variant" htmlFor="password">Password</label>
                  </div>
                  <div className="relative">
                    <input 
                      className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all px-4 py-3 font-body-md placeholder-on-surface-variant/40 rounded-t-lg" 
                      id="password" 
                      name="password" 
                      placeholder="••••••••" 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="pt-sm">
                  <button 
                    disabled={loading}
                    className="w-full font-headline-md py-4 rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 bg-[#B5D31F] text-on-secondary-fixed hover:opacity-90 disabled:opacity-50" 
                    type="submit"
                  >
                    {loading ? 'Authenticating...' : 'Secure Login'}
                    <span className="material-symbols-outlined" data-icon="shield">shield</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default AdminLogin;
