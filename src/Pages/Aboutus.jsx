import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
export default function Aboutus() {
     //Scroll to top each Page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <div style={{ gap: "3px", width: "300px" }}>
        <h3 style={{ color: "white" }}>About Us</h3>
        <p style={{ color: "gray" }}>_______</p>
        <p style={{ color: "white" }}>
          About Us Inventore veritatis et quasi architecto beatae dicta sed ut
          perspiciatis unde omnis iste natus laudantium. Sed ut perspiciatis
          unde omnis iste natus voluptatem fringilla tempor dignissim at,
          pretium et arcu.
        </p>

        <div className="d-flex" style={{ gap: "3px", width: "200px" }}>
          <div
            className="circle_infor"
            style={{ width: "40px", height: "40px" }}
          >
            <FontAwesomeIcon
              icon="fa-brands fa-youtube"
              size="2x"
              color="red"
              style={{ width: "30px", height: "30px" }}
            />
          </div>

          <div
            className="circle_infor"
            style={{ width: "40px", height: "40px" }}
          >
            <FontAwesomeIcon
              icon="fa-brands fa-facebook"
              size="2x"
              color="blue"
            />
          </div>

          <div
            className="circle_infor"
            style={{ width: "40px", height: "40px" }}
          >
            <FontAwesomeIcon
              icon="fa-brands fa-square-instagram"
              size="2x"
              color="red"
            />
          </div>

          <div
            className="circle_infor"
            style={{ width: "40px", height: "40px" }}
          >
            <FontAwesomeIcon
              icon="fa-brands fa-square-twitter"
              size="2x"
              color="green"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
