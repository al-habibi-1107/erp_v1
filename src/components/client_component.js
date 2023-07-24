import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import axios from "axios";
const ClientComponent = (prop) => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    Client_id: '',
    Client_name: '',
    Contact_no: '',
    Requirement: '',
    Description: '',
    Budget: '',
    Visiting_Date: ''
});

  const id= 2;
  const {auth} = prop;

 
 
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
    
      // Assuming your API returns a message field in the response
      if (response.data['code']===200) {
        
        alert(response.data.message);
      } else {

        alert(response.data.message);
      }

    }catch(error){ 
      console.error('Error:', error);
      alert('Error:'+ error);
   
   
  };
}



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
        console.log(response.data.client_list)
       setData(response.data.client_list);
   
      } else {
      
        alert("Could not fetch");
      }
  
    }
    getAPI()
  }, [auth]);

  

  return (
    <div style={{width:"80%",margin:"30px auto"}}>
    <h1 style={{textAlign:"left",margin:"30px 0",fontSize:"2em",fontWeight:"300"}} >All Clients</h1>
    <div style={{overflow:"scroll"}}>

      <table  className="table table-info table-striped table-bordered" >
        <thead>
          <tr>
            <th style={{minWidth:"150px"}}>#</th>
            <th style={{minWidth:"150px"}}>Client Name</th>
            <th style={{minWidth:"150px"}}>Contact No</th>
            <th style={{minWidth:"150px"}}>Requirement</th>
            <th style={{minWidth:"150px"}}>Description</th>
            <th style={{minWidth:"150px"}}>Budget</th>
            <th style={{minWidth:"150px"}}>Visiting Date</th>
            <th style={{minWidth:"150px"}}>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{minWidth:"150px"}}>{item.Client_id}</td>
              <td style={{minWidth:"150px"}}>{item.Client_name}</td>
              <td style={{minWidth:"150px"}}>{item.Contact_no}</td>
              <td style={{minWidth:"150px"}}>{item.Requirement}</td>
              <td style={{minWidth:"150px"}}>{item.Description}</td>
              <td style={{minWidth:"150px"}}>{item.Budget}</td>
              <td style={{minWidth:"150px"}}>{item.Visiting_Date}</td>
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
            <td style={{minWidth:"150px"}}><input id='client_id' name="Client_id"
          value={formData.Client_id}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input id='client_name' name="Client_name"
          value={formData.Client_name}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input id='contact_no' name="Contact_no"
          value={formData.Contact_no}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input id='requirement' name="Requirement"
          value={formData.Requirement}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input id='description' name="Description"
          value={formData.Description}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input id='budget' name="Budget"
          value={formData.Budget}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><input id='visiting_date' name="Visiting_Date"
          value={formData.Visiting_Date}
          onChange={handleChange}></input></td>
            <td style={{minWidth:"150px"}}><button >Add Entry</button></td>
            
          </tr>
            </tbody>
      </table>
      </form>
      </div>
      <hr></hr>
    </div>
  );

};
export default ClientComponent;