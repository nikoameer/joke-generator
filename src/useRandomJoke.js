import { useEffect, useState } from 'react'

// Intiating function/ custom hook with two arguements
function useRandomJoke (firstName, lastName) {
  const [joke, setJoke] = useState();

  // Fetch call with useEffect Hook
  useEffect(() => {
    const fetchJoke = async () =>
      await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
      )
        .then((res) => res.json()) // then pass the response as a json object
        .then((data) => { // Get the data back and log to see the content
          setJoke(data.value.joke);
        });

    // Call the function 
    fetchJoke();
  }, [firstName, lastName]);

  // Return a value
  return joke;
}

export default useRandomJoke
