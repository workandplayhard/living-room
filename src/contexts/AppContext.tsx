import React, { useCallback, useEffect, useState, useMemo } from 'react'
import i18n from 'i18next'

import { getStorageValue, setStorageValue } from '@/utils'
import { TLang } from '@/types'
import { DEFAULT_LANG, LANG_KEY } from '@/constants'

interface IAppContext {
  isRTL: boolean
  language: TLang
  // eslint-disable-next-line no-unused-vars
  onChangeLanguage: (lng: TLang) => void
}

export const AppContext = React.createContext<IAppContext>({
  isRTL: DEFAULT_LANG === 'en' ? false : true,
  language: DEFAULT_LANG,
  onChangeLanguage: () => null,
})

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState<TLang>('en')

  useEffect(() => {
    const lng = getStorageValue<TLang>(LANG_KEY, DEFAULT_LANG)
    i18n.changeLanguage(lng)
    setLang(lng)
    document.documentElement.lang = lng
  }, [])

  const onChangeLanguage = useCallback((lng: TLang) => {
    i18n.changeLanguage(lng)
    setLang(lng)
    setStorageValue<TLang>(LANG_KEY, lng)
    window.location.reload()
  }, [])

  const values: IAppContext = useMemo(
    () => ({
      isRTL: lang === 'he',
      language: lang,
      onChangeLanguage,
    }),
    [lang, onChangeLanguage],
  )

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}
