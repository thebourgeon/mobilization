/**
 * @description - The Greeter.js is simply a function that returns a new HTML element
 */

import React, {Component, PropTypes} from 'react';
import { people, test } from '../AlaSQl/view.js';

export default class Greeter extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    people()
      .then((res) => this.setStateComponent(res));;
  }

  setStateComponent(data) {
    this.setState({
      data: data
    });
  }

  render() {
    if (!this.state.data) return;

    return (
      <section>
        <div className="helloGuys">Hello world!!! It's my first appliction!!!</div>
        <ul>
          {this.state.data.map((people, i) => {
            return (
              <li key={i}>
                <p>name: {people.name}</p>
                <p>age: {people.age}</p>
              </li>
            )
          })}
        </ul>
      </section>
    );
  }
}