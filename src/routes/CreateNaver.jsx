import axios from "axios";
import React, { useState } from "react";
import NaverForm from "../components/NaverForm";

function CreateNaver(props) {
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
    if (e.target.type === "date") {
      let data = new Date(inputValue);
      inputValue =
        data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    }
    setAddUserForm((prevState) => {
      return { ...prevState, [inputName]: inputValue };
    });
  };

  const addUser = (e) => {
    e.preventDefault();
    axios
      .post("https://navedex-api.herokuapp.com/v1/navers", addUserForm, {
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzBkMzBlLWUxYjMtNGFkNC04NmE0LWVmMGQyOGRkYjViMiIsImVtYWlsIjoiamhlc3NpbnltYXR0b3NAZ21haWwuY29tIiwiaWF0IjoxNjE1NjY5OTE2fQ.YEQ12Ljqqo7Xc5lNrvC6ebXD08VGM2ySzw4OLfmH4jg",
        },
      })
      .then(() => props.history.push("/"));
  };

  return (
    <NaverForm
      title="Adicionar Naver"
      changeHandler={(e) => changeInput(e)}
      clickHandler={addUser}
      formData={addUserForm}
      formType={"new"}
    />
  );
}

export default CreateNaver;
