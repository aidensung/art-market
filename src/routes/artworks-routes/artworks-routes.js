import { RenderRoutes } from "../root-route";

const ArtworksRoutes = {
  path: "/artworks",
  key: "ARTWORKS",
  component: RenderRoutes,
  routes: [
    {
      path: "/artworks",
      key: "ARTWORKS_ROOT",
      exact: true,
      component: () => <h1>List of Artworks</h1>,
    },
  ],
};

export default ArtworksRoutes;
