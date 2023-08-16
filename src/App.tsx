import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'

import Routes from '@/navigation/routes'
import i18n from './i18n'
import {
  AppContextProvider,
  AuthContextProvider,
  BookingContextProvider,
  EventContextProvider,
} from './contexts'

import './App.scss'

const App: React.FC = () => (
  <Router>
    <I18nextProvider i18n={i18n}>
      <AppContextProvider>
        <AuthContextProvider>
          <BookingContextProvider>
            <EventContextProvider>
              <Routes />
            </EventContextProvider>
          </BookingContextProvider>
        </AuthContextProvider>
      </AppContextProvider>
    </I18nextProvider>
  </Router>
)

export default App
