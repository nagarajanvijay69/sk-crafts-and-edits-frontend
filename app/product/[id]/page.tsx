'use client'

import { useSelector } from "react-redux";
import { RootState } from '../../store/Redux-store'
import { useParams } from "next/navigation";
import { useState } from "react";


const Product = () => {
  const params = useParams();


  const temp = useSelector((state: RootState) => state.products.products);
  const product = temp.filter(item => item._id == params.id);
  // console.log(product);

  const [img, setImg] = useState(product[0].image[0]);
  console.log(product[0].image[0],img);
  

  const changeImg =(index:Number)=>{
    //console.log(index);
    if(index === 0)
     setImg(product[0].image[0]);
    else if(index === 1)
      setImg(product[0].image[1]);
    else if(index === 2)
      setImg(product[0].image[2]);
    else if(index === 3)
      setImg(product[0].image[3]);
    else
      setImg(product[0].image[0]);
    
  }


  return <>
    <div className="product w-[98dvw] mx-auto">
      {
        product[0] ?
          <div className="max-w-6xl w-full px-6 my-8">
            <div className="flex flex-col md:flex-row gap-16 mt-4">
              <div className="flex gap-3">
                <div className="flex flex-col gap-3">
                  {product[0].image.map((image, index) => (
                    <div key={index} onClick={()=> changeImg(index)} className="border h-20 w-20 lg:h-25 lg:w-25 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                      <img src={`${image}`} />
                    </div>
                  ))}
                </div>

                <div className="border border-gray-500/30 w-90 h-90 lg:w-100 lg:h-100 rounded overflow-hidden">
                  <img src={`${img}`} alt="Selected product" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="text-sm w-full md:w-1/2">
                <h1 className="text-3xl font-medium">{product[0]?.name}</h1>

                <div className="flex items-center gap-0.5 mt-1">
                  <p className="text-base">{product[0]?.category}</p>
                </div>

                <div className="mt-6">
                  <p className="text-gray-500/70 line-through"> rs {`${product[0].price}`} </p>
                  <p className="text-2xl font-medium">rs {`${product[0].offerPrice}`}</p>
                  <span className="text-gray-500/70">(inclusive of all taxes)</span>
                </div>

                <p className="text-base font-medium mt-6">About Product</p>
                <ul className="ml-4 text-gray-500/70">
                  <li>{product[0].discription}</li>
                </ul>

                <div className="flex items-center mt-10 gap-4 text-base">
                  {
                    product[0].link &&
                    <a href={`${product[0].link}`} className="w-full py-3.5 text-center rounded cursor-pointer font-medium bg-gray-600 text-white hover:bg-gray-700 transition" >
                     Buy Now
                    </a>
                  }
                </div>
              </div>
            </div>
          </div>
          :
          <p className="py-20 mx-auto w-[95%] font-semibold">No product found</p>
      }
    </div>
  </>
}

export default Product