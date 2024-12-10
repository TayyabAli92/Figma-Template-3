import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";
import ShopCard from "@/components/Shose_Card";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <div className="bg-[#F5F5F5] w-full flex justify-center flex-col items-center text-center py-8">
        <h1 className="font-bold text-xl text-black md:text-3xl lg:text-4xl">
          Hello Nike App
        </h1>
        <p className="mt-4 text-sm md:text-base text-black lg:text-lg">
          Download the app to access everything Nike.{" "}
          <Link href="/" className="text-black underline">
            Get Your Great
          </Link>
        </p>
      </div>
      <div className="flex justify-center w-full">
        <Image
          src="/image.png"
          alt="Image"
          width={1344}
          height={977}
          className="max-w-full h-auto"
        />
      </div>
      <div className="flex flex-col items-center mt-8 px-4">
        <p className="text-xl md:text-2xl lg:text-3xl">First Look</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-8 text-center">
          NIKE AIR MAX PULSE
        </h1>
        <p className="text-center mt-8 text-sm md:text-base lg:text-lg">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse
          <br />
          --designed to push you past your limits and help you go to the max.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-9 mt-12 w-full px-4">
        <button className="bg-black rounded-full text-white h-12 w-full md:w-32">
          Notify Me
        </button>
        <button className="bg-black rounded-full text-white h-12 w-full md:w-32">
          Shop Air Max
        </button>
      </div>

      <div className="flex flex-col items-start ml-4 mt-6 md:ml-7 md:mt-10">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-lg md:text-xl font-bold">Best of Air Max</h1>
          <span className="gap-3 flex items-center">
            <p className="text-sm md:text-base">Shop</p>
            <img
              src="/arrow-1.png"
              alt="Arrow"
              className="w-6 h-6 md:w-12 md:h-12"
            />
            <img
              src="/arrow-2.png"
              alt="Arrow"
              className="w-6 h-6 md:w-12 md:h-12"
            />
          </span>
        </div>
        <div className="flex flex-col md:flex-row mt-6 gap-4 md:gap-5">
          <ShopCard
            image="/shose-2.png"
            name="Nike Air Max Pulse"
            description="Women's Shoes"
            discount="₹ 13 995"
          />
          <ShopCard
            image="/shose-2.png"
            name="Nike Air Max Pulse"
            description="Men's Shoes"
            discount="₹ 13 995"
          />
          <ShopCard
            image="/shose-1.png"
            name="Nike Air Max 97 SE"
            description="Men's Shoes"
            discount="₹ 16 995"
          />
        </div>
      </div>

      <div className="px-4">
        <h1 className="text-lg md:text-xl font-bold mt-9 mb-5">Featured</h1>
        <Image
          src="/mountain.png"
          alt="Mountain"
          width={1200} 
          height={500} 
          className="mx-auto w-full h-auto max-w-[1200px] md:w-3/4 lg:w-1/2"
        />
        <div className="text-center">
          <h1 className="font-bold mt-8 text-2xl md:text-4xl lg:text-5xl">
            STEEP INTO WHAT FEELS GOOD
          </h1>
          <p className="mt-4 mb-8 text-sm md:text-base lg:text-lg">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <div className="flex justify-center">
            <button className="bg-black rounded-full text-white h-12 w-full md:w-32">
              Find Your Shoe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
