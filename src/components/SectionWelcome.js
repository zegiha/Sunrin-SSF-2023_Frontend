import arrow6 from "../img/arrow6.svg";
import React from "react";
import styled from "styled-components";

const SectionWelcome = (props) => {
  const clickToMove = () => {
    const {offsetTop} = props.aboutSSF.current;
    console.log(props.aboutSSF);
    window.scrollTo({behavior: "smooth", top: offsetTop - 100});
  };

  return (
    <MainScreen>
      <MainScreencontainer>
          <MainScreenTexts>
              <SubTitle>2023 소프트웨어 나눔 축제</SubTitle>
              <MainScreenTitle>"함께 나누고 성장하는 소프트웨어의 향연, <br/>  소프트웨어 나눔 축제로 행복을 만들어요!"</MainScreenTitle>
          </MainScreenTexts>
      </MainScreencontainer>
        <MoreInfoButton onClick={() => {clickToMove()}}>
            {/*<Icon name={"arrow-down"} />*/}
            더 알아보기
        </MoreInfoButton>
        <IconBackground
          src={"background.png"}
        />
      </MainScreen>
  );
}

const IconBackground = styled.img`
  position: absolute;
  bottom: 100px;
  width: 90%;
  margin: 0 auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const SubTitle = styled.div`
  color: var(--blue-2, #30BFEB);
  font-size: 32px;
  font-weight: 600;
`;


const MainScreen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, rgba(235, 254, 255, 0.46) 33.85%, #D6F0FF 98.44%);
`;
const MainScreencontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
    margin-bottom: 500px;
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
  height: 198px;
  color: #0E0F16;
  text-align: center;
  font-size: 66px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -2.64px;
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
    border: 0;
  background: rgba(255,255,255,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
    position: absolute;
    bottom: 0;
    cursor: pointer;
  transition: all 0.3s ease-in-out;
    &:hover {
      scale: 1.06;
    }
    margin-bottom: 60px;
`;

export default SectionWelcome;
