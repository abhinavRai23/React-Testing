import React from "react";
import Header from './components/header'
import Headline from './components/headline'
import './app.scss'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <section className="container">
          <Headline headline="" desc="" />          
          <Headline headline="React Testing" desc="Test using Jest and Enzyme" />
        </section>
      </div>
    );
  }
}

export default App;
