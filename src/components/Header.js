import React from 'react';
import styled from "styled-components";
import logoImg from '../img/logo.svg'
import {hover} from "@testing-library/user-event/dist/hover";

const Header = (props) => {
  const clickToMove = (goal) => {
    goal.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log('clicked');
  };

  return (
    <Container>
      <Wrapper>
        <Logo src={logoImg} alt={"logoImg"}></Logo>
        <Right>
          <TextButtonList>
            <TextButton onClick={console.log('it clicked')}>SSF 소개</TextButton>
            <TextButton onClick={clickToMove(props.camp)}>캠프 소개</TextButton>
            <TextButton onClick={clickToMove(props.schaedule)}>나눔축제 일정</TextButton>
          </TextButtonList>
          <ApplyButton/>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.header`
  position: fixed;
  top:0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  background: white;
  z-index: 10;
`

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto 0 auto;
  height: 60px;
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
  justify-content: space-between;
  width: 269px;
  height: auto;
`;
const TextButton = styled.button`
  font-family: SUIT, sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #404348;
  
  background-color: transparent;
  border: 0;
  
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
  gap: 46px;
`;

export default Header;