import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import "./Upload.css";
import Header from "../../components/Header/Header";

function Upload() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="container_Body_Upload">
        <h1 className="upload_Main_Title">What do you want to upload?</h1>
        <div className="short_Or_Video_Container">
          <div
            className="add_A_Short_Container"
            onClick={() => navigate("/upload/addshorts")}
            onKeyDown={() => navigate("/upload/addshorts")}
            tabIndex="-8"
            role="button"
          >
            <div className="add_A_Short">
              <h2>Add a short</h2>
            </div>
            <div className="plus_Icon_Container">
              <Icon
                id="icon_search"
                type="button"
                icon="octicon:plus-16"
                color="#f3f3e6"
                width="65"
                height="65"
              />
            </div>
          </div>
          <div
            className="add_A_Video_Container"
            onClick={() => navigate("/upload/addvideos")}
            onKeyDown={() => navigate("/upload/addvideos")}
            tabIndex="-9"
            role="button"
          >
            <div className="add_A_Video">
              <h2>Add a video</h2>
            </div>
            <div className="plus_Icon_Container">
              <Icon
                id="icon_search"
                type="button"
                icon="octicon:plus-16"
                color="#f3f3e6"
                width="65"
                height="65"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Upload;
