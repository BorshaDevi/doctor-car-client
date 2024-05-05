import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";


const CheakOut = () => {
    const cars=useLoaderData()
    const{title,price,_id,img}=cars
    console.log(cars)
    const{user}=useContext(AuthContext)
    const handleOrder= e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const date=form.date.value;
        const email=user?.email;
        
        const orderConform={
            custumerName:name,
            date,
            price,
            email,
            serviceId:_id,
            img,

        }
        
         fetch('http://localhost:5000/order',{
          method:'post',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(orderConform)
         })
         .then(res => res.json())
         .then(data => console.log(data))
    }
    return (
        <div>
            <h1 className="text-center text-orange-400 font-bold">Service:{title}</h1>  
      <form onSubmit={handleOrder} className="card-body">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="Date" name='date' className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} name='email'  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due</span>
          </label>
          <input type="text" placeholder={price} name='price' className="input input-bordered" />
          
        </div>
       </div>
        <div className="form-control mt-6">
          <input type='submit' value='Order' className="btn w-full bg-orange-500"></input>
        </div>
      </form>
    </div>
  
    );
};

export default CheakOut;