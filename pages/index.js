import React from 'react'
import Router from 'next/router'
import Header from '../components/header';

export default class extends React.Component {
  static getInitialProps ({ query }) {
    return {
      name: query.name,
    }
  }

  constructor (props) {
    super(props)
  }

  render () {
    const { url, name } = this.props

    return (
      <div>
        <Header text={name} />
      </div>
    )
  }
}
