const Contact = () => {
  return <>
    <div className="contact my-5 w-[95%] mx-auto md:w-[97%]">
      <div className="text-center text-2xl font-bold my-3">Contact Us</div>
      <p className="text-center">We’d love to hear from you! Whether it’s an order, a custom idea, or just a question, our team is here to help.</p>
      <ul className="my-8">
        <li>📞 Call / WhatsApp : <span className="font-semibold">+91 7092572394</span></li>
        <li className="mb-5">📧 Email : <a target="_blank" href="mailto:creativeskedits2001@email.com" className="font-semibold">creativeskedits2001@email.com</a></li>
        <li className="mb-7" >📍<span  className="font-semibold text-lg"> Address</span>
          <ul>
            <li className="ml-7">SK Edits & Crafts</li>
            <li className="ml-7">Tirunelveli, Tamilnadu - 627 001</li>
          </ul>
        </li>
        <li className="mb-7" >🕒<span className="font-semibold text-lg"> Business Hours</span>
          <ul>
            <li className="ml-7">Monday – Sunday: 10:00 AM – 8:00 PM</li>
            <li className="ml-7">Order Via Online </li>
          </ul>
        </li>
        <li className="mb-7">🌐 <span className="font-semibold text-lg">Social Media</span>
          <ul>
            <li>👉 Follow us for latest updates, offers & new designs:</li>
            <li className="ml-6.5"><a target="_blank" href="https://www.instagram.com/creative_sk_editz?igsh=MXkxNHpzaDhnbjhhZw==" 
            className="text-blue-900 font-semibold" >Instagram</a></li>
          </ul>
        </li>
      </ul>

    </div>
  </>
}

export default Contact