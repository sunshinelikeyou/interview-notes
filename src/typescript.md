# TypeScript Part
## ts中type 和 interface 的区别？ <Badge type="tip" text="primary" />
::: details 回答
 名称 | 区别
 --- | ---
 type | 可以定义原始值、联合类型、交叉类型，元组等类型，重复定义同一个名称的类型会报错，只能通过&进行合并
 interface | 定义对象、类，函数的类型，重复定义同一个名称的interface时，会合并其属性，通过extends拓展    
 >一般来说，如果不清楚什么时候用interface/type，能用 interface 实现，就用 interface , 如果不能就用 type 。
:::
## ts中const和readonly的区别是什么？ <Badge type="tip" text="primary" />
::: details 回答
 名称 | 使用场景 | 检查时机 | 区别
 --- | --- | --- | ---
 const | 用于变量声明 | 运行时 | const变量保存的数组，可以使用push，pop等方法
 readonly | 用于属性声明 | 编译时 | 使用ReadonlyArray声明的数组不能使用push，pop等方法
:::
##  ts中的类型有哪些？ <Badge type="tip" text="primary" />
::: details 回答
 分类 | 类型
 --- | --- 
 基本类型 | number, string, boolean, null, undefined
 引用类型 | object(非原始类型的对象), array, tuple（元组）, enum
 特殊类型 | any(任意类型), void（没有任何类型，通常表示函数没有返回）, never（永不存在的值的类型）, unknown（位置类型）
 自定义类型 | type aliases, interface, interaction types, union types

:::
## ts中的协变（Covariance），逆变（Contravariance），双变（Bivariance）和抗变（Invariance ）是什么？ <Badge type="warning" text="middle" />
::: details 回答
名称 | 区别 | 应用场景
--- | --- | ---
协变 | 协变意味着子类型可以赋值给父类型 | 数组类型是协变的，因此可以将子类型的数组赋值给父类型的数组
逆变 | 逆变意味着超类型可以赋值给子类型 | 函数参数类型是逆变的，因此可以将超类型的函数赋值给子类型的函数
双变 | 协变和逆变的结合，既可以是子类型赋值给父类型，也可以是父类型赋值给子类型 | 对象类型是双变的，这意味着可以将子类型的对象赋值给父类型的对象，同时也可以将超类型的对象赋值给子类型的对象， ts2.x 之前支持
抗变 | 抗变表示不允许类型之间的任何赋值关系 | 通常情况下，基本类型和类类型是抗变的
>协变
```ts
interface Person {
    name: string;
    age: number;
} 
interface Guang {
    name: string;
    age: number;
    hobbies: string[]
}
let person: Person = {name: 'zhangsan', age: 18};
let guang: Guang = {name: 'lisi', age: 20, hobbies: ['music', 'reading']};
person = guang; // 协变，子类型可以赋值给父类型
// guang = person; 报错类型 "Person" 中缺少属性 "hobbies"，但类型 "Guang" 中需要该属性。
type res = 'a' | 'b' extends 'a' | 'b' | 'c'? true : false; // true, 联合类型是集合那一套，看子集、父集，非联合类型就是看结构
```
>逆变
```ts
let printHobbies: (guang: Guang) => void;
printHobbies = (guang) => {
  console.log(guang.hobbies);
};

let printName: (person: Person) => void;
printName = (person) => {
  console.log(person.name);
};

printHobbies = printName;
printName = printHobbies;  // 报错类型“(guang: Guang) => void”的参数不能赋给类型“(person: Person) => void”的参数。 ，如果这个也能支持就是双变
```
:::