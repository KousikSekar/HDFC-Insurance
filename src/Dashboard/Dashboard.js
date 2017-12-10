import React, { Component } from 'react';
import { ChatFeed, Message } from 'react-chat-ui'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import './animate.min.css';
import single from './images/single.png';
import women from './images/women.png';
// import marriedCouple from './images/marriedCouple.png';
import marriedCoupleWithChildren from './images/marriedcouplewithchildren.png';
import marriedcouplewithhouseloan from './images/marriedcouplewithhouseloan.png'
import './index.css'

class DashBoard extends Component {
  render() {
    let { parameters } = this.props
    let display = null;
    if (parameters !== null) {
      if (parameters.gender === "male") {
        display = <img src={single} className="animated bounce" />
      } else if (parameters.gender === "female") {
        display = <div className='singlefemale'></div>
      }
      if (parameters.status !== "Children" && parameters.Loanstatus !== "Loan" && parameters.status === "married") {
        display = <div className='marriedCouple'></div>
      }
    }

    return (
      <Paper zDepth={1} className='dashboard'>
        {display}
      </Paper>
    );
  }
}
function mapStateToProps(state) {
  const { dashBoardReducers } = state
  const { parameters } = dashBoardReducers;
  return { parameters }
}
export default connect(mapStateToProps)(DashBoard);