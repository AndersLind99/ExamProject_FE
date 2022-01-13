import { useEffect } from "react";
import facade from "../apiFacade";

function ConferenceDelete(props) {
  fetch(
    "http://localhost:8080/ExamProject/api/conference/remove/" + props,
    facade.makeOptions("DELETE", true)
  ).then((response) => response.json());
}

export default ConferenceDelete;
