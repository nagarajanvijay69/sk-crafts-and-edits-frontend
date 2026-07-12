import Link from "next/link"

const Foot = () => {
  return (
    <footer className="bg-white/90 backdrop-blur-md text-slate-600 mt-auto border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="brand-gradient-bg text-white font-extrabold text-lg px-2.5 py-1 rounded-lg">
                SK
              </span>
              <span className="font-playfair text-xl font-bold tracking-tight text-slate-800">
                Edits & Crafts
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Where creativity meets memories. We specialize in personalized, handcrafted gifts designed to make every occasion meaningful. Every product is made with love, detail, and care to turn your moments into lasting treasures.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 border-l-2 border-brand-pink pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-brand-pink-dark transition-colors flex items-center gap-1">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-brand-pink-dark transition-colors flex items-center gap-1">
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-pink-dark transition-colors flex items-center gap-1">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-pink-dark transition-colors flex items-center gap-1">
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Location Column */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 border-l-2 border-brand-pink pl-2.5">
              Location
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li className="text-slate-800 font-semibold">SK Crafts & Edits</li>
              <li>Tirunelveli, Tamilnadu</li>
              <li>India - 627 001</li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 border-l-2 border-brand-pink pl-2.5">
              Connect With Us
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a 
                  target="_blank" 
                  href="https://www.instagram.com/creative_sk_editz/?igsh=MXkxNHpzaDhnbjhhZw%3D%3D#" 
                  className="hover:text-brand-pink-dark transition-colors flex items-center gap-2 text-slate-600"
                  rel="noopener noreferrer"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-pink" />
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  target="_blank" 
                  href="https://www.youtube.com/@its_me_sk_001" 
                  className="hover:text-brand-pink-dark transition-colors flex items-center gap-2 text-slate-600"
                  rel="noopener noreferrer"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  YouTube
                </a>
              </li>
              <li>
                <a 
                  href="mailto:creativeskedits2001@email.com" 
                  className="hover:text-brand-pink-dark transition-colors flex items-center gap-2 text-slate-600"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-pink" />
                  E-Mail
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-100 text-center text-[10px] text-slate-400">
          <p>&copy; {new Date().getFullYear()} SK Edits and Crafts. All Rights Reserved. Handcrafted with love.</p>
        </div>
      </div>
    </footer>
  )
}

export default Foot;
