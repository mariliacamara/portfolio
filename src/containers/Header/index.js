import React from "react";
import styled from "styled-components";
import HeaderImage from "../../assets/images/header.svg"

const Header = () => {
 const page = {
   title: {
     greeting: "Olá, eu sou",
     name: "Marília Câmara",
   },
   description: "Front-end developer and UX Designer",
   cvText: "Download CV",
   cvLink: "https://",
   contact: "LinkedIn",
   linkedinLink: "https://",
 };
  return (
    <HeaderSection className="container">
      <div className="header-infos">
        <h1>
          {page.title.greeting}
          <br /> {page.title.name}
        </h1>
        <p>{page.description}</p>
        <div class="buttons">
          <a href={page.cvLink}>
            {page.cvText}
          </a>
          <a href={page.linkedinLink}>
            {page.contact}
          </a>
        </div>
      </div>
      <div className="header-image">
        <img src={HeaderImage} alt="Imagem home page"></img>
      </div>
    </HeaderSection>
  );
};

const HeaderSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;

  .header-image img {
    max-width: 500px;
  }

  .header-infos h1 {
    font-size: 36px;
    font-weight: 700;
    line-height: 46.87px;
  }

  .header-infos p {
    margin-top: 1rem;
    color: #828282;
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
  }

  .header-infos .buttons {
    margin-top: 47px;
  }

  .header-infos .buttons a {
    padding: 1rem 2rem;
    background-color: var(--color-purple);
    color: var(--color-white);
    border-radius: 0.2rem;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    transition: 0.7s;
  }

  .header-infos .buttons a:hover {
    background-color: var(--color-gray-medium);
    color: var(--color-white);
  }

  .header-infos .buttons a:first-child {
    margin-right: 1rem;
    background-color: var(--color-green);
    color: var(--color-dark);
  }

  .header-infos .buttons a:first-child:hover {
    background-color: var(--color-gray-medium);
    color: var(--color-white);
  }
`;


export default Header;
