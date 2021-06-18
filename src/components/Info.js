import React from 'react';
import styled from 'styled-components'

const Bold = styled.div`
font-weight: 600;
font-size: 16px;
margin: 10px 0 30px;

`
const Paragraf = styled.div`
font-size: 10px;
margin: 20px 0;
width: 670px;
color: #353238;
`
function Info(props) {
  return (
    <div>
      <img height='70px' src='./skdesignru.png' alt='logo' />
      <Bold>Оставьте заявку и станьте частью нашей команды</Bold>
      <Paragraf>Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных дизайнеров, архитекторов и декораторов, <br />дизайн-бюро и интерьерные студии — все, кто дизайн интерьера сделали своим призванием.</Paragraf>

      <Paragraf>Партнерство мы видим как доверительные отношения, основанные на честности реализации бизнес идей в сфере создания и продаж современной, качественной, удобной, функциональной и эксклюзивной мебели.</Paragraf>

      <Paragraf>Ознакомиться с проектами можете в нашем портфолио. Если Вы оформляете интерьеры жилых или коммерческих помещений — мы с радостью поможем Вам: составим уникальные условия сотрудничества, предоставим 3D модели (уточняйте у менеджеров) и разработаем коммерческое предложение к Вашему проекту или изображениям.</Paragraf>
    </div>
  );
}

export default Info;
