import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions/index'

class App extends Component {
  render() {
    console.log("props", this.props)
    const text = this.props.add.text || ""
    const count = this.props.add.count
    const actions = this.props.actions
    const inc = actions.inc
    const dec = actions.dec
    const plus2 = actions.plus2
    const plus3 = actions.plus3

    return (
      //引数がaction.payloadに流れる
      <div className="App">
        <h2>Count: { count }</h2>
        <h2>Action: { text }</h2>
        <button onClick={ e => { inc({text: "+1"}) }}>INC</button>
        <button onClick={ e => { dec({text: "-1"}) }}>DEC</button>
        <button onClick={ e => { plus2({text: "+2"}) }}>PLUS2</button>
        <button onClick={ e => { plus3({text: "+3"}) }}>PLUS3</button>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    add: state.add
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(
        {},
        actions
      ),
      dispatch
    ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)