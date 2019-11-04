import checkPropTypes from 'check-prop-types'

export const findByTestArribute = (component, attr) => {
	return component.find(`[data-test='${attr}']`);
}

export const checkProp = (component, expectedProps) => {
	return checkPropTypes(
		component.propTypes,
		expectedProps,
		'props',
		component
	);
}