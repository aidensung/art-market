import "./App.css";
import ROUTES, { RenderRoutes } from "./routes/root-route";

function App() {
  return (
    <>
      <RenderRoutes routes={ROUTES} />
      <div>Footer</div>
    </>
  );
}

export default App;
