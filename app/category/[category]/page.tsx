'use client'

import { useSelector } from "react-redux"
import { RootState } from "../../store/Redux-store";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const Products = () => {

  const params = useParams();
  const category = params.category;
  const [search, setSearch] = useState('');
  const temp = useSelector((state: RootState) => state.products.products).filter((item) => item.category === category);
  const cat = useSelector((state: RootState) => state.products.categorys);
  const products = temp.filter((item) => item.name.toLowerCase().includes(search.toLocaleLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()));

  const router = useRouter();


  const route = (id: string) => {
    router.push(`/product/${id}`)
  }


  const [find, setFind] = useState(false);

  useEffect(()=>{
    console.log('useefect');
    
    const t = cat.find((item)=> {
      item.name == category;
    });
    if(t) setFind(true);
    else setFind(false);
    
  },[]);
  
 // console.log(find, params.category);




  return <>
    <div className="products w-[95%] md:w-[97%] my-5 mx-auto min-h-[100dvh]">
      <div className="search flex justify-center gap-4">
        <input type="search" placeholder="Search Here...." value={search} className="border-2 border-orange-950 rounded w-90 h-10 focus:outline-none px-4"
          onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => {
            // console.log(e.key)
          }} />
        <button className="bg-orange-950 text-white cursor-pointer w-25 rounded-xl">Search</button>
      </div>
      <div className="items my-5">
        <span className="text-xl font-bold">Products</span>
        <div className="product-list my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">

          {products[0] ?
            products.map((item, index) => (
              <div onClick={() => route(item._id)} key={index} className="border-2 border-gray-300 rounded-md
               shadow-xl md:px-4 px-3 py-2 pb-4 bg-white">
                  <div className="group cursor-pointer flex items-center justify-center px-1">
                    <img className="group-hover:scale-105 rounded transition h-25 w-full lg:h-35 mt-2 wrap mb-2" src={`${item.image[0]}`} />
                  </div>
                  <div className="text-gray-600 text-sm">
                    <p className="">{item.category}</p>
                    <p className="text-orange-950 font-bold text-lg truncate w-full">{item.name}</p>
                    <div className="flex items-end justify-between mt-[-5px]">
                      <p className="md:text-xl text-base font-medium text-gray-800">
                        <>
                          ₹{item.offerPrice}<span className="text-gray-500 md:text-sm text-xs line-through ml-1">
                            <>
                              ₹{item.price}
                            </>
                          </span>
                        </>
                      </p>
                      <div className="">
                        {item.link &&
                          <button className="bg-orange-950 text-white shadow-xl md:w-[80px] w-[69px] h-[34px] rounded font-medium"  >
                            <a href={`${item.link}`}>Buy Now</a>
                          </button>
                        }
                      </div>
                    </div>
                  </div>
                </div>
            ))
            :
            <p>No Products found</p>
          }

        </div>
      </div>
    </div>
  </>
}

export default Products