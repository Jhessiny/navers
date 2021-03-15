import axios from "axios";
import { formatDate } from "../utils/commonFunctions";
import React, { useContext, useEffect, useState } from "react";
import SuccessModalContent from "../components/ModalContents/SuccessModalContent";
import NaverForm from "../components/NaverForm";
import Modal from "../components/UI/Modal";
import { UserContext } from "../UserContext";
import { Redirect } from "react-router";

const EditNaver = ({ match, history }) => {
  const [userId, setUserId] = useState(null);
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [editFormData, setEditForm] = useState({
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

  const getUser = async (id) => {
    setIsFetching(true);
    const res = await axios.get(
      "https://navedex-api.herokuapp.com/v1/navers/" + id,
      {
        headers: {
          authorization: "Bearer " + loggedToken,
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
    setIsFetching(false);
  };

  useEffect(() => {
    let id = match.params.id;
    getUser(id);
    setUserId(id);
  }, [match]);

  // const changeInput = (e) => {
  //   let inputValue = e.target.value;
  //   let inputName = e.target.name;
  //   console.log(inputName, inputValue);
  //   setEditForm((prevState) => {
  //     return { ...prevState, [inputName]: inputValue };
  //   });
  // };

  const saveChanges = (values) => {
    console.log(values.birthdate);
    setEditForm(values);
    values.admission_date = formatDate(values.admission_date, "sending");
    values.birthdate = formatDate(values.birthdate, "sending");
    axios
      .put("https://navedex-api.herokuapp.com/v1/navers/" + userId, values, {
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + loggedToken,
        },
      })
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
      {redirect}
      <NaverForm
        title="Editar Naver"
        submitHandler={saveChanges}
        formData={editFormData}
        // changeInput={changeInput}
        isFetching={isFetching}
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
