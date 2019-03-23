import React from 'react'

import {getresponse} from "../stores/dataStore.js";

var createReactClass = require('create-react-class');

var dashBoard = createReactClass({
  getInitialState : function() {
    
    return {
        active_class: "grid_active",
        responseData: [],
        oldresponseData: [],
        searchconcept: "all",
        query: "",
        key: "node",
        status: ""
    };
  },
  handleList() {
    this.setState({"active_class": "lest_active"});
  },
  handleGrid() {
    this.setState({"active_class": "grid_active"});
  },
  componentDidMount: function() {
    this.loadData("node");

  },
  loadData() {
      var postParms = {
          "key": this.state.key,
          "searchconcept": this.state.searchconcept,
          "query": this.state.query
      }
      getresponse(postParms, function(data) {
          //console.log(data);
          this.setState({"responseData": data, "oldresponseData": data});
      }.bind(this));
  },
  handleChange(e) {
      this.setState({"searchconcept": e.target.value});
  },
  tabChange(e) {
      let _this = this;
      this.setState({"key": e.target.name}, function() {
          _this.loadData();
      });
      
  },
  searchResult(e) {
      this.loadData();
  },
  searchQry(e) {
    this.setState({"query": e.target.value});
  },
  searchbyStatus(e) {
    if(e.target.value == "") {
      this.setState({"responseData": this.state.oldresponseData});
    } else {
      var res = [];
      for(var i=0; i<this.state.oldresponseData.length; i++) {
        var qry = e.target.value.toLowerCase();
        if(this.state.oldresponseData[i]["status"] == e.target.value) {
            res.push(this.state.oldresponseData[i]);
        }
      }
      this.setState({"responseData": res});
    }
    
  },
  showbyCategory(e) {
    if(e.target.value == "") {
      this.setState({"responseData": this.state.oldresponseData});
    } else {
        var res = [];
        for(var i=0; i<this.state.oldresponseData.length; i++) {
          if(this.state.oldresponseData[i]["category"] == e.target.value) {
              res.push(this.state.oldresponseData[i]);
          }
        }
        this.setState({"responseData": res});
    }
    
  },
  renderItem: function(item) {
    return <div className="col-md-3">
              <div className="uf_con_box">
                  <a href="#" title="">
                      <div className="ucn_h">
                          <ul className="">
                              <li><div className="ucn_hi orange"><i className={`fas ${item.icon}`}></i></div></li>
                              <li><h4>{item.title}</h4></li>
                          </ul>
                      </div>  
                      <div className="ucn_c">
                          <p>{item.desc}</p>
                      </div>
                  </a>            
              </div>
          </div>
  },
  
    render() {
    return <section id="main-content">
      
      <section className="pf_view">
       <div className="container-fluid">   
          <div className="row">  
              <div className="col-md-3 pfv_left">
                  <div className="user_icon">
                      <i className="fas fa-user-plus"></i>    
                    </div>  
                    <h3>Gobi Baskaran</h3>
                </div>
                <div className="col-md-9">
                
                    <ul className="nav user_tab">
                        <li className="active"  onClick={this.tabChange.bind(this)} name="node">
                            <a data-toggle="tab" name="node" href="#cat_id1">Node</a>
                        </li>
                        <li onClick={this.tabChange.bind(this)} name="tree">
                          <a data-toggle="tab" name="tree" href="#cat_id2">Tree</a>
                        </li>
                        <li onClick={this.tabChange.bind(this)} name="set">
                          <a data-toggle="tab" name="set" href="#cat_id3">Set</a>
                        </li>
                    </ul>                
                
                </div>
         </div>  
        </div>  
    </section>
    <section className="pf_serch">
       <div className="container-fluid">   
          <div className="row">  
           
                <form className="" action="">
                  <div className="col-md-2 my_pad">
                        <div className="form-group text-right">
                            <h4 className="sr_h4">Search Concepts</h4>
                        </div>
                    </div>
                  <div className="col-md-3 my_pad">
                        <div className="form-group">
                              <select className="form-control" value={this.state.searchconcept} onChange={this.handleChange}>
                                <option value="all">-- All -- </option>
                                <option value="title">Title</option>
                                <option value="desc">Desc</option>                   
                              </select>
                        </div>
                    </div> 
                  <div className="col-md-6 my_pad">                      
                        <div className="form-group">
                            <input type="text" className="form-control" id="" placeholder="Key in Search String" onChange={this.searchQry}/>
                        </div>
                    </div>
                    <button type="button" className="btn btn-default" onClick={this.searchResult}><i className="fas fa-search"></i></button>
                </form>                   
        </div>  
        </div>  
    </section>
    <section className="pf_con">
       <div className="container-fluid">   
          <div className="filter_com">  
              <div className="row">
                
                    <div className="col-md-4">
                        <div className="form-group">
                          <select className="form-control input-sm" onChange={this.showbyCategory}>
                                <option value=""> Show by Category </option>
                                <option value="reports">Reports</option>
                                <option value="service">Services</option>
                                <option value="others">Others</option>             
                              </select>  
                        </div> 
                    </div>  
                    <div className="col-md-8 fil_com_rig">
                      <div className="btn-group  pull-right">
                          <button type="button" onClick={this.handleGrid} ref="grid_btn" className="btn btn-default btn-sm grid_btn"><i className="fas fa-th"></i></button>
                          <button type="button" onClick={this.handleList} ref="list_btn" className="btn btn-default btn-sm list_btn"><i className="fas fa-list"></i></button>
                          
                        </div>
                      <div className="form-group pull-right">
                          <select className="form-control input-sm">
                                <option> Sort by Relavance </option>
                              </select>  
                        </div>
                        <div className="form-group pull-right">
                          <select className="form-control input-sm" onChange={this.searchbyStatus}>
                                <option value=""> Select Status </option>
                                <option value="1">Active</option>
                                <option value="0">In-Active</option>
                              </select>  
                        </div> 
                        
                        
                    </div>  
              </div>        
        </div>
            <div className="row">  
                <div className={`tab-content grid_list_main ${this.state.active_class}`}>
                    <div id="cat_id1" className="tab-pane fade in active">
                        <div className="col-md-12">  
                            <div className="row"> 
                                {this.state.responseData.map(this.renderItem)}  
                  
              </div>
            </div>
          </div>
                    <div id="cat_id2" className="tab-pane fade">
                        <div className="col-md-12">  
                            <div className="row">    
                               {this.state.responseData.map(this.renderItem)} 
              </div>
            </div>
                    </div>
                    <div id="cat_id3" className="tab-pane fade">
                        <div className="col-md-12">  
                            <div className="row">    
                                {this.state.responseData.map(this.renderItem)} 
              </div>
            </div>
                    </div>
                </div>      
        </div>  
        </div>  
    </section>
      
    </section>
  }
})

export default dashBoard;