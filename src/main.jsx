import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Route/Route.jsx';
import Authprovider, { AuthContext } from './Authprovider/Authprovider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <Authprovider>



    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

    </Authprovider>
    
   
  </div>
)
