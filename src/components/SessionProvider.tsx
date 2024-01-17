'use client'
import React from "react"
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store ,persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";


const SessionProviderWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <Provider store={store}> 
      <PersistGate loading={null} persistor={persistor}>
      <SessionProvider>
          {children}
      </SessionProvider>
      </PersistGate>
    </Provider>
  )
}

export default SessionProviderWrapper