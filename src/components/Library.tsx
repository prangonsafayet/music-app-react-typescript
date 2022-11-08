import React from "react";
import LibrarySong from "./LibrarySong";
import { SongInterface } from "../shared/interfaces";

interface LibraryInterface {
  songs: SongInterface[];
  setCurrentSong: (setCurrentSong: SongInterface) => void;
  audioRef: any;
  isPlaying: boolean;
  setSongs: (setSongs: SongInterface[]) => void;
  libraryStatus: boolean;
} 

const Library: React.FC<LibraryInterface> = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""} `}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song: any) => (
          <LibrarySong
            songs={songs}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
            song={song}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
