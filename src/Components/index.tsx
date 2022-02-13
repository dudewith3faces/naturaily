import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Login, Dashboard } from './Pages';
import { Paths } from './enums';
import { ReducerService, AppContext } from './store';
import { PrivateRoute, PublicRoute } from './common';

const Components = () => {
  const { state, dispatch } = ReducerService();
  return (
    // @ts-ignore
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path={Paths.LOGIN} element={<PublicRoute />}>
            <Route path={Paths.LOGIN} element={<Login />}></Route>
          </Route>

          <Route path={Paths.DASHBOARD} element={<PrivateRoute />}>
            <Route path={Paths.DASHBOARD} element={<Dashboard />}></Route>
          </Route>
          <Route path="*" element={<Navigate to={Paths.LOGIN} />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Components;
