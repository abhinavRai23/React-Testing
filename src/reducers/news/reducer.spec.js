import { types } from '../../actions/types';
import NewsReducer from './reducer'

describe('News Reducer', ()=>{

	it('Should return default state', ()=> {
		const newState = NewsReducer(undefined, {});
		expect(newState).toEqual([]);
	});

	it('Should return a new state', ()=> {
		const news = [
			{ title: 'test1' },
			{ title: 'test2' },
			{ title: 'test3' },
		]
		const newState = NewsReducer(undefined, {
			type: types.GET_NEWS,
			payload: news
		})
		expect(newState).toEqual(news)
	})

})