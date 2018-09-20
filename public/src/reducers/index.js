import { combineReducers } from 'redux';
import UsuarioReducer from './usuario-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  usuarioStore: UsuarioReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
