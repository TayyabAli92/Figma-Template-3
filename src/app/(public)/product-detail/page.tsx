import Image from "next/image";

export default function ProductDetail() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl bg-white p-6 ">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src="/shoe-3.png" 
              alt="Nike Air Force 1"
              className="w-full max-w-sm object-contain"
            />
          </div>
  
          {/* Product Details */}
          <div className="flex flex-col justify-center">
            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Nike Air Force 1 <br />
              PLT.AF.ORM
            </h1>
  
            {/* Description */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              Turn style on its head with this crafted take on the Air Jordan 1
              Mid. Its "Inside out"-inspired construction, including unique
              layering and exposed foam accents, ups the ante on this timeless
              Jordan Brand silhouette. Details like the deco stitching on the
              Swoosh add coveted appeal, while the unexpected shading, rich
              mixture of materials and aged midsole aesthetic give this release
              an artisan finish.
            </p>
  
            {/* Price */}
            <div className="text-2xl font-semibold text-gray-900 mb-4">
              ₹ 8 695.00
            </div>
  
            {/* Add to Cart Button */}
            <button className="flex items-center justify-center gap-6 w-full max-w-xs bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800">
              <Image 
              src="/Buy.png"
              alt="Buy"
              height={29}
              width={29}
              className="gap-5" />
              <p>
              Add To Cart
              </p>
            </button>
          </div>
        </div>
      </div>
    );
  }
  