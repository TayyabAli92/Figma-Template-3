import Image from 'next/image';

export default function Checkout() {
  return (
    <div className="max-w-md mx-auto bg-white p-6">
      <h2 className="text-lg font-semibold mb-4">
        How would you like to get your order?
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Customs regulation for India require a copy of the recipient’s KYC. The
        address on the KYC needs to match the shipping address. Our courier will
        contact you via SMS/email to obtain a copy of your KYC. The KYC will be
        stored securely and used solely for the purpose of clearing customs
        (including sharing it with customs officials) for all orders and
        returns. If your KYC does not match your shipping address, please click
        the link for more information.{" "}
        <a href="#" className="text-blue-600 font-medium hover:underline">
          Learn More
        </a>
      </p>

      <button className="w-full flex items-center text-start gap-6 border border-black py-2 px-4 rounded-md ">
        <Image
        src="/deliver.png"
        alt="Deliver"
        width={24}
        height={24}
        />
        Deliver It
      </button>
      {/* <div>
        <h1>Enter your name and address:</h1>
        <button className="h-[56px]">
        <input type="text" placeholder="Name" className="placeholder:font-sans" />
        </button>
      </div> */}
    </div>
  );
}
