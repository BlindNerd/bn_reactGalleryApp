import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';


// App Css
import './css/index.css';

// App components
import SearchForm from './components/search.js';
import Navigation from './components/navigation.js';
import PicsList from './components/PhotoContainer.js';
import Loading from './components/loading.js';
import NotFound from './components/NotFound.js';
import apiKey from './config.js';

class App extends Component {

constructor(){
   super();  // calling super here allow this. to be within in its scope
  this.state = {
    pics : [],
    isLoading: false

  };
}

// componentDidMount() {
//   // let searchText = ['sports', 'football', 'fun', 'babies', 'dogs', 'cats', 'basketball',
//   //   'olympics', 'shoes', 'hats', 'trees', 'rain forrest'];
//
//   this.searchFlickr()
// } // end of mount

 searchFlickr = (query) => {
   // set loading state during fetch
   this.setState({ isLoading: true });
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=32&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        pics: response.data.photos.photo,
        // set Loading back after fetch
        isLoading: false,
        searchText: query
      });
    })
    .catch(error => {
      console.log('Error getting Data', error);
    });
  }

  render(props) {
    console.log(this.state.pics);

    return (

<BrowserRouter>
    <div className="container">

    <Route path="/" render={ () => <Navigation onSearch={this.searchFlickr}/>} />

    <Switch>
      <Route exact path="/search" render={({ history }) => <SearchForm onSearch={this.searchFlickr} history={ history }/>} />

       { (this.state.isLoading)
        ?
        <Route path="/" component={Loading} />
        :
        <Route path="/search/:name" render={ ({ match }) => <PicsList searchText={this.state.searchText} data={this.state.pics} match={{ match }} /> } />}

        <Route component={NotFound} />
      </Switch>
    </div>
</BrowserRouter>
  ); // end of return
 }// end of render
}// end of component

export default App;
