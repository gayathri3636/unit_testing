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
        beforeEach(()=>{
            const props={
                buttonText: 'Example button text',
                emitEvent: ()=> {

                }
            }
            wrapper=shallow(<Button {...props} />)
        })
        it('should render a button', ()=>{
            const button=findByTestAttr(wrapper, 'buttonComponent')
            expect(button.length).toBe(1)
        })
    })
    
})