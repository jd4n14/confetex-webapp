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
import { PrivateRoute } from "./core/components/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="bitacoras" element={<Log />} />
        <Route path="bitacoras/:id" element={<LogDetails />} />
        <Route path="usuarios" element={<User />} />
        <Route path="solicitudes" element={<Request />} />
        <Route path="solicitudes/:id" element={<RequestDetails />} />
        <Route path="maquinas" element={<Machines />} />
        <Route path="maquinas/:id" element={<MachineDetails />} />
        <Route path="lineas" element={<Lines />} />
        <Route path="configuracion" element={<Settings />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
