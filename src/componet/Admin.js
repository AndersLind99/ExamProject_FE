import { Link, Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import CreateConference from "./CreateConference";
const Admin = () => {
  return (
    <div>
      <div>
        <Link to={"admin/createconference"}>Create Conference</Link>
      </div>
      <hr />
      <div>
        <Switch>
          <Route path={"createconference"}>
            <CreateConference />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
