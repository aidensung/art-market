import { RenderRoutes } from "../root-route";

const AccountSettingRoutes = {
  path: "/account-setting",
  key: "ACCOUNT_SETTING",
  component: RenderRoutes,
  routes: [
    {
      path: "/account-setting",
      key: "ACCOUNT_SETTING_ROOT",
      exact: true,
      component: () => <h1>Account Setting</h1>,
    },
    {
      path: "/account-setting/payments",
      key: "ACCOUNT_SETTING_PAYMENTS",
      exact: true,
      component: () => <h1>Payments Setting</h1>,
    },
    {
      path: "/account-setting/notifications",
      key: "ACCOUNT_SETTING_NOTIFICATIONS",
      exact: true,
      component: () => <h1>Notification Setting</h1>,
    },
  ],
};

export default AccountSettingRoutes;
