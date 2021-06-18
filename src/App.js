import React from 'react';
import styled from 'styled-components'
import store from './redux/store';
import { Provider } from 'react-redux';
import Flex from './components/Flex';
import Form from './components/Form';
import Info from './components/Info';


const AppWrapper = styled.div`
width:100%;
min-height: 100vh;
font-family: 'Open Sans', sans-serif;
`

function App() {
  return (
    <AppWrapper>
      <Flex justify={'center'} align={'center'} margin={'15em'}>
        <Info />
        <Provider store={store}>
          <Form />
        </Provider>
      </Flex>
    </AppWrapper>
  );
}

export default App;
