import DbCreate from "../db";
import App from "../main";

const routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/db",
    component: DbCreate
  }
];

export default routes;
