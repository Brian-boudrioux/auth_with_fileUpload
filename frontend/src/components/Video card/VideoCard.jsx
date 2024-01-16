import { useState, useEffect, useRef } from "react";
import "./VideoCard.css";
import Avatar from "@mui/material/Avatar";
import { Icon } from "@iconify/react";
import Modal from "../Modal/Modal";

function VideoCard() {
  const [openVideoOptions, setOpenVideoOptions] = useState(false);
  const videoOptionsMenuRef = useRef();
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!videoOptionsMenuRef.current.contains(e.target)) {
        setOpenVideoOptions(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="video_Card">
      <img
        className="video_Thumbnail"
        alt="video thumbnail"
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div
        className={`moreVert_Icon_Container ${
          openVideoOptions ? "active" : "inactive"
        }`}
      >
        <Icon
          id="icon_More_Vertical"
          type="button"
          icon="pepicons-pop:dots-y"
          color="#f3f3e6"
          width="35"
          height="35"
          onClick={() => {
            setOpenVideoOptions(!openVideoOptions);
          }}
        />
        <div
          className={`dropdown_Menu ${
            openVideoOptions ? "active" : "inactive"
          }`}
        >
          <button
            type="button"
            onClick={() => {
              setOpenVideoOptions(false);
            }}
          >
            <ul>Edit video details</ul>
          </button>
          <button
            type="button"
            onClick={() => {
              setOpenModal(true);
              setOpenVideoOptions(false);
            }}
          >
            <ul>Delete video</ul>
          </button>
        </div>
      </div>
      <div className="video_Data">
        <div className="data_Container">
          <div className="avatar_Container">
            <Avatar
              className="avatar"
              sx={{ width: 40, height: 40 }}
              src="https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="channel_Details">
            <h3 className="video_Title">This is a video title</h3>
            <p className="creator_Username">Author</p>
            <p>200 views &bull; 1 week ago</p>
          </div>
        </div>
      </div>
      {openModal && (
        <Modal onClose={handleClose}>
          <div className="modal_Content">
            <h1>Are you sure you want to delete this video? </h1>
          </div>
          <div className="modal_Footer">
            <button
              type="button"
              className="modal_Btn"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              YES
            </button>
            <button
              type="button"
              className="modal_Btn"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              NO
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default VideoCard;
