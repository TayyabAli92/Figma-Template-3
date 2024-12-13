import Image from "next/image";


interface menWomenCard{
    image: string; 
    name: string;
    description: string;
    discount: string;
};

export default function MenWomenCard({image, name, description, discount}:menWomenCard){
    return(
        <div className="flex flex-col gap-7 h-[400px] w-[300px]">
            <Image src={image} alt={'showimage'} width={300} height={300} />
            <div>
                <span className="flex justify-between w-full">
                <h4>{name}</h4>
                <p>{discount}</p>
                </span>
                <p className="text-[#757575]">{description}</p>
            </div>
        </div>
    )
}