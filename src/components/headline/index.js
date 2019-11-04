import React from 'react';
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
