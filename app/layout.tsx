'use client'

import "./globals.css";
import Navbar from './navabar/Navbar'
import Foot from './navabar/Foot'
import { Provider } from "react-redux";
import store from "./store/Redux-store";
import { useEffect } from "react";
import axios from "axios";
import { initCategory, initMessage, initProduct } from "./store/Slice";


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {


  // const dispatch = useDispatch<AppDispatch>();
  // console.log(useSelector((state: RootState) => state.products.products));

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}/get-product`);
      store.dispatch(initProduct(res.data.products));
      console.log(res.data.products);

      const data = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}/get-category`);
      store.dispatch(initCategory(data.data.category));

      const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}/get-message`);
      store.dispatch(initMessage(response.data.message));
    }
    fetchData();
  }, []);

  return (
    <>
      <html lang="en">
        <head>
          <title>SK Edits and Crafts</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charSet="UTF-8" />
          <link rel="icon" href="../sk.png" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=menu" />
        </head>
        <body className="w-[100dvw] box-border overflow-x-hidden overflow-y-scroll bg-gray-100">
          <Navbar />
          <Provider store={store}>
            {children}
          </Provider>
          <Foot />
        </body>
      </html>
    </>
  );
}
