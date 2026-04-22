import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="bg-surface-bright text-on-surface font-body-md selection:bg-secondary-container scroll-smooth">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-surface-container-high font-['Epilogue'] text-sm font-medium tracking-tight fixed top-0 z-50 w-full h-20">
        <div className="flex justify-between items-center px-8 h-full w-full max-w-7xl mx-auto">
          <div className="text-xl font-bold text-primary tracking-tighter">AjkerDaam</div>
          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-primary border-b-2 border-secondary-fixed-dim pb-1 hover:text-primary transition-colors duration-200" to="/">Consumer</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-200" to="/signup?role=vendor">Vendor</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-200" to="/signup?role=admin">Admin</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-on-surface-variant hover:text-primary transition-all font-medium">Login</Link>
            <Link to="/signup" className="bg-secondary-container text-on-secondary-container px-6 py-2.5 rounded-xl font-semibold hover:opacity-90 active:scale-95 transition-all">Sign Up</Link>
          </div>
        </div>
      </nav>

      <main className="relative pt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 py-xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-label-sm">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              COMMUNITY POWERED TRANSPARENCY
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary max-w-xl">
              Real-Time Transparency for Fair Market Prices
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Empowering consumers and vendors with crowdsourced price data to prevent manipulation and ensure a sustainable food ecosystem.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/signup" className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-headline-md text-[18px] font-bold shadow-sm hover:shadow-md transition-all active:scale-95">
                Join the Movement
              </Link>
              <button className="flex items-center gap-2 text-primary font-semibold px-8 py-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-all">
                <span className="material-symbols-outlined">play_circle</span>
                How it Works
              </button>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant pt-6">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-surface-bright bg-surface-container-high flex items-center justify-center text-xs font-bold">JD</div>
                <div className="w-10 h-10 rounded-full border-2 border-surface-bright bg-primary-fixed flex items-center justify-center text-xs font-bold">AS</div>
                <div className="w-10 h-10 rounded-full border-2 border-surface-bright bg-secondary-fixed-dim flex items-center justify-center text-xs font-bold">ML</div>
              </div>
              <p className="text-label-sm font-medium">+2.4k users contributing today</p>
            </div>
          </div>
          
          <div className="relative">
            <img alt="Artisan Market Produce" className="relative z-10 w-full h-[600px] object-cover rounded-[3rem] shadow-sm border border-surface-container-high" src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop"/>
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-lg border border-surface-container-high max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined" data-weight="fill">trending_down</span>
                </div>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-wider text-on-surface-variant">Avg. Tomato Price</p>
                  <p className="text-headline-md text-primary">$2.40/lb</p>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant">↓ 4% decrease in your local area over the last 24 hours.</p>
            </div>
          </div>
        </section>

        {/* Feature Bento Grid */}
        <section className="max-w-7xl mx-auto px-8 py-xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-primary">Designed for Market Integrity</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Our platform uses advanced collective intelligence to bring light to market pricing, ensuring fair trades for everyone in the chain.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Real-time Dashboard */}
            <div className="bg-white p-md rounded-[2.5rem] border border-surface-container-high hover:border-primary-fixed transition-all flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary group-hover:bg-primary-fixed-dim transition-colors">
                  <span className="material-symbols-outlined text-3xl">dashboard_customize</span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-headline-md text-headline-md text-primary">Real-time Dashboard</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Monitor fluctuating market rates as they happen. Our live telemetry captures global and local trends instantly.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-surface-container flex items-center justify-between">
                <span className="text-label-sm text-primary">EXPLORE DATA</span>
                <span className="material-symbols-outlined text-primary">arrow_forward</span>
              </div>
            </div>

            {/* Area-wise Comparison */}
            <div className="bg-white p-md rounded-[2.5rem] border border-surface-container-high hover:border-secondary-fixed-dim transition-all flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary-fixed-dim flex items-center justify-center text-on-secondary-fixed group-hover:bg-secondary-fixed transition-colors">
                  <span className="material-symbols-outlined text-3xl">map</span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-headline-md text-headline-md text-primary">Area-wise Comparison</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Visualize price disparities across regions. Identify hotspots and find the most cost-effective sourcing points.
                  </p>
                </div>
              </div>
              <img alt="Regional Market Map" className="mt-8 h-40 w-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"/>
            </div>

            {/* Crowdsourced Submissions */}
            <div className="bg-primary text-on-primary p-md rounded-[2.5rem] transition-all flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-primary-fixed group-hover:bg-white/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl">groups</span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-headline-md text-headline-md">Crowdsourced Submissions</h3>
                  <p className="text-on-primary/70 leading-relaxed">
                    Join thousands of contributors. Snap a photo of a price tag and contribute to the global database in one tap.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <div className="bg-white/10 p-4 rounded-xl flex items-center gap-4">
                  <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-secondary-fixed-dim"></div>
                  </div>
                  <span className="text-[10px] font-bold">GOAL: 50K SUBMISSIONS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Impact Section */}
        <section className="bg-surface-container-low px-8 py-xl">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img alt="Fresh Produce" className="w-full h-64 object-cover rounded-3xl" src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=1974&auto=format&fit=crop"/>
                  <div className="bg-primary-container p-6 rounded-3xl text-on-primary-container">
                    <p className="text-headline-xl">120k+</p>
                    <p className="text-label-sm">Daily Data Points</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-secondary-container p-6 rounded-3xl text-on-secondary-container">
                    <p className="text-headline-xl">15%</p>
                    <p className="text-label-sm">Avg. Savings Found</p>
                  </div>
                  <img alt="Local Vendor" className="w-full h-64 object-cover rounded-3xl" src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop"/>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-8 order-1 md:order-2">
              <h2 className="font-headline-xl text-headline-xl text-primary">Smarter choices for a healthier economy.</h2>
              <p className="text-body-lg text-on-surface-variant">
                By providing real-time data, we help eliminate unfair markup and artificial inflation. Consumers save money, and honest vendors get the visibility they deserve.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="font-medium">Verification through community consensus</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="font-medium">AI-driven anomaly detection for fraud prevention</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="font-medium">Direct connection to local sustainable sources</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="max-w-5xl mx-auto px-8 py-xl">
          <div className="bg-primary p-xl rounded-[3rem] text-center relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <h2 className="font-headline-xl text-headline-xl text-white">Ready to bring transparency back?</h2>
              <p className="text-primary-fixed/80 max-w-xl mx-auto text-lg">
                Get weekly insights on market price shifts and discover which areas are leading the way in fair trade transparency.
              </p>
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:ring-secondary-container focus:border-secondary-container outline-none transition-all" placeholder="Your email address" type="email"/>
                <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all">Subscribe</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container font-['Epilogue'] text-xs uppercase tracking-widest border-t border-surface-container-high w-full py-12 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6">
          <div className="text-lg font-semibold text-primary">AjkerDaam</div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-on-surface-variant hover:text-primary transition-all" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant hover:text-primary transition-all" href="#">Terms of Service</a>
            <a className="text-on-surface-variant hover:text-primary transition-all" href="#">Sustainability Report</a>
            <a className="text-on-surface-variant hover:text-primary transition-all" href="#">Support</a>
          </div>
          <p className="text-on-surface-variant text-center md:text-right leading-loose">
            © 2024 AjkerDaam Organic Systems.<br/>Nature-inspired transparency.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
