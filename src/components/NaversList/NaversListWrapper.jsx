import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import NaverItem from "./NaverItem";
import "./NaversListWrapper.scss";
import Modal from "../UI/Modal";
import NaverModalContent from "../ModalContents/NaverModalContent";
import SuccessModalContent from "../ModalContents/SuccessModalContent";
import DeletingModalContent from "../ModalContents/DeletingModalContent";
import { Link } from "react-router-dom";
import Spinner from "../UI/Spinner";
import { UserContext } from "../../UserContext";

function NaversListWrapper() {
  const [navers, setNavers] = useState([]);
  const [currentNaver, setCurrentNaver] = useState([]);
  const [modalContent, setModalContent] = useState(null);
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [deletingUserId, setDeletingUserId] = useState(null);
  const [confirmedAction, setConfirmedAction] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [loggedToken] = useContext(UserContext);

  const getNavers = async () => {
    setIsFetching(true);
    const res = await axios.get("https://navedex-api.herokuapp.com/v1/navers", {
      headers: {
        authorization: "Bearer " + loggedToken,
      },
    });
    setNavers(res.data);
    setIsFetching(false);
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
          authorization: "Bearer " + loggedToken,
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
    await axios.delete("https://navedex-api.herokuapp.com/v1/navers/" + id, {
      headers: {
        authorization: "Bearer " + loggedToken,
      },
    });
    toggleModal("success", null, "excluído");
    getNavers();
  };

  const toggleModal = (content, id, actionType) => {
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
          <Link to="/create-naver">Adicionar Naver</Link>
        </div>
        <div
          className="navers-list-wrapper__list"
          style={{
            justifyContent: `${
              navers.length % 4 !== 0 ? "flex-start" : "space-between"
            }`,
          }}
        >
          {isFetching ? (
            <Spinner />
          ) : !navers.length ? (
            <p>Nenhum naver cadastrado.</p>
          ) : (
            navers.map((naver) => (
              <NaverItem
                naver={naver}
                key={naver.id}
                toggleModal={toggleModal}
                getNaver={getNaver}
                navers={navers}
              />
            ))
          )}
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
