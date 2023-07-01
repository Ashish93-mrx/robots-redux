import React,{Component} from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { robots } from "../robots";
import ErrorBoundry from "../components/ErrorBoundry";


class App extends Component {
constructor(){
    super()
    this.state = {
        robots: [],
        searchfield: ''
    }
       console.log("1")
}

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json())
    .then(users => {this.setState({ robots: users})});
    //this.setState({robots: users});
    console.log("2");
}

onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        console.log("3");
}


render(){
    const {robots,searchfield}=this.state;
    const filteredrobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    console.log("4")
    return !robots.length ?
    <h1>loading</h1>
    :
     (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchchange={this.onSearchChange}/>
        <Scroll>
        <ErrorBoundry>
        
        <Cardlist robots={filteredrobots}/>
        
        </ErrorBoundry>
        </Scroll>
    </div>
     );
   
}

} 

export default App;