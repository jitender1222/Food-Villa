import React, { useEffect, useState } from "react";
import {swiggy_api_URL} from "../config"
import Card from "./Card";
import Shimmer from "./Shimmer";
import filterData from "../utils/filterData";


const Body=()=>{

    const [restaurant,setRestaurant]=useState([]);
    const [searchData,setSearchData]=useState([]);
    const [searchText,setSearchText]=useState();
    const [error,setError]=useState(false);

    const search=(searchText,restaurant)=>{

        if(searchData!==" "){

            const data=filterData(searchText,restaurant);

            if(data.length>0){    
            console.log("inside the data found");
            console.log(data);
            setSearchData(data);
            setError(false);
            console.log(error)
            }

            else{
                console.log("data not found");
                setError(true);
                console.log(error);
            }

        }
    }

    const fetchData=async ()=>{

        const promise=await fetch(swiggy_api_URL);
        const result=await promise.json();
        setRestaurant(result.data?.cards[2]?.data?.data?.cards);
        setSearchData(result.data?.cards[2]?.data?.data?.cards);
    }
    useEffect(()=>{
        fetchData();
    },[])

    console.log(searchData);

    return searchData.length===0 ? <Shimmer /> : (
        <>

        {/* added a input field */}

        <div class="text-center mt-10">
        <input placeholder="Enter Food..." class= "border-2 border-black p-2 w-[30%]" 
        onChange={(e)=>{(
            setSearchText(e.target.value)
        )}}
        />
        <button class="p-2 bg-green-500 w-[10%]" onClick={()=>{
            search(searchText,restaurant);
        }}>Search</button>
        </div>

        {/* show the data */}
        {
            error ? <div class="text-3xl font-bold mt-10 text-center text-orange-400">OOPS!! Item Not Found....</div> : <div class="flex flex-wrap justify-center mt-14">
            {searchData.map((item)=>(
               <Card imgId={item?.data?.cloudinaryImageId} name={item?.data?.name} cusion={item?.data?.cuisines} cost={item?.data?.costForTwoString} rating={item?.data?.avgRating} key={item?.data?.id} time={item?.data?.slaString} discount={item?.data?.aggregatedDiscountInfo?.header} />
           ))}
       </div>
        }
        </>
    )
}

export default Body;