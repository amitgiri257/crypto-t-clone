import React, {useState, useEffect } from 'react'
import TabsComponent from '../Components/Dashboard/Tabs'
import Search from '../Components/Dashboard/Search'
import PaginationComponent from '../Components/Dashboard/Pagination'
import Loader from '../Components/Common/Loader'
import Header from '../Components//Common//Header'
import BackToTop from '../Components/Common/BackToTop'
import axios from 'axios'
import Footer from '../Components/Common/Footer'

const DashboardPage = () => {
    const [coins,setCoins]=useState([])
    const [paginatedCoins,setPaginatedCoins]=useState([])
    const [search,setSearch]=useState('')
    const [page,setPage]=useState(1)
    const [isLoading,setIsLoading]=useState(true)

    const handlePageChange = (event, value) => {
      setPage(value);
      let prevInd=(value-1)*10;
      console.log(prevInd)
      setPaginatedCoins(coins.slice(prevInd,prevInd+10))
    };
    const onSearchChange=(e)=>{
      setSearch(e.target.value)
    }
    let filteredCoins=coins.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()) ||item.symbol.toLowerCase().includes(search.toLowerCase() ))

    useEffect(()=>{
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-P9pA4WokEwF3Rg1HNoAwBsHQ&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en")
    .then((response)=>{
     console.log(response.data);
     setCoins(response.data)
     setPaginatedCoins(response.data.slice(0,10))
      setIsLoading(false)
    })
    .catch((error)=>{
     console.error(error);
    })
    
  },[])
  
  return (
    <><Header/>
    <BackToTop/>{isLoading?<Loader/>:
    <div>
      <Search search={search} onSearchChange={onSearchChange}/>
      <TabsComponent coins={search?filteredCoins:paginatedCoins}/>
      {
        !search && <PaginationComponent page={page} handlePageChange={handlePageChange}/>
      }
      
    </div>}
    <Footer/>
    </>
  )
}

export default DashboardPage