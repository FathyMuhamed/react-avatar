import React from 'react'

import { Avatar } from 'modern-react-avatar'
import 'modern-react-avatar/dist/index.css'

export default function App() {
  return (
    <>
      <Avatar icon size='small' />
      <Avatar name='Fathy Muhamed' />
      <Avatar size='large' name='Fathy Muhamed' randomColor />
      <Avatar src='https://via.placeholder.com/400' size='large' />
    </>
  )
}
