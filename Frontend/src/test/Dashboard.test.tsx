/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom/client';
import Dashboard from '../routes/Dashboard';

let container: Element | DocumentFragment;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

describe('Dashboard', function () {
	it('should display', function () {
		act(() => {
			ReactDOM.createRoot(container).render(<Dashboard />);
		});
		const header = container.querySelector('h1');
		expect(header?.textContent).toBe('hhh');
	});
});
