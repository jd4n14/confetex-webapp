import { Layout } from "./layout";
import { Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Log } from "./logs";
import { User } from "./users";
import { Request } from "./requests";
import { Machine } from "./machines";
import { Lines } from "./lines";
import { Settings } from "./settings";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bitacoras" element={<Log />} />
        <Route path="/usuarios" element={<User />} />
        <Route path="/solicitudes" element={<Request />} />
        <Route path="/maquinas" element={<Machine />} />
        <Route path="/lineas" element={<Lines />} />
        <Route path="/configuracion" element={<Settings />} />
      </Routes>
    </Layout>
  );
}

export default App;
