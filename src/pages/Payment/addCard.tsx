/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react'

import { Button, TextInput } from '@/components'
import { t } from '@/i18n'
import { cardNumberTest, cvcTest, expiryDateTest, nameTest } from '@/utils'

import { IAddCard } from './types'

const AddCard: React.FC<IAddCard> = ({
  setData,
  setCreditCards,
  setOpenAddNewCard,
  data,
}) => {
  const [error, setError] = useState<
    Record<'cardNumber' | 'name' | 'expiryDate' | 'cvc', string>
  >({
    cardNumber: '',
    name: '',
    expiryDate: '',
    cvc: '',
  })

  useEffect(() => {
    setError(e => (data?.cardNumber ? { ...e, cardNumber: '' } : e))
  }, [data?.cardNumber])

  useEffect(() => {
    setError(e => (data?.name ? { ...e, name: '' } : e))
  }, [data?.name])

  useEffect(() => {
    setError(e => (data?.expiryDate ? { ...e, expiryDate: '' } : e))
  }, [data?.expiryDate])

  useEffect(() => {
    setError(e => (data?.cvc ? { ...e, cvc: '' } : e))
  }, [data?.cvc])

  const validate = useCallback(() => {
    const _error: Record<'cardNumber' | 'name' | 'expiryDate' | 'cvc', string> =
      {
        cardNumber: '',
        name: '',
        expiryDate: '',
        cvc: '',
      }

    if (!data?.cardNumber) {
      _error.cardNumber = t('validation.fieldRequired', {
        fieldName: 'Card Number',
      })
    }

    if (!data?.name) {
      _error.name = t('validation.fieldRequired', {
        fieldName: 'Name',
      })
    }

    if (!data?.expiryDate) {
      _error.expiryDate = t('validation.fieldRequired', {
        fieldName: 'Expiry date',
      })
    }

    if (!data?.cvc) {
      _error.cvc = t('validation.fieldRequired', {
        fieldName: 'CVC',
      })
    }

    if (data?.name && !nameTest(data.name)) {
      _error.name = t('validName')
    }
    if (data?.cardNumber && !cardNumberTest(data.cardNumber)) {
      _error.cardNumber = t('validCardNumber')
    }
    if (data?.expiryDate && !expiryDateTest(data.expiryDate)) {
      _error.expiryDate = t('validExpiryDate')
    }
    if (data?.cvc && !cvcTest(data.cvc)) {
      _error.cvc = t('validCVC')
    }

    setError({ ...error, ..._error })
    return !Object.values(_error).some(e => !!e)
  }, [data?.cardNumber, data?.cvc, data?.expiryDate, data?.name, error])

  const onSave = useCallback(() => {
    if (validate()) {
      setCreditCards()
      setOpenAddNewCard(false)
    }
  }, [setCreditCards, setOpenAddNewCard, validate])

  return (
    <div className="add-card">
      <div className="form-fields">
        <TextInput
          value={data?.name}
          type="text"
          placeholder={t('nameOnCard')}
          onChangeText={v => setData({ ...(data || {}), name: v })}
          error={error.name}
        />

        <TextInput
          type="text"
          value={data?.cardNumber}
          placeholder={t('cardNumber')}
          inputMode="numeric"
          mask="9999 9999 9999 9999"
          onChangeText={v =>
            setData({ ...(data || {}), cardNumber: v.replace(/\s/g, '') })
          }
          error={error.cardNumber}
        />

        <TextInput
          type="text"
          mask="99/99"
          value={data?.expiryDate}
          placeholder={t('expiryDate')}
          inputMode="numeric"
          onChangeText={v => setData({ ...(data || {}), expiryDate: v })}
          error={error.expiryDate}
        />

        <TextInput
          type="text"
          mask="999"
          value={data?.cvc}
          placeholder={t('cvc')}
          inputMode="numeric"
          onChangeText={v => setData({ ...(data || {}), cvc: v })}
          error={error.cvc}
        />
      </div>
      <div className="confirm-btn">
        <Button className="main-btn" onClick={onSave}>
          {t('save')}
        </Button>
      </div>
      <div className="notice">
        <p>{t('fillGaps')}</p>
      </div>
    </div>
  )
}

export default AddCard
