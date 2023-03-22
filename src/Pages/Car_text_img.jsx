import img1 from "../home_pop/content-img-600x400.jpg";

export default function Car_text_img() {
  // khi ta chỉnh fontSize của chữ nhỏ ,to, và ta chỉnh col to nhỏ tương ứng ta được cái card co giản tùy ý
  return (
    <div className="container">
      <div className="d-flex align-items-center row">
        {/* chữ begin */}
        <div className="col-lg-6" style={{ fontSize: "20px" }}>
          <h1>Create a Beautiful eCommerce Website Easily</h1>
          <p>
            Malesuada fames ac turpis egestas integer eget aliquet nibh. Egestas
            maecenas pharetra convallis posuere morbi leo urna molestie at.
            Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla
            facilisi. alesuada fames ac turpis egestas integer eget aliquet
            nibh. Egestas maecenas pharetra convallis posuere morbi leo urna
            molestie at. Tellus rutrum tellus pellentesque eu tincidunt tortor
            aliquam nulla facilisi.
          </p>
        </div>
        {/* chữ end */}

        {/* hình begin */}
        {/* <div className="position-relative mt-4 mt-lg-0 col-lg-6"> */}
        <div className="position-relative col-6">
          <img
            style={{ borderRadius: "5%" }}
            className="img-fluid"
            alt=""
            src={img1}
          />
        </div>
        {/* hình end */}
      </div>
    </div>
  );
}
