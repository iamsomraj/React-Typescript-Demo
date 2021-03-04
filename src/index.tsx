/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactDOM from "react-dom";
import EventComponent from "./events/EventComponent";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const App = () => {
  return (
    <div>
      {/* <Parent /> */}
      {/* <GuestList /> */}
      {/* <UserSearch /> */}
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
