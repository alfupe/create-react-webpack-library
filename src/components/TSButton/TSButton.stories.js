import React from 'react'
import TSButton from './TSButton'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: 'TSButton', decorators: [withKnobs] }

export const button = () => {
    const message = text('Text', 'Click here now!')
    return <TSButton message={message} />
}
