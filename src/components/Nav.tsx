import React from "react";

interface NavInterface{
  libraryStatus:boolean;
  setLibraryStatus: (setLibraryStatus: boolean) => void;
}


const Nav: React.FC<NavInterface> = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1> Music App
      </h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
      </button>
    </nav>
  );
};

export default Nav;
