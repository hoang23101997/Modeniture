import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { usehook } from "./Hooks";
const initCredential = { email: "", firstname: "", phone: "", message: "" };

export default function Contactus() {
  const [credential, setCredential] = useState(initCredential);

  const [issuc, setissuc] = useState(false);

  const handleInputChange = (event) => {
    setissuc(false);
    // console.log(event.target.name + "/" + event.target.value,)
    setCredential({
      ...credential,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // TODO: call API
    const url_api =
      "https://tuongdoirong.com/api/node.php?f=inst&database=mindx&mytable=info_khach&cot=firstname,email,phone,message&gt='" +
      credential.firstname +
      "','" +
      credential.email +
      "','" +
      credential.phone +
      "','" +
      credential.message +
      "'";
    const fetchPokemon = async () => {
      const response = await fetch(url_api);
      const data = await response.json();
      setissuc(true);
      console.log("Đã gửi thông tin thành công", data);
    };
    fetchPokemon();
    // console.log(credential.firstname + "/" + credential.email + "/" + credential.phone + "/" + credential.message )
  };

  return (
    <div className="bg-body-tertiary">
      <div className="container">
        <div className="row align-items-center justify-content-center">
    
          <div
            className="d-flex flex-column align-items-center mt-5"
            style={{ gap: "3px", width: "100%" }}
          >
            <div style={{ textAlign: "center" }}>
              <h1 className="text-capitalize" style={{ color: "black" }}>Send us an email!</h1>

              <p style={{ color: "black" }}>
                Write to us on social media or send us an email
                <br /> by using the contact form below!
              </p>
              <p style={{ color: "black" }}></p>
            </div>

            <div className="d-flex justify-content-center" style={{ gap: "3px", width: "200px" }}>
              <div className="" style={{ width: "40px", height: "40px" }}>
                <FontAwesomeIcon size="2x" icon="fa-brands fa-linkedin-in" />
              </div>

              <div className="" style={{ width: "40px", height: "40px" }}>
                <FontAwesomeIcon size="2x" icon="fa-brands fa-instagram" />
              </div>

              <div className="" style={{ width: "40px", height: "40px" }}>
                <FontAwesomeIcon size="2x" icon="fa-brands fa-dribbble" />
              </div>

              <div className="" style={{ width: "40px", height: "40px" }}>
                <FontAwesomeIcon size="2x" icon="fa-brands fa-behance" />
              </div>
            </div>
          </div>

          <div
            className="d-flex flex-column align-items-center justify-content-center mb-5"
            style={{
              borderRadius: "3%",
              marginTop: "40px",
              backgroundColor: "white",
              width: "800px",
              height: "800px",
            }}
          >
            {/* backgroundColor: "blue", */}
            <div className="" style={{ width: "90%", height: "90%" }}>
              <form onSubmit={handleFormSubmit}>
                <div>
                  First Name <span style={{ color: "red" }}>*</span>
                  <input
                    style={{ height: "60px" }}
                    required
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="E.g.john"
                    name="firstname"
                    value={credential.firstname}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mt-5">
                  Email Address <span style={{ color: "red" }}>*</span>
                  <input
                    style={{ height: "60px" }}
                    required
                    type="email"
                    value={credential.email}
                    className="form-control"
                    id="floatingInput"
                    placeholder="E.g.john@gmail.com"
                    name="email"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mt-5">
                  Phone Number
                  <input
                    style={{ height: "60px" }}
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="123-45-678"
                    value={credential.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mt-5">
                  Message
                  <div>
                    <textarea
                      style={{ width: "100%", height: "200px" }}
                      placeholder="Enter your message..."
                      name="message"
                      value={credential.message}
                      onChange={handleInputChange}
                    ></textarea>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        style={{ color: "white" }}
                        className="btn btn-dark mt-5 p-3"
                      >
                        Send Message
                      </button>
                    </div>
                    <div>
                      {issuc && (
                        <div
                          style={{
                            color: "blue",
                            fontSize: "20px",
                            textAlign: "center",
                          }}
                        >
                          Your infomation has been submitted. Thank you!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
