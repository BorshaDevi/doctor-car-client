import Swal from "sweetalert2";

const Booking = ({getData,getDatas,setGetdatas}) => {
    const {img,price,date,_id,status}=getData
    const handleDelete=id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
            fetch(`http://localhost:5000/order/${id}`,{
                method:'Delete',
            })
            .then(res=>res.json())
            .then(data => {
              console.log(data)
              if(data.deletedCount>0){

                  Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success"
                    });
                }
                const remains=getDatas.filter(f => f._id !== id)
                setGetdatas(remains)
             
            })
            }
          });
    }
    const handleConform=Id=>{
      fetch(`http://localhost:5000/ordered/${Id}`,{
        method:'PATCH',
        headers:{
          "content-type":"application/json",

        },
        body:JSON.stringify({status:'conform'})
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.modifiedCount>0){
          const conforms=getDatas.filter(getdata => getdata._id !== Id );
          const update=getDatas.find(getdata => getdata._id === Id);
          update.status='conform';
          const result=[update,...conforms];
          setGetdatas(result)

        }
      })

    }
    return (
        <div>
              <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
            
        </th>
        <th>Img</th>
        <th>Price</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
       <td>
       <button onClick={() => handleDelete(_id)} className="btn btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
       </td>
        <td>
          <div className="flex items-center ">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          {price}
          
        </td>
        <td>{date}</td>
        <th>
          {
           status === 'conform'? <span className="text-red-600">conformed</span> :
            <button onClick={() => handleConform(_id)} className="btn btn-ghost btn-xs">Conform</button>
          }
        </th>
      </tr>
      
     
      
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default Booking;