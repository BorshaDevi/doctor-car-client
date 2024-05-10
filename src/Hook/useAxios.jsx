import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import { useNavigate } from "react-router-dom";

const axiosUrl=axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true,
})
const useAxios = () => {
    // const {logOut}=useContext(AuthContext)
    // const navigate=useNavigate()
    useEffect(()=> {
        axiosUrl.interceptors.response.use(res => {
            return res;
        },
        error => {
            if(error.response.status === 401 || error.response.status === 403 ){
                console.log('This is from  axios error')
                // logOut()
                // .then(() =>{
                //     navigate('/login')
                // }
                //   )
                //   .catch(error)
            }
        }
    )
    },[])
   return axiosUrl;
};

export default useAxios;