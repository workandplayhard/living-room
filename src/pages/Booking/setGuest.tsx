import React from 'react'

import { Counter } from '@/components'
import { t } from '@/i18n'

interface ISetGuest {
  // eslint-disable-next-line no-unused-vars
  handleCounter: (val: number) => void
  counter: number
}

const SetGuest: React.FC<ISetGuest> = ({ handleCounter, counter }) => {
  return (
    <>
      <div className="modal-title">
        <h3>{t('numberOfGuest')}</h3>
      </div>
      <Counter
        handleCounter={(val: number) => handleCounter(val)}
        counter={counter}
      />
    </>
  )
}

export default SetGuest
