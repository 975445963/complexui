// packages/shared/src/hello.ts
export function hello(to: string = 'World') {
  const txt = `Hello ${to}!`;
  console.log(txt);
  return txt;
}