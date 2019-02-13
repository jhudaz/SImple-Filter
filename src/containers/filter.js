import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";

import { getCoins } from '../actions';

import '../App.css';

class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      coins: []
    }
    this.createList = this.createList.bind(this);
    this.filterList = this.filterList.bind(this);
  }
  componentDidMount() {
    this.props.getCoins().then(() => this.setState({ coins: this.props.reducerApp.allCoins }));
  }
  createList(e, i) {
    return (
      <li key={i}><Link to={`/Description/${this.state.coins[i].id}`}>{e.name}</Link></li>
    )
  }

  filterList(e) {
    this.setState({ coins: this.props.reducerApp.allCoins.filter(a => a.name.toLowerCase().startsWith(e.toLowerCase())) });
  }
  render() {
    return (
      <div>
        <h1>filter</h1>
        <input
          className="inputs"
          type="text"
          onChange={(e) => this.filterList(e.target.value)} />
        <hr />
        <ul>
          {this.state.coins.map((e,i) => this.createList(e,i))}
        </ul>
      </div>
    );
  }
}
//reducers
function mapStateToProps({ reducerApp }) {
  return {
    reducerApp
  }
}
//actions
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCoins
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
