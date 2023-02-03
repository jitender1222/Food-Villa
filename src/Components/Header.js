
import React from "react";
import { Link } from "react-router-dom";
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
                   <Link to="/"><li class="pr-16 cursor-pointer font-bold hover:text-orange-400">Home</li></Link>
                   <Link to="/about"> <li class="pr-16 cursor-pointer font-bold hover:text-orange-400">About Us</li></Link>
                    <Link to="/contact"><li class="pr-16 cursor-pointer font-bold hover:text-orange-400">Contact Us</li></Link>
                   <Link to="/"> <li class="pr-16 cursor-pointer font-bold hover:text-orange-400">LogIn</li></Link>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header;