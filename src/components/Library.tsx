import React from "react";
import ReactDOM from "react-dom";
import LibrarySong from "./LibrarySong";
// import Backdrop from "../shared/UIElements/Backdrop";
import Player from "./Player";
import { SongInterface, SongInfo } from "../shared/interfaces/interfaces";

interface LibraryInterface {
  songs: SongInterface[];
  currentSong: SongInterface;
  setCurrentSong: (setCurrentSong: SongInterface) => void;
  audioRef: any;
  isPlaying: boolean;
  setSongs: (setSongs: SongInterface[]) => void;
  libraryStatus: boolean;
  setLibraryStatus: (setLibraryStatus: boolean) => void;
  backdropStatus: boolean;
  setBackdropStatus: (setBackdropStatus: boolean) => void;
  setIsPlaying: (setIsPlaying: boolean) => void;
  songInfo: SongInfo;
  setSongInfo: (songInfo: SongInfo) => void;
  isDarkMode: boolean;
  setIsDarkMode: (setIsDarkMode: boolean) => void;
  responsive: boolean;
}

const Library: React.FC<LibraryInterface> = ({
  songs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
  backdropStatus,
  setBackdropStatus,
  setIsPlaying,
  songInfo,
  setSongInfo,
  isDarkMode,
  setIsDarkMode,
  responsive,
}) => {
  const closeLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
    setBackdropStatus(!backdropStatus);
  };
  const content = (
    <React.Fragment>
      <div
        className={`library${libraryStatus ? " active-library" : ""}${
          isDarkMode ? " dark-mode" : ""
        }`}
      >
        <h2 onClick={closeLibraryHandler}>Library</h2>
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
              songInfo={songInfo}
              setSongInfo={setSongInfo}
            />
          ))}
        </div>
        {responsive ? (
          <Player
            audioRef={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            songs={songs}
            setSongs={setSongs}
            songInfo={songInfo}
            setSongInfo={setSongInfo}
            responsive={responsive}
          />
        ) : (
          ""
        )}
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
