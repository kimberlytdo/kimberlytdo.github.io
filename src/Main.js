import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Research from './Vlogs';
import Footer from './Footer';
import Vlogs from './Vlogs';
import Nurses from './Nurses';
import Unintended from './Unintended';
import LargeScale from './LargeScale';
import Chronic from './Chronic';


const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/index' component={Home}></Route>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/research' component={Research}></Route>
      <Route exact path='/footer' component={Footer}></Route>
      {/* research routes */}
      <Route exact path='/vlogs' component={Vlogs}></Route>
      <Route exact path='/nurses' component={Nurses}></Route>
      <Route exact path='/chronicillness' component={Chronic}></Route>
      <Route exact path='/unintendedconsequences' component={Unintended}></Route>
      <Route exact path='/largescale' component={LargeScale}></Route>
    </Switch>
  );
}

export default Main;