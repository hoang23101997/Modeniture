import { useState } from "react";
import imglogin from "../Pages/Homepage/modeNiture-big.png";
const initCredential = { email: "", password: "", confirm_password: "" };

// onSubmit={handleFormSubmit}
export default function Register() {
  const [credential, setCredential] = useState(initCredential);

  const [ispassincorrect, setispassincorrect] = useState(false);

  const [isemailexists, setisemailexists] = useState(false);

  const [isregistered, setisregistered] = useState(false);

  // đây là sự kiện nhấp chuột vào input mỗi khi giá trị thay đổi nó gọi hàm này
  const handleInputChange = (event) => {
    setispassincorrect(false);
    setisemailexists(false);
    setisregistered(false);
    // console.log( event.target.name+"//"+event.target.value);
    setCredential({
      ...credential,
      [event.target.name]: event.target.value,
    });
  };
  // đây là sự kiện nhấp chuột vào input mỗi khi giá trị thay đổi nó gọi hàm này

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(credential.email + "//" + credential.password  + "//" + credential.confirm_password)
    if (credential.password != credential.confirm_password) {
      setispassincorrect(true);
    } else {
      const checkemail = async () => {
        const url_login =
          "https://tuongdoirong.com/api/node.php?f=outdata&up_gt=SELECT email FROM login WHERE email='" +
          credential.email +
          "'&cot=email&database=mindx";
        const response = fetch(url_login);
        response
          .then((response) => response.json())
          .then((data) => {
            // check call API email

            if (data.kq == "0") {
              // alert("không tồn tại email trên dataasse")
              const Signup = async () => {
                const url_singn =
                  "https://tuongdoirong.com/api/node.php?f=inst&database=mindx&mytable=login&cot=email,password&gt='" +
                  credential.email +
                  "','" +
                  credential.password +
                  "'";
                const response = fetch(url_singn);
                response
                  .then((response) => response.json())
                  .then((data) => {
                    console.log("data fetch", data.kq);
                    if (data.kq == "1") {
                      // alert("Đã đăng ký tài khoản thành công")
                      setisregistered(true);
                    } else {
                      alert("Đăng ký thất bại");
                    }
                  });
              };

              Signup();
            } else {
              setisemailexists(true);
              // alert(" email trên dataasse đã tồn tại")
            }
            // console.log("data fetch", data.kq);
          });
      };

      checkemail();
    }

    // TODO: call API để login
    // sau khi nhấp chuột vào button để đăng ký tài khoản thì nó gọi hàm này sau khi kiểm tra
    // định dạng email có phù hợp hay không
    // các giá trị nhận được là : credential.email   và  credential.password
  };

  return (
    <div className="bg-body-tertiary">
    <div className="container d-flex align-items-center justify-content-center">
      <div className="row mb-5 mt-5" style={{ width: "600px" }}>
        <div className="">
          <form className="bg-body p-5 rounded" onSubmit={handleFormSubmit}>

            <div className="d-flex justify-content-center">
              <img className="mb-4 logo" src={imglogin} alt="" />
            </div>
            <h1 className="h3 mb-3 fw-normal">Please Register</h1>

            {isemailexists && (
              <h1 className="" style={{ color: "red" }}>
                Email already exists
              </h1>
            )}

            <div className="form-floating">
              <input
                required
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={credential.email}
                name="email"
                onChange={handleInputChange}
              />
              <label htmlFor="floatingInput">Email Address</label>
            </div>

            <div className="form-floating mt-4">
              <input
                required
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={credential.password}
                name="password"
                onChange={handleInputChange}
              />

              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div>
              <input
                required
                style={{ height: "60px" }}
                type="password"
                className="form-control mt-4"
                placeholder="Confirm Password"
                value={credential.confirm_password}
                name="confirm_password"
                onChange={handleInputChange}
              />
            </div>
            {ispassincorrect && (
              <div style={{ color: "red" }}>Password incorrect</div>
            )}

            {isregistered && (
              <div style={{ color: "black" }}>
                Successfully registered account
              </div>
            )}

            <button className="mt-4 w-100 btn btn-lg btn-dark" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
