const Contact = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto space-y-12 pb-12">
        
        {/* Contact Header */}
        <div className="text-center space-y-2 mt-4">
          <span className="text-xs font-bold tracking-wider text-brand-pink uppercase">Get in Touch</span>
          <h1 className="text-4xl font-extrabold font-playfair text-slate-800">Contact Us</h1>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            We would love to hear from you! Whether it's an order, a custom design idea, or a simple question.
          </p>
        </div>

        {/* Contact Mediums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          
          {/* WhatsApp / Phone Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl p-2 bg-brand-pink/10 text-brand-pink rounded-xl">📞</span>
                <h3 className="font-bold text-slate-800 text-base">Call / WhatsApp</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect with us directly for instant quotes, customized frames, or order details.
              </p>
              <p className="text-lg font-bold text-slate-800 pt-1">+91 7092572394</p>
            </div>
            <div className="pt-5">
              <a 
                href="https://wa.me/917092572394" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center brand-gradient-bg hover:opacity-90 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm transition-opacity w-full"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl p-2 bg-brand-pink/10 rounded-xl">📧</span>
                <h3 className="font-bold text-slate-800 text-base">Email Support</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Send us your design files, order images, or business inquiries via email.
              </p>
              <p className="text-sm font-bold text-brand-pink-dark truncate pt-1">
                creativeskedits2001@email.com
              </p>
            </div>
            <div className="pt-5">
              <a 
                href="mailto:creativeskedits2001@email.com" 
                className="inline-flex items-center justify-center border border-brand-pink/35 text-brand-pink hover:bg-brand-pink/5 text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm transition-colors w-full"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* Address / Business Hours Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl p-2 bg-brand-pink/10 rounded-xl">📍</span>
                <h3 className="font-bold text-slate-800 text-base">Workshop Address</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pl-1">
                <strong>SK Edits & Crafts</strong> <br />
                Tirunelveli, Tamilnadu <br />
                India - 627 001
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl p-2 bg-slate-100 rounded-xl">🕒</span>
                <h3 className="font-bold text-slate-800 text-base">Business Hours</h3>
              </div>
              <ul className="text-xs text-slate-500 space-y-1 pl-1 list-disc list-inside">
                <li>Monday – Sunday: 10:00 AM – 8:00 PM</li>
                <li>Orders accepted online 24/7</li>
                <li>Fast shipping dispatch</li>
              </ul>
            </div>

          </div>

          {/* Instagram Connect Card */}
          <div className="bg-gradient-to-br from-brand-pink/5 to-brand-pink/20 p-6 rounded-2xl border border-brand-pink/10 col-span-full shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="font-bold text-slate-800 text-base">Follow Us on Instagram</h3>
              <p className="text-xs text-slate-500">
                👉 Find latest custom designs, discount offers, customer creations, and behind-the-scenes.
              </p>
            </div>
            <a 
              target="_blank" 
              href="https://www.instagram.com/creative_sk_editz?igsh=MXkxNHpzaDhnbjhhZw==" 
              className="bg-brand-pink hover:bg-brand-pink-dark text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-sm transition-colors whitespace-nowrap"
              rel="noopener noreferrer"
            >
              @creative_sk_editz
            </a>
          </div>

        </div>

      </div>
    </>
  );
}

export default Contact;