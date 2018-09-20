import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

const validate = (values) => {
  const errors = {};
  if(!values.nome) {
    errors.nome = {
      message: 'You need to provide Name'
    }
  }
  if(!values.senha) {
    errors.senha = {
      message: 'You need to provide Senha'
    }
  }
  if(!values.telefone) {
    errors.telefone = {
      message: 'You need to provide a Phone number'
    }
  } else if(false && !/^\+(?:[0-9]?){6,14}[0-9]$/.test(values.telefone)) {
    errors.telefone = {
      message: 'Phone number must be in International format'
    }
  }
  if(!values.email) {
    errors.email = {
      message: 'You need to provide an Email address'
    }
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = {
      message: 'Invalid email address'
    }
  }
  return errors;
}

class UsuarioForm extends Component {

  componentWillReceiveProps = (nextProps) => { // Load Usuario Asynchronously
    const { usuario } = nextProps;
    if(usuario.id !== this.props.usuario.id) { // Initialize form only once
      this.props.initialize(usuario)
    }
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )

  render() {
    const { handleSubmit, pristine, submitting, loading, usuario } = this.props;
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>{usuario._id ? 'Edit Usuario' : 'Add New Usuario'}</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Field name="nome" type="text" component={this.renderField} label="Nome"/>
            <Field name="telefone" type="text" component={this.renderField} label="Telefone"/>
            <Field name="email" type="text" component={this.renderField} label="Email"/>
            <Field name="senha" type="password" component={this.renderField} label="Senha"/>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'usuario', validate})(UsuarioForm);
