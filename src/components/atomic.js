import styled from "styled-components";

export const SubTitle = styled.div`
  color: var(--blue-2, #30BFEB);
  font-size: 23px;
  font-weight: 600;
`;


export const Title = styled.div`
  color: #34373D;
  font-size: 40px;
  font-weight: 700;
  width: ${(props) => props.width};
  height: auto;
`;
export const MainText = styled.div`
  color: #888D98;
  font-size: 22px;
  font-weight: 400;
  line-height: 150%; /* 34.5px */
  width: ${(props) => props.width};
  height: auto;
`;

export const Blank = styled.div`
  height: ${(props) => props.size};
  width: 0;
`;
