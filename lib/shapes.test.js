const Shapes = require('./shapes');

//circle tests
describe('Circle', () => {
    describe('Instantiate', () => {
        it('should be an instance of the Circle class', () => {
            const circle = new Shapes.Circle();
            
            expect(circle).toBeInstanceOf(Shapes.Circle);
        })
    })
    describe('Render', () => {
        it('should output a pink circle with black text svg file that can be rendered in the browser', () => {
            const circle = new Shapes.Circle(key='circle', color='pink', text='ABC', textColor='black', center_x='150', center_y='100', radius='90');

            expect(circle.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" /><circle cx="150" cy="100" r="90" fill="pink" /><text x="150" y="100" font-size="20" text-anchor="middle" alignment-baseline="middle" fill="black">ABC</text></svg>`);
        })
    })
})

//triangle tests
describe('Triangle', () => {
    describe('Instantiate', () => {
        it('should be an instance of the Triangle class', () => {
            const triangle = new Shapes.Triangle();
            
            expect(triangle).toBeInstanceOf(Shapes.Triangle);
        })
    })
    describe('Render', () => {
        it('should output a navy triangle with yellow text svg file that can be rendered in the browser', () => {
            const triangle = new Shapes.Triangle(key='polygon', color='navy', text='123', textColor='yellow', points='100,20 180,180 20,180')

            expect(triangle.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" /><polygon points="100,20 180,180 20,180" fill="navy" /><text x="100" y="125" font-size="20" text-anchor="middle" alignment-baseline="middle" fill="yellow">123</text></svg>`);
        })
    })
})

//square tests
describe('Square', () => {
    describe('Instantiate', () => {
        it('should be an instance of the Square class', () => {
            const square = new Shapes.Square();
            
            expect(square).toBeInstanceOf(Shapes.Square);
        })
    })
    describe('Render', () => {
        it('should output a charcoal square with lightblue text svg file that can be rendered in the browser', () => {
            const square = new Shapes.Square(key='rect', color='charcoal', text='xyz', textColor='lightblue', x_coord='40', y_coord='40', width='120', height='120');

            expect(square.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" /><rect x="40" y="40" width="120" height="120" fill="charcoal" /><text x="100" y="100" font-size="20" text-anchor="middle" alignment-baseline="middle" fill="lightblue">xyz</text></svg>`);
        })
    })
})