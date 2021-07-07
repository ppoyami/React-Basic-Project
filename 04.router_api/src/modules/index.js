import { combineReducers } from 'redux';

import symbols from './symbols';
import sheet from './sheet';

const rootReducer = combineReducers({ symbols, sheet });

export default rootReducer;
