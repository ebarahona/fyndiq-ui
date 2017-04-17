import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Alert from 'fyndiq-component-alert'

storiesOf('Alert', module)
  .addWithInfo('default', () => (
    <Alert>Your message here</Alert>
  ))
  .addWithInfo('color themes', () => (
    <div>
      <Alert type="info">Info alert</Alert>
      <Alert type="good">Good alert</Alert>
      <Alert type="warning">Warning alert</Alert>
      <Alert type="bad">Bad alert</Alert>
    </div>
  ))
