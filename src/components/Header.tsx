import "./Header.css";
import certifiedIcon from "../assets/dev.jpg";

function Header() {
  return (
    <>
      <div className="headerContainer">
        <div className="mainContent">
          <h1 className="leftSideContent">First Edition</h1>
          <h1 className="title">Tyron's Porfolio</h1>
          <img src={certifiedIcon} alt="glasses" className="rightSideContent" />
        </div>
        <div className="additionalContent">
          <h3> Vol.72 Issue. 86</h3>
          <h3> Mobile: +64 21 0855 7064</h3>
          <h3> tyron.j.landman@gmail.com</h3>
        </div>
      </div>
    </>
  );
}

export default Header;
