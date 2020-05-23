import React from 'react';
import Header from './components/Header/Header';
import Main from './pages/Main';
import Upload from './pages/Upload';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
 return (
   <>
   <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        {/* <Route path="/:id" component={Main} /> */}
        <Route path="/upload" component={Upload} />
      </Switch>
   </BrowserRouter>
   </>
  );
}

export default App;
