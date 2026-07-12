'use client'
import { useState, useEffect } from "react"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
     const [nav, setNav] = useState<boolean>(false);
     const [scrolled, setScrolled] = useState<boolean>(false);
     const pathname = usePathname();

     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > 10) {
                    setScrolled(true);
               } else {
                    setScrolled(false);
               }
          };
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     const toggle = (): void => {
          setNav(!nav);
     }

     const navLinks = [
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: "About", href: "/about" },
          { name: "Contact", href: "/contact" }
     ];

     return (
          <>
               <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${
                    scrolled 
                    ? "bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm py-3" 
                    : "bg-transparent py-5"
               }`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="flex items-center justify-between h-16">
                              {/* Logo */}
                              <div className="flex-shrink-0 z-50">
                                   <Link href="/" className="flex items-center gap-1 group">
                                        <span className="brand-gradient-bg text-white font-extrabold text-xl px-3 py-1.5 rounded-xl shadow-md transition-transform group-hover:scale-105">
                                             SK
                                        </span>
                                        <span className="font-playfair text-xl font-bold tracking-tight text-slate-800 group-hover:text-brand-teal transition-colors">
                                             Edits & Crafts
                                        </span>
                                   </Link>
                              </div>

                              {/* Desktop Links */}
                              <nav className="hidden lg:flex items-center gap-8">
                                   <ul className="flex items-center gap-8 font-semibold text-slate-600 text-sm">
                                        {navLinks.map((link) => {
                                             const isActive = pathname === link.href;
                                             return (
                                                  <li key={link.href}>
                                                       <Link 
                                                            href={link.href}
                                                            className={`relative py-2 transition-colors hover:text-brand-pink ${
                                                                 isActive ? "text-brand-pink font-bold" : ""
                                                            }`}
                                                       >
                                                            {link.name}
                                                            <span className={`absolute bottom-0 left-0 w-full h-0.5 brand-gradient-bg rounded-full transition-transform duration-300 origin-left ${
                                                                 isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                                                            }`} />
                                                       </Link>
                                                  </li>
                                             );
                                        })}
                                   </ul>
                              </nav>

                              {/* Hamburger Button */}
                              <div className="flex lg:hidden z-50">
                                   <button 
                                        onClick={toggle}
                                        className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none"
                                        aria-label="Toggle Menu"
                                   >
                                        <img 
                                             src={nav ? '/close.svg' : '/menu.svg'} 
                                             className="w-8 h-8 transition-transform duration-200" 
                                             alt="menu icon"
                                        />
                                   </button>
                              </div>
                         </div>
                    </div>
               </header>

               {/* Mobile Navigation Sidebar */}
               <div className={`fixed inset-0 z-[9999] lg:hidden transition-opacity duration-300 ${
                    nav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
               }`}>
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={toggle} />

                    {/* Drawer Content */}
                    <aside className={`absolute top-0 right-0 w-80 h-full bg-white shadow-2xl p-8 flex flex-col justify-between transition-transform duration-300 ease-out transform ${
                         nav ? "translate-x-0" : "translate-x-full"
                    }`}>
                         <div className="mt-16">
                              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">Menu</p>
                              <nav className="flex flex-col gap-5">
                                   {navLinks.map((link) => {
                                        const isActive = pathname === link.href;
                                        return (
                                             <Link 
                                                  key={link.href} 
                                                  href={link.href} 
                                                  onClick={toggle}
                                                  className={`text-xl font-bold py-2 border-b border-slate-50 transition-colors flex items-center justify-between ${
                                                       isActive ? "text-brand-pink font-bold" : "text-slate-800 hover:text-brand-pink"
                                                  }`}
                                             >
                                                  {link.name}
                                                  <span className="text-xs text-slate-300">&rarr;</span>
                                             </Link>
                                        );
                                   })}
                              </nav>
                         </div>

                         {/* Footer info in mobile menu */}
                         <div className="border-t border-slate-100 pt-6">
                              <p className="text-sm font-bold text-slate-800">SK Edits & Crafts</p>
                              <p className="text-xs text-slate-500 mt-1">Handcrafted with Love & Passion</p>
                         </div>
                    </aside>
               </div>
          </>
     );
}

export default Navbar;
