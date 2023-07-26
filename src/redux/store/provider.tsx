'use client';

import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store as reduxStore } from '@/redux/store/store';

function ReduxProvider({ children }: PropsWithChildren) {
  return <Provider store={reduxStore}>{children}</Provider>;
}

export default ReduxProvider;
