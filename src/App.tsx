import React, { useEffect, useState } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { ErrorPage } from "./pages/404/containers/404";
import { Home } from "./pages/Home/containers/Home";
import { Profile } from "./pages/Profile/containers/Profile";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAuth,
  selectUserLoadingStatus,
} from "./store/ducks/user/selectors";
import { SigninForm } from "./pages/Auth/components/SigninForm/SigninForm";
import { SignupForm } from "./pages/Auth/components/SignupForm/SignupForm";
import {
  fetchUserData,
  setUserErrors,
  setUserLoadingStatus,
  setUserResponse,
} from "./store/ducks/user/actionCreators";
import { RestoreForm } from "./pages/Auth/components/RestoreForm/RestoreForm";
import { ForgotForm } from "./pages/Auth/components/ForgotForm/ForgotForm";
import { Loader } from "./shared/Global/Loader/Loader";
import { LoadingStatus } from "./store/types";
import { Sidebar } from "./shared/Global/Sidebar/Sidebar";
import { Services } from "./pages/Services/containers/Services";
import { Header } from "./shared/Global/Header/Header";

import "./styles/global.scss";
import { Video } from "./pages/Video/containers/Video";

function App() {
  const isAuth = useSelector(selectIsAuth);
  const loadingStatus = useSelector(selectUserLoadingStatus);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [redirect, setRedirect] = useState<boolean>(false);
  const [page, setPage] = useState<string>("Главная");

  const currentPath = location.pathname;
  const authPaths = ["/signin", "/signup"];

  useEffect(() => {
    dispatch(fetchUserData());
  }, [isAuth]);

  useEffect(() => {
    dispatch(setUserLoadingStatus(LoadingStatus.LOADED));
    dispatch(setUserErrors(undefined));
    dispatch(setUserResponse(undefined));
  }, [location.pathname]);

  return (
    <>
      <Sidebar setPage={setPage} />
      <Header page={page} />
      <div className="page">
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/profile" component={Profile} />

            <Route exact path="/video" component={Video} />

            <Route component={ErrorPage} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
