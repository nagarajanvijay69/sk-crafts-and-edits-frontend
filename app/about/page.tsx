const About = () => {
  return <>
    <div className="about w-[95%] md:w-[97%] mx-auto my-5">
      <div className="flex justify-center mb-3"><img src="./sk.png" alt="sk-logo" className="w-[200px]"/></div>
      <div className="text-center text-2xl font-bold mb-5">About Us</div>
      <p className="font-semibold">At SK Edits & Crafts, we believe that every gift tells a story. Founded with a passion for creativity and craftsmanship, our mission is to bring smiles through unique, customized, and meaningful products. Every product is crafted with love, detail, and innovation – because we don’t just make gifts, we create memories.</p>
       <div className="delivery">
        <div className="text-center text-xl font-bold pr-3.5 my-5">🚚 Delivery & Shipping Information</div>
        <p className="text-center font-semibold text-md">At SK Edits & Crafts, we ensure that your gifts reach you safely, quickly, and in perfect condition.</p>
        <ul className="my-8 flex flex-col gap-5 font-semibold">
          <li>
            <ul>
              <li className="text-lg font-semibold my-2">📦 Delivery Partners</li>
              <li className="ml-7">We proudly ship through ST Courier and other professional courier services to provide reliable and timely delivery across Tamil Nadu and beyond.</li>
            </ul>
          </li>
          <li>
            <ul>
              <li className="text-lg font-semibold my-2">🕒 Delivery Timeline</li>
              <li className="ml-7">Tamil Nadu Orders: 2 – 4 business days.</li>
              <li className="ml-7">Other States (if applicable): 4 – 7 business days</li>
              <li className="ml-7">Express delivery available on request (extra charges may apply).</li>
            </ul>
          </li>
          <li>
            <ul>
              <li className="text-lg font-semibold my-2">💳 Shipping Charges</li>
              <li className="ml-7">Standard delivery charges are applied as per ST Courier service rates.</li>
              <li className="ml-7">Free delivery may be available on selected offers & bulk orders.</li>
            </ul>
          </li>
          <li>
            <ul>
              <li className="text-lg font-semibold my-2">✅ Order Tracking</li>
              <li className="ml-7">Once shipped, you’ll receive a tracking ID to monitor your order status directly through ST Courier’s website/app.</li>
            </ul>
          </li>
          <li>
            <ul>
              <li className="text-lg font-semibold my-2">📍 Important Notes</li>
              <li className="ml-7">All parcels are securely packed to avoid damage during transit.</li>
              <li className="ml-7">Delivery timelines may vary slightly due to location or festive rush.</li>
              <li className="ml-7">For urgent/last-minute orders, please contact us directly.</li>
            </ul>
          </li>
        </ul>
       </div>
      </div>
   </>
}

export default About