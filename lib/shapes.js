// class Shape {
//     constructor(color) {
//       this.color = color;    
//     }
// }


// class Circle extends Shape {
//     constructor(cx, cy, r, color) {
//         super(color)
//         this.cx = cx;
//         this.cy = cy;
//         this.r = r;
//     }

//     createCircleSvg() {
//         return `<circle cx="150" cy="100" r="80" fill="green" />`
//     }
// }




const generateShape = (answersData) => { //Square

    return `
    <svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="white" />
    <${answersData.shape.data} fill="${answersData.color}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20" fill="white">${answersData.text}</text>
  </svg>
    `
}

module.exports = {
    "generateShape": generateShape,
}


