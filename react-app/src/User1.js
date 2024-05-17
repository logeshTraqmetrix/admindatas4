import React,{useEffect, useState} from 'react'
// import Table from 'react-bootstrap/Table';
import axios from 'axios'

const User = () => {
  let [userData,setUserData] = useState([])

   useEffect(() => {
      axios.get('https://admindatas4-808166282.development.catalystserverless.com/server/admindatas5_function/getoutput?role=user') 
          .then((res) => {
              console.log(res.data);
              setUserData(res.data)
          })
          .catch((err) => {
              console.log(err);
          });
   },[]);
  return (
    <table >
      <thead>
        <tr>
          <th>Role</th>
          <th>Data</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        
         {userData.map((data)=>{
          return(
            <tr>
              <td>{data.dataTable.role}</td>
              <td>{data.dataTable.data}</td>
              <td>{data.dataTable.email}</td>
            </tr>
          )
         })}
      
        
      </tbody>
    </table>
  )
}

export default User
