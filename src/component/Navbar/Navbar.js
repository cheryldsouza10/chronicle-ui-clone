import { React, useEffect, useRef, useState } from "react";
import "./Navbar.css";


function Navbar(props) {
  const navbar = useRef(null);
  const NavContent = useRef(null);

  window.addEventListener("scroll", (event) => {
    if(props.home){
    let win = event.target.scrollingElement.scrollTop;
    if ((win > 0.75 * window.innerHeight)) {
      navbar.current && navbar.current.classList.add("active");
      NavContent.current && NavContent.current.classList.remove("NavContent");
    } else {
      navbar.current && navbar.current.classList.remove("active");
      NavContent.current && NavContent.current.classList.add("NavContent");
    }
  }
  });

  useEffect(() => {
    if(props.home==false){
      navbar.current && navbar.current.classList.add("active");
      NavContent.current && NavContent.current.classList.remove("NavContent");
    }
  }, [])
  


  return (
    <div>
      <header class="header">
        <nav class="navbar navbar-expand-lg fixed-top py-3" ref={navbar}>
          <div class="container NavContent" ref={NavContent}>
            <a href="/#" class="navbar-brand font-weight-bold">
              {/* <img src={Logo} style={{ width: "220px", height: "50px" }} alt="NO"/> */}
            </a>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              class="navbar-toggler navbar-toggler-right"
            >
              <i class="fa fa-bars"></i>
            </button>

            <div id="navbarSupportedContent" class="collapse navbar-collapse">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a
                    href="/#HOME"
                    class="nav-link text-uppercase font-weight-bold"
                  >
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <li class="nav-item">
                  <a
                    href="/speaker"
                    class="nav-link text-uppercase font-weight-bold"
                  >
                    Speakers
                  </a>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <li class="nav-item">
                  <a
                    href="/#ABOUT"
                    class="nav-link text-uppercase font-weight-bold"
                  >
                    About
                  </a>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <li class="nav-item">
                  <a
                    href="/team"
                    class="nav-link text-uppercase font-weight-bold"
                  >
                    Team
                  </a>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <li class="nav-item">
                  <a
                    href="/register"
                    class="nav-link text-uppercase font-weight-bold"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
