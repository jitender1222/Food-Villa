import React from "react";

import { swiggy_cloudinary_api } from "../config";

const Card=({
    imgId,
    name,
    cost,
    cusion,
    rating,
    time,
    discount

})=>{

    return (
        <>
        <div class="flex flex-col flex-wrap w-72 p-4 mr-6 cursor-pointer hover:border-2 overflow-x-hidden">
            <div class="w-64">
            <img src={swiggy_cloudinary_api+imgId}/>
            </div>

            <div class="mt-2 font-serif p-2">
                <p class="font-bold">{name}</p>
                <p class="italic">{cusion}</p>
                <div class="flex justify-between text-sm mt-2">
                <p>{cost}</p>
                <p>{time}</p>
                {
                    rating>=4 ? <p class="bg-green-500 pl-2">{rating}⭐</p>: <p class="bg-red-500 pl-2">{rating}⭐</p>
                }
                </div>
                <p class="bg-green-400 text-center mt-8">{discount}</p>
            </div>
        </div>
        </>
    )
}

export default Card;