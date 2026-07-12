import Image from "next/image"
import SkLogo from "../../public/sk.png"

const About = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto space-y-12 pb-12">
        
        {/* About Section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-2">
            <div className="p-1 brand-gradient-bg rounded-3xl shadow-md">
              <Image src={SkLogo} alt="sk-logo" width={140} height={140} className="w-28 h-28 object-contain rounded-2xl bg-white" />
            </div>
          </div>
          <span className="text-xs font-bold tracking-wider text-brand-pink uppercase">Our Story</span>
          <h1 className="text-4xl font-extrabold font-playfair text-slate-800">About Us</h1>
          <p className="text-slate-600 leading-relaxed text-base max-w-2xl mx-auto pl-4 border-l-4 border-brand-pink text-left mt-6">
            At <strong>SK Edits & Crafts</strong>, we believe that every gift tells a unique story. Founded with a passion for creativity and fine craftsmanship, our mission is to bring genuine smiles through customized, meaningful products. Every frame and piece is crafted with love, detail, and innovation – because we don’t just make gifts, we help you shape lasting memories.
          </p>
        </div>

        {/* Shipping & Delivery Section */}
        <div className="space-y-6 pt-6 border-t border-slate-100">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold tracking-wider text-brand-pink uppercase">Logistics & Shipping</span>
            <h2 className="text-2xl font-extrabold text-slate-800">Delivery Information</h2>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We ensure that your custom gifts reach you safely, quickly, and in perfect condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            
            {/* Card 1: Partners */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl p-2 bg-brand-pink/10 rounded-xl">📦</span>
                <h3 className="font-bold text-slate-800 text-base">Delivery Partners</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                We ship through ST Courier and professional delivery services to provide reliable, timely shipments across Tamil Nadu and other states.
              </p>
            </div>

            {/* Card 2: Timeline */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl p-2 bg-brand-pink/10 rounded-xl">🕒</span>
                <h3 className="font-bold text-slate-800 text-base">Delivery Timeline</h3>
              </div>
              <ul className="text-xs text-slate-500 space-y-1.5 list-disc pl-4 leading-relaxed">
                <li>Tamil Nadu: 2 to 4 business days.</li>
                <li>Other States: 4 to 7 business days.</li>
                <li>Express delivery options are available upon direct request.</li>
              </ul>
            </div>

            {/* Card 3: Shipping Charges */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl p-2 bg-brand-pink/10 rounded-xl">💳</span>
                <h3 className="font-bold text-slate-800 text-base">Shipping Charges</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Standard delivery charges are calculated as per professional courier rate charts. Keep an eye out for special offers & free delivery on bulk orders!
              </p>
            </div>

            {/* Card 4: Order Tracking */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl p-2 bg-brand-pink/10 rounded-xl">✅</span>
                <h3 className="font-bold text-slate-800 text-base">Order Tracking</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Once shipped, you will receive a tracking ID to monitor your order status directly via the ST Courier web portal or customer application.
              </p>
            </div>

            {/* Important Notes */}
            <div className="bg-gradient-to-br from-brand-pink-light/80 to-brand-pink-light/40 border border-brand-pink/20 p-6 rounded-2xl text-slate-800 col-span-full shadow-sm space-y-2">
              <h3 className="font-bold text-brand-pink-dark text-sm uppercase tracking-wider">⚠️ Important Notes</h3>
              <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1.5 leading-relaxed">
                <li>All frames are packaged in secure multi-layered bubble wrapping to avoid damages in transit.</li>
                <li>Delivery timelines may vary slightly due to weather conditions or peak festive seasons.</li>
                <li>For urgent or last-minute orders, please reach out to us directly over WhatsApp.</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default About;