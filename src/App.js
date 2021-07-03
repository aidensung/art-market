import "./App.css";
import ROUTES, { RenderRoutes } from "./routes/root-route";
import Footer from "./shared-components/footer/footer.component";
import { Headeer } from "./shared-components/header/header.component";

function App() {
  return (
    <>
      <RenderRoutes routes={ROUTES} />
      <Footer />
    </>
  );
}

export default App;
