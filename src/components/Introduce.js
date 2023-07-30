import React from "react";
import styled from "styled-components";
import {Blank, MainText, SubTitle, Title} from "./atomic";

const Introduce = ({ref}) => {
  return(
    <Introduce ref={ref}>
      <Wrapper>
        <AboutSSFTexts>
          <SubTitle>행사 소개</SubTitle><Blank size={"24px"}/>
          <Title width={"489px"}>선린 소프트웨어<br/>나눔 축제란 무엇일까요?</Title>
          <Blank size={"50px"}/>
          <MainText width={"713px"}>선린인터넷고등학교 소프트웨어 나눔 축제, SSF는 2018년부터 개최된<br/>선린인터넷고등학교의 최대 축제 중 하나입니다. 먼저 소프트웨어를 경험한<br/>사람들이 미래 세대에게 소프트웨어에 대한 경험을 나누고, 다양한 소프트웨어를<br/>직접 만들고 체험해볼 수 있는 행사입니다</MainText><Blank size={"20px"}/>
          <MainText width={"750px"}>축제에는 수도권에 거주하는 모든 중학생들이 신청할 수 있으며, 학생들은 게임 개발, 웹 및 서버 개발 등 다양한 소프트웨어 분야에 대해 체험해볼 수 있습니다.</MainText>
        </AboutSSFTexts>
        <AboutSSFPictures>
          <Picture/>
          <Picture gap={"107px"}/>
        </AboutSSFPictures>
      </Wrapper>
    </Introduce>
  )
}

export default Introduce;

const Wrapper = styled.div`
  width: 1320px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: auto;
  `;


const Container = styled.section`
  width: 100vw;
  margin: 180px 0;
  display: flex;
  justify-content: center;
`;
const AboutSSFTexts = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutSSFPictures = styled.div`
  display: flex;
  gap: 30px;
  width: auto;
  height: auto;
`;
const Picture = styled.div`
  width: 188px;
  height: 603px;
  margin-top: ${(props) => props.gap};
  background-color: #D9D9D9;
`;
