import React from 'react'
import { connect } from 'react-redux'
import { addbuyCake, subsbuyCake } from "../redux";

function CakeContainer (props) {
  console.log(props);
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <button onClick={props.subsbuyCake}>Sub Cake</button>
      <button onClick={props.addbuyCake}>Add Cake</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    subsbuyCake: () => dispatch(subsbuyCake()),
    addbuyCake: () => dispatch(addbuyCake()),
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CakeContainer)
