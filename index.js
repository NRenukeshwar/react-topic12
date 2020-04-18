import React, { Component } from 'react';
import { render } from 'react-dom';
import AddMovie from './AddMovie';
import ViewMovie from './ViewMovie';
import AllMovies from './AllMovies';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import {BrowserRouter, Switch,
  Route,
  Link 
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies:[
        {
          movieId:'1',
          movieName:'Baahubali2: The Conclusion',
          leadActor:'Prabhas',
          leadActress:'Anushka Shetty',
          yearOfRelease:'2017',
          language:'Telugu',
          collection:'1810 crore'
        },
        {
          movieId:'2',
          movieName:'Rangasthalam',
          leadActor:'Ram Charan',
          leadActress:'Samantha',
          yearOfRelease:'2018',
          language:'Telugu',
          collection:'210 crore'
        },
         {
          movieId:'3',
          movieName:'Janatha Garage',
          leadActor:'Jr NTR',
          leadActress:'Samantha',
          yearOfRelease:'2016',
          language:'Telugu',
          collection:'150 crore'
        },
        {
          movieId:'4',
          movieName:'K.G.F',
          leadActor:'Yash',
          leadActress:'Srinidhi Shetty',
          yearOfRelease:'2018',
          language:'Kannada',
          collection:'250 crore'
        },
        {
          movieId:'5',
          movieName:'PK',
          leadActor:'Aamir Khan',
          leadActress:'Anushka Sharma',
          yearOfRelease:'2014',
          language:'Hindi',
          collection:'860 crore'
        },
        {
          movieId:'6',
          movieName:'Sivaji',
          leadActor:'Rajinikanth',
          leadActress:'Shriya Saran',
          yearOfRelease:'2007',
          language:'Tamil',
          collection:'200 crore'
        },
        {
          movieId:'7',
          movieName:'Chakravyuha',
          leadActor:'Puneeth Rajkumar',
          leadActress:'Rachita Ram',
          yearOfRelease:'2016',
          language:'Kannada',
          collection:'50 crore'
        },
          {
          movieId:'8',
          movieName:'Simhadri',
          leadActor:'Jr NTR',
          leadActress:'Bhumika',
          yearOfRelease:'2003',
          language:'Telugu',
          collection:'60 crore'
        },
        {
          movieId:'9',
          movieName:'Maari',
          leadActor:'Dhanush',
          leadActress:'Kajal Aggarwa',
          yearOfRelease:'2015',
          language:'Tamil',
          collection:'60 crore'
        },
        {
          movieId:'10',
          movieName:'Bajrangi Bhaijaan',
          leadActor:'Salman Khan',
          leadActress:'Kareena Kapoor',
          yearOfRelease:'2015',
          language:'Hindi',
          collection:'910 crore'
        },
        {
          movieId:'11',
          movieName:'Thani Oruvan',
          leadActor:'Jayam Ravi',
          leadActress:'Nayanthara',
          yearOfRelease:'2015',
          language:'Tamil',
          collection:'120 crore'
        },
        {
          movieId:'12',
          movieName:'Chennai Express',
          leadActor:'Shahrukh Khan',
          leadActress:'Deepika Padukone',
          yearOfRelease:'2013',
          language:'Hindi',
          collection:'425 crore'
        },
        {
          movieId:'13',
          movieName:'Bigil',
          leadActor:'Vijay',
          leadActress:'Nayanthara',
          yearOfRelease:'2019',
          language:'Tamil',
          collection:'350 crore'
        },
        {
          movieId:'14',
          movieName:'Nannaku Prematho',
          leadActor:'Jr NTR',
          leadActress:'Rakul Preet',
          yearOfRelease:'2016',
          language:'Telugu',
          collection:'120 crore'
        }
      ]
    };
  }
  handleMovie=(event,movie)=>{
    event.preventDefault()
    this.setState({
      movie:movie
    })
    console.log(movie)
  }
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/addMovie">
            <AddMovie name={this.state.name} />
          </Route>
          <Route exact path="/:id">
            <ViewMovie movies={this.state.movies}/>
          </Route>
          <Route path="/">
            <AllMovies movies={this.state.movies} handleMovie={this.handleMovie}/>
          </Route>
        </Switch>
        
  
      </div>
    );
  }
}

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
