import { useState } from "react";
export default function Form() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (event) => {
    setPerson((prevValue) => {
      return {
        ...prevValue,
        [event.target.name]: event.target.value,
      };
    });
  };

  function handleReset() {
    setPerson((prevValue) => {
      return {
        ...prevValue,
        firstName: "",
        lastName: "",
      };
    });
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col items-center justify-center bg-gray-100 gap-4 p-4"
    >
      <div className="flex items-center justify-center gap-4">
        <input
          placeholder="Enter First name..."
          name="firstName"
          value={person.firstName}
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onChange={handleInputChange}
        />
        <input
          placeholder="Enter Last name..."
          name="lastName"
          value={person.lastName}
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1>
          Hi, {person.firstName} {person.lastName}
        </h1>
        <button onClick={handleReset}>Reset</button>
      </div>
    </form>
  );
}
