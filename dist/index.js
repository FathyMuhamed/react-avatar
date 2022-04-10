function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var styles = {"avatar":"_avatar-module__avatar__3z8Zf","small":"_avatar-module__small__1z-mB","large":"_avatar-module__large__1Nhji","circle":"_avatar-module__circle__2baLj","square":"_avatar-module__square__pSkHt"};

var _excluded = ["className", "alt", "src", "icon", "name", "size", "shape", "randomColor"];

var SVG = function SVG() {
  return React.createElement("svg", {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 20 20',
    fill: 'currentColor'
  }, React.createElement("path", {
    fillRule: 'evenodd',
    d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z',
    clipRule: 'evenodd'
  }));
};

function getRandomColor() {
  var options = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += options[Math.floor(Math.random() * 16)];
  }

  return color;
}

var Avatar = function Avatar(props) {
  var className = props.className,
      alt = props.alt,
      src = props.src,
      icon = props.icon,
      _props$name = props.name,
      name = _props$name === void 0 ? '' : _props$name,
      size = props.size,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'circle' : _props$shape,
      randomColor = props.randomColor,
      resetProps = _objectWithoutPropertiesLoose(props, _excluded);

  var children = props.children;
  var title = name && name.split(' ').map(function (n) {
    return n[0].toUpperCase();
  }).join('');
  var cn = [styles.avatar, className, size ? size === 'large' ? styles.large : styles.small : null, shape === 'circle' ? styles.circle : styles.square, src ? "styles.avatar-img" : null].filter(Boolean).join(' ').trim();

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

exports.Avatar = Avatar;
//# sourceMappingURL=index.js.map
