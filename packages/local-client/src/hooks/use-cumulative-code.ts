import { useTypedSelector } from './use-typed-selector';

export const useCumulativeCode = (cellId: string) => {
  return useTypedSelector((state) => {
		const { data, order } = state.cells;
		const orderedCells = order.map((id) => data[id]);

		const showFunc = `
			import _React from 'react';
			import _ReactDOM from 'react-dom';
			const rootS = document.querySelector('#root');
			setTimeout(()=>{
				if(rootS.innerHTML === ''){
					rootS.innerHTML = '<div style="color: gray; font-family: cursive;font-size: 16px; opacity: 0.5;">// call show() to print here</div>'
				}
			},55);
				var show = (value) => {
					const root = document.querySelector('#root');
					if(typeof value === 'object'){
						if( value.$$typeof && value.props){
							_ReactDOM.render(value, root);
						}else {
								root.innerHTML = JSON.stringify(value);
						}
					} else {
						root.innerHTML = value;
					}
				}
		`;
		const showFuncNoop = ` var show = () => {}`;
		const cumulativeCode = [];
		for (let c of orderedCells) {
			if (c.type === 'code') {
				if (c.id === cellId) {
					cumulativeCode.push(showFunc);
				} else {
					cumulativeCode.push(showFuncNoop);
				}
				cumulativeCode.push(c.content);
			}
			if (c.id === cellId) {
				break;
			}
		}
		return cumulativeCode;
	}).join('\n');
}