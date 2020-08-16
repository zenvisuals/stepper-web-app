import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { createStore } from '@reduxjs/toolkit';
import Page3 from './Page3';
import rootsReducer from '../redux/reducers';
import { clearParts } from '../redux/reducers/parts';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Page3 /> unit test', () => {
  const getWrapper = (mockStore = createStore(rootsReducer)) => mount(
    <Provider store={mockStore}>
      <Router>
        <Page3 />
      </Router>
    </Provider>,
  );

  it('should dispatch reset parts state action', () => {
    const store = createStore(rootsReducer);
    store.dispatch = jest.fn();

    const wrapper = getWrapper(store);

    wrapper.find('button[children="Home"]').simulate('click');

    expect(store.dispatch).toHaveBeenCalledWith(clearParts());
  });
});
