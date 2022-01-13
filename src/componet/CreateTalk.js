import { useState } from "react";
import facade from "../apiFacade";

function CreateTalk() {
  const [talk, setTalk] = useState({
    topic: "",
    duration: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    fetch(
      "http://localhost:8080/ExamProject/api/talk/create",
      facade.makeOptions("POST", true, talk)
    ).then((Response) => Response.json());
  };

  const handleInput = (evt) => {
    const target = evt.target;
    talk[target.id] = target.value;
    setTalk({ ...talk });
  };

  return (
    <div>
      <h1>Create Talk</h1>

      <form onSubmit={handleSubmit} onChange={handleInput}>
        <input
          id="topic"
          type="text"
          placeholder="topic"
          defaultValue={talk.topic}
        />
        <input
          id="duration"
          type="text"
          placeholder="duration"
          defaultValue={talk.duration}
        />

        <button onClick={handleSubmit}>add Talk</button>
      </form>
    </div>
  );
}

export default CreateTalk;
