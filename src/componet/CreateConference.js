import { useState } from "react";
import facade from "../apiFacade";
import { URL } from "../apiFacade";

function CreateConference() {
  const [conference, setConference] = useState({
    name: "",
    location: "",
    capacity: "",
    date: "",
    time: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    fetch(
      URL + "/api/conference/create",
      facade.makeOptions("POST", true, conference)
    ).then((Response) => Response.json());
  };

  const handleInput = (evt) => {
    const target = evt.target;
    conference[target.id] = target.value;
    setConference({ ...conference });
  };

  return (
    <div>
      <h1>Create Conference</h1>

      <form onSubmit={handleSubmit} onChange={handleInput}>
        <input
          id="name"
          type="text"
          placeholder="name"
          defaultValue={conference.name}
        />
        <input
          id="location"
          type="text"
          placeholder="location"
          defaultValue={conference.location}
        />
        <input
          id="capacity"
          type="text"
          placeholder="capacity"
          defaultValue={conference.capacity}
        />
        <input
          id="date"
          type="text"
          placeholder="date"
          defaultValue={conference.date}
        />
        <input
          id="time"
          type="text"
          placeholder="time"
          defaultValue={conference.time}
        />
        <button onClick={handleSubmit}>add conference</button>
      </form>
    </div>
  );
}

export default CreateConference;
