import React from "react";
import ReactDOM from "react-dom";
import LibrarySong from "./LibrarySong";
// import Backdrop from "../shared/UIElements/Backdrop";
import { SongInterface } from "../shared/interfaces/interfaces";

interface LibraryInterface {
  songs: SongInterface[];
  setCurrentSong: (setCurrentSong: SongInterface) => void;
  audioRef: any;
  isPlaying: boolean;
  setSongs: (setSongs: SongInterface[]) => void;
  libraryStatus: boolean;
  backdropStatus: boolean;
  setIsPlaying: (setIsPlaying: boolean) => void;
}

const Library: React.FC<LibraryInterface> = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  backdropStatus,
  setIsPlaying
}) => {
  const content = (
    <React.Fragment>
      
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
              setIsPlaying={setIsPlaying}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
  const drawerHook = document.getElementById(
    "drawer-hook"
  ) as HTMLDivElement | null;
  if (drawerHook) {
    return ReactDOM.createPortal(content, drawerHook);
  } else {
    return null;
  }
};

export default Library;
