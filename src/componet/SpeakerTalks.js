import { useEffect, useState } from "react";
import facade from "../apiFacade";
import { URL } from "../apiFacade";

const SpeakerTalks = (props) => {
  const [talks, setTalks] = useState([]);

  useEffect((id) => {
    fetch(
      URL + "/api/speaker/" + props.speakerId,
      facade.makeOptions("GET", true)
    )
      .then((response) => response.json())
      .then((data) => setTalks(data));
  }, []);

  return (
    <div>
      {talks &&
        talks.map((talk) => (
          <div>
            <ul>
              <li>
                ID: {talk.id} <br />
                Topic: {talk.topic}
                Duration: {talk.duration} min
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default SpeakerTalks;
