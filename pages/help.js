import React from 'react'
import Router from 'next/router'
import Header from '../components/header';
import Navbar from '../components/navbar';
export default class extends React.Component {
  render () {
    return (
      <div>
        <Navbar dashboard={true}/>
        <div className="help">
          HELP
        </div>
        <style jsx>{`
          .help{
            margin-top: 80px;
          }
        `}</style>
      </div>
    )
  }
}
