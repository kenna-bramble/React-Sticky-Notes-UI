import Note from "./Note.js";
import React from "react";

const NotesList = (props) => {
  const filterSearch = (note) => note.doesMatchSearch === true;
  const filterMatches = props.notes.filter(filterSearch);
  const renderNote = (note) => (
    <Note onType={props.onType} note={note} key={note.id} />
  );
  const noteElements = filterMatches.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
