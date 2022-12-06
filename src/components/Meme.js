import React from 'react';

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleCahnge(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="top text"
          className="form__input"
          name="topText"
          value={meme.topText}
          onChange={handleCahnge}
        />
        <input
          type="text"
          placeholder="bottom text"
          name="bottomText"
          className="form__input"
          onChange={handleCahnge}
          value={meme.bottomText}
        />
        <button className="form__button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme__image" />
        <h2 className="meme__text top-text">{meme.topText}</h2>
        <h2 className="meme__text bottom-text">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
