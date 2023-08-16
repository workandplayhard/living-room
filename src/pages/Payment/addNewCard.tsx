import React, { useCallback, useState } from 'react'

import { Button, Modal, NavHeader } from '@/components'

import CardData from './cardData'
import AddCard from './addCard'

import { CardInfo, IAddNewCard } from './types'

const AddNewCard: React.FC<IAddNewCard> = ({ onClose, onAddCard }) => {
  const [data, setData] = useState<CardInfo | null>(null)
  const _onClose = useCallback(
    (v: boolean) => {
      document.body.classList.remove('ReactModal__Body--open')
      onClose(v)
    },
    [onClose],
  )

  return (
    <Modal
      onClose={() => onClose(false)}
      className="modal-content add-new-card"
    >
      <div className="toolbar">
        <NavHeader title="Add new card" canBack={false}>
          <div className="btn-box left">
            <Button className="main-btn">
              <span className="icon-camera" />
            </Button>
          </div>
          <div className="btn-box right">
            <Button className="main-btn" onClick={() => _onClose(false)}>
              <span className="icon-close" />
            </Button>
          </div>
        </NavHeader>
      </div>
      <div className="new-card">
        <CardData data={data} />
        <AddCard
          setData={v => setData({ ...data, ...v })}
          data={data}
          setCreditCards={() => onAddCard(data)}
          setOpenAddNewCard={v => _onClose(v)}
        />
      </div>
    </Modal>
  )
}

export default AddNewCard
