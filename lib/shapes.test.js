const Shapes = require('./shapes');

describe('Circle', () => {
    describe('Render', () => {
        it('should output a valid svg file that can be rendered in the browser', () => {
            const circle = new Shapes.Circle(key='circle', color='pink', text='ABC', textColor='black', center_x='150', center_y='100', radius='90');

            expect(circle.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" /><circle cx="150" cy="100" r="90" fill="pink" /><text x="150" y="100" font-size="20" text-anchor="middle" alignment-baseline="middle" fill="black">ABC</text></svg>`);
        })
    })
})