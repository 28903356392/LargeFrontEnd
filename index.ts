
// 元组
const a: [string, number] = ['1', 1]

// 枚举
enum B {
  a,
  b,
  c,
  d,
  f,
}
// console.log(Object.entries(B));

interface ss {

}

interface b extends ss {
  [id: number]: string
}

const b1: Array<b> = ['s', 'd']
b1.length

class c {
  a = 1;
  constructor() {
    console.log(this.a);

  }
}

new c()