const defaultState = {
  usuarios: [],
  usuario: {nome:{}},
  loading: false,
  errors:{}
}

export default (state=defaultState, action={}) => {

  switch (action.type) {
    case 'FETCH_USUARIOS_FULFILLED': {
      return {
        ...state,
        usuarios: action.payload.data,
        loading: false,
        errors: {}
      }
    }

    case 'FETCH_USUARIOS_PENDING': {
      return {
        ...state,
        loading: true,
        errors: {}
      }
    }

    case 'FETCH_USUARIOS_REJECTED': {
      return {
        ...state,
        loading: false,
        errors: { global: action.payload.message }
      }
    }

    case 'NEW_USUARIO': {
      return {
        ...state,
        usuario: {name:{}}
      }
    }

    case 'SAVE_USUARIO_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'SAVE_USUARIO_FULFILLED': {
      return {
        ...state,
        usuarios: [...state.usuarios, action.payload.data],
        errors: {},
        loading: false
      }
    }

    case 'SAVE_USUARIO_REJECTED': {
      const data = action.payload.response.data;
      // convert feathers error formatting to match client-side error formatting
      const { "name.first":first, "name.last":last, phone, email } = data.errors;
      const errors = { global: data.message, name: { first,last }, phone, email };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'FETCH_USUARIO_PENDING': {
      return {
        ...state,
        loading: true,
        usuario: {nome:{}}
      }
    }

    case 'FETCH_USUARIO_FULFILLED': {
      return {
        ...state,
        usuario: action.payload.data,
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_USUARIO_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'UPDATE_USUARIO_FULFILLED': {
      const usuario = action.payload.data;
      return {
        ...state,
        usuarios: state.usuarios.map(item => item._id === usuario._id ? usuario : item),
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_USUARIO_REJECTED': {
      const data = action.payload.response.data;
      const { "name.first":first, "name.last":last, phone, email } = data.errors;
      const errors = { global: data.message, name: { first,last }, phone, email };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'DELETE_USUARIO_FULFILLED': {
      const id = action.payload.data.id;
      console.log(action);
      return {
        ...state,
        usuarios: state.usuarios.filter(item => item.id !== id)
      }
    }

    default:
      return state;
  }
}
