import React from 'react';

var styles = {"avatar":"_avatar-module__avatar__3z8Zf","small":"_avatar-module__small__1z-mB","large":"_avatar-module__large__1Nhji","circle":"_avatar-module__circle__2baLj","square":"_avatar-module__square__pSkHt"};

const SVG = () => React.createElement("svg", {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 20 20',
  fill: 'currentColor'
}, React.createElement("path", {
  fillRule: 'evenodd',
  d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z',
  clipRule: 'evenodd'
}));

function getRandomColor() {
  const options = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += options[Math.floor(Math.random() * 16)];
  }

  return color;
}

const Avatar = props => {
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
  } = props;
  let children = props.children;
  const title = name && name.split(' ').map(n => n[0].toUpperCase()).join('');
  const cn = [styles.avatar, className, size ? size === 'large' ? styles.large : styles.small : null, shape === 'circle' ? styles.circle : styles.square, src ? `styles.avatar-img` : null].filter(Boolean).join(' ').trim();

  if (src) {
    children = React.createElement("img", {
      src: src,
      alt: alt
    });
  } else if (icon) {
    children = React.createElement(SVG, null);
  } else {
    children = title;
  }

  return React.createElement("span", Object.assign({
    style: {
      backgroundColor: randomColor ? getRandomColor() : undefined
    }
  }, resetProps, {
    className: cn
  }), children);
};

export { Avatar };
//# sourceMappingURL=index.modern.js.map
