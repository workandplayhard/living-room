import React from 'react'

import { t } from '@/i18n'

const EventText: React.FC = () => (
  <div className="event-text">
    <h3>{t('aboutEvent')}</h3>
    <p>{t('getReady')}</p>
    <p>{t('notBeMissed')}</p>
    <p>{t('dressCode')}</p>
  </div>
)

export default EventText
