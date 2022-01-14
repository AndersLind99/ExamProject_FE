import { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import facade from "../apiFacade";
import SpeakerTalks from "./SpeakerTalks";
import { URL } from "../apiFacade";

const Speaker = () => {
  const [speaker, setSpeaker] = useState([]);

  useEffect(() => {
    fetch(
      URL + "/api/speaker/all",
      facade.makeOptions("GET", true)
    )
      .then((response) => response.json())
      .then((data) => setSpeaker(data));
  }, []);

  return (
    <div>
      {speaker &&
        speaker.map((speaker) => (
          <div>
            <ul>
              <li>
                Id: {speaker.id}, name: {speaker.name}, Profession:{" "}
                {speaker.profession} , gender:
                {speaker.gender},
                <Link to={`/speaker/${speaker.name}`}>Talks</Link>
              </li>
            </ul>
            <hr />
            <Switch>
              <Route path={"/speaker/:name"}>
                <SpeakerTalks speakerId={speaker.id} />
              </Route>
            </Switch>
          </div>
        ))}
    </div>
  );
};

export default Speaker;