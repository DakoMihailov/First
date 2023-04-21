/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Landing from '../routes/Landing';

let container: Element | DocumentFragment;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	document.body.removeChild(container);
});

test('Landing', () => {
	// render the component on virtual dom
	render(<Landing />);
	// //select the elements you want to interact with
	const typoText = screen.getByTestId('mainTxt');
	expect(typoText).toHaveTextContent('WELCOME TO THE MARKETPLACE');
});
