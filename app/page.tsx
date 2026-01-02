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

  return <>
    <div className="home w-[95%] mx-auto md:w-[97%]">
      <div className={`message ${message?.trim() ? 'my-2 text-center text-blue-500 bg-gray-200 rounded py-3' : ''}  font-bold`}>
        {message}
      </div>
      <div className="banner w-full">
        <Image src={PC} alt="banner" className="rounded-2xl hidden lg:block mt-4" />
        <Image src={MB} alt="banner" className="rounded block lg:hidden mt-4" />
      </div>
      <div className="category mt-8">
        <span className="text-xl font-bold text-orange-950 mb-4">Category</span>

        <div className="product-list mt-3 mb-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
          {
            category[0] ?
              category.map((item, index) => (
                <div key={index} onClick={() => router.push(`/category/${item.name}`)} className="cursor-pointer ">
                    <div className="flex">
                      <img className="rounded object-cover w-full h-40" src={`${item.image}`} />
                    </div>
                    <div className="text-center text-lg font-bold pb-3 mt-3 text-orange-800">{item.name}</div>
                </div>
              ))
              :
              <p className="text-orange-950">No Category Found</p>
          }

        </div>
      </div>
      <div className="items my-5">
        <span className="text-xl font-bold text-orange-950">Latest Collections</span>

        <div className="product-list mt-3 mb-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">

          {
            products[0] ?
              products?.slice(-5).map((item, index) => (
                <div onClick={() => route(item._id)} key={index} className="cursor-pointer border-2 border-gray-300 rounded-md shadow-xl md:px-4 px-3 py-2 pb-4 bg-white">
                  <div className="flex items-center justify-center px-1">
                    <img className="rounded object-cover h-25 w-full lg:h-35 mt-2 wrap mb-2" src={`${item.image[0]}`} />
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
              <p className="text-orange-950">Products Not Found</p>
          }
        </div>
        <button className="bg-orange-950 text-white cursor-pointer h-10 w-25 rounded-xl" onClick={() => router.push('/products')}>View All</button>
      </div>
      <div className="choose bg-orange-200 my-4 rounded-lg">
        <div className="text-center text-2xl font-bold my-2 mt-4 py-4">Why Choose Us</div>
        <ul className="flex flex-col gap-3 font-semibold ml-6 pb-6 text-lg">
          <li className="flex gap-5"><img src="./hand.svg" className="size-[35px]" /><p>100% Personalized & Handcrafted</p></li>
          <li className="flex gap-5"><img src="./quality.svg" className="size-[35px]" /><p>Premium Quality Materials</p></li>
          <li className="flex gap-5"><img src="./design.svg" className="size-[35px]" /><p>Creative & Trendy Designs</p></li>
          <li className="flex gap-5"><img src="./happy.svg" className="size-[35px]" /><p>Perfect for All Occasions</p></li>
        </ul>
      </div>
    </div>
  </>
}

export default Home