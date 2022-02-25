import { Layout } from "./layout";
import { Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Log } from "./logs";
import { User } from "./users";
import { Request } from "./requests";
import { Machines } from "./machines";
import { Lines } from "./lines";
import { Settings } from "./settings";
import { MachineDetails } from "./machines/details";
import { RequestDetails } from "./requests/details";
import { LogDetails } from "./logs/details";
import { Login } from "./login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="logs" element={<Log />} />
        <Route path="logs/:id" element={<LogDetails />} />
        <Route path="users" element={<User />} />
        <Route path="requests" element={<Request />} />
        <Route path="requests/:id" element={<RequestDetails />} />
        <Route path="machines" element={<Machines />} />
        <Route path="machines/:id" element={<MachineDetails />} />
        <Route path="lines" element={<Lines />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
