import { Provider } from 'solid-urql'

import { Router, pathIntegration } from '@rturnq/solid-router'

import Root from './components/layout/Root'

function App() {
  return (
    <Router integration={pathIntegration()}>
        <Root />
    </Router>
  )
}

export default App
