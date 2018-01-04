import React from 'react'
import Router from 'next/router'
import Header from '../components/header';
import Navbar from '../components/navbar';
export default class extends React.Component {
  // static getInitialProps ({ query }) {
  //   return {
  //     name: query.name,
  //   }
  // }
  render () {
    // const { url, name } = this.props
    return (
      <div>
        <Navbar dashboard={false}/>
        <div className="landing-page">
          <p>LANDING PAGE</p>
          <img src="https://www.leeds.ac.uk/forstaff/images/Mentoring_1.jpg" />
        </div>
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
