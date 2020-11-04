import { row, col, css } from '../utils';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error('Метод toHTML долен быть реализован');
  }
}
export class Titleblock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag = 'h1', styles } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}
export class Imageblock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { imageStyles: is, styles, alt = '' } = this.options;
    return row(
      `<img src=" ${this.value}" style="${css(is)}" alt="${alt}"/>`,
      css(styles)
    );
  }
}
export class Columnsblock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const html = this.value.map(col);
    return row(html.join(''), css(this.options.styles));
  }
}
export class Textblock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { styles } = this.options;
    return row(col(`<p>${this.value}</p>`), css(styles));
  }
}
