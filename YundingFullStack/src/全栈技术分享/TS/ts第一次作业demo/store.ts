const utils = require("./utils.ts");
// 一般的对象接口
interface KeyValueObject {
  [key: string]: any;
}
// 遍历对象的方法中取键值的函数接口
interface func {
  (key: string, value: string | KeyValueObject): void;
}
class Sprage {
  constructor() {
 
  }
    get(key: string): any {
    let str: string | null = localStorage.getItem(key);
    return str == null ? null : JSON.parse(str);
  }
  set(
    param: string | KeyValueObject,
    val?: string | KeyValueObject,
    expiration?: number
  ): boolean {
    if (typeof param == "string" && val) {
      if (utils.isNull(val)) {
        throw "The value cannot be empty";
      }
      localStorage.setItem(param, JSON.stringify(val));
    } else if (typeof param == "object") {
      for (let item in param) {
        param.hasOwnProperty(item)
          ? localStorage.setItem(item, JSON.stringify(param[item]))
          : null;
      }
    } else {
      return false;
    }
    return true;
  }
  // 判断某个键值是否存在
  has(key: string): boolean {
    return !utils.isNull(localStorage.getItem(key));
  }
  // 删除某个键值，支持使用数组批量删除
  remove(param: string | string[]): boolean {
    try {
      if (typeof param == "string") {
        this.removeItem(param);
      } else {
        param.forEach((element) => {
          this.removeItem(element);
        });
      }
      return true;
    } catch {
      return false;
    }
  }
  // 调用API删除某个键的函数
  private removeItem(param: string): void {
    this.has(param) ? localStorage.removeItem(param) : null;
  }
  // 清除所有函数
  clear(): void {
    localStorage.clear();
  }

  // 获取所有localStorage对象
  getAll(): KeyValueObject[] {
    let List = [];
    for (let index = 0; index < localStorage.length; index++) {
      let temp = localStorage.key(index)!;
      let val = JSON.parse(localStorage.getItem(temp)!);
      if (typeof val != "object") {
        List.push({ [temp]: val });
      } else {
        List.push({ [temp]: val });
      }
    }
    return List;
  }
  // 使用foreach遍历每个对象
  forEach(fn: func): void {
    let List = this.getAll();
    List.forEach((e) => {
      for (let key in e) {
        let value = e[key];
        fn(key, value);
      }
    });
  }
}