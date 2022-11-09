import React from "react";
import {SongInterface} from "../shared/interfaces/interfaces"
//import { playAudio } from "../utils";

interface LibrarySongInterface{
  song: SongInterface;
  songs: SongInterface[];
  setCurrentSong: (setCurrentSong: SongInterface) => void;
  audioRef: any;
  isPlaying: boolean;
  setSongs: (setSongs: SongInterface[]) => void;
  setIsPlaying: (setIsPlaying: boolean) => void;
}

const LibrarySong: React.FC<LibrarySongInterface> = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  setIsPlaying
}) => {
  const songSelectHandler = async () => {
    //const selectedSong = songs.filter((state) => state.id === song.id);
    
    
    await setCurrentSong(song);
    const newSongs = songs.map((newSong: any) => {
      if (newSong.id === song.id) {
        return {
          ...newSong,
          active: true,
        };
      } else {
        return {
          ...newSong,
          active: false,
        };
      }
    });
    
    setSongs(newSongs);
    
    audioRef.current.play();
    if(!isPlaying){
      setIsPlaying(!isPlaying);
    }
    
    console.log(isPlaying);
      
    // if (isPlaying) audioRef.current.play();
    // console.log("a")
    //playAudio(isPlaying, audioRef);
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
