import React from "react";
import ReactDOM from "react-dom";

import "./backdrop.scss";
interface BackdropInterface {
  libraryStatus: boolean;
  setLibraryStatus: (setLibraryStatus: boolean) => void;
  backdropStatus: boolean;
  setBackdropStatus: (setBackdropStatus: boolean) => void;
}
const Backdrop: React.FC<BackdropInterface> = ({
  libraryStatus,
  setLibraryStatus,
  backdropStatus,
  setBackdropStatus,
}) => {
  const closeLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
    setBackdropStatus(!backdropStatus);
  };
  const backdropHook = document.getElementById(
    "backdrop-hook"
  ) as HTMLDivElement | null;
  const content = (
    <div
      onClick={closeLibraryHandler}
      className={`backdrop ${backdropStatus ? "active-backdrop" : ""} `}
    ></div>
  );
  if (backdropHook && backdropStatus) {
    return ReactDOM.createPortal(content, backdropHook);
  } else {
    return null;
  }
};

export default Backdrop;
