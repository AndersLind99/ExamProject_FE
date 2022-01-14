import { useState } from "react/cjs/react.development";
import facade from "../apiFacade";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Editing = (props) => {
  const location = useLocation();
  const { id } = location.state;

  const [conference, setConference] = useState({
    id: id,
    name: "",
    location: "",
    capacity: "",
    date: "",
    time: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    fetch(
      "http://localhost:8080/ExamProject/api/conference/update",
      facade.makeOptions("PUT", true, conference)
    ).then((Response) => Response.json());
  };

  const handleInput = (evt) => {
    const target = evt.target;
    conference[target.id] = target.value;
    setConference({ ...conference });
  };

  return (
    <div>
      <h1>update conference</h1>

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
};

export default Editing;
