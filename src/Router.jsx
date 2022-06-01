import { Route, Routes } from "react-router";
import {Login, Home} from "./templates";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/login" component={Login} />
      <Route exact path="(/)?" component={Home} />
    </Routes>
  )
}

export default Router;