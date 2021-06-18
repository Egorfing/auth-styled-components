import React from 'react';
import styled, { keyframes } from 'styled-components'

const StyledButton = styled.button`
width: 304px;
height: 40px;
margin: 0 10px;
background: #0086A8;
border-radius: 8px;
border: none;
color: white;
cursor: pointer;

&:disabled{
  background: #E3E3E3;
  color: #828282;
  cursor: default;
}
`
const key = keyframes`
0% {transform: rotate(0deg)}
100% {transform: rotate(360deg)}
`
const StyledCircle = styled.div`
  width: 25px;
  height: 25px;
  border: 2px solid white;
  border-right: 2px solid #0086A8;
  border-radius: 50%;
  margin: auto;
  animation: ${key} 2s linear infinite;
`

function Button(props) {
  return (
    
      <StyledButton disabled={props.disabled}>
        {props.animation? <StyledCircle/>:<div>Отправить заявку</div>}
      
    </StyledButton>
    
    
  );
}

export default Button;
