import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types"; 
import withClass from "../../../hoc/WithClass"
import classes from './Person.css';
import AuthContext from "../../../context/auth-context"; 


class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef(); 
  }

  static contextType = AuthContext; 

  componentDidMount() {
    this.inputElementRef.current.focus(); 
  }

  render() {
    return (
      <Fragment>
        <AuthContext.Consumer>
          {(context) => { context.authenticated ? <p>Authenticated</p> : <p>Not Allowed</p>}}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input 
          type="text" 
          ref={this.inputElementRef}
          onChange={this.props.changed} 
          value={this.props.name} 
        />
      </Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func, 
  changed: PropTypes.func, 
  name: PropTypes.string, 
  age: PropTypes.number
}; 

// Exporting functional component, which itself returns Person component that has props which need to be spread
export default withClass(Person, classes.Person);
