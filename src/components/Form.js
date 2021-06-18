import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import Button from './Button';
import Flex from './Flex';
import HideInput from './HideInput';
import Input from './Input';
import Select from './Select';


const StyledForm = styled.form`
box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
border-radius: 8px;
margin: 0 30px;
padding: 30px 20px;
`

function Form(props) {
  const [cities, setCities] = useState([])
  const [sources, setSources] = useState([])
  const [hideInput, setHideInput] = useState(true)
  const [activeButton, setActiveButton] = useState(true)
  const [animation, setAnimation] = useState(false)
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('/cities.json')
      .then(res => res.json())
      .then(res => setCities(res.map(el => el.name)))
    fetch('/sources.json')
      .then(res => res.json())
      .then(res => setSources(res))

  }, [])

  useMemo(() => {
    if (state.name && state.phone && state.email && state.url && state.city) {
      setActiveButton(false)
    }
  }, [state])

  function formHandler(e) {
    e.preventDefault()
    setAnimation(true)
    setTimeout(() => {
      setAnimation(false)
      setActiveButton(true)
      const answer = JSON.stringify(state)
      console.log(answer)
      e.target.name.value = ''
      e.target.phone.value = ''
      e.target.email.value = ''
      e.target.url.value = ''
      e.target.city.value = ''
      e.target.organization.value = ''
      e.target.recipient.value = ''
      e.target.sources.value = ''
      dispatch({ type: 'del' })
    }, 2000);
  }


  return (
    <StyledForm onSubmit={formHandler}>
      <Flex>
        <Input pattern={'.{2,}'} id={'name'} type={'text'} hold={'Иван'} label={'Ваше имя *'} required={true} />
        <Input pattern={'[0-9]{11}'} id={'phone'} type={'text'} hold={'+7(000)000-00-00'} label={'Номер телефона *'} required={true} />
      </Flex>
      <Flex>
        <Input id={'email'} type={'email'} hold={'example@skdesign.ru'} label={'E-mail *'} required={true} />
        <Input pattern={'.{3,}'} id={'url'} type={'url'} hold={'instagram.com/skde…'} label={'Ссылка на профиль *'} required={true} />
      </Flex>
      <Select title={'Выберите город *'} list={cities} required={true} id={'city'} />
      <Input id={'organization'} type={'text'} hold={'SK Design'} label={'Название организации/студии'} width={'100%'} />
      {hideInput ? <HideInput hidden={hideInput} setHidden={setHideInput} title={'Показать дополнительные поля'} img={'./Vector (1).svg'} /> :
        <HideInput hidden={hideInput} setHidden={setHideInput} title={'Скрыть дополнительные поля'} img={'./Vector.svg'} />}
      <Input hidden={hideInput} id={'recipient'} type={'text'} hold={'ФИО'} label={'Получатель'} width={'100%'} />
      <Select hidden={hideInput} margin={'20px 10px'} title={'От куда узнали про нас?'} list={sources} id={'sources'} />
      <Button disabled={activeButton} animation={animation} />
    </StyledForm>
  );
}

export default Form;
