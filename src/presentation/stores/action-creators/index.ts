import * as TodoActionCreators from './todo';
import * as UsersActionCreators from './users';

export default {
    ...TodoActionCreators,
    ...UsersActionCreators,
}