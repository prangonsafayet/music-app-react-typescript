import React from "react";
import { SongInterface, SongInfo } from "../shared/interfaces/interfaces";
//import { playAudio } from "../utils";

interface LibrarySongInterface {
  song: SongInterface;
  songs: SongInterface[];
  setCurrentSong: (setCurrentSong: SongInterface) => void;
  audioRef: any;
  isPlaying: boolean;
  setSongs: (setSongs: SongInterface[]) => void;
  setIsPlaying: (setIsPlaying: boolean) => void;
  songInfo: SongInfo;
  setSongInfo: (songInfo: SongInfo) => void;
}

const LibrarySong: React.FC<LibrarySongInterface> = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  setIsPlaying,
  songInfo,
  setSongInfo,
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
    if (!isPlaying) {
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.currentTime = 0;
      setSongInfo({ ...songInfo, currentTime: 0, animationPercentage: 0 });
    }

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
