import { combineReducers } from "redux";

// JUST A STATIC LIST OF SONGS
const songsReducer = () => {
  return [
    { title: "La Familia", duration: "4:10" },
    { title: "Show Me What You Got", duration: "3:00" },
    { title: "Try Me", duration: "3:35" },
    { title: "Can't Say No", duration: "2:45" }
  ];
};

// OUR 'SELECTED SONG' REDUCER DEFAULTED TO 'null' - NO SONG SELECTED AT 1ST
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

// LET'S COMBINE OUR TWO REDUCERS
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
