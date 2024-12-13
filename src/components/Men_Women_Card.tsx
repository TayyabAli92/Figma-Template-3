import Image from "next/image";

interface menWomenCard {
    image: string; 
    name: string;
    description: string;
    discount: string;
}

export default function MenWomenCard({ image, name, description, discount }: menWomenCard) {
    return (
        <div className="flex flex-col gap-7 h-auto w-full max-w-[300px] mx-auto">
            <Image src={image} alt="showimage" width={300} height={300} className="w-full h-auto" />
            <div>
                <span className="flex justify-between w-full">
                    <h4 className="text-[10px] md:text-[15px] font-bold text-left">{name}</h4>
                    <p className="text-[10px] md:text-[15px] font-bold text-right">{discount}</p>
                </span>
                <p className="text-[#757575] text-sm md:text-base text-left">{description}</p>
            </div>
        </div>
    );
}