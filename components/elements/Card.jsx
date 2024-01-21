import Image from "next/image";
import {Skeleton, Button} from "@nextui-org/react";

export default function Card(props){
    const  {id, title, price, description, category, image, rating } = props


    return (

        <div id={props.id} className=" p-4 flex flex-col justify-center items-center gap-8 rounded-xl w-96 bg-gray-300 p-2 shadow-sm">
          <Image src={props.image} alt={props.image} width={100} height={100} ></Image>
          <div className="">
            <h2>{props.title}</h2>
            <span>{props.price}</span>
          </div>
          <Button  className="bg-gradient-to-tr p-4 rounded-lg from-pink-500 to-yellow-500 text-white shadow-lg transition-all hover:scale-105">
            ADD CART
        </Button>
        </div>

      );

}