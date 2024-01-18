import { useNavigate, useSearchParams } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import { ToastContainer, Bounce, toast } from "react-toastify";
import Header from "../../components/Header/Header";
import useAuth from "../../context/AuthContext";
import useOverview from "../../context/Overviewcontext";
import "./Login.css";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const isMobile = window.innerWidth < 1024;
  const navigate = useNavigate();
  const username = useRef();
  const password = useRef();
  const auth = useAuth();
  const { setIsRegistered, setIsAdmin } = useOverview();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const activated = searchParams.get("activated");
    if (activated) {
      toast.success("Your email is confirmed, your account is activated", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  }, [searchParams]);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            username: username.current.value,
            password: password.current.value,
          }),
        }
      );
      if (response.status === 200) {
        const user = await response.json();
        auth.setUser(user);
        setIsRegistered(true);
        setIsAdmin(false);
        navigate("/");
      } else if (response.status === 401) {
        toast.warn(
          "You need to validate your account, please check your email",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          }
        );
      } else {
        console.error("veuillez verifier votre saisie.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="container_Body_Header">
      {isMobile ? (
        <div className="container_Header_Log">
          <img
            id="logo_Sign"
            src="src/assets/logoprin.png"
            alt="logo_Overview"
          />
        </div>
      ) : (
        <Header />
      )}
      <div className="container_Log">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        <div className="text_Title_Log">
          <h1 className="title_Log">LOG IN</h1>
          <p id="text_Log">Hey! Welcome back!</p>
        </div>
        <div className="container_Input_Log">
          <div className="container_Username_Log">
            <p id="text_User">Username</p>
            <input
              type="text"
              id="username_Login"
              placeholder="Username"
              name="username"
              ref={username}
            />
          </div>
          <div className="container_Password">
            <p id="text_Pass">Password</p>
            <input
              type="password"
              id="pass_Log"
              placeholder="Password"
              name="password"
              ref={password}
            />
            <a className="link_Log" href="/signup">
              Forgot your password?{" "}
            </a>
          </div>
          <div className="container_But_Log">
            <button
              className="signup_Button_Log"
              type="button"
              onClick={handleSubmit}
            >
              LOG IN
            </button>
            <p className="text_Log_End">Don’t have an account yet?</p>
            <button
              className="signup_End_Log"
              type="button"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
