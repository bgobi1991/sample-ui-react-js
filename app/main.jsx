import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Dashboard from './components/Dashboard.jsx'
import NotFound from './components/notfound.jsx'

ReactDOM.render((
     <Router>
         <Switch>
            <Layout>
              <Route path="/dashboard/home" component={Dashboard} />
              <Route path="/notfound" component={NotFound} />
            </Layout>
         </Switch>
      </Router>
     ),
     document.getElementById('app')
);