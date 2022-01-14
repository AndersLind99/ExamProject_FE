import { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import facade from "../apiFacade";
import ConferenceTalks from "./ConferenceTalks";
import { URL } from "../apiFacade";

const Conference = () => {
  const [conference, setConference] = useState([]);

  useEffect(() => {
    fetch(
      URL + "/api/conference/all",
      facade.makeOptions("GET", true)
    )
      .then((response) => response.json())
      .then((data) => setConference(data));
  }, []);

  

  return (
    <div>
      {conference &&
        conference.map((conference) => (
          <div>
            <ul>
              <li>
                Id: {conference.id}, name: {conference.name}, Location:{" "}
                {conference.location} , capacity:
                {conference.capacity}, Date: {conference.date}, Time:{" "}
                {conference.time},
                <Link to={`/conference/${conference.name}`}>Talks</Link>
                
              </li>
            </ul>
            <hr />
            <Switch>
              <Route path={"/conference/:name"}>
                <ConferenceTalks conferenceId={conference.id} />
              </Route>
            </Switch>
          </div>
        ))}
    </div>
  );
};

export default Conference;
