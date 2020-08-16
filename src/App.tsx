import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from './redux/store';
import Home from './views/Home';
import Page1 from './views/Page1';
import Page2 from './views/Page2';
import Page3 from './views/Page3';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 768px;
  margin: 0 auto;
  padding-top: 5rem;
`;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Wrapper>
          <Switch>
            <Route path="/page/1">
              <Page1 />
            </Route>
            <Route path="/page/2">
              <Page2 />
            </Route>
            <Route path="/page/3">
              <Page3 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </Provider>
  );
}

export default App;
