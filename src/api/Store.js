import React, { useEffect, useState } from 'react';
import axios from "axios";
 

function Store() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get('http://54.253.29.55/api/stores').then(res => {
      setUserList(res.data.data);
    });
  }, []);
  return (
    <div className="container-fluid">
       
      
        
     
          {userList.map(x => <div className='col-md-8 store-card'>
              <div className='row'>
              <div className='col-md-10'>
          {x.name}
            <div>{x.address}</div>
            <div>{x.city_name}</div>
            <div class="d-grid gap-2 d-md-block">
  <button class="btn btn-outline-success" type="button">{x.phone}</button>
  <button class="btn btn-outline-success" type="button">{x.email}</button>
</div>
            </div>
            <div className='col-md-2'>
            <div><img src={x.image} width="50" height="50" /></div>
            </div>
          </div>
          </div>)}
          {userList.length == 0 && <div>
            <div className="text-center" colSpan="4">
              <b>LOading</b>
            </div>
          </div>}
       

  
    </div>
  );
}

export default Store;
