import './App.css';
import { Component } from 'react';
import HomePage from './pages/HomePage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticleList from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';

class App extends Component {
 render(){
   return(
     <Router>
          <div className="App">
            <div id="page-body">

            <Route path="/" component = {HomePage} exact/>
            <Route path="/about" component = {AboutPage} />
            <Route path="/article-list" component = {ArticleList} />
            <Route path="/articlepage" component = {ArticlePage} />



            </div>
          
          </div>

     </Router>
   )
 }
}

export default App;
