import React from 'react'
import styles from './avatar.module.css'
const SVG = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 20 20'
  >
    <path d='M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-6-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-2 4a5 5 0 0 0-4.546 2.916A5.986 5.986 0 0 0 10 16a5.986 5.986 0 0 0 4.546-2.084A5 5 0 0 0 10 11z' />
  </svg>
)

function getRandomColor() {
  const options = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += options[Math.floor(Math.random() * 16)]
  }
  return color
}

interface Iavatar {
  style?: React.CSSProperties
  className?: string
  alt?: string
  src?: string
  name?: string
  size?: 'large' | 'small' | 'default'
  shape?: 'circle' | 'square'
  icon?: boolean
  randomColor?: boolean
  children?: React.ReactNode
}

export const Avatar = (props: Iavatar) => {
  const {
    className,
    alt,
    src,
    icon,
    name = '',
    size,
    shape = 'circle',
    randomColor,
    ...resetProps
  } = props

  let children = props.children

  const title =
    name &&
    name
      .split(' ')
      .map((n: string) => n[0].toUpperCase())
      .join('')

  const cn = [
    styles.avatar,
    className,
    size ? (size === 'large' ? styles.large : styles.small) : null,
    shape === 'circle' ? styles.circle : styles.square,
    src ? `styles.avatar-img` : null
  ]
    .filter(Boolean)
    .join(' ')
    .trim()

  if (src) {
    children = <img src={src} alt={alt} />
  } else if (icon) {
    children = <SVG />
  } else {
    children = title
  }

  return (
    <span
      style={{
        backgroundColor: randomColor ? getRandomColor() : undefined
      }}
      {...resetProps}
      className={cn}
    >
      {children}
    </span>
  )
}
