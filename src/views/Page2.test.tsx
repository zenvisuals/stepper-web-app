import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { createStore } from '@reduxjs/toolkit';
import Page2 from './Page2';
import rootsReducer from '../redux/reducers';
import { updateTotalParts, updatePart } from '../redux/reducers/parts';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Page2 /> unit test', () => {
  const getWrapper = (mockStore = createStore(rootsReducer)) => mount(
    <Provider store={mockStore}>
      <Router>
        <Page2 />
      </Router>
    </Provider>,
  );

  it('should disable Next button by default', () => {
    expect(getWrapper().find('button[children="Next"]').prop('disabled')).toBe(true);
  });

  it('should create 50 inputs if total parts is 50', () => {
    const store = createStore(rootsReducer);
    store.dispatch(updateTotalParts(50));

    const wrapper = getWrapper(store);

    expect(wrapper.find('input').length).toBe(50);
  });

  it('should enable Next button when input is filled and equals to 100', () => {
    const store = createStore(rootsReducer, { parts: { totalParts: 5, parts: ['', '', '', '', ''] } });

    const wrapper = getWrapper(store);

    wrapper.find('input#part1').simulate('change', { target: { value: '20' } });
    wrapper.find('input#part2').simulate('change', { target: { value: '20' } });
    wrapper.find('input#part3').simulate('change', { target: { value: '10' } });
    wrapper.find('input#part4').simulate('change', { target: { value: '50' } });
    wrapper.find('input#part5').simulate('change', { target: { value: '0' } });

    expect(wrapper.find('button[children="Next"]').prop('disabled')).toBe(false);
  });

  it('should not enable Next button when total equals to 100 but not all inputs filled', () => {
    const store = createStore(rootsReducer, { parts: { totalParts: 3, parts: ['', '', ''] } });

    const wrapper = getWrapper(store);

    wrapper.find('input#part1').simulate('change', { target: { value: '50' } });
    wrapper.find('input#part2').simulate('change', { target: { value: '50' } });

    expect(wrapper.find('button[children="Next"]').prop('disabled')).toBe(true);
  });

  it('should dispatch 2 times when 2 inputs are changed', () => {
    const store = createStore(rootsReducer, { parts: { totalParts: 2, parts: ['', ''] } });
    store.dispatch = jest.fn();

    const wrapper = getWrapper(store);

    wrapper.find('input#part1').simulate('change', { target: { value: '40' } });
    wrapper.find('input#part2').simulate('change', { target: { value: '60' } });

    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect(store.dispatch).toHaveBeenNthCalledWith(1, updatePart({ index: 0, value: 40 }));
    expect(store.dispatch).toHaveBeenNthCalledWith(2, updatePart({ index: 1, value: 60 }));
  });
});
