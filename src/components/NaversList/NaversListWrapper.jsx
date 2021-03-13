import React, { useEffect, useState } from "react";
import axios from "axios";
import NaverItem from "./NaverItem";
import "./NaversListWrapper.scss";

function NaversListWrapper() {
  const [navers, setNavers] = useState([]);
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

  console.log(navers);
  return (
    <div className="navers-list-wrapper">
      <div className="navers-list-wrapper__top">
        <h1>Navers</h1>
        <button>Adicionar Naver</button>
      </div>
      <div className="navers-list-wrapper__list">
        {navers.map((naver) => (
          <NaverItem naver={naver} key={naver.id} />
        ))}
      </div>
    </div>
  );
}

export default NaversListWrapper;
