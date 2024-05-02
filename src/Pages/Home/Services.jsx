import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services,setServices]=useState([])
    useEffect(() => {
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data))

    },[])
    return (
        <div className="mt-10">
            <div className="text-center">
                <h2 className="text-xl font-bold ">Servicing all of them.</h2>
                <p className=" "> Transmission servicing keeps gears shifting smoothly, preventing costly transmission repairs.
                <br></br>
      Cooling system maintenance prevents engine overheating, safeguarding against major damage.</p>
            </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ml-5 mt-5">
           {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
           </div>
            
        </div>
    );
};

export default Services;