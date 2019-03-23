import Header from './header.jsx';
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Redirect } from 'react-router-dom'
var createReactClass = require('create-react-class');



var Layout = createReactClass({

    contextTypes: {
        router: React.PropTypes.object
    },
    
  
    componentDidMount() {
        var self = this;
        const currentRoute = this.props.location.pathname;
        
        if(currentRoute == "/") {
            self.context.router.history.push("/dashboard/home");
        }
    },
    componentDidUpdate() {
    },
    
    render() {
        console.log(this.props.children)
        return (
           
            <div>
                <Header />
                <div>
                {this.props.children}
                </div>
            </div>
        )
        
    }
});

export default Layout;




