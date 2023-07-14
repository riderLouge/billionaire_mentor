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
      <h1 style={{color:'#678cb0', marginLeft:70, marginTop: 70}}>About Us</h1>
      <h2>Introducing the Game-Changers of the Stock Market!</h2>
      <p>
        Are you tired of the same old stock market strategies that promise the moon but leave you empty-handed? Look no further! We are here to revolutionize your trading journey and drive you towards unmatched success.
      </p>
      <p>
        At Billionaire Mentor, we redefine what it means to be an enthusiastic and realistic stock market trader. We are not just another research analyst or financial advisor - we are your ultimate partner in financial growth. Our motto, "Make people financially sound is our business," encapsulates our unwavering commitment to your prosperity.
      </p>
      <p>
        Imagine stepping onto the stock market race track with a powerful race car, perfectly crafted to navigate every twist and turn with precision. While others focus solely on teaching you how to build a race car, we go the extra mile. We provide you with the actual car you need to participate in the race and make consistent winnings in the long run.
      </p>
      <p>
        But what sets us apart from the rest? It's our unwavering dedication to your success. We combine cutting-edge research, in-depth market analysis, and years of expertise to deliver a truly unmatched trading experience. Our team of seasoned professionals will be by your side, empowering you with the knowledge and tools you need to outperform the competition.
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
