import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div className="ui block header">Please select a song</div>;
  }

  return (
    <div>
      <h3 className="ui block header teal">Song Details</h3>
      <hr className="ui block content" />
      <p className="ui block card">
        <span className="left floated ui teal label">Title:</span>
        <b>{song.title}</b>
        <span className="left floated ui teal label">Duration:</span>
        <b>{song.duration}</b>
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
