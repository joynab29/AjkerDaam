import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../controllers/useAuth';

const Login = () => {
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
            <p className="font-label-sm text-on-primary-container tracking-widest uppercase">Smart Market Transparency</p>
          </div>
          
          {/* Login Card */}
          <div className="bg-surface-container-lowest rounded-xl p-lg shadow-xl border border-outline-variant/30 relative">
            <div className="relative">
              <h2 className="font-headline-md text-on-background mb-sm">Welcome Back</h2>
              <p className="font-body-md text-on-surface-variant mb-lg">Access your market dashboard.</p>
              
              {error && <div className="mb-4 text-error text-sm font-semibold">{error}</div>}

              <form className="space-y-sm" onSubmit={handleLogin}>
                {/* Email Input */}
                <div className="space-y-xs">
                  <label className="font-label-sm text-on-surface-variant ml-1" htmlFor="email">Email Address</label>
                  <div className="relative group">
                    <input 
                      className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all px-4 py-3 font-body-md placeholder-on-surface-variant/40 rounded-t-lg" 
                      id="email" 
                      name="email" 
                      placeholder="name@example.com" 
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
                    <a className="font-label-sm text-on-surface-variant hover:text-primary transition-colors underline decoration-outline-variant underline-offset-4" href="#">Forgot Password?</a>
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
                    {loading ? 'Logging In...' : 'Log In'}
                    <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                  </button>
                </div>
              </form>
              
              {/* Divider */}
              <div className="flex items-center my-lg">
                <div className="flex-grow h-px bg-outline-variant/30"></div>
                <span className="mx-4 font-label-sm text-on-surface-variant/50">OR</span>
                <div className="flex-grow h-px bg-outline-variant/30"></div>
              </div>
              
              {/* Vendor/Admin Hint */}
              <div className="text-center space-y-md">
                <p className="font-body-md text-on-surface-variant">
                  Don't have an account? 
                  <Link className="font-label-sm text-primary hover:underline ml-1" to="/signup">Sign Up</Link>
                </p>
                <div className="grid grid-cols-1 gap-sm">
                  <Link to="/signup?role=vendor" className="flex items-center justify-center gap-2 px-4 py-2 border border-outline-variant/40 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant font-label-sm">
                    <span className="material-symbols-outlined text-body-md" data-icon="store">store</span>
                    Vendor
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Supporting Imagery */}
          <div className="mt-lg grid grid-cols-3 gap-sm opacity-60">
            <div className="aspect-square rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img className="w-full h-full object-cover" alt="Close-up of fresh organic green vegetables" src="https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=1952&auto=format&fit=crop"/>
            </div>
            <div className="aspect-square rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img className="w-full h-full object-cover" alt="Aerial view of a sustainable family farm" src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop"/>
            </div>
            <div className="aspect-square rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img className="w-full h-full object-cover" alt="Sunlight filtering through a glass jar of fresh honey" src="https://images.unsplash.com/photo-1587049352847-4d4b1ed74dd4?q=80&w=1964&auto=format&fit=crop"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
