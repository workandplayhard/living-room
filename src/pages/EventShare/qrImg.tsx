import React from 'react'
import QRCode from 'react-qr-code'
import { useParams } from 'react-router-dom'

const QRImg: React.FC = () => {
  const { id } = useParams()

  return (
    <div className="qr-img">
      <QRCode
        size={201}
        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
        value={id || ''}
        viewBox="0 0 201 201"
        fgColor="#241f21"
      />
    </div>
  )
}

export default QRImg
