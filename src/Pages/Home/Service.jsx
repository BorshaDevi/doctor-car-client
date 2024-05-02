
import { FaArrowRight } from "react-icons/fa6";
const Service = ({service}) => {
    const {title,img,price,description} =service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className="text-orange-400">{price}</p>
    <div className="card-actions justify-end">
      <button className="btn "><FaArrowRight /></button>
    </div>
  </div>
</div>
    );
};

export default Service;