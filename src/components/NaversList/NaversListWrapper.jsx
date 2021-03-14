import React, { useEffect, useState } from "react";
import axios from "axios";
import NaverItem from "./NaverItem";
import "./NaversListWrapper.scss";
import Modal from "../UI/Modal";
import NaverModalContent from "../ModalContents/NaverModalContent";
import SuccessModalContent from "../ModalContents/SuccessModalContent";
import DeletingModalContent from "../ModalContents/DeletingModalContent";

function NaversListWrapper() {
  const [navers, setNavers] = useState([]);
  const [currentNaver, setCurrentNaver] = useState([]);
  const [modalContent, setModalContent] = useState(null);
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [deletingUserId, setDeletingUserId] = useState(null);
  const [confirmedAction, setConfirmedAction] = useState(null);
  const getNavers = async () => {
    const res = await axios.get("https://navedex-api.herokuapp.com/v1/navers", {
      headers: {
        authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzBkMzBlLWUxYjMtNGFkNC04NmE0LWVmMGQyOGRkYjViMiIsImVtYWlsIjoiamhlc3NpbnltYXR0b3NAZ21haWwuY29tIiwiaWF0IjoxNjE1NjY5OTE2fQ.YEQ12Ljqqo7Xc5lNrvC6ebXD08VGM2ySzw4OLfmH4jg",
      },
    });
    setNavers(res.data);
    console.log(res);
  };

  useEffect(() => {
    getNavers();
  }, []);
  let myModalContent;

  const getNaver = async (id) => {
    const res = await axios.get(
      "https://navedex-api.herokuapp.com/v1/navers/" + id,
      {
        headers: {
          authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzBkMzBlLWUxYjMtNGFkNC04NmE0LWVmMGQyOGRkYjViMiIsImVtYWlsIjoiamhlc3NpbnltYXR0b3NAZ21haWwuY29tIiwiaWF0IjoxNjE1NjY5OTE2fQ.YEQ12Ljqqo7Xc5lNrvC6ebXD08VGM2ySzw4OLfmH4jg",
        },
      }
    );
    setCurrentNaver(res.data);
    toggleModal("naver");
    myModalContent = (
      <NaverModalContent
        currentNaver={currentNaver}
        toggleModal={toggleModal}
      />
    );
  };

  const deleteNaver = async (id) => {
    console.log(id);
    await axios.delete("https://navedex-api.herokuapp.com/v1/navers/" + id, {
      headers: {
        authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzBkMzBlLWUxYjMtNGFkNC04NmE0LWVmMGQyOGRkYjViMiIsImVtYWlsIjoiamhlc3NpbnltYXR0b3NAZ21haWwuY29tIiwiaWF0IjoxNjE1NjY5OTE2fQ.YEQ12Ljqqo7Xc5lNrvC6ebXD08VGM2ySzw4OLfmH4jg",
      },
    });
    toggleModal("confirmation", null, "excluído");
    getNavers();
  };

  const toggleModal = (content, id, actionType) => {
    console.log(content);
    if (content) {
      setModalContent(content);
      setIsShowingModal(true);
    } else {
      setIsShowingModal(false);
    }
    if (id) {
      setDeletingUserId(id);
    }
    if (content === "success") {
      setConfirmedAction(actionType);
    }
  };

  if (modalContent === "naver") {
    myModalContent = (
      <NaverModalContent
        currentNaver={currentNaver}
        toggleModal={toggleModal}
        deleteNaver={deleteNaver}
        deletingUserId={deletingUserId}
      />
    );
  } else if (modalContent === "deleteNaver") {
    myModalContent = (
      <DeletingModalContent
        toggleModal={toggleModal}
        deleteNaver={deleteNaver}
        deletingUserId={deletingUserId}
      />
    );
  } else if (modalContent === "success") {
    myModalContent = (
      <SuccessModalContent
        confirmationType={confirmedAction}
        toggleModal={toggleModal}
      />
    );
  }

  return (
    <>
      <div className="navers-list-wrapper">
        <div className="navers-list-wrapper__top">
          <h1>Navers</h1>
          <button>Adicionar Naver</button>
        </div>
        <div className="navers-list-wrapper__list">
          {navers.map((naver) => (
            <NaverItem
              naver={naver}
              key={naver.id}
              toggleModal={toggleModal}
              getNaver={getNaver}
            />
          ))}
        </div>
      </div>
      {isShowingModal && (
        <Modal
          toggleModal={toggleModal}
          modalContent={modalContent}
          currentNaver={currentNaver}
        >
          {myModalContent}
        </Modal>
      )}
    </>
  );
}

export default NaversListWrapper;
