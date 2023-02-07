import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { swiggy_cloudinary_api, swiggy_menu_url } from "../config";
import { addItem } from "../utils/cartSlice";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";

const RestaurantMenu=()=>{

    const {id}=useParams();

    const [restaurantInfo,setRestaurantInfo]=useState(null);

    const dispatch=useDispatch();

    const handleAddItems=()=>{
        dispatch(addItem("Grapes"));
    }

    const UrlData=async ()=>{

        const promise=await fetch(swiggy_menu_url+id);
        const data=await promise.json();
        console.log(data?.data);
        setRestaurantInfo(data?.data)
    }

    useEffect(()=>{
        UrlData();
    },[])

    return restaurantInfo===null? <Shimmer /> :  (
        <>
        <div class="flex bg-gray-900 p-8 justify-between text-white">
        <img class="w-56 rounded-xl" src={swiggy_cloudinary_api + restaurantInfo?.cloudinaryImageId } />
        <div class="flex flex-col text-center">
        <h2 class="text-4xl font-bold font-serif">{restaurantInfo?.name}</h2>
        <h3 class="text-start text-gray-400">{restaurantInfo?.cuisines}</h3>
        <div class="flex text-gray-300 font-thin">
        <h3>{restaurantInfo?.area}</h3>,
        <h3>{restaurantInfo?.city}</h3>
        </div>
        <div class="flex font-bold font-mono mt-2">
        <div class="flex flex-col">
        <h3>{restaurantInfo?.avgRating}⭐</h3>
        <h3 class="text-xs text-gray-400">{restaurantInfo?.totalRatingsString}</h3>
        </div>|    
        <h3>{restaurantInfo?.costForTwoMsg}</h3>
        </div>
        </div> 
        <div>
            <button className="bg-green-100 text-black p-2 rounded-md" onClick={()=>{handleAddItems()}} >Add Items</button>
            </div>  
        <div class="border-2 rounded-xl">
        <div class="text-xl text-center text-yellow-300 font-bold">OFFERS</div>
        <h2 class="p-4">{restaurantInfo?.aggregatedDiscountInfo?.descriptionList.map((item)=>(
            <p>{item?.id}{item?.meta}</p>
        ))}</h2>
        </div>
        </div>

        <h2 class="font-serif text-3xl font-bold text-center mt-4">Menu</h2>
        <ul class="flex justify-center flex-wrap mt-4">
            {
                Object.values(restaurantInfo?.menu?.items).map((restaurant)=>{
                     return(                        
                        <MenuCard name={restaurant.name} category={restaurant.category} 
                        img={restaurant?.cloudinaryImageId}/>
                    )
                })
            }
        </ul>
        </>
    )
}

export default RestaurantMenu;
