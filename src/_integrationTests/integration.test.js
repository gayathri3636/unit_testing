import moxios from 'moxios';
import {testStore} from '../../utils/index';
import {fetchPosts} from '../redux/actions/index';

describe('fetchPosts action', ()=>{
    beforeEach(()=>{
        moxios.install();
    });
    afterEach(()=>{
        moxios.uninstall();
    })

    test('store is updated correctly', ()=> {
        const expectedState= [{
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

    const store = testStore();
    moxios.wait(()=>{
        const request = moxios.requests.mostRecent();
        request.respondWith({
            status:200,
            response:expectedState
        })
    });
    return store.dispatch(fetchPosts())
    .then(()=>{
        const newState=store.getState();
        expect(newState.postReducer).toBe(expectedState);
    })
    })
})