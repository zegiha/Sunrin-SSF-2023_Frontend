import React from 'react';
import styled from "styled-components";
import logoImg from '../img/logo.svg'

const Header = (props) => {
  const clickToMove = (goal, num) => {
    const {offsetTop} = goal.current;
    if (num === 0) window.scrollTo({behavior: "smooth", top: 0});
    else if (num === 1) window.scrollTo({behavior: "smooth", top: offsetTop - 100});
    else if (num === 2) window.scrollTo({behavior: "smooth", top: offsetTop + 140});
    else if (num === 3) window.scrollTo({behavior: "smooth", top: offsetTop - 370})
    else window.scrollTo({behavior: "smooth", top: offsetTop - 70})
  };

  return (
    <Container>
      <Wrapper>
        <LogoButton onClick={() => {clickToMove(props.aboutSSF, 0)}}><Logo src={logoImg} alt={"logoImg"}/></LogoButton>
        <Right>
          <TextButtonList>
            <TextButton onClick={() => {clickToMove(props.aboutSSF, 1)}}>SSF 소개</TextButton>
            <TextButton onClick={() => {clickToMove(props.camp, 2)}}>캠프 목록</TextButton>
            <TextButton onClick={() => {clickToMove(props.schaedule, 3)}}>나눔축제 일정</TextButton>
            <TextButton onClick={() => {clickToMove(props.attend, 4)}}>참가신청</TextButton>
          </TextButtonList>

          <ApplyButton/>
        </Right>
      </Wrapper>
    </Container>
  );
};


const LogoButton = styled.button`
  width: auto;
  height: auto;
  border: 0 solid transparent;
  background-color: transparent;
  cursor: pointer;
`;
const Container = styled.header`
  position: fixed;
  top:0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  z-index: 10;
`

const Wrapper = styled.div`
  width: 1320px;
  margin: 0 auto 0 auto;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
const Logo = styled.img`
  width: 70.05px;
  height: 26px;
`;
const TextButtonList = styled.div`
  display: flex;
  gap: 20px;
  height: 100%;
`;
const TextButton = styled.button`
  font-size: 15px;
  font-weight: 500;
  color: #404348;
  background-color: white;
  border-radius: 6px;
  padding: 10px 12px;
  border: 0;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0,0,0,0.05)
  }
`;
const ApplyButton = () => {
  return(
    <Button>
      신청하기
    </Button>
  );
}
const Button = styled.button`
  font-family: SUIT, sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  background-color: #30BFEB;
  border-radius: 3px;
  display: flex;
  width: 82px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border: 0;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 100%;
`;

export default Header;
