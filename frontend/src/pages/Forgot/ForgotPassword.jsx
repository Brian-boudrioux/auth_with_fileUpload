import Header from "../../components/Header/Header";
import "./ForgotPassword.css";

function ForgotPassword() {
  const isMobile = window.innerWidth < 1024;
  return (
    <section className="container_Body_Forgot">
      {isMobile ? (
        <div className="container_Header_Forgot">
          <img
            id="logo_Sign"
            src="src/assets/logoprin.png"
            alt="logo_Overview"
          />
        </div>
      ) : (
        <Header />
      )}
      <div className="container_Forgot">
        <div className="text_Forgot">
          <p id="text_Oups">OUPS</p>
          <p id="text_Oups2">We’ll send you a link to reset your password</p>
        </div>
        <div className="container_Input_Forgot">
          <div className="container_Email_Forgot">
            <p id="tex_Forgot">Email</p>
            <input
              type="email"
              id="email_Forgot"
              placeholder="Email"
              pattern=".+@example\.com"
              required
            />
          </div>
          <div className="container_Username_Forgot">
            <p id="text_User_Forgot">Username</p>
            <input
              type="text"
              id="username_Forgot"
              placeholder="Username"
              name="username"
            />
          </div>
          <div className="container_But_Forgot">
            <button className="signup_Button_Forgot" type="button">
              RESET PASSWORD
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
