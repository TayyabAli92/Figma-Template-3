"use client";
import { useState } from "react";
import Image from "next/image";
import ProductCard from "@/components/Product_Card";

export default function Product() {
  const [isGenderOpen, setGenderOpen] = useState(true);
  const [isKidsOpen, setKidsOpen] = useState(true);
  const [isPriceOpen, setPriceOpen] = useState(true);
  return (
    <div className="flex xs:flex-row flex-col">
        {/* Left Section */}
        <div className="ml-4 sm:ml-10 w-full max-w-xs lg:max-w-sm">
  {/* New Section */}
  <div className="w-full py-6">
    <h2 className="text-xl sm:text-2xl font-bold border-b pb-2 mb-4">
      New (500)
    </h2>

    <ul className="space-y-2 sm:space-y-4 text-gray-700">
      <li className="hover:text-black cursor-pointer">Shoes</li>
      <li className="hover:text-black cursor-pointer">Sports Bras</li>
      <li className="hover:text-black cursor-pointer">Tops & T-Shirts</li>
      <li className="hover:text-black cursor-pointer">
        Hoodies & Sweatshirts
      </li>
      <li className="hover:text-black cursor-pointer">Jackets</li>
      <li className="hover:text-black cursor-pointer">Trousers & Tights</li>
      <li className="hover:text-black cursor-pointer">Shorts</li>
      <li className="hover:text-black cursor-pointer">Tracksuits</li>
      <li className="hover:text-black cursor-pointer">
        Jumpsuits & Rompers
      </li>
      <li className="hover:text-black cursor-pointer">Skirts & Dresses</li>
      <li className="hover:text-black cursor-pointer">Socks</li>
      <li className="hover:text-black cursor-pointer">
        Accessories & Equipment
      </li>
    </ul>
  </div>

  <hr />

  {/* Filters Section */}
  <div className="w-full bg-white p-4 space-y-6 text-gray-800">
    {/* Gender Filter */}
    <div>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setGenderOpen(!isGenderOpen)}
      >
        <h3 className="font-bold">Gender</h3>
        <span>{isGenderOpen ? "▲" : "▼"}</span>
      </div>
      {isGenderOpen && (
        <ul className="mt-2 space-y-2">
          <li>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Men</span>
            </label>
          </li>
          <li>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Women</span>
            </label>
          </li>
          <li>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Unisex</span>
            </label>
          </li>
        </ul>
      )}
    </div>
    <hr />

    {/* Kids Filter */}
    <div>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setKidsOpen(!isKidsOpen)}
      >
        <h3 className="font-bold">Kids</h3>
        <span>{isKidsOpen ? "▲" : "▼"}</span>
      </div>
      {isKidsOpen && (
        <ul className="mt-2 space-y-2">
          <li>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Boys</span>
            </label>
          </li>
          <li>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Girls</span>
            </label>
          </li>
        </ul>
      )}
    </div>
    <hr />

    {/* Shop By Price Filter */}
    <div>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setPriceOpen(!isPriceOpen)}
      >
        <h3 className="font-bold">Shop By Price</h3>
        <span>{isPriceOpen ? "▲" : "▼"}</span>
      </div>
      {isPriceOpen && (
        <ul className="mt-2 space-y-2">
          <li>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Under ₹ 2,500.00</span>
            </label>
          </li>
          <li>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>₹ 2,501.00 - ₹</span>
            </label>
          </li>
        </ul>
      )}
    </div>
  </div>
</div>

    {/* End */}



    <div className="space-x-6 p-4">
        <div className="flex gap-4 items-center mb-4 justify-end">
            <p>Hide Filters</p>
            <Image
            src="/filter.png"
            alt="Filter"
            width={24}
            height={24}
            className="hover:cursor-pointer"
            />
            <p>Sort By</p>
            <Image
            src="/button.png"
            alt="Button"
            width={14}
            height={14}
            className="hover:cursor-pointer"
             />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1440px] mx-auto p-5">

      {/* <div className="flex gap-3 mb-6"> */}
        <ProductCard 
        image="/shoe-1.png" 
        name="Just In"
        title="Nike Air Force 1 Mid '07" 
        description="Men's Shoes" 
        color="1 Colour" 
        price="MRP: ₹ 10 795.00" 
        />
        <ProductCard 
        image="/shoe-2.png" 
        name="Just In"
        title="Nike Court Vision Low Next Nature" 
        description="Men's Shoes" 
        color="1 Colour" 
        price="MRP: ₹ 4 995.00" 
        />
        <ProductCard 
        image="/shoe-3.png" 
        name="Just In"
        title="Nike Air Force 1 PTL.AF.ORM" 
        description="Women's Shoes" 
        color="1 Colour" 
        price="MRP: ₹ 8 695.00" 
        />
        {/* </div> */}
        {/* <div className="flex gap-3 mb-6"> */}
        <ProductCard 
        image="/shoe-4.png" 
        name="Just In"
        title="Nike Air Force 1 React" 
        description="Men's Shoes" 
        color="1 Colour" 
        price="MRP: ₹ 13 295.00" 
        />
        <ProductCard 
        image="/shoe-5.png" 
        name="Promo Exclusion"
        title="Air Jordan 1 Elevete Low" 
        description="Women's Shoes" 
        color="1 Colour" 
        price="MRP: ₹ 11 895.00" 
        />
        <ProductCard 
        image="/nike-shirt.png" 
        name="Just In"
        title="Nike Standard Issue" 
        description="Women's Basketball Jersey" 
        color="1 Colour" 
        price="MRP: ₹ 2 895.00" 
        />
        {/* </div> */}
        {/* <div className="flex gap-3 mb-6"> */}
        <ProductCard 
        image="/shoe-6.png" 
        name="Promo Exclusion"
        title="Nike Drunk Low Retro SE" 
        description="Men's Shoes" 
        color="1 Colour" 
        price="MRP: ₹ 9 695.00" 
        />
        <ProductCard 
        image="/men-shirt.png" 
        name="Sustainable Materials"
        title="Nike Dri-FIT UV Hyverse" 
        description="Men's Short-Sleeve Grafic Fitness Top" 
        color="1 Colour" 
        price="MRP: ₹ 2 495.00" 
        />
        <ProductCard 
        image="/shoe-7.png" 
        name="Just In"
        title="Nike Court Vision Low" 
        description="Men's Shoes" 
        color="1 Colour" 
        price="MRP: ₹ 5 695.00" 
        />
        {/* </div> */}
        {/* <div className="flex gap-3 mb-6"> */}
        <ProductCard 
        image="/men-shirt-1.png" 
        name="Just In"
        title="Nike Dri-FIT Ready" 
        description="Men's Shot-Sleeve Fitness Top" 
        color="2 Colour" 
        price="MRP: ₹ 2 495.00" 
        />
        <ProductCard 
        image="/women-shirt-1.png" 
        name="Just In"
        title="Nike One Leak Protection: Period" 
        description="Men's Mid-Rise 18cm (approx.) Biker Shorts" 
        color="3 Colour" 
        price="MRP: ₹ 3 395.00" 
        />
        <ProductCard 
        image="/shoe-08.png" 
        name="Just In"
        title="Nike Air Force 1 LV8 3" 
        description="Older Kids' Shie" 
        color="1 Colour" 
        price="MRP: ₹ 7 495.00" 
        />
        {/* </div> */}
        {/* <div className="flex gap-3 mb-6"> */}
        <ProductCard 
        image="/shoe-9.png" 
        name="Just In"
        title="Nike Blazer Low Plateform" 
        description="Women's Shoes" 
        color="1 Colour" 
        price="MRP: ₹ 8 195.00" 
        />
        <ProductCard 
        image="/shoe-10.png" 
        name="Just In"
        title="Nike Air Force 1 '07" 
        description="Women's Shoe" 
        color="2 Colour" 
        price="MRP: ₹ 8 195.00" 
        />
        <ProductCard 
        image="/men-sendo.png" 
        name="Just In"
        title="Nike Pro Dir-FIT" 
        description="Men's Tight-Fit Sleeveless Top" 
        color="1 Colour" 
        price="MRP: ₹ 1 495.00" 
        />
        {/* </div> */}
        {/* <div className="flex gap-3 mb-6"> */}
        <ProductCard 
        image="/shoe-11.png" 
        name="Just In"
        title="Nike Drunk Low Retro" 
        description="Men's Shoes" 
        color="1 Colour" 
        price="MRP: ₹ 8 695.00" 
        />
        <ProductCard 
        image="/shoe-12.png" 
        name="Just In"
        title="Nike Air Max SC" 
        description="Women's Shoes" 
        color="2 Colour" 
        price="MRP: ₹ 5 995.00" 
        />
        <ProductCard 
        image="/men-shirt-2.png" 
        name="Just In"
        title="Nike Dir-FIT UV Miler" 
        description="Men's Short-Sleeve Running Top" 
        color="1 Colour" 
        price="MRP: ₹ 1 695.00" 
        />
        {/* </div> */}
        {/* <div className="flex gap-3 mb-6"> */}
        <ProductCard 
        image="/shoe-13.png" 
        name="Just In"
        title="Nike Air Max SYSTEM" 
        description="Older Kids' Shoes" 
        color="1 Colour" 
        price="MRP: ₹ 6 495.00" 
        />
        <ProductCard 
        image="/women-3.png" 
        name="Just In"
        title="Nike Alate All UI" 
        description="Women's Light-Support Lightly"
        description2="Lined U-Neck Printed Sports Bra" 
        color="1 Colour" 
        price="MRP: ₹ 2 195.00" 
        />
        <ProductCard 
        image="/shoe-14.png" 
        name="Just In"
        title="Nike Court Legacy Lift" 
        description="Women's Shoes" 
        color="2 Colour" 
        price="MRP: ₹ 7 495.00" 
        />
        {/* </div> */}
        {/* <div className="flex gap-3 mb-6"> */}
        <ProductCard 
        image="/women-4.png" 
        name="Just In"
        title="Nike Swoosh" 
        description="Women's Medium-support Padded"
        description2="Spports Bra Tank" 
        color="2 Colour" 
        price="MRP: ₹ 3 095.00" 
        />
        <ProductCard 
        image="/shoe-15.png" 
        name="Just In"
        title="Nike SB Zoom Janoski OG+" 
        description="Shoes"
        color="1 Colour" 
        price="MRP: ₹ 8 595.00" 
        />
        <ProductCard 
        image="/men-4.png" 
        name="Just In"
        title="Nike Dir-FIT Run Division Rise 365" 
        description="Men's Running Tank" 
        color="2 Colour" 
        price="MRP: ₹ 3 495.00" 
        />
        {/* </div>
        <div className="flex gap-3 mb-6"> */}
        <ProductCard 
        image="/short.png" 
        name="Just In"
        title="Nike Dir-FIT Challenger" 
        description="Men's 18cm (approx.) 2-in-1"
        description2="Versatile Short" 
        color="1 Colour" 
        price="MRP: ₹ 2 495.00" 
        />
        <ProductCard 
        image="/shoe-16.png" 
        name="Just In"
        title="Jordan Series SE" 
        description="Men's Shoes"
        color="2 Colour" 
        price="MRP: ₹ 7 495.00" 
        />
        <ProductCard 
        image="/kids.png" 
        name="Just In"
        title="Nike Outdoor Play" 
        description="Older Kids' Oversized Woven Jacket" 
        color="1 Colour" 
        price="MRP: ₹ 3 895.00" 
        />
        {/* </div> */}
        {/* <div className="flex gap-3 mb-6"> */}
        <ProductCard 
        image="/short-1.png" 
        name="Just In"
        title="Nike Sportswear Trend" 
        description="Older Kids' (Girls') High-waisted"
        description2="Woven Shorts" 
        color="2 Colour" 
        price="MRP: ₹ 2 495.00" 
        />
        <ProductCard 
        image="/shoe-17.png" 
        name="Just In"
        title="Nike Blazer Low '77 Jumbo" 
        description="Women's Shoes"
        color="1 Colour" 
        price="MRP: ₹ 8 595.00" 
        />
        <ProductCard 
        image="/shoe-18.png" 
        name="Just In"
        title="Nike SB Force 58" 
        description="Skate Shoe" 
        color="1 Colour" 
        price="MRP: ₹ 5 995.00" 
        />
        {/* </div> */}
        </div>
    </div>
    </div>
  );
}
