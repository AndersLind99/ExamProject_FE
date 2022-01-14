import facade from "../apiFacade";
import { URL } from "../apiFacade";

function ConferenceDelete(props) {
  fetch(
    URL + "/api/conference/remove/" + props,
    facade.makeOptions("DELETE", true)
  ).then((response) => response.json());
}

export default ConferenceDelete;
