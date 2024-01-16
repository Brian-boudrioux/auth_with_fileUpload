import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Signup.css";
import useOverview from "../../context/Overviewcontext";

function Signup() {
  const [adminRegister] = useState(false);
  const { setIsAdmin } = useOverview();
  setIsAdmin(adminRegister);
  const redirect = useNavigate();
  const mail = useRef();
  const username = useRef();
  const password = useRef();
  const isMobile = window.innerWidth < 1024;

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mail: mail.current.value,
            username: username.current.value,
            password: password.current.value,
          }),
        }
      );

      if (response.status === 201) {
        const user = await response.json();
        console.info(user);
        redirect("/");
      } else {
        console.error("veuillez verifier votre saisie.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="container_Body_Signup">
      {isMobile ? (
        <div className="container_Header_Sign">
          <img
            id="logo_Sign"
            src="src/assets/logoprin.png"
            alt="logo_Overview"
          />
        </div>
      ) : (
        <Header />
      )}
      <div className="container_Sign">
        <div className="text_Title_Sign">
          <h1 className="title_Signup">SIGN UP</h1>
          <p id="join_Us">Join us!</p>
        </div>
        <div className="container_Input_Sign">
          <div className="container_Email">
            <p id="text_Sign">Email</p>
            <input
              type="email"
              id="email_Sign"
              placeholder="Email"
              pattern=".+@example\.com"
              required
              ref={mail}
            />
          </div>
          <div className="container_User">
            <p id="text_User">Username</p>
            <input
              type="text"
              id="username_Sign"
              placeholder="Username"
              name="username"
              required
              ref={username}
            />
          </div>
          <div className="container_Pass">
            <p id="text_Pass">Password</p>
            <input
              type="password"
              id="pass_Sign"
              placeholder="Password"
              name="password"
              required
              ref={password}
            />
          </div>
        </div>
        <div className="container_But_Signup">
          <button
            className="signup_Button"
            type="button"
            onClick={handleSubmit}
          >
            SIGN UP
          </button>
          <div className="container_Text_End">
            <p className="text_Log_End">Don’t have an account yet?</p>
            <button
              className="signup_End_Log"
              type="button"
              onClick={() => redirect("/login")}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
