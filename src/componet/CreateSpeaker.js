import { useState } from "react";
import facade from "../apiFacade";

function CreateSpeaker() {
  const [speaker, setSpeaker] = useState({
    name: "",
    profession: "",
    gender: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    fetch(
      "http://localhost:8080/ExamProject/api/speaker/create",
      facade.makeOptions("POST", true, speaker)
    ).then((Response) => Response.json());
  };

  const handleInput = (evt) => {
    const target = evt.target;
    speaker[target.id] = target.value;
    setSpeaker({ ...speaker });
  };

  return (
    <div>
      <h1>Create speaker</h1>

      <form onSubmit={handleSubmit} onChange={handleInput}>
        <input
          id="name"
          type="text"
          placeholder="name"
          defaultValue={speaker.name}
        />
        <input
          id="profession"
          type="text"
          placeholder="profession"
          defaultValue={speaker.profession}
        />

        <input
          id="gender"
          type="text"
          placeholder="gender"
          defaultValue={speaker.gender}
        />

        <button onClick={handleSubmit}>add Speaker</button>
      </form>
    </div>
  );
}

export default CreateSpeaker;
