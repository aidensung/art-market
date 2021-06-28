import { RenderRoutes } from "../root-route";

const ProfileRoutes = {
  path: "/profile",
  key: "PROFILE",
  component: RenderRoutes,
  routes: [
    {
      path: "/profile",
      key: "PROFILE_ROOT",
      exact: true,
      component: () => <h1>Profile Overview</h1>,
    },
    {
      path: "/profile/transaction-history",
      key: "PROFILE_TRANSACTION_HISTORY",
      exact: true,
      component: () => <h1>Transaction History</h1>,
    },
    {
      path: "/profile/transaction-history/:tid",
      key: "PROFILE_TRANSACTION_HISTORY_DETAIL",
      exact: true,
      component: () => <h1>Transaction History of OOO</h1>,
    },
    {
      path: "/profile/favourites",
      key: "PROFILE_FAVOURITES",
      exact: true,
      component: () => <h1> List of Favourites </h1>,
    },
    {
      path: "/profile/artworks-history",
      key: "PROFILE_ARTWORKS_HISTORY",
      exact: true,
      component: () => <h1>List of artworks</h1>,
    },
    {
      path: "/profile/artworks-history/:aid",
      key: "PROFILE_ARTWORKS_HISTORY_DETAIL",
      exact: true,
      component: () => <h1>Detail of Artwork</h1>,
    },
    {
      path: "/profile/jobs-history",
      key: "PROFILE_JOBS-HISTORY",
      exact: true,
      component: () => <h1>List of Jobs</h1>,
    },
    {
      path: "/profile/jobs-history/:jid",
      key: "PROFILE_JOBS-HISTORY_DETAIL",
      exact: true,
      component: () => <h1>Detail of Job</h1>,
    },
    {
      path: "/profile/inbox",
      key: "PROFILE_INBOX",
      exact: true,
      component: () => <h1>List of Message</h1>,
    },
    {
      path: "/profile/inbox/:mid",
      key: "PROFILE_INBOX_DETAIL",
      exact: true,
      component: () => <h1>Detail of Message</h1>,
    },
  ],
};

export default ProfileRoutes;
