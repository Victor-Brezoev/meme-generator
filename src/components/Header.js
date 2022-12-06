import React from 'react';

export default function header() {
  return (
    <header className="header">
      <img
        src="../../assets/troll-face.png"
        width="60"
        height="50"
        className="header__image"
      />
      <h2 className="header__title">Meme Generator</h2>
      <h4 className="header__project">React project</h4>
    </header>
  );
}
