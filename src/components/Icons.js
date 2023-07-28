import React from 'react';
import styled from "styled-components";
import Git from "../img/icons/github.svg";
import Cloud from "../img/icons/Cloud.svg";
import Android from "../img/icons/Android.svg";
import Unity from "../img/icons/Unity.svg";
import Html from "../img/icons/Html.svg";
import Python from "../img/icons/Python.svg";
import Edit from "../img/icons/Edit.svg";
import ObjectIcon from "../img/icons/ObjectIcon.svg";

const Icons = () => {
  return (
  <>
    <Container>
      <Svg src={Git} height={'176px'} x={'158px'} y={'520px'}/>
      <Svg src={Cloud} height={'155px'} x={'222px'} y={'760px'}/>
      <Svg src={Android} height={'118px'} x={'498px'} y={'814px'}/>
      <Svg src={Unity} height={'152px'} x={'874px'} y={'770px'}/>
      <Svg src={Html} height={'163px'} x={'1085px'} y={'615px'}/>
      <Svg src={Python} height={'153px'} x={'1275px'} y={'812px'}/>
      <Svg src={Edit} height={'190px'} x={'1497px'} y={'561px'}/>
      <Svg src={ObjectIcon} height={'147px'} x={'587px'} y={'624px'}/>
    </Container>
  </>
  );
};
const Container = styled.div`
  position: relative;
  top: 0;
`;
const Svg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  top: ${(props) => props.y};
  left: ${(props) => props.x};
`;

export default Icons;