import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import Booking from "../Booking/Booking";


const Bookings = () => {
    const {user}=useContext(AuthContext)
    const[getDatas,setGetdatas]=useState([])
    console.log(getDatas)
    const url=`http://localhost:5000/order?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setGetdatas(data))
    },[])
    return (
      <div>
          <h1>getDatas:{getDatas.length}</h1>
          {
            getDatas.map(getData => <Booking key={getData._id} getDatas={getDatas} setGetdatas={setGetdatas} getData={getData}></Booking>)
          }
      
      </div>

    );
};

export default Bookings;