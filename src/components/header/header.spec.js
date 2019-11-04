import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'
import { findByTestArribute } from '../../utility'

describe('Header Component', ()=>{

    let component;
    beforeEach(()=>{
        component = shallow(<Header />)
    })

    it('Should render logoImg', ()=>{
        let logo = findByTestArribute( component, 'logo' )
        expect(logo.length).toBe(1)
    })
})