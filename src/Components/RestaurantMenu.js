import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { swiggy_cloudinary_api, swiggy_menu_url } from "../config";
import Shimmer from "./Shimmer";


const RestaurantMenu=()=>{

    const {id}=useParams();

    const [restaurantInfo,setRestaurantInfo]=useState(null);

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
        <div>
        <img src={swiggy_cloudinary_api + restaurantInfo?.cloudinaryImageId } />   
        <h2>{restaurantInfo?.name}</h2>
        <h2>{restaurantInfo?.aggregatedDiscountInfo?.descriptionList.map((item)=>(
            <p>{item?.id}{item?.meta}</p>
        ))}</h2>
        <h3>{restaurantInfo?.area}</h3>
        <h3>{restaurantInfo?.city}</h3>
        <h3>{restaurantInfo?.avgRating}⭐</h3>
        <h3>{restaurantInfo?.costForTwoMsg}</h3>
        </div>

        <h2>Menu</h2>
        <ul>
            {
                Object.values(restaurantInfo?.menu?.items).map((restaurant)=>{
                    return (
                        <li key={restaurant.id}>{restaurant.name}</li>
                    )
                })
            }
        </ul>
        </>
    )
}

export default RestaurantMenu;
