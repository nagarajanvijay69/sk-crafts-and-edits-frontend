'use client'

import { useSelector } from "react-redux";
import { RootState } from "./store/Redux-store";
import { useRouter } from "next/navigation";


const Home = () => {

  const router = useRouter();

  const route = (id: String) => {
    router.push(`/product/${id}`)
  }

  let products = useSelector((state: RootState) => state.products.products);
  let category = useSelector((state: RootState) => state.products.categorys);
  let message: String = useSelector((state: RootState) => state.products.message);

  return <>
    <div className="home w-[95%] mx-auto md:w-[97%]">
      <div className={`message ${message.trim() ? 'my-2 text-center text-blue-500 bg-gray-200 rounded py-3' : ''}  font-bold`}>
        {message}
      </div>
      <div className="banner w-full">
        <img src="./pc.png" className="rounded hidden lg:block mt-4" />
        <img src="./mb.png" className="rounded block lg:hidden mt-4" />
      </div>
      <div className="category my-5">
        <span className="text-xl font-bold">Category</span>

        <div className="product-list my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
          {
            category[0] ?
              category.map((item, index) => (
                <div key={index} onClick={()=> router.push(`category/${item.name}`)} className="border-2 border-gray-300 rounded-md md:px-4 px-3 py-2 bg-blue-200">
                  <div className="group cursor-pointer flex items-center justify-center px-2">
                    <img className="group-hover:scale-105 rounded transition h-25 w-25 mt-5" src={`${item.image}`} />
                  </div>
                  <div className="text-center font-semibold mt-5 mb-3">{item.name}</div>
                </div>
              ))
              :
              <p>No Category Found</p>
          }

        </div>
      </div>
      <div className="items my-5">
        <span className="text-xl font-bold">Latest Collections</span>

        <div className="product-list mt-2 mb-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">

          {
            products[0] ?
              products?.slice(-5).map((item, index) => (
                <div onClick={() => route(item._id)} key={index} className="border-2 border-gray-300 rounded-md md:px-4 px-3 py-2 bg-white">
                  <div className="group cursor-pointer flex items-center justify-center px-2">
                    <img className="group-hover:scale-105 rounded transition h-25 w-25 lg:w-35 lg:h-35 mt-5 wrap mb-2" src={`${item.image[0]}`} />
                  </div>
                  <div className="text-gray-500/80 text-sm">
                    <p className="">{item.category}</p>
                    <p className="text-gray-700 font-medium text-lg truncate w-full">{item.name}</p>
                    <div className="flex items-end justify-between mt-3">
                      <p className="md:text-xl text-base font-medium text-gray-800">
                        <>
                          {item.offerPrice}<span className="text-gray-500 md:text-sm text-xs line-through ml-1">
                            <>
                              {item.price}
                            </>
                          </span>
                        </>
                      </p>
                      <div className="text-Pink-500">
                        {item.link &&
                          <button className="bg-gray-100 border border-gray-700 md:w-[80px] w-[64px] h-[34px] rounded text-gray-800 font-medium"  >
                            <a href={`${item.link}`}>Buy Now</a>
                          </button>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))
              :
              <p>Products Not Found</p>
          }
        </div>
        <button className="bg-gray-600 text-white cursor-pointer h-10 w-25 rounded-xl" onClick={()=> router.push('/products')}>View All</button>
      </div>
      <div className="choose bg-gray-300 my-4 rounded">
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