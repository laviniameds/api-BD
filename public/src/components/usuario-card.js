import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function UsuarioCard({usuario, deleteUsuario}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name='user outline'/> {usuario.nome}
        </Card.Header>
        <Card.Description>
          <p><Icon name='phone'/> {usuario.telefone}</p>
          <p><Icon name='mail outline'/> {usuario.email}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to={`/usuarios/edit/${usuario.id}`} className="ui basic button green">Edit</Link>
          <Button basic color="red" onClick={() => deleteUsuario(usuario.id)} >Delete</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

UsuarioCard.propTypes = {
  usuario: React.PropTypes.object.isRequired
}
