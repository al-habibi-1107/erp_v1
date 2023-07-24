import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import axios from "axios";

const StockComponent = (prop) => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    Stock_id: '',
    Name: '',
    Society_Name: '',
    BHK: '',
    Rent: '',
    Square_ft: '',
    Contact_no: '',
    Contact_no_2: '',
});

  const id=1;
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
        console.log(response.data.stock_list)
       setData(response.data.stock_list);
   
      } else {
      
        alert("Could not fetch");
      }
  
    }
  getAPI()
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
      <h1 style={{textAlign:"left",margin:"30px 0",fontSize:"2em",fontWeight:"300"}} >All Stock Entries</h1>
      <div style={{overflow:"scroll"}}>

      <table className="table table-info table-striped table-bordered" >
        <thead>
          <tr>
            <th style={{minWidth:"150px"}}>#</th>
            <th style={{minWidth:"150px"}}>Client Name</th>
            <th style={{minWidth:"150px"}}>Society Name</th>
            <th style={{minWidth:"150px"}}>BHK</th>
            <th style={{minWidth:"150px"}}>Rent</th>
            <th style={{minWidth:"150px"}}>Sq ft</th>
            <th style={{minWidth:"150px"}}>Contact No</th>
            <th style={{minWidth:"150px"}}>Contact No 2</th>
            <th style={{minWidth:"150px"}}>Action</th>
       
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{minWidth:"150px"}}>{item.Stock_id}</td>
              <td style={{minWidth:"150px"}}>{item.Name}</td>
              <td style={{minWidth:"150px"}}>{item.Society_Name}</td>
              <td style={{minWidth:"150px"}}>{item.BHK}</td>
              <td style={{minWidth:"150px"}}>{item.Rent}</td>
              <td style={{minWidth:"150px"}}>{item.Square_ft}</td>
              <td style={{minWidth:"150px"}}>{item.Contact_no}</td>
              <td style={{minWidth:"150px"}}>{item.Contact_no_2}</td>
              <td style={{minWidth:"150px"}}><FaEdit/></td>
             
            </tr>
          ))}
        </tbody>
      </table>
      <h3 style={{textAlign:"left",margin:"10px 0",fontSize:"1.2em",fontWeight:"300"}}>Add New Entry</h3>
      <form onSubmit={handleSubmitButton}>
      <table id='input_table' className="table table-info table-striped table-bordered">
            <tbody>
            <tr id='input-row'>
            <td style={{minWidth:"150px"}}><input name="Stock_id"
          value={formData.Stock_id}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input name="Name"
          value={formData.Name}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input name="Society_Name"
          value={formData.Society_Name}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input name="BHK"
          value={formData.BHK}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input name="Rent"
          value={formData.Rent}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input name="Square_ft"
          value={formData.Square_ft}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input name="Contact_no"
          value={formData.Contact_no}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input name="Contact_no_2"
          value={formData.Contact_no_2}
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

export default StockComponent;