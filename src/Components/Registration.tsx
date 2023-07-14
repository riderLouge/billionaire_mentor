import React, { useState } from 'react';
import './Login.css';
import './Registration.css'
import { useNavigate } from 'react-router'
import { FcGoogle } from 'react-icons/fc';
import { IoLogoTwitter } from 'react-icons/io';


const RegistrationPage = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phonenumber: '',
  });

  const handleChange = (e : any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      phonenumber: '',
    });
  };


  return (
    <div className="Home">
      <header className="Home-header" style={{}}>
        <div className="App-info">
          <label  style={{fontWeight:'bold',
                                              fontSize:24,
                                              color: "white",
                                              marginRight: 45,
                                              marginBottom:14,
                                              marginLeft: 70}}
                                              onClick={() => navigate("/")}>Billionaire Mentor</label>        
        </div>
        <div>
          <h1 style={{fontSize:17,
                      fontWeight:'normal',
                      paddingTop: 10,
                      textAlign: 'right',
                      marginRight:170}}>Welcome to Billionaire Mentor. Register Today to become a billionaire tomorrow!</h1>
        </div>
      </header>
      <div className="container">
        <div >
          <img src={require('../Asset/moomoo-removebg.png')} style={{width:"80%", height: 'auto' }} />
        </div>
        <div className="login-container" style={{marginRight: 100}}>
          <h2 className="login-heading">Registration Page</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              className='login-input'
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              className='login-input'
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              className='login-input'
              type="text"
              name="phonenumber"
              placeholder="PhoneNumber"
              value={formData.phonenumber}
              onChange={handleChange}
              required
            />
            <button className="login-button" type="submit">Next</button>
            <h1 style={{color:'white',
                        fontSize:15,
                        textAlign:'center',
                        fontWeight:'normal',
                        marginTop:20}}>Or</h1>
            <div className="social-icons-container">
              <div className="social-icon">
                <button className="sm-button"><FcGoogle size={24} style={{marginTop: 3}} /></button>
              </div>
              <div className="social-icon">
                <button className="sm-button"><IoLogoTwitter size={24} style={{marginTop: 3, color:'#1DA1F2'}} /></button>
              </div>
            </div>
            <div className="text-container">
              <h1 style={{color:'white',
                          fontSize:15,
                          fontWeight:'normal',
                          textAlign:'left',
                          marginTop: 11,
                          marginBottom: -10,
                          }} >Already have an account  ? </h1>
              <h1 style={{color:'#1DA1F2',
                          fontSize:15,
                          fontWeight:'normal',
                          textAlign:'left',
                          marginTop: 10,
                          marginBottom: -10,
                          marginLeft:7
                          }} onClick={() => navigate("/Login")} >Login</h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;

