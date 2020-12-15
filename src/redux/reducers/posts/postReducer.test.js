import * as Types from '../../actions/types';
import postReducer from './postReducer';

describe('postReducer', ()=>{
    it('should return default state', () => {
        const newState=postReducer(undefined, {});
        expect(newState).toEqual([])
    })

    it('should return new state if it is receiving type', ()=>{
        const posts=[{title:'Test1'}, {title:'test2'}, {title:'Test3'}]
        const newState=postReducer(undefined, {
            type:Types.GET_POSTS,
            payload:posts
        });
        expect(newState).toEqual(posts);
    })
})