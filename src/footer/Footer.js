import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  bottom: 0%;
  width: 100%;
  height: 200px;
  background-color: #5c5470;
  div {
    font-family: "Gowun Batang", serif;
    color: white;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <div>© 2023. Young-Teck Kim. All rights reserved.</div>
    </FooterWrapper>
  );
}

export default Footer;
