import React from 'react'
import Dashboard from '../components/dashboard';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        users: [{
          "userId": "alinal",
          "userName": {
            "firstName": "Alina",
            "lastName": "Lodahl"},
          "photoUrl": "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/253094_10101142302648164_1065808377_n.jpg?oh=a3499a650864ce68161cd02ff675761b&oe=5AB28440",
          "role": "mentee",
          "mentorId": "ellied"
        },{
          "userId": "ellied",
          "userName": {
            "firstName": "Ellie",
            "lastName": "Day"},
          "photoUrl": "https://media.licdn.com/media/AAEAAQAAAAAAAApxAAAAJGVhMDUwOTk1LTliMzUtNDZlZS05YzFmLWFlNDkzYzY3OWFiMQ.jpg",
          "role": "mentor"
        }]
    }
  }
  // static getInitialProps ({ query }) {
  //   return {
  //     name: query.name,
  //   }
  // }
  render () {
    // const { url, name } = this.props
    return (
      <div>
      <Dashboard user={this.state.users[0]} title="my mentee info" dashboard={true} loggedin="true"/>
        <style jsx>{`
            .landing-page{
              margin-top: 80px;
            }

        `}</style>
        </div>
      )
    }
  }
  //  <Header text={name} />
