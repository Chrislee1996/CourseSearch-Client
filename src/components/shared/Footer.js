import React from "react";
import Nav from 'react-bootstrap/Nav'
import {Chat, Twitter, Facebook, Instagram, Linkedin, Github, Search} from "react-bootstrap-icons"

function Footer() {
  return (
    <div className="main-footer bg-dark text-info">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>CourseSearch <Search></Search></h5>
            <small>A App where users can find and rate courses all over the world!</small>
          </div>
          <div className="col">
            <h4>Meet The Developer!</h4>
            <ui className="list-unstyled">
              <h5><li>Christopher Lee</li> </h5>
              <li><Nav.Link target="_blank" href="https://www.linkedin.com/in/christopherlee30/">LinkedIn <Linkedin></Linkedin></Nav.Link></li>
              <li><Nav.Link target="_blank" href="https://github.com/Chrislee1996">GitHub <Github></Github></Nav.Link></li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h5>Contact us below! <Chat></Chat></h5>
            <ui className="list-unstyled">
              <li> <Nav.Link target="_blank" href="https://www.Facebook.com"> Facebook <Facebook></Facebook></Nav.Link> </li>
              <li> <Nav.Link target="_blank" href="https://www.Twitter.com"> Twitter <Twitter></Twitter> </Nav.Link></li>
              <li> <Nav.Link target="_blank" href="https://www.Instagram.com"> Instagram <Instagram></Instagram> </Nav.Link></li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} CourseSearch | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;