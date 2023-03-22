import Footer_inf from "./Footer_inf";
import Aboutus from "./Aboutus";

import img_home1 from "../home_pop/wc-img-1.png";
import img_home2 from "../home_pop/blog-img-5.png";
import img_home3 from "../home_pop/blog-img-3-1.png";

export default function Footer() {
  return (
    <div
      className="d-flex bg-dark testimonials_res"
      style={{ alignItems: "center" }}
    >
      <div className="container">
        <div className="row">
          <div
            className="d-flex justify-content-between"
            style={{ flexWrap: "wrap", gap: "10px" }}
          >
            <div className="footer_css_m">
              <Aboutus />
            </div>

            <div className="footer_css_m">
              <h3 style={{ color: "white" }}>Latest News</h3>
              <p style={{ color: "gray" }}>_______</p>
              <Footer_inf
                tex_prop={"How I Started My eCommerce Shop"}
                date_prop={"July 4, 2022"}
                img_prop={img_home1}
              />

              <Footer_inf
                tex_prop={"Quitting My Corporate Job for My Startup"}
                date_prop={"July 4, 2022"}
                img_prop={img_home2}
              />

              <Footer_inf
                tex_prop={"The Most Important Skills In Life"}
                date_prop={"July 1, 2022 "}
                img_prop={img_home3}
              />
            </div>

            <div className="footer_css_m">
              <h3 style={{ color: "white" }}>Join Our Newsletter</h3>
              <p style={{ color: "gray" }}>_______</p>

              <div className="d-flex" style={{ marginTop: "40px" }}>
                <input
                  placeholder="name@example.com"
                  style={{ width: "200px", height: "40px" }}
                  type="text"
                />
                <button
                className="btn btn-primary"
                  style={{ width: "90px", height: "40px", marginLeft: "10px" }}
                >
                  Subscribe
                </button>
              </div>
              <p style={{ marginTop: "30px", color: "white" }}>
                We only send newsletters out a few times a year, we won't ever
                spam you.
              </p>
            </div>
          </div>
        </div>
        <p
          className="img_full"
          style={{ paddingTop: "50px", overflow: "hidden", color: "gray" }}
        >
          ______________________________________________________________________________________________________________________________________________________________________________________________________
        </p>
        <p style={{ textAlign: "center", color: "white" }}>
          ©2023HoangHai eCommerce | React Theme by Hoang- Hai{" "}
        </p>
      </div>
    </div>
  );
}
