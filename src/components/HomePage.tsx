import Header from "./Header";
import Page from "./Page";
import moneyShot from "../assets/centalImage.jpg";
import AboutMe from "../content/AboutMe";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <Page>
        <Header />
        <div className="content">
          <div className="topContent">
            <h2 className="title">Middle Title!</h2>
            <div className="innerContent">
              <AboutMe />
              <div className="somethingSection">
                <img src={moneyShot} className="mainImg" />
                <h6> something to do with the picture </h6>
                <h5>Current Employment: Fullstack Developer</h5>
                <div className="two-column-text">
                  Currently working for Accenture on a product called BlueWorx.
                  BlueWorx is a mobile application that
                </div>
              </div>
              <div className="stacksSection">TechStacks</div>
            </div>
          </div>
          <div className="bottomContent">
            <div className="innerContent">
              <div className="linksSection">Something</div>
              <div className="experienceSection">Experience</div>
              <div className="factsSection">facts</div>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
}

export default HomePage;

/* 
display:flex;
flex-direction: column ( default)
  sets the <-----> to the main axis
  sets the ^
           |  as the cross axis
justify-content: decides distance between content on main axis

align items adjusts the cross axis alignment

align-content, only works when flex-wrap: wrap is set
align everything on the cross axis


*/
