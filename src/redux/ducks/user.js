import { put, all, call, takeLatest } from 'redux-saga/effects';
const FETCH_USERS = 'FETCH_USERS';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

export const fetchUsers = payload => ({
  type: FETCH_USERS,
  payload: payload
});

export const setUsers = payload => ({
  type: FETCH_USERS_SUCCESS,
  payload: payload
});

export const initialState = {
  user: [],
  loading: false
};

export const githubUsers = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false
      };

    default:
      return state;
  }
};

function* fetchUsersApi({ payload }) {
  const url = `https://api.github.com/users/${payload}/repos`;
  const req = yield fetch(url);
  const res = yield req.json();
  return res
}

function* usersSaga(payload) {
  const result = yield call(fetchUsersApi,payload);
    yield put(setUsers(result || []))
}

function* getUsersSaga() {
  yield takeLatest(FETCH_USERS,usersSaga)
}


export function* rootSaga() {
  yield all([
    getUsersSaga(),
  ]);
}
