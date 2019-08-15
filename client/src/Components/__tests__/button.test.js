import React from 'react';
import Button from '../Button';
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new EnzymeAdapter() });
import { shallow } from 'enzyme';

describe('Button', () => {
    it('should be defined', () => {
      expect(Button).toBeDefined();
    })
});

describe('Test Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow(
      (<button onClick={mockCallBack}>Hello</button>)
    );
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  })
})
