import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'


const StyledBlock = styled.div`
position: relative;
margin: 10px 10px;

`


const StyledLabel = styled.label`
position: absolute;
top: -5px;
left: 8px;
font-size: 9px;
color: ${({ color }) => color || '#828282'};;
z-index: 2;
background: white;
padding: 0 4px;

`
const StyledInput = styled.input`
border: 2px solid #E3E3E3;
border-radius: 8px;
width: ${({ width }) => width || '142px'};
height: 40px;
padding: 10px;
color: #CDCAD0;
font-size: 12px;
outline: none;
&:focus{
  border: 2px solid #0086A8;
}
&:-webkit-autofill {
  -webkit-box-shadow: inset 0 0 0 50px #fff !important;
}
`
function Input(props) {

  const [color, setColor] = useState('#828282')
  const input = useRef()
  const dispatch = useDispatch()

  function inputHandler() {
    dispatch({ type: props.id, payload: input.current.value })
  }
  return (
    <StyledBlock hidden={props.hidden}>
      <StyledLabel color={color} htmlFor={props.id}>{props.label}</StyledLabel>
      <StyledInput ref={input} pattern={props.pattern} onChange={inputHandler} onFocus={() => setColor('#0086A8')} onBlur={() => setColor('#828282')} required={props.required} width={props.width} id={props.id} name={props.id} type={props.type} placeholder={props.hold} />
    </StyledBlock>
  );
}

export default Input;
