import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsuarioList from '../components/usuario-list';
import { fetchUsuarios, deleteUsuario } from '../actions/usuario-actions';

class UsuarioListPage extends Component {

  componentDidMount() {
    this.props.fetchUsuarios();
  }

  render() {
    return (
      <div>
        <h1>Lista de Usuarios</h1>
        <UsuarioList usuarios={this.props.usuarios} loading={this.props.loading} errors={this.props.errors} deleteUsuario={this.props.deleteUsuario}/>
      </div>
    )
  }
}

// Make usuarios array available in  props
function mapStateToProps(state) {
  return {
      usuarios: state.usuarioStore.usuarios,
      loading: state.usuarioStore.loading,
      errors: state.usuarioStore.errors
  }
}

export default connect(mapStateToProps, {fetchUsuarios, deleteUsuario})(UsuarioListPage);
