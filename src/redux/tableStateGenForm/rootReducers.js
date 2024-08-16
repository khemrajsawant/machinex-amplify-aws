import { combineReducers } from 'redux';
import masterReducer from './master/masterReducer';
import notificationReducer from './notifications/notificationReducer';
const rootReducer = combineReducers({
    master: masterReducer,
    notification: notificationReducer
});
export default rootReducer;
