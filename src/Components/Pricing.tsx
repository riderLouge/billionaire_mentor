import React from 'react';
import './AboutUs.css';
import { useNavigate } from 'react-router'

const AboutUs = () => {
  
  const navigate = useNavigate();

  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <div >
          <label style={{fontWeight:'bold',
                         fontSize:24,
                         color:'white',
                         marginLeft:70}} onClick={() => navigate("/")}>Billionaire Mentor</label>
          <label style={{marginLeft:20, color:"#678cb0"}}>Built to make Billionairs</label>
        </div>
        <div className="LoginRegisterWrapper">
          <button className="LoginRegisterButton" style={{ backgroundColor: '#1a1d21', marginRight: 20 }}
                onClick={() => navigate("/Login")}  >
            Login
          </button>
          <button className="LoginRegisterButton" style={{ backgroundColor: '#0094ff', marginRight: 70 }}>
            Register
          </button>
        </div>
      </header>
      <h1 style={{color:'#678cb0', marginLeft:70, marginTop: 70}}>Pricing</h1>
      <h2>Introducing our Premium Trading Signal Subscription!</h2>
      <p>
        Unlock your full trading potential with our exclusive trading signal subscription service. For just ₹1999 per month and ₹9999 per year, gain access to expertly curated signals for Bank Nifty, Nifty 50, and Crude Oil. Take your trading game to the next level with our timely and accurate signals, carefully crafted by our team of seasoned analysts.      </p>
      <p>
        At Billionaire Mentor, we redefine what it means to be an enthusiastic and realistic stock market trader. We are not just another research analyst or financial advisor - we are your ultimate partner in financial growth. Our motto, "Make people financially sound is our business," encapsulates our unwavering commitment to your prosperity.
      </p>
      <p style={{color:'#678cb0'}}>
        Why choose our subscription service?
      </p>
      <p style={{marginLeft:150}}>
        1. Proven Track Record: Our signals have a proven track record of success, helping traders make informed decisions and achieve profitable outcomes.
      </p>
      <p style={{marginLeft:150}}>
        2. Comprehensive Coverage: Receive signals for Bank Nifty, Nifty 50, and Crude Oil, covering a wide range of trading opportunities and maximizing your profit potential.
      </p>
      <p style={{marginLeft:150}}>
        3. Timely Delivery: Our signals are delivered promptly, ensuring you never miss out on profitable trading opportunities. Stay one step ahead of the market with our real-time notifications.
      </p>
      <p style={{marginLeft:150}}>
        4. Expert Analysis: Benefit from the expertise of our skilled analysts who conduct in-depth market analysis and apply advanced strategies to identify high-potential trades.
      </p>
      <p style={{marginLeft:150}}>
        5. Risk Management: Our signals are accompanied by risk management guidelines, helping you manage your trades effectively and minimize potential losses.
      </p>
      <p style={{marginLeft:150}}>
        6. User-Friendly Interface: Our user-friendly platform makes it easy to access and follow our signals, even for traders with varying levels of experience.
      </p>
      <p style={{marginLeft:150}}>
        7. Customer Support: We prioritize customer satisfaction and offer dedicated customer support to assist you with any queries or concerns along your trading journey.
      </p>
      <p>
        We don't just stop at theory; we believe in practical results. Through our comprehensive mentorship program, we guide you step-by-step, helping you master the art of trading. We provide you with real-time insights, proven strategies, and personalized advice tailored to your unique financial goals. With our support, you'll become the ultimate stock market maverick, consistently making winning moves in the market.
      </p>
      <p>
        Join the elite league of successful traders who have experienced the Billionaire Mentor advantage. Don't settle for mediocre gains or empty promises. It's time to take control of your financial future and accelerate towards extraordinary wealth.
      </p>
      <p>
        Unlock your true potential in the stock market. Start trading with us today and let us equip you with the winning race car you deserve!
      </p>
    </div>
  );
};

export default AboutUs;
