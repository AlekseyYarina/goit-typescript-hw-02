/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

// interface KeyValuePair<T extends object, K extends keyof T, V = T[K]> {
//   key: K;
//   value: V;
// }

interface KeyValuePair<K extends string, V extends any> {
  key: K;
  value: V;
}

export {};
