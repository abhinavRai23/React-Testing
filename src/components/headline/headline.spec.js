import React from 'react'
import { shallow } from 'enzyme'
import Headline from './index'

import { findByTestArribute, checkProp } from '../../utility'

const setUp = (props={}) => {
    return shallow(<Headline {...props}/>);
}

describe('Headline Component', ()=>{

    describe('Checking Proptypes', ()=> {

        it('Should not throw a warning', ()=> {
            const expectedProps = {
                headline: 'Test headline',
                desc: 'test desc',
                dataArr: [{
                    fname: 'test fname',
                    lname: 'test lname',
                    age: 55,
                    online: false
                }]
            }

            const propsErr = checkProp(Headline, expectedProps);
            expect(propsErr).toBeUndefined();
        })

    })

    describe('Have props', ()=> {
        let wrapper;
        const props = {
            headline: 'Test headline',
            desc: 'test description'
        }
        beforeEach(()=>{
            wrapper = setUp(props);
        })

        it('Should render Healine Section', ()=>{
            const component = findByTestArribute( wrapper, 'headlineWrapper' )
            expect(component.length).toBe(1)
        })
        it('Should render Healine', ()=>{
            let component = findByTestArribute( wrapper, 'headline' )
            expect(component.length).toBe(1)
        })
        it('Should render desc', ()=>{
            let component = findByTestArribute( wrapper, 'desc' )
            expect(component.length).toBe(1)
        })
    })

    describe('Have no props', ()=> {
        let wrapper;
        const props = {
            headline: '',
            desc: ''
        }
        beforeEach(()=>{
            wrapper = setUp(props);
        })

        it('Should not render Healine Section', ()=>{
            const component = findByTestArribute( wrapper, 'headlineWrapper' )
            expect(component.length).toBe(0)
        })
    })
})