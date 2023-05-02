export function addMoneySymbol(num) {
  return "￥" + num;
}
export function addBookSymbol(string) {
  if (string) {
    return "《" + string + "》";
  }
  return "";
}
