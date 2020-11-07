import React from 'react';
import '../styles/_app.scss';
import GoatCorral from '../components/GoatCorral';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Goat Yoga</h2>
        <GoatCorral />
      </div>
    );
  }
}

export default App;
