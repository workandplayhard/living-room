import React from 'react'

import { t } from '@/i18n'

const Direction: React.FC = () => (
  <div className="map-box">
    <h3>{t('directions')}</h3>
    <div className="item-wrap">
      <div className="contact-map">
        <div className="map-wrap">
          <div>
            <iframe
              width="100%"
              height="181"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;
                hl=en&amp;q=Meitab%20St%206,%20Tel%20Aviv(Meitab%20St%206,
                %20Tel%20Aviv)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Direction
