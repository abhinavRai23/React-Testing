import React from 'react';
import Proptypes from 'prop-types';
import './style.scss';

export default class Headline extends React.Component{
	render(){
		const { headline, desc } = this.props
		
		if(!headline)
			return null;

		return(
			<div data-test='headlineWrapper'>
				<h1 data-test='headline'>{headline}</h1>
				<p data-test='desc'>{desc}</p>
			</div>
		)
	}
}

Headline.propTypes = {
	headline: Proptypes.string.isRequired,
	desc: Proptypes.string.isRequired,
	dataArr: Proptypes.arrayOf(Proptypes.shape({
		fname: Proptypes.string,
		lname: Proptypes.string,
		age: Proptypes.number,
		online: Proptypes.bool
	}))
}