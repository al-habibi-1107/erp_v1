import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import axios from "axios";

const ClosingComponent = (prop) => {
  const [data, setData] = useState([]);
 
  const [formData, setFormData] = useState({
    Closing_id: '',
    Client_name: '',
    Society_Name: '',
    Booking: '',
    Date: '',
    Contact_no: '',
    Remainder_after_month: '',
    Client_name_2: '',
    Client_contact_no: '',
    Owner_name: '',
    Owner_contact_no: '',
    Society_name: '',
    Booking_date:'',
});
const id = 3;
const {auth} = prop;

  useEffect(() => {
    async function getAPI(){
      const url = `https://script.google.com/macros/s/AKfycbwhIXXA7kfWqo8Q8xO9T0Ur8DUfbt9FAnRdNpt1wINW48fVsnvKrgbn4FOI_lbD4083/exec?id=${id}&auth=`; 
    
      const config = {
       mode:'no-cors',
       maxRedirects:5,
       redirect:'follow',
      };
      const response = await axios.get(url,config);
      if (response.data['code']===200) {
        console.log(response.data.closing_list)
       setData(response.data.closing_list);
    
      } else {
      
        alert("Could not fetch");
      }
    
    }
    getAPI();
  }, [auth]);


  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitButton = async(event) => {
    event.preventDefault();
    console.log(formData);
    try{

      

      const url = `https://script.google.com/macros/s/AKfycbzBx1WsP10m2DPrjAXEoJVOy7wJtz_Zvq7WY9jHAgtCUjwt6opxHujt45xlxYzZiri4/exec?id=${id}&auth=${auth}`; // Replace with your API endpoint URL
      const response = await axios.post(url,JSON.stringify(formData))
      
      console.log(response.data);
    
     
      if (response.data['code']===200) {
      
        alert(response.data.message);
      } else {
      
        alert(response.data.message);
      }

    }catch(error){ 
      console.error('Error:', error);
      alert('Error:'+ error)}
   
  };


  return (
    <div style={{width:"80%",margin:"30px auto"}}>
    <h1 style={{textAlign:"left",margin:"30px 0",fontSize:"2em",fontWeight:"300"}} >All Closing Entries</h1>
    <div style={{overflow:"scroll"}}>

    
      <table className="table table-info table-striped table-bordered" >
        <thead style={{position:"sticky",top:"0px",margin:"0 0 0 0"}}>
          <tr>
            <th style={{minWidth:"150px"}}>#</th>
            <th style={{minWidth:"150px"}}>Client Name</th>
            <th style={{minWidth:"150px"}}>Society Name</th>
            <th style={{minWidth:"150px"}}>Booking</th>
            <th style={{minWidth:"150px"}}>Date</th>
            <th style={{minWidth:"150px"}}>Contact No</th>
            <th style={{minWidth:"150px"}}>Remainder</th>
            <th style={{minWidth:"150px"}}>Seller Name</th>
            <th style={{minWidth:"150px"}}>Client Contact</th>
            <th style={{minWidth:"150px"}}>Owner Name</th>
            <th style={{minWidth:"150px"}}>Owner Contact</th>
            <th style={{minWidth:"150px"}}>Society Name</th>
            <th style={{minWidth:"150px"}}>Booking Date</th>
            <th style={{minWidth:"150px"}}>Action</th>
            {/* Add more column headers here */}
          </tr>
        </thead>
        <tbody >
          {data.map((item, index) => (
            <tr key={index} >
                <td style={{minWidth:"150px"}}>{item.Closing_id}</td>
              <td style={{minWidth:"150px"}}>{item.Client_name}</td>
              <td style={{minWidth:"150px"}}>{item.Society_Name}</td>
              <td style={{minWidth:"150px"}}>{item.Booking}</td>
              <td style={{minWidth:"150px"}}>{item.Date}</td>
              <td style={{minWidth:"150px"}}>{item.Contact_no}</td>
              <td style={{minWidth:"150px"}}>{item.Remainder_after_month}</td>
              <td style={{minWidth:"150px"}}>{item.Client_name_2}</td>
              <td style={{minWidth:"150px"}}>{item.Client_contact_no}</td>
              <td style={{minWidth:"150px"}}>{item.Owner_name}</td>
              <td style={{minWidth:"150px"}}>{item.Owner_contact_no}</td>
              <td style={{minWidth:"150px"}}>{item.Society_name}</td>
              <td style={{minWidth:"150px"}}>{item.Booking_date}</td>
              <td style={{minWidth:"150px"}}><FaEdit/></td>
              {/* Render more table cells here based on the data structure */}
            </tr>
          ))}
        </tbody>
      </table>
      <h3 style={{textAlign:"left",margin:"10px 0",fontSize:"1.2em",fontWeight:"300"}}>Add New Entry</h3>
      <form onSubmit={handleSubmitButton}>
      <table id='input_table' className="table table-info table-striped table-bordered">
            <tbody>
            <tr id='input-row'>
            <td style={{minWidth:"150px"}}><input name="Closing_id"
          value={formData.Closing_id}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input name="Client_name"
          value={formData.Client_name}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input name="Society_Name"
          value={formData.Society_Name}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input name="Booking"
          value={formData.Booking}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input name="Date"
          value={formData.Date}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input name="Contact_no"
          value={formData.Contact_no}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input name="Remainder_after_month"
          value={formData.Remainder_after_month}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input name="Client_name_2"
          value={formData.Client_name_2}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input name="Client_contact_no"
          value={formData.Client_contact_no}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input name="Owner_name"
          value={formData.Owner_name}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input name="Owner_contact_no"
          value={formData.Owner_contact_no}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input name="Society_name"
          value={formData.Society_name}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input name="Booking_date"
          value={formData.Booking_date}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><button>Add Entry</button></td>
            
          </tr>
            </tbody>
      </table>
      </form>
      </div>
      <hr></hr>
    </div>
  );
};

export default ClosingComponent;