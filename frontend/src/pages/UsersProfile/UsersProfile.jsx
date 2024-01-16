import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import useAuth from "../../context/AuthContext";
import Header from "../../components/Header/Header";
import useOverviewContext from "../../context/Overviewcontext";
import "./UsersProfile.css";
import VideoCard from "../../components/Video card/VideoCard";

function UserProfile() {
  const { user, setUser } = useAuth();
  const [openUserSettings, setOpenUserSettings] = useState(false);
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingUserDescription, setIsEditingUserDescription] =
    useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const initialData = {
    username: "CatLoverXoXo",
    description:
      "Hello! Welcome to my channel! You’ll see videos of my cats here !",
    image:
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videos: {
      video1: {
        videoTitle: "First video",
        thumbnail:
          "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      video2: {
        videoTitle: "Second video",
        thumbnail:
          "https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
  };

  const logout = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users/logout`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (response.status === 200) {
        setUser(null);
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   setUser(initialData);
  // }, [setUser]);

  const [newUsername, setNewUsername] = useState(initialData.username);
  const [newUserDescription, setNewUserDescription] = useState(
    initialData.description
  );

  const handleEditUsername = () => {
    setIsEditingUsername(true);
    setOpenUserSettings(false);
  };

  const handleEditUserDescription = () => {
    setIsEditingUserDescription(true);
    setOpenUserSettings(false);
  };

  const handleSaveUsername = () => {
    if (newUsername.trim() !== "") {
      setUser((prevUser) => ({
        ...prevUser,
        username: newUsername,
      }));
      setIsEditingUsername(false);
    } else {
      alert("Username cannot be empty!");
    }
  };

  const handleSaveUserDescription = () => {
    if (newUserDescription.trim() !== "") {
      setUser((prevUser) => ({
        ...prevUser,
        description: newUserDescription,
      }));
      setIsEditingUserDescription(false);
    } else {
      alert("Description cannot be empty!");
    }
  };

  useEffect(() => {
    setUser((prevUser) => ({
      ...prevUser,
      username: newUsername,
    }));
  }, [newUsername, setUser]);

  useEffect(() => {
    setUser((prevUser) => ({
      ...prevUser,
      description: newUserDescription,
    }));
  }, [newUserDescription, setUser]);

  useEffect(() => {
    if (isEditingUsername && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditingUsername]);

  useEffect(() => {
    if (isEditingUserDescription && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditingUserDescription]);

  return (
    <>
      <Header />
      <section className="container_Body_User_Profile">
        <section className="user_Info_Container">
          <div className="img_And_Username_And_Settings_Container">
            <div className="img_And_Username_Container">
              <div className="user_Profile_Img_Container">
                <img
                  src={user?.image}
                  alt="User profile pic"
                  className="user_Profile_Image"
                />
              </div>
              <div className="username_Container">
                {isEditingUsername ? (
                  <div className="input_Container">
                    <input
                      className="edit_Input"
                      type="text"
                      value={newUsername}
                      onChange={(e) => setNewUsername(e.target.value)}
                      ref={inputRef}
                      required
                    />
                    <button
                      className="save_New_Data_Btn"
                      type="button"
                      onClick={handleSaveUsername}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <h1 className="username">{user?.username}</h1>
                )}
              </div>
            </div>
            <div className="settings_Container">
              <Icon
                id="icon_Settings"
                type="button"
                icon="material-symbols:settings"
                color="#f3f3e6"
                width="35"
                height="35"
                onClick={() => {
                  setOpenUserSettings(!openUserSettings);
                }}
              />
              <div
                className={`dropdown_Settings ${
                  openUserSettings ? "active" : "inactive"
                }`}
              >
                <button onClick={handleEditUsername} type="button">
                  <ul>Edit username</ul>
                </button>
                <button type="button">
                  <ul>Edit profile picture</ul>
                </button>
                <button onClick={handleEditUserDescription} type="button">
                  <ul>Edit profile description</ul>
                </button>
                <button type="button" onClick={logout}>
                  <ul>Deconnexion</ul>
                </button>
              </div>
            </div>
          </div>
          <div className="user_Description_Container">
            {isEditingUserDescription ? (
              <div className="input_Container">
                <input
                  className="edit_Input"
                  type="text"
                  value={newUserDescription}
                  onChange={(e) => setNewUserDescription(e.target.value)}
                  ref={inputRef}
                  required
                />
                <button
                  className="save_New_Data_Btn"
                  type="button"
                  onClick={handleSaveUserDescription}
                >
                  Save
                </button>
              </div>
            ) : (
              <h2 className="user_Description">{user?.description}</h2>
            )}
          </div>
        </section>
        <VideoCard />
      </section>
    </>
  );
}

export default UserProfile;
