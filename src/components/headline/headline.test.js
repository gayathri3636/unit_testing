import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index';

import {findByTestAttr, checkProps} from './../../../utils/index';

const setUp=(props={})=>{
    const component=shallow(<Headline {...props} />)
    return component;
}

describe('Headline component', ()=> {
    describe('checking propTypes', ()=>{
        const expectedProps={
            header:'Test Header',
            desc:'Test Desc',
            tempArr:[{
                fName:'Test fName',
                lName:'Test lName',
                email:'test@mail.com',
                age:23,
                onlinestatus:false
            }]
        }
        const propsErr=checkProps(Headline, expectedProps)
        expect(propsErr).toBeUndefined()
    })

    describe('Have props', ()=>{
        let wrapper;
        beforeEach(()=>{
        const props={
            header:'Test Header',
            desc:'Test'
        }
        wrapper=setUp(props)
        })

        it('should render without errors', ()=>{
            const component=findByTestAttr(wrapper, 'headlineComponent')
            expect(component.length).toBe(1)
        })
        it('should render h1', ()=>{
            const h1=findByTestAttr(wrapper, 'header')
            expect(h1.length).toBe(1)
        })
        it('should render desc', ()=>{
            const desc=findByTestAttr(wrapper, 'desc')
            expect(desc.length).toBe(1)
        })
    })
    describe('Have no props', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper=setUp()
        })
        it('should not render', ()=>{
            const noprops=findByTestAttr(wrapper, 'headlineComponent')
            expect(noprops.length).toBe(0)
        })
    })
})