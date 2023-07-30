import React, { useRef } from 'react';
import Header from "./components/Header";
import styled from "styled-components";
import arrow6 from "./img/arrow6.svg";
import CampList from "./components/CampList";
import ScdBackDesk_1 from './img/ScdBackDesk_1.svg';
import ScdBackDesk_2 from './img/ScdBackDesk_2.svg';
import SectionWelcome from "./components/SectionWelcome";
import Introduce from "./components/Introduce";
import {Blank, MainText, SubTitle, Title} from "./components/atomic";

const App = () => {
  const aboutSSF = useRef(), camp = useRef(), schaedule = useRef();

  return (
    <Container>
      <Header aboutSSF={aboutSSF} camp={camp} schaedule={schaedule}/>
      <SectionWelcome/>
      <Introduce ref={aboutSSF}/>
      <Section2 ref={camp}>
        <Camp>
          <CampTexts>
            <SubTitle>캠프 목록</SubTitle><Blank size={"10px"}/>
            <Title>어떤 캠프가 있을까요?</Title><Blank size={"28px"}/>
            <MainText>웹, 게임, 인공지능, IoT, 해킹까지 여러 분야의 멘토와 함께 소프트웨어 나눔 축제를 즐겨보세요!<br/>소프트웨어과, 정보보호과의 11개의 동아리 캠프가 준비되어있습니다!</MainText>
          </CampTexts><Blank size={"51px"}/>
          <CampList/>
        </Camp>
        <Schaedule ref={schaedule}>
          <CampTexts>
            <SubTitle>캠프 일정</SubTitle><Blank size={"10px"}/>
            <Title>캠프 일정은 어떻게 되나요?</Title><Blank size={"28px"}/>
            <MainText>소프트웨어 나눔 축제는 접수를 통해 참가자를 선정하고, 추후 나눔축제를 진행합니다.</MainText><Blank size={"75px"}/>
          </CampTexts>
          <TimeLine>
            <Circle color={"#38FFDC"}/>
            <Circle color={"#2AD4ED"}/>
            <Circle color={"#1EAFFD"}/>
          </TimeLine><Blank size={"26px"}/>
          <TextLine>
            <TextContainer>
              <Back src={ScdBackDesk_1} width={"223px"}/>
              <ScdTexts>
                <ScdTitle>
                  <DiffColor color={"#2FD7CD"}>8월 21일</DiffColor> 접수 시작
                </ScdTitle>
                <ScdText>SSF 접수를 시작합니다.</ScdText>
              </ScdTexts>
            </TextContainer>
            <TextContainer>
              <Back src={ScdBackDesk_2} width={"240px"}/>
              <ScdTexts>
                <ScdTitle>
                  <DiffColor color={"#2FD7CD"}>8월 27일</DiffColor> 접수 종료
                </ScdTitle>
                <ScdText>참가자 선정 후, 안내문자 발송</ScdText>
              </ScdTexts>
            </TextContainer>
            <TextContainer>
              <Back src={ScdBackDesk_1} width={"223px"}/>
              <ScdTexts>
                <ScdTitle>
                  <DiffColor color={"#2FD7CD"}>9월 2일</DiffColor> SSF 진행
                </ScdTitle>
                <ScdText>캠프 별 나눔축제 진행</ScdText>
              </ScdTexts>
            </TextContainer>
          </TextLine>
        </Schaedule>
      </Section2>
    </Container>
  );
};

const Container = styled.main`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`





const Section2 = styled.div`
  width: 99.1vw;
  height: auto;
  background-color: #F6F8FA;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Camp = styled.div`
  margin: 233px auto 223px auto;
`;
const CampTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: auto;
  height: auto;
`;
const Schaedule = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 234px auto 334px auto;
  width: auto;
  height: auto;
`;
const TimeLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 736px;
  height: 6px;
  border-radius: 20px;
  background: linear-gradient(90deg, #37FFDB 3.13%, #11A9FF 100%);
`;
const Circle = styled.div`
  display: inline-flex;
  background-color: #fff;
  width: 31px;
  height: 31px;
  border-radius: 100%;
  border: ${(props) => props.color} solid 4px;
  filter: drop-shadow(0px 0px 4px rgba(158, 215, 233, 0.38));
`;
const TextLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 698px;
  height: 0;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 1px;
  height: 0;
`;
const Back = styled.img`
  width: ${(props) => props.width};
  height: 128px;
`;
const ScdTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 223px;
  position: relative;
  bottom: calc(128px - 43px);
`;
const ScdTitle = styled.div`
  font-family: SUIT, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #333;
`;
const DiffColor = styled.span`
  color: ${(props) => props.color};
`;
const ScdText = styled.div`
  color: rgba(81, 87, 99, 0.81);
  font-family: SUIT, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
`;

export default App;
