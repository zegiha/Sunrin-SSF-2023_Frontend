import React, { useRef } from 'react';
import Header from "./components/Header";
import styled from "styled-components";
import arrow6 from "./img/arrow6.svg";
import CampList from "./components/CampList";
import ScdBackDesk_1 from './img/ScdBackDesk_1.svg';
import ScdBackDesk_2 from './img/ScdBackDesk_2.svg';
import SectionWelcome from "./components/SectionWelcome";
import {Blank, MainText, SubTitle, Title} from "./components/atomic";
import Footer from "./components/Footer";

const App = () => {
  const aboutSSF = useRef(), camp = useRef(), schaedule = useRef(), attend = useRef();
  return (
    <Container>
      <Header aboutSSF={aboutSSF} camp={camp} schaedule={schaedule} attend={attend}/>
      <SectionWelcome aboutSSF={aboutSSF}/>
      <Introduce ref={aboutSSF}>
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
        <Attend ref={attend}>
          <SubTitle>참가신청</SubTitle><Blank size={"10px"}/>
          <Title>이제 신청해볼까요?</Title><Blank size={"50px"}/>
          <AttendBox>
            <AttendTexts>
              <AttendTitle><DiffColor color={"#23FBD6"}>어떻게</DiffColor> 신청하나요?</AttendTitle><Blank size={"15px"}/>
              <AttendContents>아래의 버튼을 통해 신청 접수 폼으로 이동할 수 있어요.</AttendContents><Blank size={"15px"}/>
            </AttendTexts><Blank size={"100px"}/>
            <AttendTexts>
              <AttendTitle>신청 결과는 <DiffColor color={"#30BFEB"}>언제</DiffColor> 알 수 있나요?</AttendTitle><Blank size={"15px"}/>
              <AttendContents>아래의 버튼을 통해 신청 접수 폼으로 이동할 수 있어요.</AttendContents><Blank size={"15px"}/>
            </AttendTexts>
          </AttendBox><Blank size={"70px"}/>
          <AttendButton>신청하러 가기</AttendButton>
        </Attend>
      </Section2>
      <Footer/>
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




const Wrapper = styled.div`
  width: 1320px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: auto;
  `;


const Introduce = styled.section`
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
const Attend = styled.div`
  margin: 293px auto 293px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AttendBox = styled.div`
  width: 1320px;
  height: 560px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #E6E6E6;
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AttendTexts = styled.div`
  width: 950px;
  height: auto;
  border-bottom: 2px solid #D4D4D4;
`;
const AttendTitle = styled.div`
  color: var(--text-main, #333);
  width: auto;
  height: auto;
  /* SUIT.semibold.32 */
  font-family: SUIT, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const AttendContents = styled.div`
  color: var(--text-sub, #888D98);
  width: auto;
  height: auto;
  /* SUIT.medium.22 */
  font-family: SUIT, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const AttendButton = styled.button`
  display: flex;
  width: 455px;
  height: 100px;
  justify-content: center;
  align-items: center;
  border: 0 solid transparent;
  border-radius: 16px;
  background: linear-gradient(180deg, #23CAFF 0%, #5CE9CF 100%);
  box-shadow: 0 4px 20px 0 rgba(46, 218, 210, 0.10);
  font-family: SUIT, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #FFF;
  transition: all 0.4s ease-in-out;
  &:hover{
    background: #FFF;
    color: #25282B;
    border: 2px solid transparent;
    border-image: linear-gradient(135deg, #23CAFF 0%, #5CE9CF 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
`;

export default App;
