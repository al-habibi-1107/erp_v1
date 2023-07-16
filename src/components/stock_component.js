import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";

const StockComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxEhVfe54cI5cM32IcvGQJFFzTathqF47vW2DQI4fuO3-4skA1WygdB97avAroeukMl/exec?id=1') // replace with your API endpoint
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData)
        setData(jsonData['stock_list']);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);


 


  return (
    <div style={{width:"80%",margin:"30px auto"}}>
      <h1 style={{textAlign:"left",margin:"30px 0",fontSize:"2em",fontWeight:"300"}} >All Stock Entries</h1>
      <div style={{overflow:"scroll"}}>

      <table className="table table-info table-striped table-bordered" >
        <thead>
          <tr>
            <th>#</th>
            <th>Client Name</th>
            <th>Society Name</th>
            <th>BHK</th>
            <th>Rent</th>
            <th>Sq ft</th>
            <th>Contact No</th>
            <th>Contact No 2</th>
            <th>Action</th>
            {/* Add more column headers here */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
                <td>{item.Stock_id}</td>
              <td>{item.Name}</td>
              <td>{item.Society_Name}</td>
              <td>{item.BHK}</td>
              <td>{item.Rent}</td>
              <td>{item.Square_ft}</td>
              <td>{item.Contact_no}</td>
              <td>{item.Contact_no_2}</td>
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

export default StockComponent;