'use client'

import "./globals.css";
import Navbar from './navabar/Navbar'
import Foot from './navabar/Foot'
import { Provider } from "react-redux";
import store from "./store/Redux-store";
import { useEffect } from "react";
import axios from "axios";
import { initCategory, initMessage, initProduct } from "./store/Slice";

if (typeof window !== 'undefined') {
  axios.interceptors.request.use((config) => {
    if (config.url) {
      const hostname = window.location.hostname;
      if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
        config.url = config.url.replace('localhost:8000', `${hostname}:8000`);
        config.url = config.url.replace('127.0.0.1:8000', `${hostname}:8000`);
      }
    }
    return config;
  });
}

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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=menu" />
        </head>
        <body className="font-plus-jakarta w-full min-h-screen box-border overflow-x-hidden bg-gradient-to-tr from-brand-pink-light/70 via-white to-brand-pink-light/30 text-slate-800 antialiased">
          <Navbar />
          <Provider store={store}>
            <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {children}
            </main>
          </Provider>
          <Foot />
        </body>
      </html>
    </>
  );
}
