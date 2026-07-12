'use client'

import { useSelector } from "react-redux";
import { RootState } from "./store/Redux-store";
import { useRouter } from "next/navigation";

import Image from "next/image";
import PC from "../public/pc.png";
import MB from "../public/mb.png"


const Home = () => {

  const router = useRouter();

  const route = (id: string) => {
    router.push(`/product/${id}`)
  }

  const products = useSelector((state: RootState) => state.products.products);
  const category = useSelector((state: RootState) => state.products.categorys);
  const message: string = useSelector((state: RootState) => state.products.message);

  return (
    <>
      <div className="space-y-12 pb-8">
        
        {/* Urgent/Important Store Message */}
        {message?.trim() ? (
          <div className="flex items-center gap-2 justify-center py-4 px-6 text-center text-brand-pink-dark bg-brand-pink-light border border-brand-pink/20 rounded-2xl font-semibold shadow-sm animate-pulse text-sm">
            <span className="text-base">📢</span> {message}
          </div>
        ) : null}

        {/* Hero Banner Section */}
        <div className="w-full rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-500 bg-white">
          <Image 
            src={PC} 
            alt="Main Banner" 
            className="w-full h-auto hidden lg:block hover:scale-[1.01] transition-transform duration-700 ease-out" 
            priority
          />
          <Image 
            src={MB} 
            alt="Mobile Banner" 
            className="w-full h-auto block lg:hidden hover:scale-[1.01] transition-transform duration-700 ease-out"
            priority
          />
        </div>

        {/* Categories Section */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <span className="text-xs font-bold tracking-wider text-brand-pink uppercase">Shop By</span>
              <h2 className="text-3xl font-extrabold font-playfair text-slate-800 mt-1">Categories</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {category[0] ? (
              category.map((item, index) => (
                <div 
                  key={index} 
                  onClick={() => router.push(`/category/${item.name}`)} 
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 flex flex-col h-full"
                >
                  <div className="relative overflow-hidden h-40 w-full bg-slate-50">
                    <img 
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" 
                      src={`${item.image}`} 
                      alt={item.name} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                      <span className="text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-lg glass-panel">
                        Explore &rarr;
                      </span>
                    </div>
                  </div>
                  <div className="text-center text-sm font-bold py-3 text-slate-700 group-hover:text-brand-pink transition-colors border-t border-slate-50 mt-auto px-2">
                    {item.name}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-slate-400 text-sm italic col-span-full py-4">No Categories Found</p>
            )}
          </div>
        </div>

        {/* Latest Collections Section */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <span className="text-xs font-bold tracking-wider text-brand-pink uppercase">Fresh Arrivals</span>
              <h2 className="text-3xl font-extrabold font-playfair text-slate-800 mt-1">Latest Collections</h2>
            </div>
            <button 
              className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-brand-pink hover:text-brand-pink-dark transition-colors group mt-2 md:mt-0 cursor-pointer" 
              onClick={() => router.push('/products')}
            >
              View All Collections <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products[0] ? (
              products.slice(-5).reverse().map((item, index) => (
                <div 
                  onClick={() => route(item._id)} 
                  key={index} 
                  className="group cursor-pointer bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 p-4 flex flex-col h-full relative"
                >
                  {/* Discount Badge */}
                  {item.price > item.offerPrice ? (
                    <span className="absolute top-3 left-3 bg-brand-pink text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10 shadow-sm">
                      -{Math.round(((item.price - item.offerPrice) / item.price) * 100)}%
                    </span>
                  ) : null}

                  {/* Product Image */}
                  <div className="aspect-square w-full rounded-xl overflow-hidden bg-slate-50 relative flex items-center justify-center mb-3">
                    <img 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                      src={`${item.image[0]}`} 
                      alt={item.name}
                    />
                  </div>

                  {/* Content details */}
                  <div className="space-y-1.5 flex-1 flex flex-col">
                    <p className="text-[10px] font-bold tracking-wider text-brand-pink uppercase">{item.category}</p>
                    <h3 className="font-bold text-slate-800 text-sm group-hover:text-brand-pink transition-colors line-clamp-2 leading-snug">
                      {item.name}
                    </h3>
                    
                    {/* Price and Action Button */}
                    <div className="flex items-center justify-between pt-3 mt-auto border-t border-slate-50 gap-2">
                      <div className="space-y-0.5">
                        {item.price > item.offerPrice ? (
                          <span className="text-[11px] text-slate-400 line-through">₹{item.price}</span>
                        ) : null}
                        <p className="text-sm font-bold text-slate-900">₹{item.offerPrice}</p>
                      </div>
                      
                      {item.link ? (
                        <a 
                          href={`${item.link}`}
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="brand-gradient-bg text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm hover:opacity-90 transition-opacity flex-shrink-0"
                        >
                          Buy Now
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-slate-400 text-sm italic col-span-full py-4">Products Not Found</p>
            )}
          </div>

          <button 
            className="md:hidden w-full mt-2 brand-gradient-bg text-white font-bold h-11 rounded-xl shadow-md transition-opacity hover:opacity-90 cursor-pointer" 
            onClick={() => router.push('/products')}
          >
            View All Collections
          </button>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-brand-pink-light/60 via-white to-brand-pink-light/40 py-12 px-6 sm:px-12 rounded-3xl text-slate-800 border border-slate-100/80 shadow-md relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-brand-pink/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-brand-pink/10 blur-3xl" />

          <div className="text-center space-y-1 mb-10 relative z-10">
            <span className="text-xs font-bold tracking-wider text-brand-pink-dark uppercase">Our Commitment</span>
            <h2 className="text-3xl font-extrabold font-playfair text-slate-800">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-3 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-brand-pink/40 hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-brand-pink/15 rounded-xl">
                <img src="./hand.svg" className="w-8 h-8" alt="Handcrafted" />
              </div>
              <h3 className="font-bold text-base text-slate-800">100% Handcrafted</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Every frame and design is customized with detail and creativity for your exact request.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-brand-pink/30 hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-brand-pink/10 rounded-xl">
                <img src="./quality.svg" className="w-8 h-8" alt="Premium Quality" />
              </div>
              <h3 className="font-bold text-base text-slate-800">Premium Quality</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We use high-grade materials, durable colors, and solid frames to keep memories fresh.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-brand-pink/40 hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-brand-pink/15 rounded-xl">
                <img src="./design.svg" className="w-8 h-8" alt="Trendy Designs" />
              </div>
              <h3 className="font-bold text-base text-slate-800">Creative Designs</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Stay up to date with modern templates and custom visual modifications.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-brand-pink/30 hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-brand-pink/10 rounded-xl">
                <img src="./happy.svg" className="w-8 h-8" alt="Perfect Occasions" />
              </div>
              <h3 className="font-bold text-base text-slate-800">Perfect For Gifting</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Create memorable moments for birthdays, anniversaries, and all special celebrations.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home