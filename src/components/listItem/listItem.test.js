import React from 'react';
import {shallow} from 'enzyme';
import ListItem from './index';
import {findByTestAttr, checkProps} from '../../../utils/index';

describe('ListIem Component', ()=> {
    describe('checking proptypes', () => {
        it('should not throw warning', ()=> {
            const expectedprops={
                title:'ListItem Title',
                desc:'ListItem description'
            }
            const propsErr=checkProps(ListItem, expectedprops)
            expect(propsErr).toBeUndefined()
        })
    })

    describe('component renders', ()=> {
        let wrapper;
        beforeEach(()=> {
            const props={
                title:'ListItem Title',
                desc:'ListItem description'
            }
            wrapper=shallow(<ListItem {...props} />)
        })

        it('should render without error', ()=>{
            const component=findByTestAttr(wrapper, 'listItemcomponent')
            expect(component.length).toBe(1);
        })
        it('should render title',()=>{
            const title=findByTestAttr(wrapper, 'listItemtitle')
            expect(title.length).toBe(1)
        })
        it('should render a description',()=>{
            const desc=findByTestAttr(wrapper, 'listItemdesc')
            expect(desc.length).toBe(1)
        })
        
    })

    describe('should not render', ()=>{
        let wrapper;
        beforeEach(()=> {
            const props={
                desc:'ListItem description'
            }
            wrapper=shallow(<ListItem {...props} />)
        })

        it('component should not render',()=>{
            const component=findByTestAttr(wrapper, 'listItemcomponent');
            expect(component.length).toBe(0)
        })
    })
})