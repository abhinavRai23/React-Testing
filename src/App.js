import React from "react";
import Header from './components/header'
import Headline from './components/headline'
import './app.scss'

const arrayOfTryObject = [
  {
    fname: 'Abhinav',
    lname: 'Rai',
    age: 25,
    online: false
  }
]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <section className="container">
          <Headline headline="React Testing" desc="Test using Jest and Enzyme" dataArr={arrayOfTryObject} />
        </section>
      </div>
    );
  }
}

export default App;
