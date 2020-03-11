export const range = (initialValue, endValue) => {
  return (
    new Array(endValue - initialValue+1))
      .fill()
      .map((el, i) => i+initialValue);
}