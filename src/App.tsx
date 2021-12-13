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

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bitacoras" element={<Log />} />
        <Route path="bitacoras/:id" element={<LogDetails />} />
        <Route path="usuarios" element={<User />} />
        <Route path="solicitudes" element={<Request />} />
        <Route path="solicitudes/:id" element={<RequestDetails />} />
        <Route path="maquinas" element={<Machines />} />
        <Route path="maquinas/:id" element={<MachineDetails />} />
        <Route path="lineas" element={<Lines />} />
        <Route path="configuracion" element={<Settings />} />
      </Routes>
    </Layout>
  );
}

export default App;
