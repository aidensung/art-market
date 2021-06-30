import { RenderRoutes } from "../root-route";

const PostRoutes = {
  path: "/post",
  key: "POST",
  component: RenderRoutes,
  routes: [
    {
      path: "/post/select-category",
      key: "POST_SELECT-CATEGORY",
      exact: true,
      component: () => <h1>Select Category Form</h1>,
    },
    {
      path: "/post/artworks",
      key: "POST_ARTWORKS",
      exact: true,
      component: () => <h1>Artwork Upload Form</h1>,
    },
    {
      path: "/post/jobs",
      key: "POST_JOBS",
      exact: true,
      component: () => <h1>Job Upload Form</h1>,
    },
  ],
};

export default PostRoutes;
