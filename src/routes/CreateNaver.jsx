import axios from "axios";
import { formatDate } from "../utils/commonFunctions";
import React, { useContext, useState } from "react";
import SuccessModalContent from "../components/ModalContents/SuccessModalContent";
import NaverForm from "../components/NaverForm";
import Modal from "../components/UI/Modal";
import { UserContext } from "../UserContext";
import { Redirect } from "react-router";

function CreateNaver(props) {
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [addUserForm, setAddUserForm] = useState({
    name: "",
    admission_date: "",
    job_role: "",
    project: "",
    birthdate: "",
    url: "",
  });

  const [loggedToken] = useContext(UserContext);
  let redirect;

  if (!loggedToken) {
    redirect = <Redirect to="/login" />;
  }

  const changeInput = (e) => {
    let inputValue = e.target.value;
    let inputName = e.target.name;
    setAddUserForm((prevState) => {
      return { ...prevState, [inputName]: inputValue };
    });
  };

  const addUser = (values) => {
    setAddUserForm(values);
    values.admission_date = formatDate(values.admission_date, "sending");
    values.birthdate = formatDate(values.birthdate, "sending");
    axios
      .post("https://navedex-api.herokuapp.com/v1/navers", values, {
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + loggedToken,
        },
      })
      .then(() => {
        toggleModal();
        setTimeout(() => props.history.push("/"), 1000);
      });
  };

  const toggleModal = () => {
    setIsShowingModal(!isShowingModal);
  };

  return (
    <>
      {redirect}
      <NaverForm
        title="Adicionar Naver"
        submitHandler={addUser}
        formData={addUserForm}
        formType={"new"}
      />
      {isShowingModal && (
        <Modal toggleModal={toggleModal} modalContent="" currentNaver="">
          <SuccessModalContent
            confirmationType="criado"
            toggleModal={toggleModal}
          />
        </Modal>
      )}
    </>
  );
}

export default CreateNaver;
