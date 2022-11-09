import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import DarkModeToggle from "react-dark-mode-toggle";
interface NavInterface {
  libraryStatus: boolean;
  setLibraryStatus: (setLibraryStatus: boolean) => void;
  backdropStatus: boolean;
  setBackdropStatus: (setBackdropStatus: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (setIsDarkMode: boolean) => void;
}

const Nav: React.FC<NavInterface> = ({
  libraryStatus,
  setLibraryStatus,
  backdropStatus,
  setBackdropStatus,
  isDarkMode,
  setIsDarkMode,
}) => {
  // const [isDarkMode, setIsDarkMode] = useState(() => false);
  const showLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
    setBackdropStatus(!backdropStatus);
    // console.log(backdropStatus)
  };
  const darkModeHandler = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <nav>
      <button className="library-button" onClick={showLibraryHandler}>
        <FontAwesomeIcon icon={faMusic} size="2x" /> <span>Library</span>
      </button>
      <h1> Music App</h1>

      <DarkModeToggle
        onChange={darkModeHandler}
        checked={isDarkMode}
        size={60}
      />
    </nav>
  );
};

export default Nav;
