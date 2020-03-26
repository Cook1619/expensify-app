const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('should add 2 numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7)
})

test('should greet with name provided', () => {
    expect(generateGreeting('Matt')).toBe('Hello Matt');
})

test('should generate gretting for no name', () => {
    expect(generateGreeting()).toBe('Hello Anonymous')
})