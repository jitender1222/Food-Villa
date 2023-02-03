
export default filterData=(searchText,rest)=>{
    const filteredData=rest.filter((item)=>
        item?.data?.name.toLowerCase().includes(searchText)
    )
    return filteredData;
}