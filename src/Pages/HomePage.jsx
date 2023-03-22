import { useEffect } from "react";
import PopularProducts from "./PopularProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import TolinkB from "./TolinkB";
import Aboutus from "./Aboutus";

import { AuthProvider } from "./AuthContext";

import { TranslationProvider } from "./IsloginContext";
import { useContext } from "react";
import { Context } from "../Context/Context";
import Footer_inf from "./Footer_inf";
// import Footer from "./Footer";
import { products_home } from "./data";
import { Route, Routes, Link } from "react-router-dom";
import img_home1 from "../home_pop/bg-img.png";
import img_home2 from "../home_pop/wc-12-1.png";
import img_home3 from "../home_pop/decoration.png";
import img_home4 from "../home_pop/posters.png";
import img_home5 from "../home_pop/wc-ban.png";
import imgg1 from "../home_pop/peter.png";
import imgg2 from "../home_pop/portrait.png";
import imgg3 from "../home_pop/portrait_p.png";

export default function HomePage() {

  const { onFilterCategories } = useContext(Context);
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="position-relative col-12 mb-0 mb-lg-4">
            <div className="bg-primary">
              <img
                className=""
                style={{ width: "100%", height: "100%" }}
                alt=""
                src={img_home1}
              />

              <div className="position-absolute css_text_midle">
                <div className="TolinkA_1">Let’s Bring Beauty to Your Home</div>
                <div style={{ color: "white" }}>
                  Fast Delivery & Fair Prices
                </div>
                {/* Link to All Products (NEW) */}
                <Link to="/all-products">
                  <button
                    type="button"
                    className="btn btn-lg btn-dark mt-4 metqua me-1"
                  >
                    Shop now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4 mt-4 mt-lg-0">
            <div className="position-relative">
              <div>
                <img
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                  src={img_home2}
                />
                <div className="position-absolute css_text_midle">
                  <div style={{ color: "white", fontSize: 30 }}>Furniture</div>
                  {/* Link to All Products with Sorting Category (NEW) */}
                  <Link to="/all-products/furniture">
                    <button
                      type="button"
                      style={{ color: "white" }}
                      className="btn btn-dark mt-2"
                    >
                      Shop Now {"->"}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4  mt-4 mt-lg-0">
            <div className="position-relative">
              <div>
                <img
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                  src={img_home3}
                />
                <div className="position-absolute css_text_midle">
                  <div style={{ color: "white", fontSize: 30 }}>Decoration</div>
                  {/* Link to All Products with Sorting Category (NEW) */}
                  <Link to="/all-products/decoration">
                    <button
                      type="button"
                      style={{ color: "white" }}
                      className="btn btn-dark mt-2"
                    >
                      Shop Now {"->"}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4  mt-4 mt-lg-0">
            <div className="position-relative">
              <div>
                <img
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                  src={img_home4}
                />

                <div className="position-absolute css_text_midle">
                  <div style={{ color: "white", fontSize: 30 }}>Posters</div>
                  {/* Link to All Products with Sorting Category (NEW) */}
                  <Link to="/all-products/frame&poster">
                    <button
                     
                      type="button"
                      style={{ color: "white" }}
                      className="btn btn-dark mt-2"
                    >
                      Shop Now {"->"}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between mt-4">
            <div className="tex_pop">
              <p style={{ fontSize: 30, marginBottom: "0px" }}>
                Popular Products
              </p>
            </div>

            <div>
              {/* Link to All Products (NEW) */}
              <Link to="/all-products">
                <button
                  type="button"
                  style={{ color: "white" }}
                  className="btn btn-dark mt-4"
                >
                  View All Products
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Popular_Products_dis begin */}
        {/* <div className="Popular_Products_dis"> */}

        <PopularProducts />

        {/* Popular_Products_dis end */}
      </div>

      {/* service begin */}
      <div className="bg-dark-subtle d-flex justify-content-around service_css">
        <div className="col-4 text-center">
          <div className="css_midle_com">
            <div className="circle_blue">
              <FontAwesomeIcon icon="fa-solid fa-life-ring" size="2x" />
            </div>
          </div>

          <div style={{ fontWeight: "bold", fontSize: 20 }}>Secure Payment</div>

          <div>Lorem ipsum dolor sit amet simet el.</div>
        </div>

        <div className="col-4 text-center">
          <div className="css_midle_com">
            <div className="circle_blue">
              <FontAwesomeIcon icon="fa-solid fa-truck-fast" size="2x" />
            </div>
          </div>

          <div style={{ fontWeight: "bold", fontSize: 20 }}>
            Express Shipping
          </div>

          <div>Lorem ipsum dolor sit amet simet el.</div>
        </div>

        <div className="col-4 text-center">
          <div className="css_midle_com">
            <div className="circle_blue">
              <FontAwesomeIcon icon="fa-solid fa-shield-halved" size="2x" />
            </div>
          </div>

          <div style={{ fontWeight: "bold", fontSize: 20 }}>
            Customer Support
          </div>

          <div>Lorem ipsum dolor sit amet simet el.</div>
        </div>
      </div>
      {/* service begin */}

      <div className="d-flex container note_sv">
        <div className="row" style={{ alignContent: "center" }}>
          <div className="col-lg-6">
            <p>Our Values</p>
            <h2>Carefully Selected Products</h2>
            <p>
              Malesuada fames ac turpis egestas integer eget aliquet nibh.
              Egestas maecenas pharetra convallis posuere morbi leo urna
              molestie at. Tellus rutrum tellus pellentesque eu tincidunt tortor
              aliquam nulla facilisi. alesuada fames ac turpis egestas integer
              eget aliquet nibh. Egestas maecenas pharetra convallis posuere
              morbi leo urna molestie at. Tellus rutrum tellus pellentesque eu
              tincidunt tortor aliquam nulla facilisi.
            </p>
            <Link to ="/about-us">
            <button
              type="button"
              style={{ color: "white" }}
              className="btn btn-dark mt-4"
            >
              Read More
            </button>
            </Link>
          </div>

          <div className="position-relative mt-4 mt-lg-0 col-lg-6">
            <img className="img-fluid img_full" alt="" src={img_home5} />
          </div>
        </div>
      </div>

      <div
        className="d-flex bg-dark-subtle testimonials_res"
        style={{ alignItems: "center" }}
      >
        <div className="container">
          <div className="text-center">Testimonials</div>
          <h1 className="text-center">What Our Customers Say</h1>

          <div className="row">
            <TolinkB
              color_bg={"bg-white"}
              text_infor={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              }
              img_pop={imgg1}
              name_pop={"Peter"}
              profession={"Smith"}
              color_tex={"testimonials_c1"}
            />

            <TolinkB
              color_bg={"bg-black"}
              text_infor={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              }
              img_pop={imgg2}
              name_pop={"Oliver"}
              profession={"OliverPeterson"}
              color_tex={"testimonials_c2"}
            />

            <TolinkB
              color_bg={"bg-white"}
              text_infor={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              }
              img_pop={imgg3}
              name_pop={"Jane"}
              profession={"Doe"}
              color_tex={"testimonials_c1"}
            />
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </header>
  );
}
