import "./App.css";
import ROUTES, { RenderRoutes } from "./routes/root-route";
import Footer from "./shared-components/footer";
import Header from "./shared-components/header";

function App() {
  return (
    <>
      <Header />
      <RenderRoutes routes={ROUTES} />
      <Footer />
    </>
  );
}

export default App;
