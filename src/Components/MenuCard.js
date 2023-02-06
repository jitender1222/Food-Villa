import React from "react";

import { swiggy_cloudinary_api } from "../config";
// import {notfound} from "../assests/imgnotfound.png"

const MenuCard=({
    name,
    category,
    img
})=>{
    return(
        <>
        <div class="m-6 p-6 border-2 rounded-xl hover:scale-95">
            <div>
            <img class="w-52 rounded-xl" src={swiggy_cloudinary_api+ img} alt="notfound" />
            </div>
            <div class="font-serif h-12 w-52 mt-2 font-semibold">{name}</div>
            <div class="font-gray italic">{category}</div>
        </div>
        </>
    )
}

export default MenuCard;