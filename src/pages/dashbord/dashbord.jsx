import React from 'react'
import Navbar from '../../components/header/header'
// import RestaurantList from '../../components/resturants/resturantList'
import MenuAdmin from '../../components/sidebar/SideBar'
const Dashbord = () => {
  return (
    <div>
        {/* {navbar}  */}
        <Navbar/>
          {/* <RestaurantList/> */}
        {/* <h1>card</h1> */}
        <MenuAdmin/>
         
    </div>
  )
}

export default Dashbord