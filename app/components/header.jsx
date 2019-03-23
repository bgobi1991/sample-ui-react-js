import React from 'react'
import ReactDOM from 'react-dom'
var createReactClass = require('create-react-class');

var header = createReactClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  
  componentDidMount: function() {
      //ReactDOM.findDOMNode(this.refs.headerrefs).setAttribute('vbs-lpanel-effect', 'shrink');
      //ReactDOM.findDOMNode(this.refs.vbspostype).setAttribute('vbs-position-type', 'relative');
  },
  logoutUser() {
    var self = this;
    logout(function(res) {
          var result = JSON.parse(res);
          if(result.status) {
              Auth.deauthenticateUser();
              self.context.router.history.push("/login");
          }
      });
  },
  
  render() {
    return <header>
             <div className="container-fluid">   
                <div className="row">
                    <div className="pull-left"><h1>Project Heading</h1></div>
                  <div className="pull-right"><a className="setting" href="" title=""><i className="fas fa-cog"></i></a>  </div>
               </div>  
              </div>  
          </header>
  }
});

export default header;
