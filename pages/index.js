import React from 'react'
import Router from 'next/router'
import Header from '../components/header';
import Navbar from '../components/navbar';
import Button from '../components/button';
import Infographic from '../components/infographic';
import Largequote from '../components/largequote';
import Bubblequote from '../components/bubblequote';

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
          <div className="landing-image-div">
            <div className="title-div">
              <h1 className="title">mentor weekly</h1>
              <h2 className="tagline">a better mentoring platform for those in tech</h2>
            </div>
          </div>
          <div className="entry-point-button-area">
            <Button size="large" color="Turquoise" text="get involved"/>
            <Button size="large" color="Coral" text="learn more"/>
          </div>
          <div>
            <Infographic textFloat="right" url="https://c2.staticflickr.com/2/1720/25167694534_a664058532_b.jpg" title="gain candidates" text="As the tech industry continues to grow and innovate, employers need a way to access quality candidates. Mentor Weekly provides employers with a potential hiring pool of professionals that their employees already have experience with. Mentors gain leadership skills, and companies invest in the future of the field. " />
            <Infographic textFloat="left" url="https://c2.staticflickr.com/2/1581/25171573743_72588bb84d_b.jpg" title="gain experience" text="Professionals new to tech need experience, advice, and most importantly, networking opportunities. Mentoring gives junior engineers valuable insights not only into coding, but into the roles, tools, and strategies that are essential to their chosen field." />
          </div>
          <Largequote textA="Mentor Weekly"
                      textOrange=" matches mentors & mentees "
                      textB="based on their strengths and goals." />
          <div className="screenshot-div">
            <img className="screenshot" src="/static/dashboard-screen-shot.jpg" />
          </div>
          <div className="bubblequotes-div">
            <Bubblequote author="Vanessa Hurst" role="Co-founder of " org="Girl Develop It" text="“Feeling a little uncomfortable with your skills is a sign of learning, and continuous learning is what the tech industry thrives on! It’s important to seek out environments where you are supported, but where you have the chance to be uncomfortable and learn new things.”" />
            <Bubblequote author="Ellie Day" role="Founder of " org="Mentor Weekly" text="“If you want to grow as a Software Engineer, teach what you’ve learned to others as soon as possible.”" />
            <Bubblequote author="Emily Whiting" role="Assistant Professor, " org="Dartmouth" text="“Without having mentors at an authoritative level saying, ‘You deserve this sort of experience; you should apply for this program, because you’re strong enough; those are the sorts of things I wouldn’t necessarily have done without a strong mentoring voice to push me.”" />
          </div>
          <Largequote textA="When mentors invest"
                      textOrange=" 30 minutes a week "
                      textB="advising and professional just starting in tech, employers, mentors, and mentees win." />

        </div>
        <style jsx>{`
            .landing-page{
              font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
            }
            .landing-image-div {
              background-image: url('/static/landing-image.jpg');
              background-size: cover;
              background-repeat: no-repeat;
              height: 550px;
              text-align: center;
              position: relative;
            }
            .title-div{
              color: white;
              position: relative;
              top: 50%;
              transform: translateY(-50%);
              margin: 0 auto;
            }
            .title{
              font-weight: 100;
              font-size: 3.5em;
              margin: 0;
            }
            .tagline{
              font-weight: 200;
              margin: 0;
              color: #ffdacc;
            }
            .entry-point-button-area{
              text-align: center;
              padding: 60px;
            }
            .screenshot{
              display: block;
              width: 80%;
              margin: 0 auto 120px auto;
              filter: drop-shadow(0 0 15px #9E9E9E);
            }
            .bubblequotes-div{
              background-color: Turquoise;
              clear: both;
              padding: 30px;
              height: 500px;
            }

            @media only screen and (max-width: 700px) {
              .landing-image-div {
                height: 400px;
              }
            @media only screen and (max-width: 500px) {
              .landing-image-div {
                height: 300px;
              }
            }
        `}</style>
        </div>
      )
    }
  }
  //  <Header text={name} />
