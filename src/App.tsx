import { Provider } from 'solid-urql'

import { Router, pathIntegration } from '@rturnq/solid-router'

import Root from './components/layout/Root'
import { client } from './services/client'

function App() {
  return (
    <Router integration={pathIntegration()}>
      <Provider value={client}>
        <Root />
      </Provider>
    </Router>
  )
}

export default App
