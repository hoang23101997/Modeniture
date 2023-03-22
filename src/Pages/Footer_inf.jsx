export default function Footer_inf(props) {
    return (


        <div className="d-flex" style={{ gap: "10px", width: "300px", height: "80px" }}>

            {/* style={{ paddingRight: "0px" } */}

            {/* hình begin */}
            <div className="col-2">
                <img style={{ width: "100%", height: "auto" }}  alt="" src={props.img_prop} />
            </div>
            {/* hình end */}



            {/* chữ begin */}
            <div className="d-flex col-10" style={{ fontSize: "13px", color: "white" }}>
                {/*style={{ paddingTop: "10px" }} style={{paddingTop: "6px"}} */}
                <div className="d-flex align-items-center" style={{ width: "100%", height: "50px" }}>
                    <div>
                        {props.tex_prop}

                        <div>{props.date_prop}</div>
                    </div>

                </div>

            </div>
            {/* chữ end */}


        </div>



    );

}