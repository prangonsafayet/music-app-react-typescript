import React, {
  MutableRefObject,
  useRef,
  useState,
  useLayoutEffect,
} from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import data from "./music/playlist";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Backdrop from "./shared/UIElements/Backdrop";

function App() {
  const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  };
  const [width] = useWindowSize();
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef() as MutableRefObject<HTMLAudioElement>;
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [backdropStatus, setBackdropStatus] = useState(false);
  // const [responsive, setResponsive] = useState(false);
  let responsive=false;
  if(width<500){
    responsive=true;
  }
  else{
    responsive=false;
  }
  const timeUpdateHandler = (e: any) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage,
    });
  };
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      className={`App${libraryStatus ? " library-active" : ""}${
        isDarkMode ? " dark-mode" : ""
      }`}
    >
      {backdropStatus ? (
        <Backdrop
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
          backdropStatus={backdropStatus}
          setBackdropStatus={setBackdropStatus}
        />
      ) : null}
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        backdropStatus={backdropStatus}
        setBackdropStatus={setBackdropStatus}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        backdropStatus={backdropStatus}
        setBackdropStatus={setBackdropStatus}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        responsive={responsive}
      />
      <Song currentSong={currentSong} />
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
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
      <h4 className="footer">
        Made with ❤️️ by{" "}
        <a className="link" href="https://github.com/prangonsafayet">
          Safayet
        </a>
      </h4>
    </div>
  );
}

export default App;
