



export default function TolinkB(props) {


  let class_css = `position-relative bg-primary testimonials_content ${props.color_bg}`;
  let class_tex = `mt-3 ${props.color_tex}`;
  let cl_tex = `${props.color_tex}`;


  return (

    <div className="col-12 col-lg-4 mb-5 mt-4" style={{ paddingRight: "0px" }}>
       
        <div className={class_css} >

          <div className="position-absolute mt-3 px-3">
            <div>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>

            </div>

            <div className={class_tex} style={{ fontSize: "12px" }}>
              
              <p >{props.text_infor}</p>
              
            </div>

            <div className="d-flex testimonials_css mt-3" style={{ gap: "10px" }}>

              <img className="testimonials_css img-fluid" alt="" src={props.img_pop} />
              <div>
                <div className={cl_tex}>{props.name_pop}</div>
                <div className={cl_tex}>{props.profession}</div>
              </div>

            </div>
          </div>

        </div>
  
    </div>


  );
}
