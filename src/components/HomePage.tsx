import Header from "./Header";
import Page from "./Page";
import AboutMe from "../content/AboutMe";
import "./HomePage.css";
import DeveloperFound from "../content/DeveloperFound";

function HomePage() {
  return (
    <>
      <Page>
        <div className="allContent">
          <Header />
          <div className="content">
            <h3 className="title">Middle Title!</h3>
            <div className="innerContent">
              <div className="sideSection">
                <AboutMe />
              </div>
              <div className="mainSection">
                <DeveloperFound />
              </div>
              <div className="sideSection">
                <AboutMe />
              </div>
            </div>
            <div className="innerContent">
              <div className="mainSection">
                <DeveloperFound />
              </div>
              <div className="sideSection">
                <AboutMe />
              </div>
              <div className="sideSection">
                <AboutMe />
              </div>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
}

export default HomePage;
