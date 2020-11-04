import { row, col, css } from './utils';

function title(block) {
  const { tag = 'h1', styles } = block.options;
  return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
}
function text(block) {
  const { styles } = block.options;
  return row(col(`<p>${block.value}</p>`), css(styles));
}
function columns(block) {
  const html = block.value.map(col);
  return row(html.join(''), css(block.options.styles));
}
function image(block) {
  const { imageStyles: is, styles, alt = '' } = block.options;
  return row(
    `<img src=" ${block.value}" style="${css(is)}" alt="${alt}"/>`,
    css(styles)
  );
}

export const templates = {
  title,
  text,
  image,
  columns,
};
