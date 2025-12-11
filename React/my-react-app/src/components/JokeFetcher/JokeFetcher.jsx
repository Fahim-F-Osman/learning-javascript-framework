import { useEffect, useState } from "react";

function JokeFetcher() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchJoke() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        console.log("API CALLED HERE!");
        if (!response.ok) {
          throw new Error("Failed to fetch joke");
        }

        const data = await response.json();
        setJoke(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchJoke();
  }, []); // runs on mount only

  if (loading) return <p>Loading joke...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Joke of the moment</h1>
      <h2>{joke.setup}</h2>
      <p>{joke.punchline}</p>
    </div>
  );
}

export default JokeFetcher;
