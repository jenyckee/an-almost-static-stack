import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import Home from './views/Home'
import About from './views/About'
import NoMatch from './views/NoMatch'
import Wrapper from './components/Wrapper'
import Title from './components/Title'
import Nav from './components/Nav'
import NavLink from './components/NavLink'

const title = 'You Are Doing Great'
const routes = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true
  }, {
    title: 'About',
    path: '/about',
    component: About
  }
]

class App extends Component {
  render () {
    return <div>{this.props.entries.map(e => <span>{e.fields.description.content[0].content[0].value}</span>)}</div>
  }
}

export default App
