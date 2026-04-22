import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../controllers/useAuth';

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { register, loading, error } = useAuth();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('consumer');
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const roleParam = params.get('role');
    if (roleParam && ['consumer', 'vendor', 'admin'].includes(roleParam)) {
      setRole(roleParam);
    }
  }, [location]);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const name = `${firstName} ${lastName}`.trim();
      const userData = {
        name,
        email,
        password,
        role
      };
      
      // Add extra vendor fields if needed
      if (role === 'vendor') {
        userData.shopName = `${firstName}'s Shop`;
        userData.shopLocation = "Default Location";
      }

      await register(userData);
      navigate('/');
    } catch (err) {
      // Error is handled in useAuth
    }
  };

  return (
    <div className="font-body-md text-on-background flex flex-col min-h-screen bg-surface">
      {/* Top Navigation Bar */}
      <nav className="bg-white/80 dark:bg-emerald-950/80 backdrop-blur-md border-b border-emerald-100/20 dark:border-emerald-800/20 shadow-sm docked full-width top-0 z-50">
        <div className="flex justify-between items-center px-8 h-20 w-full max-w-7xl mx-auto">
          <Link to="/" className="text-xl font-bold text-emerald-900 dark:text-emerald-50 tracking-tighter font-headline-xl">AjkerDaam</Link>
          <div className="hidden md:flex items-center gap-8 font-['Epilogue'] text-sm font-medium tracking-tight">
            <Link className="text-emerald-700/70 dark:text-emerald-200/70 hover:text-emerald-900 dark:hover:text-white transition-colors duration-200" to="/?role=consumer">Consumer</Link>
            <Link className="text-emerald-700/70 dark:text-emerald-200/70 hover:text-emerald-900 dark:hover:text-white transition-colors duration-200" to="/?role=vendor">Vendor</Link>
            <Link className="text-emerald-700/70 dark:text-emerald-200/70 hover:text-emerald-900 dark:hover:text-white transition-colors duration-200" to="/?role=admin">Admin</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-emerald-700/70 dark:text-emerald-200/70 hover:text-emerald-900 font-medium text-sm transition-all">Login</Link>
            <button className="bg-primary-container text-on-primary px-6 py-2 rounded-xl text-sm font-semibold shadow-sm hover:opacity-90 transition-all">Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center px-6 py-xl relative">
        {/* Center Card */}
        <div className="bg-surface-container-lowest p-lg md:p-xl rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] w-full max-w-2xl border border-outline-variant/30">
          <div className="text-center mb-lg">
            <h1 className="font-headline-lg text-headline-lg text-primary mb-2">Create Account</h1>
            <p className="font-body-md text-on-surface-variant max-w-md mx-auto">Join AjkerDaam today for transparent pricing and sustainable sourcing.</p>
          </div>

          {error && <div className="mb-4 text-center text-error text-sm font-semibold">{error}</div>}

          <form className="space-y-md" onSubmit={handleSignup}>
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* First Name */}
              <div className="space-y-xs">
                <label className="font-label-sm text-label-sm text-on-surface-variant block ml-1">First Name</label>
                <input 
                  className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-secondary transition-all outline-none px-4 py-3 rounded-xl text-on-surface placeholder:text-outline-variant" 
                  placeholder="Jane" 
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              {/* Last Name */}
              <div className="space-y-xs">
                <label className="font-label-sm text-label-sm text-on-surface-variant block ml-1">Last Name</label>
                <input 
                  className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-secondary transition-all outline-none px-4 py-3 rounded-xl text-on-surface placeholder:text-outline-variant" 
                  placeholder="Doe" 
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              {/* Email */}
              <div className="space-y-xs md:col-span-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant block ml-1">Work Email</label>
                <input 
                  className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-secondary transition-all outline-none px-4 py-3 rounded-xl text-on-surface placeholder:text-outline-variant" 
                  placeholder="jane@example.com" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {/* Password */}
              <div className="space-y-xs">
                <label className="font-label-sm text-label-sm text-on-surface-variant block ml-1">Password</label>
                <input 
                  className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-secondary transition-all outline-none px-4 py-3 rounded-xl text-on-surface placeholder:text-outline-variant" 
                  placeholder="••••••••" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
              {/* Role Selection */}
              <div className="space-y-xs">
                <label className="font-label-sm text-label-sm text-on-surface-variant block ml-1">I am a...</label>
                <div className="relative">
                  <select 
                    className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-secondary transition-all outline-none px-4 py-3 rounded-xl text-on-surface appearance-none"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="consumer">Consumer</option>
                    <option value="vendor">Vendor</option>
                    <option value="admin">Admin</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none">expand_more</span>
                </div>
              </div>
            </div>
            {/* Terms */}
            <div className="flex items-center gap-3 pt-2">
              <input className="w-5 h-5 rounded-md border-outline-variant text-secondary focus:ring-secondary transition-all" id="terms" type="checkbox" required />
              <label className="font-label-sm text-label-sm text-on-surface-variant leading-tight" htmlFor="terms">
                I agree to the <a className="text-secondary hover:underline" href="#">Terms of Service</a> and <a className="text-secondary hover:underline" href="#">Sustainability Policy</a>.
              </label>
            </div>
            {/* Submit Action */}
            <div className="pt-md">
              <button 
                disabled={loading}
                className="w-full bg-primary-container text-on-primary font-headline-md text-headline-md py-4 rounded-xl shadow-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50" 
                type="submit"
              >
                <span>{loading ? 'Creating...' : 'Create Account'}</span>
                <span className="material-symbols-outlined" data-weight="fill">arrow_forward</span>
              </button>
              <p className="text-center mt-6 font-body-md text-on-surface-variant">
                Already have an account? <Link className="text-secondary font-semibold hover:underline" to="/login">Login here</Link>
              </p>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-50/30 dark:bg-emerald-950/30 w-full py-12 mt-auto border-t border-emerald-100 dark:border-emerald-900">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6">
          <div className="text-lg font-semibold text-emerald-900 dark:text-emerald-50 font-headline-md">AjkerDaam</div>
          <div className="flex flex-wrap justify-center gap-8 font-['Epilogue'] text-xs uppercase tracking-widest text-emerald-700/60 dark:text-emerald-400/60">
            <a className="hover:text-emerald-900 dark:hover:text-emerald-200 transition-all" href="#">Privacy Policy</a>
            <a className="hover:text-emerald-900 dark:hover:text-emerald-200 transition-all" href="#">Terms of Service</a>
            <a className="hover:text-emerald-900 dark:hover:text-emerald-200 transition-all" href="#">Sustainability Report</a>
            <a className="hover:text-emerald-900 dark:hover:text-emerald-200 transition-all" href="#">Support</a>
          </div>
          <div className="font-['Epilogue'] text-xs uppercase tracking-widest text-emerald-700/60 dark:text-emerald-400/60">
            © 2024 AjkerDaam Systems. Simplified transparency.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Signup;
