/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Quiz from './views/Quiz';
import {getQuestions} from "./views/Quiz/data"






const App = () =>  {
 return (
  <Quiz getQuestions={getQuestions}/>
  );
};



export default App;
