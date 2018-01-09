import React from 'react'
import Router from 'next/router'
import Dashboard from '../components/dashboard';
import Helpform from '../components/help-form';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        users: [{
          "userId": "alinal",
          "userName": {
            "firstName": "Alina",
            "lastName": "Lodahl"},
          "photoUrl": "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/253094_10101142302648164_1065808377_n.jpg?oh=a3499a650864ce68161cd02ff675761b&oe=5AB28440"
        },{
          "userId": "ellied",
          "userName": {
            "firstName": "Ellie",
            "lastName": "Day"},
          "photoUrl": "https://media.licdn.com/media/AAEAAQAAAAAAAApxAAAAJGVhMDUwOTk1LTliMzUtNDZlZS05YzFmLWFlNDkzYzY3OWFiMQ.jpg"
        }]
    }
  }

  render () {
    return (
      <div className="help-page">
        <Dashboard user={this.state.users[0]} title="get some help" dashboard={true} loggedin="true"/>
        <Helpform />
        <style jsx>{`

        `}</style>
      </div>
    )
  }
}
