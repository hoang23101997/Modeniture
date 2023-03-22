import "./App.css";
import "./home.css";
import "./form_chat.css";
import { Route, Routes, Link } from "react-router-dom";
// import HomePage from "./Pages/Homepage/Homepage";
import AllProducts from "./Pages/AllProducts/AllProducts";
import AboutUs from "./Pages/AboutUs/AboutUs";
import OurTeam from "./Pages/OurTeam/OurTeam";
import Contact from "./Pages/Contact/Contact";
import { FaShoppingBag, FaTrash } from "react-icons/fa";
import { Dropdown, Badge } from "react-bootstrap";

import { useState, useEffect, useContext } from "react";
import { Context } from "./Context/Context";
import YourCart from "./Pages/YourCart/YourCart";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import CheckOut from "./Pages/CheckOut/CheckOut";

import HomePage from "./Pages/HomePage";
import TolinkB from "./Pages/TolinkB";
import Footer from "./Pages/Footer";


import { Fragment } from 'react';
import ScrollButton from './ScrollButton/ScrollButton';
import { Content, Heading } from './ScrollButton/style';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faShieldHalved,
  faTruckFast,
  faLifeRing,
} from "@fortawesome/free-solid-svg-icons";
import Aboutusmenu from "./Pages/Aboutusmenu";
import Contactus from "./Pages/Contactus";
import Register from "./Pages/Register";
import Loginpage from "./Pages/Loginpage";
import { IsloginProvider } from "./Pages/IsloginContext"; //haixoa
import Loginstatus from "./Pages/Loginstatus";
import { Alert } from "bootstrap";
import imglogin from "./Pages/Homepage/modeNiture.png";
import { products } from "./Pages/AllProducts/data";
import FramePosterCategory from "./Pages/AllProducts/FramePosterCategory";
import DecorationCategory from "./Pages/AllProducts/DecorationCategory";
import FurnitureCategory from "./Pages/AllProducts/FurnitureCategory";
library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faShieldHalved,
  faTruckFast,
  faLifeRing
);

function App() {
  const { cartItem, removeFromCart, totalItem, setDisplayPage } =
    useContext(Context);
  const cartEmpty = totalItem === 0;
  // className="App bg-body-tertiary"
  return (
    <Fragment>
    <div>
      <nav className="navbar navbar-expand-lg bg-body d-flex">
        <div className="container">
          {/* <Link to="/" className="navbar-brand fw-bold fs-2 text ms-5">
            Superb.
          </Link> */}

          <div>
            <Link to="/" className="navbar-brand fw-bold fs-2 text">
              <img
                className=""
                style={{ width: "100%", height: "100%" }}
                src={imglogin}
                alt=""
              />
            </Link>
          </div>

          {/* nav-bar me-4 pe-5 */}
          <div className="">
            <ul className="navbar-nav">
              <li className="nav-item me-3">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>

              <li className="nav-item me-3">
                <Link
                  onClick={() => setDisplayPage([...products])}
                  to="/all-products"
                  className="nav-link "
                >
                  All Products
                </Link>
              </li>

              <li className="nav-item me-3">
                <Link to="/about-us" className="nav-link">
                  About Us
                </Link>
              </li>

              <li className="nav-item me-3">
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link to="/cart" className="nav-link">
                  Your Cart
                </Link>
              </li>
              <li className="nav-item me-3">
                <Dropdown>
                  <Dropdown.Toggle variant="Dark" className="position-relative">
                    <FaShoppingBag
                      className="me-1"
                      fontSize="25px"
                    ></FaShoppingBag>
                    <Badge className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-dark mt-1">
                      {totalItem}
                    </Badge>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="mt-1" style={{ minWidth: 400 }}>
                    <span>
                      {cartEmpty ? (
                        <div className="d-flex justify-content-center">
                          Your Cart Is Currently Empty.
                        </div>
                      ) : (
                        <div className="d-flex flex-column">
                          {cartItem.map((item) => (
                            <div
                              key={item.product.id}
                              className="p-2 d-flex flex-row align-items-center justify-content-start"
                            >
                              {
                                <img
                                  className="ms-3 rounded-circle me-3"
                                  style={{ width: 60 }}
                                  src={item.product.img}
                                ></img>
                              }
                              <div className="w-75">
                                <div className="fw-bold">
                                  {item.product.name} &nbsp;
                                </div>
                                <div>
                                  {item.amount} x&nbsp;${item.product.price}
                                </div>
                              </div>
                              <FaTrash
                                type="button"
                                onClick={() => removeFromCart(item.product.id)}
                                className="me-4"
                              />
                            </div>
                          ))}
                          <Link to="/cart" className="nav-link">
                            <div className="d-flex justify-content-center">
                              <button
                                style={{ minWidth: 350 }}
                                className="btn btn-dark p-2 mb-2 mt-3"
                              >
                                Go To Cart{" "}
                              </button>
                            </div>
                          </Link>
                        </div>
                      )}
                    </span>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li className="nav-item">
                <Loginstatus />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route
          path="/all-products/frame&poster"
          element={<FramePosterCategory />}
        />
        <Route
          path="/all-products/decoration"
          element={<DecorationCategory />}
        />
        <Route path="/all-products/furniture" element={<FurnitureCategory />} />
        <Route path="/about-us" element={<Aboutusmenu />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<YourCart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>

      <Footer />
    </div>
    <ScrollButton />
    </Fragment>
  );
}
export default App;
