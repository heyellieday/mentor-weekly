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
          "mentorId": "ellied",
          "goals": "Get an internship or entry-level front-end or full-stack engineering position",
          "experience": "7 months of JS, HTML, CSS.  Almost done with the Thinkful Full-stack Bootcamp",
          "skills": "JavaScript, NodeJS, React, CSS, HTML, JSX, GIT",
          "portfolioUrl": "https://github.com/alodahl",
          "organization": "any size, ideally with an emphasis visual arts or positive impact",
          "availability": "M-F 3-5pm",
          "contact": "alina@email.com"
        },{
          "userId": "ellied",
          "userName": {
            "firstName": "Ellie",
            "lastName": "Day"},
          "photoUrl": "https://media.licdn.com/media/AAEAAQAAAAAAAApxAAAAJGVhMDUwOTk1LTliMzUtNDZlZS05YzFmLWFlNDkzYzY3OWFiMQ.jpg",
          "role": "mentor",
          "mentorId": "ellied",
          "goals": "invest in future engineers",
          "organization": "Mavenlink",
          "experience": "6 years",
          "skills": "career advice, JavaScript, NodeJS, GIT, SQL, NoSQL, React",
          "lookingFor": "mentees interested in coding with JS",
          "contact": "ellie@email.com"
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
