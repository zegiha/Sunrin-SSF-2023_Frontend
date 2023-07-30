import React  from 'react';
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AnAImg from '../img/clubs/AnA.png'
import AppplePiImg from '../img/clubs/AppplePi.png';
import EDCANImg from '../img/clubs/EDCAN.png';
import EmotionImg from '../img/clubs/Emotion.png';
import IWOPImg from '../img/clubs/IWOP.png'
import Layer7Img from '../img/clubs/Layer7.png';
import NEFUSImg from '../img/clubs/NEFUS.png';
import RGImg from '../img/clubs/RG.png'
import TeamLogImg from '../img/clubs/TeamLog.png';
import UniFoxImg from '../img/clubs/UniFox.png';
import Zer0penImg from '../img/clubs/Zer0pen.png';

const campInfo = [
  {
    name: 'AnA',
    img: AnAImg,
    title: 'Socket.io를 이용한 나만의 카톡방 만들기',
    color: '#EDA12F'
  },
  {
    name: 'App:ple PI',
    img: AppplePiImg,
    title: 'Android Studio를 이용한 심리테스트 앱 만들기',
    color: '#D1272A'
  },
  {
    name: 'EDCAN',
    img: EDCANImg,
    title: 'Android Studio로 나만의 퀴즈 앱 만들기',
    color: '#00A9CE'
  },
  {
    name: 'Emotion',
    img: EmotionImg,
    title: '외국에서 살아남자!: 사진번역 AI모델 제작하기',
    color: '#3198D4'
  },
  {
    name: 'IWOP',
    img: IWOPImg,
    title: '웹을 나만의 무대로 만들기',
    color: '#66DC3D'
  },
  {
    name: 'Layer7',
    img: Layer7Img,
    title: 'USB로 친구 컴퓨터 해킹하기',
    color: '#666476'
  },
  {
    name: 'NEFUS',
    img: NEFUSImg,
    title: '누가봐도 좀~~멋있는 투석기 RC카 만들기',
    color: '#3565DA'
  },
  {
    name: 'RG',
    img: RGImg,
    title: 'RG와 함께하는 유니티의 슈팅게임',
    color: '#666CC1'
  },
  {
    name: 'TeamLog',
    img: TeamLogImg,
    title: 'Javacsript로 검 강화 게임 만들기',
    color: '#F25827'
  },
  {
    name: 'UniFox',
    img: UniFoxImg,
    title: 'Python으로 만드는 테트리스 게임',
    color: '#EC851A'
  },
  {
    name: 'Zer0pen',
    img: Zer0penImg,
    title: '유니티로 만드는 스릴있는 점프게임',
    color: '#FFDA18'
  },
];

const CampList = () => {
  return (
    <>
      <Desktop/>
    </>
  );
};
const StyledSwiper = styled(Swiper)`
  width: 1320px;
  height: 586px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const Desktop = () => {
  return(
    <>
      <StyledSwiper
        modules={[Pagination, Navigation]}
        className="banner"
        spaceBetween={3}
        slidesPerView={1}
        navigation={true}
        pagination={{clickable: true}}
      >
        {[...Array(3)].map((_, i) => {
          return( <CardList key={i}
                            style={{
                              display:'flex',
                              gap:'25px',
                              justifyContent:'center'
                            }}
          >
            {[...Array(4)].map((_, j) => {
              const info = campInfo[i * 4 + j];
              if(!info) return null;
              return (
                <Card color={info.color} img={info.img} name={info.name} title={info.title}/>
              );
            })}
          </CardList>)
        })}
      </StyledSwiper>
    </>
  )
};
const CardList = styled(SwiperSlide)`
  display: flex;
  align-items: flex-start;
`;
const Card = (props) => {
  return(
    <CardContainer>
      <ClubImg src={props.img}/>
      <CampTitle>{props.title}</CampTitle>
      <ClubName color={props.color}>{props.name}</ClubName>
    </CardContainer>
  )
};
const CardContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 310px;
  border: 0;
  background: none;
`;
const ClubImg = styled.img`
  width: 310px;
  height: 440px;
  border: 1px solid #DAE1E8;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 0px rgba(200, 213, 222, 0.25);
`;
const CampTitle = styled.div`
  color: #454D54;
  text-align: center;
  font-family: SUIT, sans-serif;
  font-size: 23px;
  width: 223px;
  line-height: 150%; /* 34.5px */
  margin-top: 20px;
  letter-spacing: -1.38px;
`;
const ClubName = styled.div`
  color: ${(props) => props.color};
  text-align: center;
  font-family: SUIT, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 33px */
  letter-spacing: -1.32px;
  margin-top: 6px;
`;

export default CampList;