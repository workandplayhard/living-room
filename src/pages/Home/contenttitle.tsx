import React from 'react'

import { t } from '@/i18n'

const ContentTitle: React.FC = () => (
  <div className="content-title">
    <h3>{t('reserve')}</h3>
    <p>{t('private')}</p>
  </div>
)
export default ContentTitle
