import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";

const ClosingComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxEhVfe54cI5cM32IcvGQJFFzTathqF47vW2DQI4fuO3-4skA1WygdB97avAroeukMl/exec?id=3') // replace with your API endpoint
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData)
        setData(jsonData['closing_list']);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);


 


  return (
    <div style={{width:"80%",margin:"30px auto"}}>
    <h1 style={{textAlign:"left",margin:"30px 0",fontSize:"2em",fontWeight:"300"}} >All Closing Entries</h1>
    <div style={{overflow:"scroll"}}>

    
      <table className="table table-info table-striped table-bordered" >
        <thead style={{position:"sticky",top:"0px",margin:"0 0 0 0"}}>
          <tr>
            <th>#</th>
            <th>Client Name</th>
            <th>Society Name</th>
            <th>Booking</th>
            <th>Date</th>
            <th>Contact No</th>
            <th>Remainder</th>
            <th>Seller Name</th>
            <th>Client Contact</th>
            <th>Owner Name</th>
            <th>Owner Contact</th>
            <th>Society Name</th>
            <th>Booking Date</th>
            <th>Action</th>
            {/* Add more column headers here */}
          </tr>
        </thead>
        <tbody >
          {data.map((item, index) => (
            <tr key={index} >
                <td>{item.Closing_id}</td>
              <td>{item.Client_name}</td>
              <td>{item.Society_Name}</td>
              <td>{item.Booking}</td>
              <td>{item.Date}</td>
              <td>{item.Contact_no}</td>
              <td>{item.Remainder_after_month}</td>
              <td>{item.Client_name}</td>
              <td>{item.Client_contact_no}</td>
              <td>{item.Owner_name}</td>
              <td>{item.Owner_contact_no}</td>
              <td>{item.Society_name}</td>
              <td>{item.Booking_date}</td>
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

export default ClosingComponent;