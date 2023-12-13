"use client"

import React, { Component } from 'react';
import Note from "@/components/task/note";
import styles from "@/components/task/taskpage.module.css";

class taskModal extends Component {

  constructor(props) {
    super(props);
    this.state= {
      noteText: '',
      notes: [],
    }
  }

  updateNoteText(noteText){
    this.setState({noteText: noteText.target.value})
  }
  
  addNote() {
    if (this.state.noteText === '') {return}
    let noteArr = this.state.notes;
    noteArr.push(this.state.noteText);
    this.setState({ noteText: ''});
    this.textInput.focus();
  }

  handleKeyPress = (event) => {
    if(event.key === "Enter"){
      let noteArr = this.state.notes;
      noteArr.push(this.state.noteText);
      this.setState({ noteText: ''});
    }
  }

  deleteNote (index){
    let noteArr = this.state.notes;
    noteArr.splice(index, 1);
    this.setState({ notes: noteArr })
  }

  render() {

    let notes = this.state.notes.map((val, key) => {
      return <Note key={key} text={val}
      deleteMethod={ () => this.deleteNote(key) }
      />
    })

    return (
      <div className={styles.container}>
        <div className={styles.header}>Todo App</div>
        {notes}
        <div className={styles.button} onClick={this.addNote.bind(this)}>+</div>
        <input placeholder="Enter Notes" type="text" className={styles.input}
        ref={((input) => {this.textInput = input})}
        value={this.state.noteText}
        onChange={noteText => this.updateNoteText(noteText)}
        onKeyPress={this.handleKeyPress.bind(this)}
        />
      </div>
    );
  }
}

export default taskModal