import React from "react";

import { swiggy_cloudinary_api } from "../config";

const CartCard=({
    name,
    description,
    cloudinaryImageId,
    price
})=>{
    return (
        <>
        <div class="flex flex-wrap border-2 w-72 p-4 m-10">
            <div class="w-52">
            <img src={swiggy_cloudinary_api+cloudinaryImageId}/>
            </div>

            <div class="mt-2 font-serif p-2">
                <p class="font-bold">{name}</p>
                <p>desc-{description}</p>
                <p>Price-{price/100}</p>
            </div>
        </div>
        </>
    )
}

export default CartCard;