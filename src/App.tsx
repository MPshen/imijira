import React from 'react';
import './App.css';
import { ProjectListScreen } from './screens/project-list';
import {TsReactTest} from "../src/try-use-array";
import {LoginScreen} from "./screens/login";
function App() {
  return (
    <div className="App">
      <LoginScreen/>
      {/* <TsReactTest/> */}
      {/* <ProjectListScreen/> */}
    </div>
  );
}

export default App;
