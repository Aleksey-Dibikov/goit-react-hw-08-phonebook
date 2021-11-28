import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Container} from './components/Container/Container';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Phonebook } from './pages/Phonebook';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import AppBar from './components/AppBar';

const isAuth = false;
function App () {
  return (
    <>
      <AppBar />

      <Container>
        <Routes>
          <Route path="/"
            element={<PublicRoute isAuth={isAuth} component={Home} />}
          />
          <Route path="/register"
            element={<PublicRoute isAuth={isAuth} component={Register} />}
          />
          <Route path="/login"
            element={<PublicRoute isAuth={isAuth} component={Login} />}
          />
          <Route path="/phonebook"
            element={<PublicRoute isAuth={isAuth} component={Phonebook} />}
          />
          </Routes>
      </Container>
    </>
  );
};


// ====== Class ====== =======


// class App extends Component {
//   componentDidMount() {
//     this.props.onFetchContacts();
//   }

//   render (){

//     return (
//       <div className="App">
//         <h1>Phonebook</h1>
//         <ContactsForm />
//         <h2>Contacts</h2>
//         <Filter />
//         <ContactList />
//       </div>
//       );
//   };
// };

// const mapStateToProps = state => ({
//   isLoading: getLoading(state),
// })

// const mapDispatchToProps = dispatch => ({
//   onFetchContacts: () => dispatch(fetchContacts.fulfilled()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;