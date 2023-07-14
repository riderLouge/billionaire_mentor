import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';
import './Home.css';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router'


function Home() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Mock stock names data
  const stockNames = [
    'Apple Inc.',
    'Microsoft Corporation',
    'Amazon.com Inc.',
    'Alphabet Inc.',
    'Facebook Inc.',
    // Add more stock names from the NSC here
  ];

  // const handleSearchChange = (e) => {
  //   setSearchValue(e.target.value);
  // };



  // const handleLogin = () => {
  //   navigate('/login');
  // };
  
  const labelClass = isHovered ? 'hover-color' : 'default-color';
  const scrollToContent = () => {
    // Find the target element to scroll to
    const targetElement = document.getElementById('content');
  
    // Scroll to the target element smoothly
    targetElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="Home">
      <header className="Home-header">
        <div className="App-info">
        <label style={{fontWeight:'bold',
                       fontSize:24,
                       color: "white",
                       marginRight: 45,
                       marginBottom:8,
                       marginLeft: 70}}>Billionaire Mentor</label>
          <label onClick={() => navigate("/AboutUs")}>About Us</label>
          <label>Help Center</label>
          <label onClick={() => navigate("/Pricing")}>Pricing</label>
          <label>Paper Trading</label>
        </div>
        <div className="LoginRegisterWrapper">
          <button className="LoginRegisterButton" style={{ backgroundColor: '#1a1d21', marginRight: 20 }}
                onClick={() => navigate("/Login")}  >
            Login
          </button>
          <button className="LoginRegisterButton" style={{ backgroundColor: '#0094ff', marginRight: 70 }}
                  onClick={() => navigate("Registration")}  >
            Register
          </button>
        </div>
      </header>
      <div >
        <div className="left-content">
          <h1 style={{ fontSize: 50, color: "white", marginTop: 100 }}>
            "Trade. Thrive. Triumph. Repeat."
          </h1>
          <h1 style={{ color: "#9abde0", fontWeight: 'initial', fontSize: 25, marginTop: -25 }}>
            Built to make Billionaires
          </h1>
          <button className="LoginRegisterButton" style={{ backgroundColor: '#0094ff' }} onClick={() => navigate("/Login")} >
            Get Started
          </button>
        </div>
        <div className="right-content" style={{marginTop:20}}>
          <img src={require('../Asset/Trading-homepage-img.png')} style={{width:"80%", height: 'auto' }} />
        </div>
      </div>
      <div>
        <div style={{ width: '100%', justifyContent: 'flex-start', textAlign: 'left' }}>
          <h1 style={{ fontSize: 50,
                      color: "white",
                      marginTop: 100,
                      marginLeft: 100, }}>
            Market at your finger tips
          </h1>
          <h1 style={{ color: '#9abde0',
                      fontSize: 19,
                      fontWeight: "lighter",
                      marginLeft: 100 ,
                      marginTop:-30,
                      }}>
            Start investing smart with Billionaire Mentor
          </h1>
          <div style={{ display: 'flex', flexDirection: 'row', }}>
            <div style={{alignItems: 'center',
                        borderColor: '#1a1d21',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        width: 350,
                        height: 400,
                        borderRadius: 20,
                        justifyContent: 'space-between',
                        marginTop: 15,
                        background: 'linear-gradient(137.45deg,#24262d 7.42%,#0e0f12 104.16%)',
                        marginLeft: 100}}>
              <div>
                <h2 style={{ color: '#9abde0', marginLeft: 20 }}>Bank Nifty</h2>
              </div>
            </div>
            <div style={{ alignItems: 'center',
                          borderColor: '#1a1d21',
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          width: 350,
                          height: 400,
                          borderRadius: 20,
                          justifyContent: 'space-between',
                          marginTop: 15,
                          background: 'linear-gradient(137.45deg,#24262d 7.42%,#0e0f12 104.16%)',
                          marginLeft:20}}>
              <div>
                <h2 style={{ color: '#9abde0', marginLeft: 20 }}>Nifty 50</h2>
              </div>
            </div>
            <div style={{ alignItems: 'center',
                          borderColor: '#1a1d21',
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          width: 350,
                          height: 400,
                          borderRadius: 20,
                          justifyContent: 'space-between',
                          marginTop: 15,
                          background: 'linear-gradient(137.45deg,#24262d 7.42%,#0e0f12 104.16%)',
                          marginLeft:20}}>
              <div>
                <h2 style={{ color: '#9abde0', marginLeft: 20 }}>Crude Oil</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={{ width: '50%', justifyContent: 'flex-start', textAlign: 'left' }}>
          <h1 style={{ fontSize: 50,
                      color: "white",
                      marginTop: 100,
                      marginLeft: 100, }}>
            Become a Pro Trader
          </h1>
          <div style={{ alignItems: 'center',
                          borderColor: '#1a1d21',
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          width: 450,
                          height: 150,
                          borderRadius: 20,
                          justifyContent: 'space-between',
                          marginTop: 25,
                          background: 'linear-gradient(137.45deg,#24262d 7.42%,#0e0f12 104.16%)',
                          marginLeft:100}}>
            <div>
              <h1 style={{color:'#9abde0',
                          marginTop: 10,
                          marginLeft: 15,
                          fontSize: 24,
                          fontWeight:'inherit'}}>Learn to trade here</h1>
              <h1 style={{color: "silver" , fontWeight:'unset' , fontSize:14, marginRight:15, marginLeft: 15}}>Click here now and embark on your transformational journey to becoming a mastermind trader. Unleash your full potential and embrace the world of endless possibilities in the exciting realm of trading.</h1>
            </div>
          </div> 
          <div style={{ alignItems: 'center',
                          borderColor: '#1a1d21',
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          width: 450,
                          height: 150,
                          borderRadius: 20,
                          justifyContent: 'space-between',
                          marginTop: 25,
                          background: 'linear-gradient(137.45deg,#24262d 7.42%,#0e0f12 104.16%)',
                          marginLeft:100}}>
            <div>
              <h1 style={{color:'#9abde0',
                          marginTop: 10,
                          marginLeft: 15,
                          fontSize: 24,
                          fontWeight:'inherit'}}>Start Paper Trading</h1>
                <h1 style={{color: "silver" , fontWeight:'unset' , fontSize:14, marginRight:15, marginLeft: 15}}>Click here to access our state-of-the-art paper trading platform, where you can practice and refine your trading techniques in a risk-free environment.The path to trading mastery begins today!</h1>
            </div>
          </div>
        </div>
      </div>
      <div id="content">
        <div style={{ width: '50%', justifyContent: 'flex-start', textAlign: 'left' }}>
          <h1 style={{ fontSize: 50,
                      color: "white",
                      marginTop: 100,
                      marginLeft: 100, }}>
            Trade on your device
          </h1>
          <h1 style={{ color: '#9abde0',
                      fontSize: 19,
                      fontWeight: "lighter",
                      marginLeft: 100 ,
                      marginTop:-30}}>
            Try the latest version of our trading app for a smooth, distraction-free trading experience
          </h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', }}>
            <div style={{borderColor: '#1a1d21',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        width: "50%",
                        height: 350,
                        borderRadius: 20,
                        marginTop: 15,
                        background: 'linear-gradient(137.45deg,#24262d 7.42%,#0e0f12 104.16%)',
                        marginLeft: 100,
                      }}>
              <div>
                <h2 style={{ color: 'white', textAlign:'left', marginLeft: 20, fontWeight:'normal' }}>Mobile</h2>
                <h1 style={{textAlign:'left', marginLeft:20, color:'#678cb0'}}>Coming Soon: The Ultimate Signal App for Android, iOS, iPad, and Tablets!</h1>
                <p style={{textAlign:'left', marginLeft:20, color:'silver'}}>Unlock your trading potential with our high-accuracy signal app. Say goodbye to guesswork and hello to data-driven decisions.</p>
              </div>
            </div>
            <div>
              <img src={require('../Asset/moomoo-removebg.png')} style={{width:"80%", height: 'auto' }} />
            </div>
          </div>
        </div>
      <div>
        <div style={{justifyContent: 'flex-start', textAlign: 'left' }}>
          <h1 style={{ fontSize: 50,
                      color: "white",
                      marginTop: 100,
                      marginLeft: 100, }}>
            Pricing
          </h1>
          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 50, marginTop: -20 }}>
            <div style={{
              alignItems: 'center',
              borderColor: '#1a1d21',
              borderWidth: '1px',
              borderStyle: 'solid',
              width: '80%',
              borderRadius: 20,
              justifyContent: 'space-between',
              marginTop: 25,
              background: 'linear-gradient(137.45deg,#24262d 7.42%,#0e0f12 104.16%)',
              marginLeft: 100
            }}>
              <div>
                <h1 style={{
                  color: '#9abde0',
                  marginTop: 10,
                  marginLeft: 15,
                  fontSize: 24,
                  fontWeight: 'inherit'
                }}>subscription</h1>
                <h1 style={{
                  color: "silver",
                  fontWeight: 'unset',
                  fontSize: 14,
                  marginRight: 15,
                  marginLeft: 15,
                  marginBottom: 20,
                }}>Unlock your full trading potential with our exclusive trading signal subscription service. For just ₹1999 per month and ₹9999 per year, gain access to expertly curated signals for Bank Nifty, Nifty 50, and Crude Oil. Take your trading game to the next level with our timely and accurate signals, carefully crafted by our team of seasoned analysts.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer" >
        <div className="Bottom-section">
          <div className="Bottom-topics">
            <div style={{marginLeft: 40}}>
              <h1 style={{fontSize:"24px", marginLeft:60}}>Billionaire Mentor</h1>
            </div>
            <div className="Topic" style={{ marginLeft: 100 }}>
              <h3>Billionaire Mentor</h3>
              <ul>
                <div>
                  <label onClick={() => navigate("/AboutUs")} 
                          style={{fontSize: 14}} className="hover-label">About Us</label>
                </div>
                <div>
                  <label style={{ fontSize: 14 }} className="hover-label" onClick={scrollToContent}>Apps</label>
                </div>
                <div>
                  <label onClick={() => navigate("/Pricing")} style={{fontSize: 14}} className="hover-label">Pricing</label>
                </div>                
              </ul>
            </div>
            <div className="Topic">
              <h3>Product</h3>
              <ul>
                <div>
                  <label style={{fontSize: 14}} className="hover-label">Paper Trading</label>
                </div>
                <div>
                  <label style={{fontSize: 14}} className="hover-label">Tutorial</label>
                </div>
              </ul>
            </div>
            <div className="Topic">
              <h3>Help</h3>
              <ul>
                <div>
                  <label style={{fontSize: 14}} className="hover-label">Help Center</label>
                </div>
                <div>
                  <label style={{fontSize: 14}} className="hover-label">Support</label>
                </div>
              </ul>
            </div>
          </div>
          {/* <h1 style={{textAlign:'left',
                      marginLeft:100,
                      marginRight:70,
                      marginTop:60,
                      fontSize:24,
                      color:'#678cb0'}}>DISCLAIMER</h1>
          <p style={{textAlign:'left',
                     marginLeft:100,
                     marginRight:70,
                     color:'silver'}}>WE ARE PROVIDING VARIOUS TECHNICAL TOOLS TO SUPPORT TRADERS AND INVESTORS, IT IS NOT A RECOMMENDATION TO BUY OR SELL EXCHANGE TRADED INSTRUMENTS. THE INFORMATION, SOFTWARE AND TECHNIQUES PRESENTED SHOULD ONLY BE USED BY TRADERS AND / OR INVESTORS WHO ARE AWARE OF THE MARKET RISK INHERENT IN TRADING AND SHOULD CONSULT THEIR INVESTMENT ADVISOR BEFORE MAKING ANY DECISION. BILLIONAIRE MENTOR AND/OR ITS ASSOCIATED PERSONS SHALL HAVE NO LIABILITY FOR ANY TRADING AND INVESTMENT DECISIONS BASED ON THE USE OF THEIR SOFTWARE, ANY TRADING STRATEGIES OR ANY INFORMATION PROVIDED IN CONNECTION WITH THE COMPANY AND ITS PRODUCTS & SERVICES.</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label
              className={labelClass}
              style={{ textAlign: 'left', marginLeft: 100, transition: 'color 0.3s' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Click here
            </label>
            <p style={{ textAlign: 'left', marginLeft: 10, color: 'silver' }}>to download our terms and conditions</p>
          </div> */}
        </div>
      </footer>
    </div>
  );
}

export default Home;
