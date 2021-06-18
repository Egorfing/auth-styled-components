import React from 'react';
import styled from 'styled-components'


const Hide = styled.div`
font-size: 12px;
display: flex;
margin: 20px 10px;
cursor: pointer;
`
const StyledImg = styled.img`
margin: 0 10px;
`

function HideInput(props) {

  const {setHidden} = props
  function hiddenHandler(){
    setHidden(e=>!e)
  }

  return (
    <Hide onClick={hiddenHandler}>
      <div>{props.title}</div>
      <StyledImg src={props.img} alt='arrow'/>
    </Hide>
  );
}

export default HideInput;
