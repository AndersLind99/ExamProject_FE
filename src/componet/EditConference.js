import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import facade from "../apiFacade";
import ConferenceDelete from "./ConferenceDelete";
import Editing from "./Editing";

const EditConference = () => {
  const [conference, setConference] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:8080/ExamProject/api/conference/all",
      facade.makeOptions("GET", true)
    )
      .then((response) => response.json())
      .then((data) => setConference(data));
  }, []);

  const deleteClick = (evt) => {
    const target = evt.target;
    conference[target.id] = target.value;

    ConferenceDelete(target.value);
  };

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
                  {conference.time}
                  <Link to={{ pathname: '/editing', state: {id: conference.id}}}>
                    <button id="id" >Edit conference</button>
                  </Link>
                  <button id="id" value={conference.id} onClick={deleteClick}>
                    Delete Conference
                  </button>
                </li>
              </ul>
              <hr />

              
        
          </div>
        ))}
    </div>
  );
};

export default EditConference;
