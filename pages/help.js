import React from 'react'
import Router from 'next/router'
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

export default class extends React.Component {
  render () {
    return (
      <div className="help-page">
        <Navbar dashboard={true} loggedin="true"/>
        <Sidebar profilePhoto="/static/sample-photo-1.jpg" />
        <div className="help">
          HELP
        </div>
        <style jsx>{`
          .help-page{
            background-color: #F4F4F4;
          }
          .help{
            margin-top: 80px;
          }
        `}</style>
      </div>
    )
  }
}
