import Link from "next/link"

const Foot = () => {
  return <>
    <div className={`footer text-black px-3 py-5 font-semibold`}>
      <div className="top-content w-full flex flex-col items-center">
        <span className="text-2xl font-bold text-orange-950">SK Crafts and Edits</span>
        <p className="my-3">Welcome to SK Edits & Crafts, where creativity meets memories. We specialize in personalized, handcrafted gifts designed to make every occasion meaningful. Every product is made with love, detail, and care to turn your moments into lasting treasures.</p>
      </div>
      <div className="links my-1">
        <span className="text-lg font-semibold text-orange-950">Quick Links</span>
        <ul className="pl-4 flex flex-col gap-1 w-min">
          <Link href="/"><li>Home</li></Link>
          <Link href="/products"><li>Products</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/contact"><li>Contact</li></Link>
        </ul>
      </div>
      <div className="location my-2">
        <span className="text-lg font-semibold text-orange-950">Location</span>
        <ul className="pl-4 flex flex-col gap-1">
          <li>Sk Crafts & Edits</li>
          <li>Tirunelveli, Tamilnadu</li>
          <li>627 001</li>
        </ul>
      </div>
      <div className="connect my-2 mb-6">
        <span className="text-lg font-semibold text-orange-950">Connect With Us</span>
        <ul className="pl-4 flex flex-col gap-1 w-min">
          <a target="_blank" href="https://www.instagram.com/creative_sk_editz/?igsh=MXkxNHpzaDhnbjhhZw%3D%3D#"><li>Instagram</li></a>
          <a target="_blank" href="https://www.youtube.com/@its_me_sk_001"><li>Youtube</li></a>
          <a target="_blank" href="mailto:creativeskedits2001@email.com" ><li>E-Mail</li></a>
        </ul>
      </div>
      <hr />
      <div className="text-center my-2 pt-1">&copy; 2025 SK Edits and Crafts. All Rights Reserved</div>
    </div>
  </>
}

export default Foot
