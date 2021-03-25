import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchField } from './components/search-field/search-field.component';



class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState( {monsters: users}))
  }


  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render () {

    const {monsters, searchField} = this.state

    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Robot World</h1>
        <SearchField 
          placeholder='Search robots...'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>     
      </div>
    )
  }
}

export default App;
