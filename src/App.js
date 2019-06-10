import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        "nba",
        "wnba",
        "nhl"
      ]
    }
    this.addItem = this.addItem.bind(this);
  }
  addItem(e) {
    // Prevent button click from submitting form
    e.preventDefault();

    // Create variables for our list, the item to add, and our form
    let list = this.state.list;
    const newItem = document.getElementById("addInput");
    const form = document.getElementById("addItemForm");

    // If our input has a value
    if (newItem.value != "") {
      // Add the new item to the end of our list array
      list.push(newItem.value);
      // Then we use that to set the state for list
      this.setState({
        list: list
      });
      // Finally, we need to reset the form
      newItem.classList.remove("is-danger");
      form.reset();
    } else {
      // If the input doesn't have a value, make the border red since it's required
      newItem.classList.add("is-danger");
    }
  }
  render() {
    return (
      <div className="content">
        <div className="container">
          <section className="section">
            <ul>
              {this.state.list.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <hr />
          <section className="section">
            <form className="form" id="addItemForm">
              <input
                type="text"
                className="input"
                id="addInput"
                placeholder="search for anything..."
              />
              <button className="button is-info" onClick={this.addItem}>
                Search
        </button>
            </form>
          </section>
        </div>
      </div>
    )
  }
}
export default App;
