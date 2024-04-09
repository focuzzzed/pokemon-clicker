import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStatus, Namespace } from '../../const';
import { decodeJWT } from '../../utils/utils';

interface UserProcessState {
  username: string,
  authStatus: AuthStatus,
}

const initialState: UserProcessState = {
  username: '',
  authStatus: AuthStatus.NonAuthorized,
};

export const userProcess = createSlice({
  initialState,
  name: Namespace.User,
  reducers: {
    authorizeUser: (state, action: PayloadAction<string>) => {
      const data = decodeJWT(action.payload);
      state.username = data?.username ?? '';
      state.authStatus = AuthStatus.Authorized;
    },
  },
});

export const { authorizeUser } = userProcess.actions;
