// packages/shared/src/hello.ts
export function hello(to: string = 'World') {
  const txt = `Hello111 ${to}!`;
  console.log(txt);
  return txt;
}
