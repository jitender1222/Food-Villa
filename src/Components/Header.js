
import React from "react";
import Img from "../assests/headimg.png"

const Header=()=>{

    return (
        <>
        <div class="flex justify-between bg-green-700">
            <div class="w-28">
                <img src={Img} alt="img" />
            </div>

            <div>
                <ul class="flex mt-6">
                    <li class="pr-16 cursor-pointer font-bold hover:text-orange-400">Home</li>
                    <li class="pr-16 cursor-pointer font-bold hover:text-orange-400">About Us</li>
                    <li class="pr-16 cursor-pointer font-bold hover:text-orange-400">Contact Us</li>
                    <li class="pr-16 cursor-pointer font-bold hover:text-orange-400">LogIn</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header;