import React, { Component } from "react";
import NotesList from "./NotesList.js";
import Header from "./Header.js";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
    searchText: "search"
  };

  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    this.setState({ notes: [newNote, ...this.state.notes] });
  };

  onType = (editedId, updatedKey, updatedValue) => {
    const newNotes = this.state.notes.map((note) => {
      if (note.id !== editedId) {
        return note;
      } else {
        if (updatedKey === "title") {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    });
    this.setState({ notes: newNotes });
  };

  render() {
    return (
      <div>
        <Header addNote={this.addNote} searchText={this.state.searchText} />
        <NotesList onType={this.onType} notes={this.state.notes} />
      </div>
    );
  }
}
export default App;
