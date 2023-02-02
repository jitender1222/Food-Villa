import React, { useEffect, useState } from "react";
import {swiggy_api_URL} from "../config"
import Card from "./Card";


const Body=()=>{

    const [restaurant,setRestaurant]=useState([]);

    const fetchData=async ()=>{

        const promise=await fetch(swiggy_api_URL);
        const result=await promise.json();
        setRestaurant(result.data?.cards[2]?.data?.data?.cards);
    }
    useEffect(()=>{
        fetchData();
    },[])

    console.log(restaurant);

    return (
        <>
        <div class="text-center mt-10">
        <input placeholder="Enter Food..." class= "border-2 border-black p-2 w-[30%]" />
        <button class="p-2 bg-green-500 w-[10%]">Search</button>
        </div>
        <div class="flex flex-wrap justify-center mt-14">
            {restaurant.map((item)=>(
                <Card imgId={item?.data?.cloudinaryImageId} name={item?.data?.name} cusion={item?.data?.cuisines} cost={item?.data?.costForTwoString} rating={item?.data?.avgRating} key={item?.data?.id} time={item?.data?.slaString} discount={item?.data?.aggregatedDiscountInfo?.header} />
            ))}
        </div>
        </>
    )
}

export default Body;