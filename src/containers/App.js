import React,{useState, useEffect} from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { robots } from "../robots";
import ErrorBoundry from "../components/ErrorBoundry";


function App() {

const [robots , setRobots] = useState([]);
const [searchfield, setSearchfield] = useState("");
// constructor(){
//     super()
//     this.state = {
//         robots: [],
//         searchfield: ''
//     }
//        console.log("1")
// }

// componentDidMount(){

// }

useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json())
    .then(users => {setRobots( users)});
    //console.log("2");
    console.log(searchfield);
},[])

const onSearchChange = (event) => {
        setSearchfield(event.target.value)
      
}

    //const {robots,searchfield}=this.state;
   
    const filteredrobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
   // console.log("4")
    return !robots.length ?
    <h1>loading</h1>
    :
     (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchchange={onSearchChange}/>
        <Scroll>
        <ErrorBoundry>
        
        <Cardlist robots={filteredrobots}/>
        
        </ErrorBoundry>
        </Scroll>
    </div>
     );

} 

export default App;