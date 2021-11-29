import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from './components/AppBar';
import { Container } from './components/Container/Container';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Phonebook } from './pages/Phonebook';

import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';

import { fetchCurrentUser } from './redux/auth/auth-operation';
import { authSelectors } from './redux/auth/auth-selector';
const isAuth = false;
function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  // const isAuth = useSelector(authSelectors.getIsAuth);
  useEffect(() => {
    dispatch(fetchCurrentUser(), [dispatch]);
  });
  return (
    <>
      {isFetchingCurrentUser ?
        (<h1>Показываем React Skeleton</h1>)
        : (
          <>
            <AppBar />
          <Container>
            <Routes>
              <Route path="/"
                element={<PublicRoute
                  isAuth={isAuth}
                  component={Home} />}
              />
              <Route path="/phonebook"
                element={<PrivateRoute
                  isAuth={isAuth}
                  component={Phonebook} />}
              />
              <Route path="/register"
                element={<PublicRoute
                  isAuth={isAuth}
                  component={Register} />}
              />
              <Route path="/login"
                element={<PublicRoute
                  isAuth={isAuth}
                  component={Login} />}
              />
              </Routes>
          </Container>
        </>
        )
      };
    </>
  );
};

export default App;