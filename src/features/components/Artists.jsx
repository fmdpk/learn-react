import { useState } from "react";
import Input from "./Input";

let nextId = 0;

export default function Artists() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  const handleClick = () => {
    setArtists([
      ...artists,
      {
        id: (nextId += 1),
        name: name,
      },
    ]);
    setName("");
  };

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Add</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
