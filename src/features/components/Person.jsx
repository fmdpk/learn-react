import { useState, useEffect } from "react";
import { fetchBio } from "./api.js";

export default function Person() {
  const [person, setPerson] = useState("Alice");
  const [bio, setBio] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // ✅ Create an AbortController
    const signal = controller.signal;

    setBio(null);
    fetchBio(person, signal) // ✅ Pass the signal to the fetch function
      .then((result) => setBio(result))
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Fetch failed:", error);
        }
      });

    return () => {
      controller.abort(); // ✅ Cancel previous request when `person` changes
    };
  }, [person]);

  return (
    <>
      <select value={person} onChange={(e) => setPerson(e.target.value)}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? "Loading..."}</i>
      </p>
    </>
  );
}
