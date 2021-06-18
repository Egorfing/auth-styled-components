import React, { useRef, useState } from 'react';
import { useDispatch} from 'react-redux';
import styled from 'styled-components'
import idGeneration from '../idGeneration'


const StyledBlock = styled.div`
position: relative;
margin:${({ margin }) => margin || '10px 10px 20px'};
`

const StyledSelect = styled.select`
border: 2px solid #E3E3E3;
position: relative;
border-radius: 8px;
height: 40px;
width: 100%;
padding: 10px;
font-size: 12px;
cursor: pointer;
outline: none;
&:focus{
border: 2px solid #0086A8;
}
`
const StyledLabel = styled.label`
position: absolute;
opacity: ${({ label }) => label || '0'};
top: -5px;
left: 8px;
font-size: 9px;
color: #0086A8;
z-index: 10;
background: white;
padding: 0 4px;

`

function Select(props) {

  const [label, setLabel] = useState('0')
  const dispatch = useDispatch()
  const select = useRef()

  function selectHandler() {
    dispatch({ type: props.id, payload: select.current.value })
  }
  return (
    <StyledBlock margin={props.margin} hidden={props.hidden}>
      <StyledLabel label={label}>{props.title}</StyledLabel>
      <StyledSelect defaultValue='' ref={select} name={props.id} list={props.list} onChange={selectHandler} onFocus={() => setLabel('100%')} onBlur={() => setLabel('0')}>
        <option value='' disabled hidden>{props.title}</option>
        {props.list ? props.list.map(el => <option value={el} key={idGeneration()}>{el}</option>) : <option></option>}
      </StyledSelect>
    </StyledBlock>
  );
}

export default Select;
