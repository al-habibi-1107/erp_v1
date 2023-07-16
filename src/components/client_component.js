import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";

const ClientComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxEhVfe54cI5cM32IcvGQJFFzTathqF47vW2DQI4fuO3-4skA1WygdB97avAroeukMl/exec?id=2') // replace with your API endpoint
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData)
        setData(jsonData['client_list']);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);


 


  return (
    <div style={{width:"80%",margin:"30px auto"}}>
    <h1 style={{textAlign:"left",margin:"30px 0",fontSize:"2em",fontWeight:"300"}} >All Clients</h1>
    <div style={{overflow:"scroll"}}>

      <table  className="table table-info table-striped table-bordered" >
        <thead>
          <tr>
            <th>#</th>
            <th>Client Name</th>
            <th>Contact No</th>
            <th>Requirement</th>
            <th>Description</th>
            <th>Budget</th>
            <th>Visiting Date</th>
            <th>Action</th>
            {/* Add more column headers here */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Client_id}</td>
              <td>{item.Client_name}</td>
              <td>{item.Contact_no}</td>
              <td>{item.Requirement}</td>
              <td>{item.Description}</td>
              <td>{item.Budget}</td>
              <td>{item.Visiting_Date}</td>
              <td><FaEdit/></td>
              {/* Render more table cells here based on the data structure */}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <hr></hr>
    </div>
  );
};

export default ClientComponent;