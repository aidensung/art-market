import { RenderRoutes } from "../root-route";

const CheckoutRoutes = {
  path: "/checkout",
  key: "CHEKOUT",
  component: RenderRoutes,
  routes: [
    {
      path: "/checkout",
      key: "CHEKOUT_ROOT",
      exact: true,
      component: () => <h1>Check Out</h1>,
    },
  ],
};

export default CheckoutRoutes;
