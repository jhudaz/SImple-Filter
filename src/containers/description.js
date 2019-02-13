import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getOneCoin } from '../actions';

import '../App.css';

class Description extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coin: {}
    }
    this.goBack = this.goBack.bind(this);
  }
  componentDidMount() {
    this.props.getOneCoin(this.props.match.params.coinId).then(() => this.setState({ coin: this.props.reducerApp.coin[0] }))
  }
  goBack(e){
    e.preventDefault()
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <h1>Coin: {this.state.coin.name}</h1>
        <hr/>
        <ul>
          <li>ID: {this.state.coin.id}</li>
          <li>Symbol: {this.state.coin.symbol}</li>
          <li>Rank: {this.state.coin.rank}</li>
          <li>Price: ${this.state.coin.price_usd}USD</li>
        </ul>
        <button
          className="button"
          onClick ={e => this.goBack(e) }
        >
          Go Back
        </button>
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
//reduces
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getOneCoin
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Description);
