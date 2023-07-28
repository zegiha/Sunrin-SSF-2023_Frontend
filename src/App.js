import React, { useRef } from 'react';
import Header from "./components/Header";
import styled from "styled-components";
import arrow6 from "./img/arrow6.svg";
import CampList from "./components/CampList";
import ScdBackDesk_1 from './img/ScdBackDesk_1.svg';
import ScdBackDesk_2 from './img/ScdBackDesk_2.svg';
import Icons from "./components/Icons";

const App = () => {
  const aboutSSF = useRef(), camp = useRef(), schaedule = useRef();

  return (
    <div>
      <Header aboutSSF={aboutSSF} camp={camp} schaedule={schaedule}/>
      <Icons/>
      <MainScreen>
        <MainScreencontainer>
          <MainScreenTexts>
            <SubTitle>2023 소프트웨어 나눔 축제</SubTitle>
            <MainScreenTitle>"함께 나누고 성장하는 소프트웨어의 향연, 소프트웨어 나눔 축제로 행복을 만들어요!"</MainScreenTitle>
          </MainScreenTexts>
          <MoreInfoButton>
            <img src={arrow6} alt="underArrowImg"/>
            더 알아보기
          </MoreInfoButton>
        </MainScreencontainer>
      </MainScreen>
      <button onClick={alert('시발')}>test</button>
      <AboutSSF ref={aboutSSF}>
        <AboutSSFTexts>
          <SubTitle>행사 소개</SubTitle><Blank size={"24px"}/>
          <Title width={"489px"}>선린 소프트웨어<br/>나눔 축제란 무엇일까요?</Title><Blank size={"50px"}/>
          <MainText width={"713px"}>선린인터넷고등학교 소프트웨어 나눔 축제, SSF는 2018년부터 개최된<br/>선린인터넷고등학교의 최대 축제 중 하나입니다. 먼저 소프트웨어를 경험한<br/>사람들이 미래 세대에게 소프트웨어에 대한 경험을 나누고, 다양한 소프트웨어를<br/>직접 만들고 체험해볼 수 있는 행사입니다</MainText><Blank size={"20px"}/>
          <MainText width={"750px"}>축제에는 수도권에 거주하는 모든 중학생들이 신청할 수 있으며, 학생들은 게임 개발, 웹 및 서버 개발 등 다양한 소프트웨어 분야에 대해 체험해볼 수 있습니다.</MainText>
        </AboutSSFTexts>
        <AboutSSFPictures>
          <Picture/>
          <Picture gap={"107px"}/>
        </AboutSSFPictures>
      </AboutSSF>
      <Section2>
        <Camp ref={camp}>
          <CampTexts>
            <SubTitle>캠프 목록</SubTitle><Blank size={"10px"}/>
            <Title>어떤 캠프가 있을까요?</Title><Blank size={"28px"}/>
            <MainText>웹, 게임, 인공지능, IoT, 해킹까지 여러 분야의 멘토와 함께 소프트웨어 나눔 축제를 즐겨보세요!<br/>소프트웨어과, 정보보호과의 11개의 동아리 캠프가 준비되어있습니다!</MainText>
          </CampTexts><Blank size={"81px"}/>
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
    </div>
  );
};

const MainScreen = styled.div`
  width: 99.1vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, rgba(235, 254, 255, 0.46) 33.85%, #D6F0FF 98.44%);
`;
const MainScreencontainer = styled.div`
  margin: 261px auto 261px auto;
  width: 1041px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  gap: 125px;
`;
const MainScreenTexts = styled.div`
  width: 100%;
  height: 254px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const MainScreenTitle = styled.div`
  width: 1041px;
  height: 198px;
  color: #0E0F16;
  text-align: center;
  font-size: 66px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -3.96px;
`;
const SubTitle = styled.div`
  color: var(--blue-2, #30BFEB);
  font-size: 23px;
  font-weight: 600;
`;
const MoreInfoButton = styled.button`
  color: #3A4048;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 150%; /* 36px */
  letter-spacing: -1.44px;
  width: 222px;
  height: 72px;
  border-radius: 62px;
  border: 1px solid #DADADA;
  background: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
`;
const AboutSSF = styled.div`
  margin: 141px auto 141px auto;
  width: 1264px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AboutSSFTexts = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  color: #34373D;
  font-size: 40px;
  font-weight: 700;
  width: ${(props) => props.width};
  height: auto;
`;
const MainText = styled.div`
  color: #888D98;
  font-size: 22px;
  line-height: 150%; /* 34.5px */
  width: ${(props) => props.width};
  height: auto;
`;
const Blank = styled.div`
  height: ${(props) => props.size};
  width: 0;
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