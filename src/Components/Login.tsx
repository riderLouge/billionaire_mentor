import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router'
import { FcGoogle } from 'react-icons/fc';
import { IoLogoTwitter } from 'react-icons/io';


const Login = () => {

  const navigate = useNavigate();

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
          <h2 className="login-heading">Login</h2>
          <form className="login-form">
            <input type="text" placeholder="Username" className="login-input" />
            <input type="password" placeholder="Password" className="login-input" />
            <h1 style={{color: "red",
                        fontSize:12,
                        fontWeight:'normal',
                        textAlign:'right',
                        marginTop:-15,
                        marginBottom:10}}>Reset Password</h1>
            <button className="login-button" onClick={() => navigate("/last-week-data")}>Sign In</button>
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
                          marginTop: 57,
                          marginBottom: -10,
                          }} >Don't have an account  ? </h1>
              <h1 style={{color:'#1DA1F2',
                          fontSize:15,
                          fontWeight:'normal',
                          textAlign:'left',
                          marginTop: 57,
                          marginBottom: -10,
                          marginLeft:7
                          }} onClick={() => navigate("/Registration")} >Register</h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
