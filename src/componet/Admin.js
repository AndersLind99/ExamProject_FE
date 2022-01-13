import { Link, Route } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Link to={"admin/createconference"}>Create Conference</Link>
      <br></br>
      <Link to={"admin/createtalk"}>Create Talk</Link>
      <br />
      <Link to={"admin/createspeaker"}> Create Speaker </Link>
    </div>
  );
};

export default Admin;
