import { useState, useEffect, useContext } from "react";
import { products } from "../Pages/AllProducts/data";
import { Link } from "react-router-dom";
import { Context } from "../../src/Context/Context";
export default function PopularProducts(props) {
  // const handle_pro = function (event) {
  //   event.preventDefault();
  //   console.log(props.keys);
  // };
  const { addToCart, FaStar, StarRating, ItemPopular } = useContext(Context);

  return (
    <div className="mt-3 mb-5">
      {/* Call API All Product (NEW) */}
      <div className="d-flex flex-wrap justify-content-between">
        {ItemPopular.map((product) =>  (
          <div className="p-2" key={product.id}>
            <Link to={`/products/${product.id}`}>
              {" "}
              <img className="product-img mt-3" src={product.img}></img>
            </Link>
            <Link
              className="nav-link fs-5 fw-semibold mt-3"
              to={`/${product.id}`}
            >
              {" "}
              {`${product.name}`}
            </Link>
            <StarRating value={product.rating} />
            <div className="d-flex mt-2">
              <div className="text-decoration-line-through me-2 text-body-tertiary">
                ${product.originPrice}.00
              </div>{" "}
              <div className="fw-semibold"> ${product.price}.00 </div>
            </div>
          </div>
        ))}
      </div>

      {/* <a type="button" onClick={handle_pro} href="" className="img_full">
        <div>
          <div>
            <img className="img-fluid img_full" alt="" src={props.img_pop} />
          </div>

          <div style={{ color: "black", fontWeight: "bold" }}>
            {props.name_pop}
          </div>
          <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
          </div>

          <div style={{ color: "black" }}>{props.price_pop}</div>
        </div>
      </a> */}
    </div>
  );
}
