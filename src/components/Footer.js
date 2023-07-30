import React from 'react';
import styled from "styled-components";
import SunrinLogo from '../img/SunrinLogo.svg'
import InstagramLogo from '../img/InstagramLogo.svg'

const Footer = () => {
  return (
    <Back>
      <Container>
        <div>
          <Title margin={'21px'}>
            <Logo height={'29px'} src={SunrinLogo}/>
            선린인터넷고등학교
          </Title>
          <Contents>
            서울특별시 용산구 원효로97길 33-4 (청파동3가)<br/>
            Tel. 070-4459-9047 | Fax. 704-0960<br/><br/>

            © 2023. 선린인터넷고등학교<br/>
            All Rights Reserved.
          </Contents>
        </div>
        <div>
          <Title margin={'14px'}>웹사이트</Title>
          <SubTitle>디자인</SubTitle>
          <Contents margin={'18px'}>주현명 이서율 윤휘영</Contents>
          <SubTitle>개발</SubTitle>
          <Contents>주현명 이서율</Contents>
        </div>
        <div>
          <Contents margin={'9.5px'}>
            <Logo height={'13px'} src={SunrinLogo}/> 선린 홈페이지
          </Contents>
          <Contents margin={'9.5px'}>
            <Logo height={'13px'} src={InstagramLogo}/> SSF 인스타그램
          </Contents>
        </div>
      </Container>
    </Back>
  );
};
const Back = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  background-color: #2E353C;
`;
const Container = styled.div`
  width: auto;
  display: flex;
  align-items: flex-end;
  gap: 291px;
  margin-left: 300px;
`;
const Title = styled.div`
  color: #FBFBFB;
  font-family: SUIT, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
  display: flex;
  gap: 15px;
  margin-bottom: ${(props) => props.margin};
`;
const Logo = styled.img`
  height: ${(props) => props.height};
`;
const Contents = styled.div`
  color: #FBFBFB;
  font-family: SUIT, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
  margin-bottom: ${(props) => props.margin};
`;
const SubTitle = styled.div`
  color: #FFF;
  font-family: SUIT, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 22.5px */
  margin-bottom: 6px;
`;

export default Footer;