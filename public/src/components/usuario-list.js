import React from 'react';
import { Card, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import UsuarioCard from './usuario-card';

export default function UsuarioList({usuarios, loading, errors, deleteUsuario}){

  const loadingMessage = (
      <Message icon info>
        <Icon name='circle notched' loading />
        <Message.Content>
           <Message.Header>Just one second</Message.Header>
           We are fetching that content for you.
       </Message.Content>
      </Message>
    )

    const emptyMessage = (
      <Message icon info>
        <Icon name='warning circle' />
        <Message.Content>
           <Message.Header>No Contacts Found</Message.Header>
           <p>Add some new contacts to get started.</p>
            <Link to={'/usuarios/new'} className="ui button primary">Add New Usuario</Link>
        </Message.Content>
      </Message>
    )

    const timeoutMessage = (
      <Message icon negative>
        <Icon name='wait' />
        <Message.Content>
           <Message.Header>{errors.global}</Message.Header>
           Is the backend server running?
       </Message.Content>
      </Message>
    )

  const cards = () => {
    return usuarios.map(usuario => {
      return (
        <UsuarioCard key={usuario.id} usuario={usuario} deleteUsuario={deleteUsuario} />
      )
    })
  }

  const usuarioList = (
    <Card.Group>
      { cards() }
    </Card.Group>
  )

  return (
    <div>
      { loading && loadingMessage }
      { usuarios.length === 0 && !loading  && !errors.global && emptyMessage }
      { errors.global && timeoutMessage }
      { usuarios.length > 0 && usuarioList }
    </div>
  )
}
