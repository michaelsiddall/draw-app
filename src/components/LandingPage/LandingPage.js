import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


//styling
import './LandingPage.css';
import sponsor1 from "../../Images/612Brew.jpeg"
import sponsor2 from "../../Images/FairState.png"
import sponsor3 from "../../Images/Inbound.png"
import sponsor4 from "../../Images/LynLake.jpeg"
import sponsor5 from "../../Images/Sisyphus.jpg"
import sponsor6 from "../../Images/Urban.jpg"
import charity1 from "../../Images/Nami.png"
import charity2 from "../../Images/Childrens.png"
import charity3 from "../../Images/CF.png"

//components
import HomeNav from "./HomeNav/HomeNav"
import Events from "./Events/Events";


class LandingPage extends Component {

  render() {
    return (
      <div id="landing-page-container">
            <div id="header-draw">
                        <h1 id="draw-h1">Draw</h1>
            </div>
            <div id="nav-home">
                <HomeNav/> 
            </div>
                <div id="about-div">
                        <div className="p-div">
                          <h2 id="mission-h2">What is Draw's mission?</h2>
                              <p className="p-tag">To create, build, and connect communities through community color therapy.</p>
                        </div>
                  
                  <div id="charities-div">
                    <h2>Charities We Help Support</h2>
                        <span><img id="sponsor" src={charity1} alt="Nami"/></span>
                        <span><img id="sponsor" src={charity2} alt="Childrens"/></span>
                        <span><img id="sponsor" src={charity3} alt="CF"/></span>
                  </div>
                  
                  <div className="p-div">
                    <h2 id="what-h2">What is Draw?</h2>
                        <p className="p-tag">
                            Draw’s inspiration is derived from two different life experiences. First, while working with social entrepreneurs in India, I met several people who left their 
                            jobs at Fortune 100 companies to start ventures that directly impacted a developing society. Second, is my father Charles Moertel, who worked in disaster 
                            relief and was an active community member. He had always wanted to make a children’s book, however passed away from cancer before getting the opportunity to do so. 
                            Draw brings his dream to life with every illustration. 
                        </p>
                        <p className="p-tag">
                            Through these illustrations, color and storytelling are brought into the world. Communities are built and partnerships are created, all through the simple act of coloring.
                            Draw has no boundaries for age, culture, or ability. Draw is an ever-changing collection of color, creativity and wonderment for anyone between the ages of 2 to 200.  
                            You are given a prompt of what to draw to get you started, and your imagination fills in the blank. No right or wrong, happy or sad, order or rules; just you.
                            My goal is to bring together people’s pictures from around the world who participated in Draw, and share their creations. Every picture shares a story, an idea, an impression, 
                            or an experience, and more importantly gives people the opportunity to enjoy the magnificence of color on a fresh sheet of paper.
                        </p>
                  </div>
                  
                        <div className="p-div">
                          <h2 id="participate-h2">How do I participate?</h2>
                        <p className="p-tag">
                            Draw is both a book and a single color sheet, meant to be used either by yourself, or with others. You can find Draw at local breweries and coffee shops in the 
                            Twin Cities at various coloring days to support local non-profits. Check out our Instagram for event dates!
                        </p>
                        </div>
                 
                  <div id="sponsors-div"> 
                        <h2>Local Sponsors</h2>
                        <span><img id="sponsor" src={sponsor1} alt="612Brew"/></span>
                        <span><img id="sponsor" src={sponsor2} alt="FairState"/></span>
                        <span><img id="sponsor" src={sponsor3} alt="Inbound"/></span>
                        <span><img id="sponsor" src={sponsor4} alt="LynLake"/></span>
                        <span><img id="sponsor" src={sponsor5} alt="Sisyohus"/></span>
                        <span><img id="sponsor" src={sponsor6} alt="Urban"/></span>
                  </div>
                      <p id="attribute">Royalty Free Photo by Lum3n from Pexels</p>  
                    </div>
                    
        </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
