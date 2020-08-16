import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { createStore } from '@reduxjs/toolkit';
import Page1 from './Page1';
import rootsReducer from '../redux/reducers';
import { updateTotalParts } from '../redux/reducers/parts';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Page1 /> unit test', () => {
  const getWrapper = (mockStore = createStore(rootsReducer)) => mount(
    <Provider store={mockStore}>
      <Router>
        <Page1 />
      </Router>
    </Provider>,
  );

  it('should disable Next button by default', () => {
    expect(getWrapper().find('button[children="Next"]').prop('disabled')).toBe(true);
  });

  it('should enable Next button when input is filled', () => {
    const store = createStore(rootsReducer);
    store.dispatch = jest.fn();

    const wrapper = getWrapper(store);
    wrapper.find('input').simulate('change', { target: { value: '5' } });

    expect(store.dispatch).toHaveBeenCalledWith(updateTotalParts(5));
    expect(wrapper.find('button[children="Next"]').prop('disabled')).toBe(false);
  });

  it('should not call dispatch if input is invalid', () => {
    const store = createStore(rootsReducer);
    store.dispatch = jest.fn();

    const wrapper = getWrapper(store);
    wrapper.find('input').simulate('change', { target: { value: 'ABC' } });

    expect(store.dispatch).not.toBeCalled();
  });
});
