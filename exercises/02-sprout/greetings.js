export function getUserGreetings(greeting, firstName) {
  const [, first, rest] = greeting.match(/(.)(.+)/);
  return `${first.toUpperCase()}${rest}, ${firstName}!`;
}
