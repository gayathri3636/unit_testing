import App from './App';
import {shallow} from 'enzyme';
import {findByTestAttr, testStore} from '../utils/index';
import React from 'react';

const setUp= (initialState={}) => {
    const store=testStore(initialState);
    const wrapper=shallow(<App store={store} />).childAt(0).dive()
    return wrapper;
}

describe('App component', ()=>{

    let wrapper;
    beforeEach(()=>{
        const initialState={
            postReducer:[{
                title:'Example title1',
                body:'Example body'
            },
            {
                title:'Example title2',
                body:'Example body'
            },
            {
                title:'Example title3',
                body:'Example body'
            }
        ]
        }
        wrapper=setUp(initialState)
    })

    it('should render without errors', ()=>{
        const component=findByTestAttr(wrapper, 'appcomponent');
        expect(component.length).toBe(1);
    })
})