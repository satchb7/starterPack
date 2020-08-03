import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Counter from './counter';
import Controls from './controls';
// import ReactDOM from 'react-dom';
// import './style.scss';

const Welcome = (props) => {
  return (
    <div>Welcome
      <Counter />
      <Controls />
    </div>
  );
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
