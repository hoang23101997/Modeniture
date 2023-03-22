
import './Aboutusmenu.css';
// import { useState } from "react";
import img1 from "../home_pop/header-1.jpg" ;
import img2 from "../home_pop/header-2-1.jpg" ;
import img3 from "../home_pop/header-3-1.jpg" ;

export default function Card_text_but_img(props) {

  var element = document.getElementById("anixoa");
  document.addEventListener('scroll', () => {
   
    var scrollTop = document.documentElement.scrollTop;


    var element = document.getElementById("anixoa");
    var elementb = document.getElementById("anixob");
    var elementc = document.getElementById("anixoc");
    // console.log(scrollTop - element.offsetTop )
   var check_in = scrollTop - element.offsetTop ;

   let checkok = 0;
   if (check_in > -100 && check_in <= 440){
   if   (localStorage.getItem("checkok") == 0){
    checkok = 1;
    localStorage.setItem("checkok", checkok);

    element.classList.remove("ani_aboua");
    elementb.classList.remove("ani_aboub");
    elementc.classList.remove("ani_abouc");
    element.classList.add("ani_oba");
    elementb.classList.add("ani_oba");
    elementc.classList.add("ani_oba");
    setTimeout(function(){element.classList.add("ani_aboua");},10)
    setTimeout(function(){elementb.classList.add("ani_aboub");},10)
    setTimeout(function(){elementc.classList.add("ani_abouc");},10)

   }

   }
   else{
    localStorage.setItem("checkok", checkok)

   }

});



  // khi ta chỉnh fontSize của chữ nhỏ ,to, và ta chỉnh col to nhỏ tương ứng ta được cái card co giản tùy ý
  return (

    <div className="container" >
      <div className="d-flex align-items-center row" >


        {/* chữ begin */}
        <div className="col-lg-6" style={{ fontSize: "20px", backgroundColor: "#ebe9eb" }}>

          <h1>
            You Got The Idea, We Got The Tools!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae ultricies felis. In tempus id massa sit amet sagittis. Nullam aliquet fermentum velit, a blandit
          </p>
          <button type="button" style={{ color: "white" }} className="btn btn-dark mt-4">
            Read More
          </button>
        </div>
        {/* chữ end */}

        {/* hình begin */}
        {/* <div className="position-relative mt-4 mt-lg-0 col-lg-6"> */}
        <div className="position-relative col-6" style={{ height: "600px" }}>

          {/* <div className="position-absolute col-4 ani_css">
            <img className="img_full" alt="" src="../home_pop/header-1.jpg" />
          </div> */}

          {/* <div className="position-absolute col-5" style={{ top: "60px" }}>
            <img style={{ borderRadius: "5%" }} className="img_full" alt="" src="../home_pop/header-1.jpg" />
          </div> */}
          {/* left: "400px", */}

         <div id="anixoa" className="position-absolute col-5 ani_aboua" style={{top: "60px" }}>
            <img style={{ borderRadius: "5%" }} className="img_full" alt="" src={img1} />
          </div>



          {/* <div className="position-absolute col-4" style={{ left: "300px", top: "115px" }} >
            <img style={{ borderRadius: "5%" }} className="img_full" alt="" src="../home_pop/header-2-1.jpg" />
          </div> */}

          <div id="anixob" className="position-absolute col-4 ani_aboub" style={{ top: "115px" }} >
            <img style={{ borderRadius: "5%" }} className="img_full" alt="" src={img2} />
          </div>



          {/* <div className="position-absolute col-8" style={{ left: "95px", top: "350px" }} >
            <img style={{ borderRadius: "5%" }} className="img_full" alt="" src="../home_pop/header-3-1.jpg" />
          </div> */}

          <div id="anixoc" className="position-absolute col-8 ani_abouc" style={{ top: "150px" }} >
            <img style={{ borderRadius: "5%" }} className="img_full" alt="" src={img3} />
          </div>



          {/* <img className="img-fluid" alt="" src="../home_pop/wc-ban.png" /> */}
        </div>
        {/* hình end */}



      </div>

    </div>


  );

}