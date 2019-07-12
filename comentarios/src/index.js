import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import * as serviceWorker from './serviceWorker'

import 'milligram'
import './index.css'

ReactDOM.render(<Root />, document.getElementById('root'))
serviceWorker.unregister()
