import { RenderRoutes } from "../root-route";

const JobsRoutes = {
  path: "/jobs",
  key: "JOBS",
  component: RenderRoutes,
  routes: [
    {
      path: "/jobs",
      key: "JOBS_ROOT",
      exact: true,
      component: () => <h1>List of jobs</h1>,
    },
  ],
};

export default JobsRoutes;
