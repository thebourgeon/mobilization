/**
 * @description - The main.js file will insert the HTML element returned by the Greeter module in the page
 */

 import React from 'react';
 import {render} from 'react-dom';
 import Greeter from './Greeter';

 render(<Greeter />, document.querySelector('#root'));