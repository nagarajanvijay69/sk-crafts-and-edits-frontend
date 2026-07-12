'use client'

import { useSelector } from "react-redux";
import { RootState } from '../../store/Redux-store'
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";


const Product = () => {
  const params = useParams();
  const temp = useSelector((state: RootState) => state.products.products);
  const product = temp.find(item => item._id == params.id);

  const [img, setImg] = useState<string>("");

  useEffect(() => {
    if (product?.image?.[0]) {
      setImg(product.image[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="py-20 text-center max-w-md mx-auto space-y-4">
        <span className="text-5xl">🎁</span>
        <h2 className="text-xl font-bold text-slate-800">Product Not Found</h2>
        <p className="text-sm text-slate-500">We couldn't find the product you were looking for. It might have been removed or updated.</p>
      </div>
    );
  }

  const changeImg = (index: number) => {
    if (product.image[index]) {
      setImg(product.image[index]);
    }
  }

  return (
    <>
      <div className="max-w-6xl mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          
          {/* Left Column: Images Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-4 md:w-1/2">
            
            {/* Gallery Thumbnails */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-x-visible">
              {product.image.map((image, index) => (
                <button 
                  key={index} 
                  onClick={() => changeImg(index)} 
                  className={`relative flex-shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-xl overflow-hidden transition-all focus:outline-none border-2 ${
                    img === image 
                    ? "border-brand-pink shadow-md scale-95 pink-text-glow" 
                    : "border-slate-200/60 hover:border-brand-pink/50"
                  }`}
                >
                  <img src={`${image}`} className="h-full w-full object-cover" alt="product thumbnail" />
                </button>
              ))}
            </div>

            {/* Selected Main Image */}
            <div className="flex-1 aspect-square w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-md relative">
              <img 
                src={`${img || product.image[0]}`} 
                alt={String(product.name)} 
                className="w-full h-full object-cover transition-all duration-300" 
              />
            </div>
          </div>

          {/* Right Column: Product Specs */}
          <div className="flex-1 flex flex-col justify-center space-y-6 md:py-4">
            <div className="space-y-1.5">
              <span className="text-xs font-bold tracking-wider text-brand-pink uppercase">
                {product.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-extrabold font-playfair text-slate-800 tracking-tight leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Pricing Section */}
            <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-100 space-y-2">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-3xl lg:text-4xl font-extrabold text-slate-900">
                  ₹{product.offerPrice}
                </span>
                {product.price > product.offerPrice ? (
                  <>
                    <span className="text-base text-slate-400 line-through">
                      ₹{product.price}
                    </span>
                    <span className="bg-brand-pink/10 text-brand-pink text-xs font-bold px-2.5 py-1 rounded-full">
                      Save {Math.round(((product.price - product.offerPrice) / product.price) * 100)}%
                    </span>
                  </>
                ) : null}
              </div>
              <span className="text-xs text-slate-400 block font-medium">
                (Inclusive of all taxes & professional packaging)
              </span>
            </div>

            {/* Details Description */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                Product Details
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line pl-1 border-l-2 border-brand-pink/30">
                {product.discription}
              </p>
            </div>

            {/* Purchase CTA */}
            <div className="pt-4">
              {product.link ? (
                <a 
                  href={`${product.link}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-4 px-6 rounded-2xl font-bold text-white brand-gradient-bg hover:opacity-95 shadow-md hover:shadow-lg transition-all text-center text-base"
                >
                  Buy Now on WhatsApp / Store
                </a>
              ) : (
                <p className="text-sm text-brand-pink font-semibold italic">Out of Stock</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Product;