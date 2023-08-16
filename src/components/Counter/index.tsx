import React from 'react'

import { Button, Icon, TextInput } from '@/components'

interface ICounter {
  // eslint-disable-next-line no-unused-vars
  handleCounter: (val: number) => void
  counter: number
}

export const Counter: React.FC<ICounter> = ({ handleCounter, counter }) => (
  <div className="qty-box">
    <div className="delete-item">
      <Button
        onClick={() => {
          handleCounter(Math.max(0, counter - 1))
        }}
        className="count-button"
        disabled={counter <= 0}
      >
        <Icon name="icon-minus" />
      </Button>
    </div>
    <TextInput
      value={counter}
      maxLength={3}
      onChangeText={val => {
        if (!isNaN(+val)) {
          val ? handleCounter(+val) : handleCounter(0)
        }
      }}
    />
    <div className="add-item">
      <Button
        onClick={() => handleCounter(counter + 1)}
        className="count-button"
      >
        <Icon name="icon-plus" />
      </Button>
    </div>
  </div>
)

export default Counter
