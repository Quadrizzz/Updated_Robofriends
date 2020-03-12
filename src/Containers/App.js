import React from 'react';
import Searchbox from '../Components/Searchbox';
import CardLIst from '../Components/CardList';
import Scroll from '../Components/Scroll'
// import { robots } from './robot';
import './index.css'
 
class App extends React.Component {
    constructor (){
        super();
        this.state = {
            robots : [] ,
            searchfield : ""
        }

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        }).then(users => {this.setState({robots : users})})
        
        // alert("it worked")
    }

    onsearchchange = (event)=>{
        this.setState({searchfield: event.target.value});
    }

    render () {
        const filterrobot = this.state.robots.filter( robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1 className='pa3'>Loading</h1>
        }
        else{
        return(
            <div className='tc'>
                <h1 className = 'f2'>RoboFriends</h1>
                <Searchbox  searchchange = {this.onsearchchange}/>
                <Scroll>
                    <CardLIst robots = {filterrobot}/> 
                </Scroll>
            </div>
        );
        }
    };
}


export default App ;
