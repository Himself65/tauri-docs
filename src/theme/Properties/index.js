import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.css'

import { Opening, Closing } from '@theme/CurlyBraces'

export default ({ rows, anchorRoot = '' }) => (
  <div className={styles.row}>
    <Opening />
    {rows.map((row) => (
      <div
        id={(anchorRoot ? anchorRoot + '.' : '') + row.property}
        className={classnames(styles.content, 'anchorify')}
      >
        <div
          className={styles.property}
          dangerouslySetInnerHTML={{
            __html: `<code><strong>${row.property}</strong><span>${
              row.optional ? '?' : ''
            }: ${row.type}</span></code>`,
          }}
        ></div>
        {!row.child && (
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: row.description }}
          ></div>
        )}

        {row.child}
      </div>
    ))}
    <Closing />
  </div>
)
