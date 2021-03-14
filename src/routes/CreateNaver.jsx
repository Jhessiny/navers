import axios from "axios";
import { formatDate } from "../utils/commonFunctions";
import React, { useState } from "react";
import SuccessModalContent from "../components/ModalContents/SuccessModalContent";
import NaverForm from "../components/NaverForm";
import Modal from "../components/UI/Modal";

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

  const changeInput = (e) => {
    let inputValue = e.target.value;
    let inputName = e.target.name;
    setAddUserForm((prevState) => {
      return { ...prevState, [inputName]: inputValue };
    });
  };

  const addUser = (e) => {
    e.preventDefault();
    addUserForm.admission_date = formatDate(
      addUserForm.admission_date,
      "sending"
    );
    addUserForm.birthdate = formatDate(addUserForm.birthdate, "sending");
    console.log(addUserForm);
    axios
      .post("https://navedex-api.herokuapp.com/v1/navers", addUserForm, {
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzBkMzBlLWUxYjMtNGFkNC04NmE0LWVmMGQyOGRkYjViMiIsImVtYWlsIjoiamhlc3NpbnltYXR0b3NAZ21haWwuY29tIiwiaWF0IjoxNjE1NjY5OTE2fQ.YEQ12Ljqqo7Xc5lNrvC6ebXD08VGM2ySzw4OLfmH4jg",
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
      <NaverForm
        title="Adicionar Naver"
        changeHandler={(e) => changeInput(e)}
        clickHandler={addUser}
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
