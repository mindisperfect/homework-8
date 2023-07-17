import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import "../styles/Card.scss"

const Content = () => {
  return (
    <Fragment>
        <div className="links">
          <div className="link">
            <NavLink to="/business">Business</NavLink>
          </div>
          <div className="link">
            <NavLink to="/entertainment">Entertainment</NavLink>
          </div>
          <div className="link">
            <NavLink to="/general">General</NavLink>
          </div>
          <div className="link">
            <NavLink to="/health">Health</NavLink>
          </div>
          <div className="link">
            <NavLink to="/science">Science</NavLink>
          </div>
          <div className="link">
            <NavLink to="/sport">Sports</NavLink>
          </div>
          <div className="link">
            <NavLink to="/technology">Technology</NavLink>
          </div>
        </div>
    </Fragment>
  );
};

export default Content;
