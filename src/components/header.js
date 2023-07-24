import React from 'react';



const Header = () => {
 
    const styles = {
        main: {
          backgroundColor: "#f1f1f1",
          width: "100%",
        },
        inputText: {
          padding: "10px",
          color: "red",
        },

        bg:{
            with:"100%",
            height:"10vh",
            backgroundColor:"#331D2C",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            color:"#ffff",
            marginBottom:"30px"
          

        }
,
        title:{
          fontWeight:"400",
          fontSize:"2em",
        }
      };
  

  return (
    <div className="bg" style={styles.bg}> 
    <h1 style={styles.title}>Erp System</h1>
    </div>
  );
};

export default Header;