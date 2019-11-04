export const findByTestArribute = (component, attr) => {
	return component.find(`[data-test='${attr}']`);
}