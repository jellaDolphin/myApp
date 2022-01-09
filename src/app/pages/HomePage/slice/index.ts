import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { homepageSaga } from './saga';
import { HomepageState } from './types';

export const initialState: HomepageState = {};

const slice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    loadTours(state) {},
    loadToursSuccess(state, action: PayloadAction<any>) {},
    loadToursFailure(state, action: PayloadAction<any>) {},
  },
});

export const { actions: homepageActions } = slice;

export const useHomepageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: homepageSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useHomepageSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
