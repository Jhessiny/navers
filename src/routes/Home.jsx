import React from "react";
import Header from "../components/Header";
import NaversListWrapper from "../components/NaversList/NaversListWrapper";

function Home() {
  const navers = [
    {
      id: "1eb10f1e-b2fd-4c82-ab15-eeb5b9c10dd5",
      name: "Christian Tavares",
      admission_date: "2018-08-19T00:00:00.000Z",
      job_role: "Desenvolvedor",
      user_id: "62c0d30e-e1b3-4ad4-86a4-ef0d28ddb5b2",
      project: "Project Backend Test",
      birthdate: "1992-04-12T00:00:00.000Z",
      url: "assets/images/naver1.jpg",
    },
    {
      id: "6b954ab5-7fd4-4221-8fd0-cd488ce47008",
      name: "Jhess Mattos",
      admission_date: "2018-08-19T00:00:00.000Z",
      job_role: "Desenvolvedora Front end",
      user_id: "62c0d30e-e1b3-4ad4-86a4-ef0d28ddb5b2",
      project: "Project Backend Test",
      birthdate: "1996-04-27T00:00:00.000Z",
      url: "assets/images/naver2.jpg",
    },
    {
      id: "6b954ab5-7fd4-4221-8fd0-cd488ce47008",
      name: "Jhess Mattos",
      admission_date: "2018-08-19T00:00:00.000Z",
      job_role: "Desenvolvedora Front end",
      user_id: "62c0d30e-e1b3-4ad4-86a4-ef0d28ddb5b2",
      project: "Project Backend Test",
      birthdate: "1996-04-27T00:00:00.000Z",
      url: "/assets/images/naver3.jpg",
    },
    {
      id: "6b954ab5-7fd4-4221-8fd0-cd488ce47008",
      name: "Jhess Mattos",
      admission_date: "2018-08-19T00:00:00.000Z",
      job_role: "Desenvolvedora Front end",
      user_id: "62c0d30e-e1b3-4ad4-86a4-ef0d28ddb5b2",
      project: "Project Backend Test",
      birthdate: "1996-04-27T00:00:00.000Z",
      url: "assets/images/naver4.jpg",
    },
  ];
  return (
    <div>
      <Header />
      <NaversListWrapper navers={navers} />
    </div>
  );
}

export default Home;
