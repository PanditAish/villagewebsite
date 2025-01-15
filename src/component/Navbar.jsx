import React from "react";
import { Link } from "react-router-dom";
import logoimg from "../assets/images/kmlogo.png";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-md-6 midmob mobone">
                <ul>
                  {/* <li className="list fontlist">
                     <Link className="listlink">महाराष्ट्र शासन</Link>
                   </li> */}
                  <li className="list fontlist">
                    <Link className="listlink">Government of Maharashtra</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 midmob mobtwo">
                <ul>
                  <li className="fontlist">
                    <Link className="text-white linktag">
                      <FaInstagramSquare />
                    </Link>
                  </li>
                  <li className="fontlist">
                    <Link className="text-white linktag">
                      <FaFacebookSquare />
                    </Link>
                  </li>
                  <li className="fontlist">
                    <Link className="text-white linktag">
                      <FaTwitterSquare />
                    </Link>
                  </li>
                  <li className="fontlistS">
                    <Link className="text-white linktag">
                      <FaYoutube />
                    </Link>
                  </li>
                  <li className="fontlistS">
                    <Link className="text-white linktag">
                      <FaLanguage />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Menu item */}
        <div className="menuwrapper">
          <nav className="navbar navbar-expand-lg menucolor">
            {/* Menu items  */}
            <div className="container">
              <div className="logo d-flex gap-2 py-3">
                <Link className="navbar-brand" to="/">
                  <img
                    src={logoimg}
                    alt="logoimg"
                    className="img-fluid logoimge"
                  />
                </Link>
                <div className="logotext d-flex flex-column justify-content-center align-items-start">
                  <strong className="headtwo">कवठे महांकाळ</strong>
                  <h1 className="heading">Kavthe Mahankal</h1>
                </div>
              </div>
              {/* <span className="navbar-brand d-lg-none">Kavathe Mahankal</span> */}
              <button
                className="navbar-toggler ms-auto custom-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title mobmenulogo" id="offcanvasNavbarLabel">
                    Kavathe Mahankal
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-4 gap-md-4">
                    <li className="nav-item fontlist">
                      <a
                        className="nav-link active colormenu"
                        aria-current="page"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item fontlist">
                      <a className="nav-link colormenu" href="/about">
                        About us
                      </a>
                    </li>
                    <li className="nav-item fontlist">
                      <a className="nav-link colormenu" href="/contact">
                        Contact us
                      </a>
                    </li>
                    <li className="nav-item dropdown fontlist">
                      <a
                        className="nav-link dropdown-toggle colormenu"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
