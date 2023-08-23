class Shape {
    constructor(key, color, text, textColor) {
      this.key = key;
      this.color = color;
      this.text = text;    
      this.textColor = textColor;
    }
}

class Circle extends Shape {
  constructor(key, color, text, textColor, center_x, center_y, radius) {
  super(key, color, text, textColor)

  this.center_x = center_x;
  this.center_y = center_y;
  this.radius = radius;
  }

  render () {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" /><${this.key} cx="${this.center_x}" cy="${this.center_y}" r="${this.radius}" fill="${this.color}" /><text x="150" y="100" font-size="20" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Triangle extends Shape {
  constructor(key, color, text, textColor, points) {
  super(key, color, text, textColor)

  this.points = points;
  }

  render () {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" /><${this.key} points="${this.points}" fill="${this.color}" /><text x="100" y="125" font-size="20" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Square extends Shape {
  constructor(key, color, text, textColor, x_coord, y_coord, width, height) {
  super(key, color, text, textColor)

  this.x_coord = x_coord;
  this.y_coord = y_coord;
  this.width = width;
  this.height = height;
  }

  render () {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" /><${this.key} x="${this.x_coord}" y="${this.y_coord}" width="${this.width}" height="${this.height}" fill="${this.color}" /><text x="100" y="100" font-size="20" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}





generateNewShape = (answersData) => {

  let newShape;

  switch (answersData.shape.name) {
    case 'Circle':
      newShape = new Circle(answersData.shape.key, answersData.color, answersData.text, answersData.textColor, '150', '100', '90')
      break;
    case 'Triangle':
      newShape = new Triangle(answersData.shape.key, answersData.color, answersData.text, answersData.textColor, '100,20 180,180 20,180')
      break;
    case 'Square':
      newShape = new Square(answersData.shape.key, answersData.color, answersData.text, answersData.textColor, '40', '40', '120', '120')
      break;
  }
  
  return newShape.render();


}

module.exports = {
    generateNewShape,
    Circle,
    Triangle,
    Square,
}


