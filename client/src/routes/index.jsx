import DbCreate from "../db";
import Landing from "../landing";
import App from "../main";

const routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/db",
    component: DbCreate
  },
  {
    path: "/landing",
    component: Landing
  }
];

export default routes;
