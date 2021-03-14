import axios from "axios";
import React, { useEffect, useState } from "react";
import SuccessModalContent from "../components/ModalContents/SuccessModalContent";
import NaverForm from "../components/NaverForm";
import Modal from "../components/UI/Modal";

const EditNaver = ({ match, history }) => {
  const [userId, setUserId] = useState(null);
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [editFormData, setEditForm] = useState({
    name: "",
    admission_date: "",
    job_role: "",
    project: "",
    birthdate: "",
    url: "",
  });

  const getUser = async (id) => {
    console.log("oi");
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

    let birthdate = new Date(res.data.birthdate);
    res.data.birthdate =
      birthdate.getFullYear() +
      "-" +
      0 +
      (birthdate.getMonth() + 1) +
      "-" +
      birthdate.getDate();
    let admission = new Date(res.data.admission_date);
    res.data.admission_date =
      admission.getFullYear() +
      "-" +
      0 +
      (admission.getMonth() + 1) +
      "-" +
      admission.getDate();
    setEditForm({
      name: res.data.name,
      admission_date: res.data.admission_date,
      job_role: res.data.job_role,
      project: res.data.project,
      birthdate: res.data.birthdate,
      url: res.data.url,
    });
  };
  console.log(editFormData);

  useEffect(() => {
    let id = match.params.id;
    getUser(id);
    setUserId(id);
  }, [match]);

  const changeInput = (e) => {
    let inputValue = e.target.value;
    let inputName = e.target.name;
    if (e.target.type === "date") {
      let data = new Date(inputValue);
      inputValue =
        data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    }
    setEditForm((prevState) => {
      return { ...prevState, [inputName]: inputValue };
    });
  };

  const saveChanges = (e) => {
    let birthdate = new Date(editFormData.birthdate);
    editFormData.birthdate =
      birthdate.getDate() +
      "/" +
      0 +
      (birthdate.getMonth() + 1) +
      "/" +
      birthdate.getFullYear();
    let admission = new Date(editFormData.admission_date);
    editFormData.admission_date =
      admission.getDate() +
      "/" +
      0 +
      (admission.getMonth() + 1) +
      "/" +
      admission.getFullYear();
    console.log("updateing ", userId);
    console.log("editing", editFormData);
    e.preventDefault();
    axios
      .put(
        "https://navedex-api.herokuapp.com/v1/navers/" + userId,
        editFormData,
        {
          headers: {
            "Content-Type": "application/json",
            authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzBkMzBlLWUxYjMtNGFkNC04NmE0LWVmMGQyOGRkYjViMiIsImVtYWlsIjoiamhlc3NpbnltYXR0b3NAZ21haWwuY29tIiwiaWF0IjoxNjE1NjY5OTE2fQ.YEQ12Ljqqo7Xc5lNrvC6ebXD08VGM2ySzw4OLfmH4jg",
          },
        }
      )
      .then(() => {
        toggleModal();
        setTimeout(() => history.push("/"), 1000);
      });
  };

  const toggleModal = () => {
    setIsShowingModal(!isShowingModal);
  };

  return (
    <>
      <NaverForm
        title="Editar Naver"
        changeHandler={(e) => changeInput(e)}
        clickHandler={saveChanges}
        formData={editFormData}
        formType={"new"}
      />
      {isShowingModal && (
        <Modal toggleModal={toggleModal} modalContent="" currentNaver="">
          <SuccessModalContent
            confirmationType="atualizado"
            toggleModal={toggleModal}
          />
        </Modal>
      )}
    </>
  );
};

export default EditNaver;
