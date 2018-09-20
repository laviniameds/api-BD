import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import UsuarioListPage from './pages/usuario-list-page';
import UsuarioFormPage from './pages/usuario-form-page';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">Contacts List</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/usuarios/new">Add usuarios</NavLink>
        </div>
        <Route exact path="/" component={UsuarioListPage}/>
        <Route path="/usuarios/new" component={UsuarioFormPage}/>
        <Route path="/usuarios/edit/:_id" component={UsuarioFormPage}/>
      </Container>
    );
  }
}

export default App;
