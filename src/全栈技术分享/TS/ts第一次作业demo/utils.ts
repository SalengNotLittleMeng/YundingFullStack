module.exports = {
  /**
   *  检验一个参数是否为null
   * @param {any} val - 检验参数.
   */
  isNull: function (val: any): boolean {
    return !val && typeof val != undefined && val != 0;
  },
  /**
   *  检验一个参数是否为NAN
   * @param {any} val - 检验参数.
   */
  isNAN: function (val: any): boolean {
    return Object.is(val, NaN);
  },
};
