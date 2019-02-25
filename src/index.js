import React from 'react'
import { render } from 'react-snapshot'
import App from './App'
import './index.css'
import runBoilerplate from './content'

const rootEl = document.getElementById('root')
runBoilerplate(entries => render(<App entries={entries}/>, rootEl))

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(<NextApp />, rootEl)
  })
}
