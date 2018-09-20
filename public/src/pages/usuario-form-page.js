import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newUsuario, saveUsuario, fetchUsuario, updateUsuario } from '../actions/usuario-actions';
import UsuarioForm from '../components/usuario-form';


class UsuarioFormPage extends Component {

  state = {
    redirect: false
  }

  componentDidMount = () => {
    const { _id } = this.props.match.params;

    if(_id){
      this.props.fetchUsuario(_id);
    } else {
      this.props.newUsuario();
    }
  }

  submit = (usuario) => {
    if(!usuario.id) {
      return this.props.saveUsuario(usuario)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    } else {
      return this.props.updateUsuario(usuario)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    }
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/" /> :
          <UsuarioForm usuario={this.props.usuario} loading={this.props.loading} onSubmit={this.submit} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    usuario: state.usuarioStore.usuario,
    errors: state.usuarioStore.errors
  }
}

export default connect(mapStateToProps, {newUsuario, saveUsuario, fetchUsuario, updateUsuario})(UsuarioFormPage);
