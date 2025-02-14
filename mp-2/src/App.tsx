import { useState, useEffect } from 'react'
import Joke from './interfaces/Joke';
import JokeContainer from './components/JokeContainer';

function App() {
  const [jokes, setJokes] = useState<Joke[]>([]);
  
  useEffect(() => {
    async function getJoke(): Promise<Response> {
      return await fetch("https://official-joke-api.appspot.com/jokes/random/100");
    }

    getJoke().then(
      response => response.json()
    ).then(
      (data: Joke[]) => {
        setJokes(data);
      }
    ).catch(
      (e: Error) => {
        console.log(e);
      }
    )
  }, []);

  return (
    <>
      <JokeContainer jokes={jokes}/>
    </>
  )
}

export default App
