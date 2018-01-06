import React from 'react'
import Router from 'next/router'
import Header from '../components/header';
import Navbar from '../components/navbar';
import Button from '../components/button';
import Largequote from '../components/largequote';

//import landingImage from '../images/landing-image.jpg';
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
        <Navbar loggedin={false}/>
        <div className="landing-page">
          <img className="landing-image" src='../static/landing-image.jpg' width="100%" alt="wocintech stock photo" />
          <div className="entry-point-button-area">
            <Button color="Turquoise" text="get involved"/>
            <Button color="Coral" text="learn more"/>
          </div>
          <Largequote textA="When mentors invest"
                      textOrange=" 30 minutes a week "
                      textB="advising and professional just starting in tech, employers, mentors, and mentees win." />
                      <Largequote textA="Mentor Weekly"
                                  textOrange=" 30 minutes a week "
                                  textB="advising and professional just starting in tech, employers, mentors, and mentees win." />
        </div>
        <style jsx>{`
            .landing-page {
              margin-top: 67px;
            }
            .entry-point-button-area{
              text-align: center;
              padding: 70px;
            }
        `}</style>
        </div>
      )
    }
  }
  //  <Header text={name} />
