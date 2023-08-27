/* NEVER TYPE */

function neverReturn(): never {
  // type 'never' should be used when a function will never return anything due to throwing an unhandled error
  throw new Error('An error occurred');
}

export default neverReturn;
