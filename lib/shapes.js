class Shape {
    constructor(key, color, text) {
      this.key = key;
      this.color = color;
      this.text = text;    
    }
}

class Circle extends Shape {
  constructor(key, color, text, center_x, center_y, radius) {
  super(key, color, text)

  this.center_x = center_x;
  this.center_y = center_y;
  this.radius = radius;
  }

  render () {
    return `
    <svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="white" />
    <${this.key} cx="${this.center_x}" cy="${this.center_y}" r="" fill="${this.color}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20" fill="white">${this.text}</text>
  </svg>
    `
    }
}

class Triangle extends Shape {
  constructor(key, color, text, points) {
  super(key, color, text)

  this.points = points;
  }

  render () {
    return `
    <svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="white" />
    <${this.key} points="${this.points}" fill="${this.color}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20" fill="white">${this.text}</text>
  </svg>
    `
    }
}

class Square extends Shape {
  constructor(key, color, text, x_coord, y_coord, width, height) {
  super(key, color, text)

  this.x_coord = x_coord;
  this.y_coord = y_coord;
  this.width = width;
  this.height = height;
  }

  render () {
    return `
    <svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="white" />
    <${this.key} x="${this.x_coord}" y="${this.y_coord}" width="${this.width}" height="${this.height}" fill="${this.color}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20" fill="white">${this.text}</text>
  </svg>
    `
    }
}





generateNewShape = (answersData) => {

  let newShape;

  switch (answersData.shape.name) {
    case 'Circle':
      newShape = new Circle(answersData.shape.key, answersData.color, answersData.text, '150', '150', '80')
      break;
    case 'Triangle':
      newShape = new Triangle(answersData.shape.key, answersData.color, answersData.text, '100,20 180,180 20,180')
      break;
    case 'Square':
      newShape = new Square(answersData.shape.key, answersData.color, answersData.text, '40', '40', '120', '120')
      break;
  }
  
  return newShape.render();


}

module.exports = {
    // "generateShape": generateShape,
    generateNewShape
}


