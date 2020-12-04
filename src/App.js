import React, { Component } from 'react'
import Search from './components/Search'
import Welcome from './components/Welcome'
import QueryResults from './components/QueryResults'





class App extends Component{
  constructor(props){
    super(props)
    this.state={
      userInput:"",
      setUserInput:this.setUserInput,
      queryData:[],
      filteredResults:[],
      setFilteredResults:this.setFilteredResults


    }
  }


  setUserInput=(e, userInput)=>{
    e.preventDefault()
    this.setState({userInput})
  }


  setFilteredResults=(filteredResults)=>{
  
    this.setState({filteredResults})



  }

  componentDidMount(){
    this.fetchAnswers()
  }


  async fetchAnswers(){
    try{
      fetch('QueryResults_js_10.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(response=>{
          return response.json();
        })
        .then(myJson=> {
          this.setState({queryData:myJson})
          console.log(this.state.queryData);
        });
    }catch(error){
      console.log(error);
    }
  }

  




  render(){
    return (

      <div>
        <Welcome/>
        <Search userInput={this.state.userInput} setUserInput={this.state.setUserInput} queryData={this.state.queryData} setFilteredResults={this.state.setFilteredResults}/>
        <QueryResults filteredResults={this.state.filteredResults}/>
      </div>
      
    )
  }
}





export default App;
