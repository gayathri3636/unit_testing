import * as Types from '../../actions/types';

export default (state=[], action)=>{
    switch(action.type){
        case Types.GET_POSTS:
            return action.payload;
        default:
            return state;
    }
}