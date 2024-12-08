import Image from "next/image";
import Link from "next/link";
import "../app/globals.css"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-[#F5F5F5] w-full flex justify-center flex-col items-center text-center py-8">
        <h1 className="font-bold text-xl md:text-3xl lg:text-4xl">Hello Nike App</h1>
        <p className="mt-4 text-sm md:text-base lg:text-lg">
          Download the app to access everything Nike.{" "}
          <Link href="/" className="text-black underline">Get Your Great</Link>
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
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-8 text-center">NIKE AIR MAX PULSE</h1>
        <p className="text-center mt-8 text-sm md:text-base lg:text-lg">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse<br />
          --designed to push you past your limits and help you go to the max.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-9 mt-12 w-full px-4">
        <button className="bg-black rounded-full text-white h-12 w-full md:w-32">Notify Me</button>
        <button className="bg-black rounded-full text-white h-12 w-full md:w-32">Shop Air Max</button>
      </div>
    </div>
  );
}