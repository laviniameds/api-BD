import { client } from './';

const url = '/api/usuario/';

export function fetchUsuarios(){
  return dispatch => {
    dispatch({
      type: 'FETCH_USUARIOS',
      payload: client.get(url)
    })
  }
}

export function newUsuario() {
  return dispatch => {
    dispatch({
      type: 'NEW_USUARIO'
    })
  }
}

export function saveUsuario(usuario) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_USUARIO',
      payload: client.post(url, usuario)
    })
  }
}

export function fetchUsuario(_id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_USUARIO',
      payload: client.get(`${url}/${_id}`)
    })
  }
}

export function updateUsuario(usuario) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_USUARIO',
      payload: client.put(`${url}/${usuario._id}`, usuario)
    })
  }
}

export function deleteUsuario(_id) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_USUARIO',
      payload: client.delete(`${url}/${_id}`)
    })
  }
}
