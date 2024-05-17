
import React, { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
import axios from 'axios';

const Admin = () => {
  const [adminData, setAdminData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Outside")
    axios.get('/server/admindatas5_function/getoutput')
      .then((res) => {
        console.log(res.data);
        console.log('hello')
        setAdminData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

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
        {adminData.map((data, index) => (
          <tr key={index}>
            <td>{data.dataTable.role}</td>
            <td>{data.dataTable.data}</td>
            <td>{data.dataTable.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Admin;

