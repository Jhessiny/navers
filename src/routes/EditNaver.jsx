import axios from "axios";
import { formatDate } from "../utils/commonFunctions";
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
    let birthdate = formatDate(res.data.birthdate, "geting");
    let admission_date = formatDate(res.data.admission_date, "geting");
    setEditForm({
      name: res.data.name,
      admission_date: admission_date,
      job_role: res.data.job_role,
      project: res.data.project,
      birthdate: birthdate,
      url: res.data.url,
    });
  };

  useEffect(() => {
    let id = match.params.id;
    getUser(id);
    setUserId(id);
  }, [match]);

  const changeInput = (e) => {
    let inputValue = e.target.value;
    let inputName = e.target.name;
    setEditForm((prevState) => {
      return { ...prevState, [inputName]: inputValue };
    });
  };

  const saveChanges = (e) => {
    e.preventDefault();
    console.log("sending");
    editFormData.admission_date = formatDate(
      editFormData.admission_date,
      "sending"
    );
    editFormData.birthdate = formatDate(editFormData.birthdate, "sending");
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
