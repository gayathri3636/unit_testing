import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from '../../../utils/index';
import Button from './index';

describe('shared Button', ()=> {
    describe('checking proptypes', ()=>{
        it('should not throw a warning', ()=> {
            const expectedProps= {
                buttonText: 'Example button text',
                emitEvent: ()=> {

                }
            }
            const propsErr= checkProps(Button, expectedProps)
            expect(propsErr).toBeUndefined()
        })
    })

    describe('renders', () => {
        let wrapper;
        let mockFunc;
        beforeEach(()=>{
            mockFunc=jest.fn()
            const props={
                buttonText: 'Example button text',
                emitEvent: mockFunc
            }
            wrapper=shallow(<Button {...props} />)
        })
        it('should render a button', ()=>{
            const button=findByTestAttr(wrapper, 'buttonComponent')
            expect(button.length).toBe(1)
        });

        it('should emit callback on click event', ()=>{
            const button=findByTestAttr(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback=mockFunc.mock.calls.length;
            expect(callback).toBe(1)
        })
    })
    
})