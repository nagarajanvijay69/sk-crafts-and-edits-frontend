'use client'

import { useSelector } from "react-redux"
import { RootState } from "../store/Redux-store";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Products = () => {

  const [search, setSearch] = useState('');
  const temp = useSelector((state: RootState) => state.products.products);
  const products = temp.filter((item) => item.name.toLowerCase().includes(search.toLocaleLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()));

  const router = useRouter();

  const route = (id: string) => {
    router.push(`/product/${id}`)
  }


  return (
    <>
      <div className="space-y-8 pb-12">
        {/* Header Title */}
        <div className="text-center space-y-2 mt-4">
          <span className="text-xs font-bold tracking-wider text-brand-pink uppercase">Explore Our Shop</span>
          <h1 className="text-4xl font-extrabold font-playfair text-slate-800">All Collections</h1>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Find the perfect handcrafted custom gifts and photo frames for your loved ones.
          </p>
        </div>

        {/* Premium Search Bar */}
        <div className="max-w-md mx-auto relative group">
          <input 
            type="search" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Search products by name or category..." 
            className="w-full pl-5 pr-12 py-3.5 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/40 focus:border-brand-pink text-slate-800 text-sm transition-all"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-pink transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
            </svg>
          </div>
        </div>

        {/* Products Grid */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-800 border-l-4 border-brand-pink pl-3">
            Products ({products.length})
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products[0] ? (
              products.map((item, index) => (
                <div 
                  key={index} 
                  onClick={() => route(item._id)} 
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

                  {/* Description details */}
                  <div className="space-y-1.5 flex-1 flex flex-col">
                    <p className="text-[10px] font-bold tracking-wider text-brand-pink uppercase">{item.category}</p>
                    <h3 className="font-bold text-slate-800 text-sm group-hover:text-brand-pink transition-colors line-clamp-2 leading-snug">
                      {item.name}
                    </h3>
                    
                    {/* Price and Buy Button */}
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
              <div className="col-span-full py-16 text-center space-y-3">
                <span className="text-4xl">🔍</span>
                <p className="text-slate-400 text-sm italic">No Products Found matching "{search}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products