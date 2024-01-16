import { Icon } from "@iconify/react";
import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import useOverview from "../../context/Overviewcontext";
import useAuth from "../../context/AuthContext";

function Navbar() {
  const Navigate = useNavigate();
  const { toggleNavbarDesktop, setToggleNavbarDestkop } = useOverview();
  const { user } = useAuth();
  const navbarRef = useRef(null);

  const handleFavoritesClick = () => {
    Navigate("/favorites");
    setToggleNavbarDestkop(false);
  };
  const handleUploadClick = () => {
    Navigate("/upload");
    setToggleNavbarDestkop(false);
  };
  const handleSubscriptionClick = () => {
    Navigate("/usersprofile/1");
    setToggleNavbarDestkop(false);
  };
  const handleSettingsCategoriesClick = () => {
    Navigate("/settingscategories");
    setToggleNavbarDestkop(false);
  };
  const handleAdminReviewClick = () => {
    Navigate("/adminreviews");
    setToggleNavbarDestkop(false);
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!toggleNavbarDesktop) {
        return;
      }
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setToggleNavbarDestkop(false);
      }
    };
    document.body.addEventListener("click", handleDocumentClick);
    return () => {
      document.body.removeEventListener("click", handleDocumentClick);
    };
  }, [toggleNavbarDesktop]);

  return (
    <main>
      <div
        ref={navbarRef}
        className={`containeur_Body_Navbar ${
          !toggleNavbarDesktop ? "hiddenNavbar" : ""
        }`}
      >
        <Icon
          icon="material-symbols:home"
          className="home_Navbar"
          color="var(--white)"
          width="33"
          height="37"
          onClick={() => {
            Navigate("/");
          }}
        />
        {!user?.admin ? (
          <>
            <div
              className="favorites_Navbar_bloc"
              onClick={handleFavoritesClick}
              onKeyDown={() => {
                Navigate("/favorites");
              }}
              tabIndex="-1"
              role="button"
            >
              <Icon
                icon="pepicons-pencil:star"
                className="star_Navbar"
                color="var(--white)"
                width="40"
                height="38"
              />
              <span className="text_Favorites_Navbar">Favorites</span>
            </div>
            <div
              className="upload_Navbar_bloc"
              onClick={handleUploadClick}
              onKeyDown={() => {
                Navigate("/upload");
              }}
              tabIndex="-2"
              role="button"
            >
              <Icon
                icon="ph:plus-circle-light"
                className="upload_Navbar"
                color="var(--white)"
                width="44"
                height="44"
              />
              <span className="text_Upload_Navbar">
                Add a new video or short
              </span>
            </div>
            <div
              className="subscription_Navbar_bloc"
              onClick={handleSubscriptionClick}
              onKeyDown={() => {
                Navigate("/usersprofile/1");
              }}
              tabIndex="-3"
              role="button"
            >
              <Icon
                icon="material-symbols-light:subscriptions-rounded"
                className="subscribe_Navbar"
                color="var(--white)"
                width="37"
                height="37"
              />
              <span className="text_Subscription_Navbar">Subscriptions</span>
            </div>
            <div
              className="profil_Navbar_bloc"
              onClick={handleSettingsCategoriesClick}
              onKeyDown={() => {
                Navigate("/settingscategories");
              }}
              tabIndex="-4"
              role="button"
            >
              <Icon
                icon="ph:user-circle-thin"
                className="profil_Navbar"
                color="var(--white)"
                width="39"
                height="39"
              />
              <span className="text_Profil_Navbar">Username</span>
            </div>
          </>
        ) : (
          <>
            <div
              className="admin_Navbar_bloc"
              onClick={() => {
                setToggleNavbarDestkop(false);
              }}
              onKeyDown={() => {
                setToggleNavbarDestkop(false);
              }}
              tabIndex="-5"
              role="button"
            >
              <Icon
                icon="ph:user-circle-thin"
                className="img_Admin_Navbar"
                color="var(--white)"
                width="39"
                height="39"
              />
              <span className="text_Admin_Navbar">Admin</span>
            </div>
            <div
              className="category_Navbar_bloc"
              onClick={handleSettingsCategoriesClick}
              onKeyDown={() => {
                Navigate("/settingscategories");
              }}
              tabIndex="-6"
              role="button"
            >
              <Icon
                icon="iconamoon:category"
                className="category_Navbar"
                color="var(--white)"
                width="33"
                height="33"
              />
              <span className="text_Category_Navbar">Categories</span>
            </div>
            <div
              className="review_Navbar_bloc"
              onClick={handleAdminReviewClick}
              onKeyDown={() => {
                Navigate("/adminreviews");
              }}
              tabIndex="-7"
              role="button"
            >
              <Icon
                icon="grommet-icons:validate"
                className="review_Navbar"
                color="var(--white)"
                width="33"
                height="33"
              />
              <span className="text_Review_Navbar">Validate videos/shorts</span>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Navbar;
