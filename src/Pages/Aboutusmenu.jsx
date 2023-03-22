import Card_text_but_img from "./Card_text_but_img";
import Car_text_img from "./Car_text_img";
import Car_text_text from "./Car_text_text";
import { useEffect } from "react";
import "./Aboutusmenu.css";
export default function Aboutusmenu() {
    //Scroll to top each Page
    useEffect(() => {
       window.scrollTo(0, 0)
     }, [])
  return (
    <div>
      <div
        className="position-relative d-flex align-items-center justify-content-center cartext_img_but"
        style={{ backgroundColor: "#ebe9eb" }}
      >
        <Card_text_but_img />
      </div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "600px" }}
      >
        <Car_text_img />
      </div>
      <div
        className="d-flex align-items-center justify-content-center cartext_text"
        style={{ backgroundColor: "#ebe9eb" }}
      >
        <Car_text_text />
      </div>
    </div>
  );
}
