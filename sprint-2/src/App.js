import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App = () => {
 return (
   <>
   <Header />
   <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Video} />
        <Route path="/upload" component={Upload} />
      </Switch>
   </BrowserRouter>
   </>
  );
}

export default App;
