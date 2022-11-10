import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Configuration, OpenAIApi } from "openai";



function App() {
  const [search, setSearch] = useState();
  const [image, setImage ] = useState();

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const generateImage = async() => {
    const res = await openai.createImage({ prompt: search, n: 1, size: "512x512", });
    setImage(res.data.data[0].url);
  }

  return (
    <div className="App">
      {image ? <img src={image} className="Image"/> : undefined}
      <textarea onChange={(e) => setSearch(e.target.value)} className="TextArea"/>
      <button onClick={generateImage} className="Button">Generate Image</button>
    </div>
  )
}

export default App
