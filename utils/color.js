/**
 * @param {String} color (hex string)
 * @param {Double} percent (-1.0 ~ 1.0) 
 * 색상의 진하기 정도를 변경합니다.
 */
export function shadeColor(color, percent) {
  var f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
  return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}

/**
 * @param {*} c0 
 * @param {*} c1 
 * @param {*} p 
 */
export function blendColors(c0, c1, p) {
  var f = parseInt(c0.slice(1), 16), t = parseInt(c1.slice(1), 16), R1 = f >> 16, G1 = f >> 8 & 0x00FF, B1 = f & 0x0000FF, R2 = t >> 16, G2 = t >> 8 & 0x00FF, B2 = t & 0x0000FF;
  return "#" + (0x1000000 + (Math.round((R2 - R1) * p) + R1) * 0x10000 + (Math.round((G2 - G1) * p) + G1) * 0x100 + (Math.round((B2 - B1) * p) + B1)).toString(16).slice(1);
}

/**
 * @param {String} bgColor (hex string)
 * 색상비에 따라 흰색 또는 검은색을 반환합니다.
 */
export function contrastColor(bgColor) {
  if (!bgColor) { return ''; }
  return (parseInt(bgColor.replace('#', ''), 16) > 0xffffff / 1.001) ? '#000000' : '#ffffff';
}
