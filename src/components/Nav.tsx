import React from "react";

interface NavInterface {
  libraryStatus: boolean;
  setLibraryStatus: (setLibraryStatus: boolean) => void;
  backdropStatus: boolean;
  setBackdropStatus: (setBackdropStatus: boolean) => void;
}

const Nav: React.FC<NavInterface> = ({ libraryStatus, setLibraryStatus, backdropStatus, setBackdropStatus }) => {
  const showLibraryHandler = () =>{
    setLibraryStatus(!libraryStatus)
    setBackdropStatus(!backdropStatus)
    // console.log(backdropStatus)
  }
  return (
    <nav>
      <h1> Music App</h1>
      <button onClick={showLibraryHandler}>Library</button>
    </nav>
  );
};

export default Nav;
