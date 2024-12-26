import Link from "next/link";
import Image from 'next/image';

export default function Bag() {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col lg:flex-row gap-8">

      {/* Bag Section */}
      <div className="p-6 w-full lg:w-[717px]">
        {/* Free Delivery Section */}
        <div className="bg-gray-50 p-4 border rounded-md text-start w-full mb-6">
          <p className="text-sm font-medium text-gray-600">
            Free Delivery
          </p>
          <p className="text-xs text-gray-500">
            Applies to orders of ₹14,000.00 or more.{' '}
            <a href="#" className="text-blue-500 underline">
              View details
            </a>
          </p>
        </div>
        <h1 className="text-xl font-semibold mb-6">Bag</h1>

        {/* Product 1 */}
        <div className="flex flex-col sm:flex-row items-start border-b pb-6 mb-6">
          <div className="w-24 h-24 relative mr-4">
            <Image
              src="/men-1.png"
              alt="Men"
              width={150}
              height={150}
              className="object-cover rounded"
            />
          </div>

          <div className="flex-1">
            <h2 className="font-medium text-gray-800">
              Nike Dri-FIT ADV TechKnit Ultra
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              Men&#39;s Short-Sleeve Running Top
              <br />
              Ashen Slate/Cobalt Bliss
            </p>
            <p className="text-sm text-gray-500 mb-2">Size: L &nbsp; | &nbsp; Quantity: 1</p>

            {/* Actions */}
            <div className="flex space-x-4 mt-2">
              <button className="text-gray-400 hover:text-gray-600">
                <Image
                  src="/heart-logo.png"
                  alt="Heart Logo"
                  width={24}
                  height={24}
                />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <Image
                  src="/dustbin.png"
                  alt="Dustbin"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>

          <div className="text-right mt-4 sm:mt-0">
            <p className="font-medium text-gray-800">MRP: ₹3,895.00</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col sm:flex-row md:ml-28 items-start">
          <div className="flex-1">
            <h2 className="font-medium text-gray-800">Nike Air Max 97 SE</h2>
            <p className="text-sm text-gray-500 mb-2">
              Men&#39;s Shoes
              <br />
              Flat Pewter/Light Bone/Black/White
            </p>
            <p className="text-sm text-gray-500 mb-2">Size: 8 &nbsp; | &nbsp; Quantity: 1</p>

            {/* Actions */}
            <div className="flex space-x-4 mt-2">
              <button className="text-gray-400 hover:text-gray-600">
                <Image
                  src="/heart-logo.png"
                  alt="Heart Logo"
                  width={24}
                  height={24}
                />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <Image
                  src="/dustbin.png"
                  alt="Dustbin"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>

          <div className="text-right mt-4 sm:mt-0">
            <p className="font-medium text-gray-800">MRP: ₹16,995.00</p>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-white p-6 w-full lg:w-1/3">
        <h2 className="text-xl font-semibold mb-4">Summary</h2>
        <div className="mb-4">
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Subtotal</span>
            <span>₹20,890.00</span>
          </div>
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Estimated Delivery &amp; Handling</span>
            <span>Free</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-gray-800 font-medium">
            <span>Total</span>
            <span>₹20,890.00</span>
          </div>
        </div>
        <Link href="/checkout">
        <button className="w-full bg-black text-white py-3 rounded-full font-medium text-sm hover:bg-gray-800">
          Member Checkout
        </button>
        </Link>
      </div>
    </div>
  );
}
