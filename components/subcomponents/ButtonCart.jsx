import { useState } from "react"

export default function ButtonCart({text}){

    const [count, actualCount] = useState(0);
    let increase = () => {
        actualCount(count + 1);
        console.log(count)
    };

    return(
        <button onClick={() => actualCount(count + 1) + console.log(count) } className="max-w-fit p-3 tex	bg-red-300 text-black font-bold transition-all	rounded hover:scale-110  ">
            {text}
        </button>
    )
}