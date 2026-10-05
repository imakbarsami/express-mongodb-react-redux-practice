import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import { counterStore } from './app/store.js'
// import { counterStore } from './services/store/counterStore.js'


createRoot(document.getElementById('root')).render(
  <Provider store={counterStore}>
    <App />
  </Provider>,
)
