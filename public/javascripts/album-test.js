// const shootingStar = new function () {
//   const stars = [];
//   let shootingstar = [];
//
//   function Star(rad) {
//
//     this.x = Math.random() * width;
//     this.y = 20;
//     this.color = '#ffe500';
//     this.vx = 3 * (Math.random() * 10 - 5);
//     this.vy = 5;
//
//     this.size = rad;
//
//     this.update = () => {
//       this.x += this.vx;
//       this.y += this.vy;
//     };
//
//
//     return this;
//
//   }
//
//   this.makeFunction = (volume) => {
//     for (let i = 0; i < 20; i++) {
//       shootingstar.push(new Star(200 * volume / (i + 1)));
//     }
//
//     stars.push(shootingstar);
//     // console.log(stars);
//     shootingstar = [];
//   };
//
//   let tick = 0;
//   let createIndex = 0;
//
//   this.update = () => {
//
//     if (_.isEmpty(stars)) return;
//
//     tick++;
//
//     background(255, 255, 255, 25);
//
//
//     _.forEach(stars, particle => {
//       for (let i = 0; i < particle.length; i++) {
//         particle[i].update();
//         fill(255, 242, 0);
//         // console.log('s', particle.x, particle.y, particle.size);
//         ellipse(particle[i].x,
//           particle[i].y,
//           particle[i].size,
//           particle[i].size);
//       }
//     });
//   };
//   // this.update1 = (volume) => {
//   //
//   //   const count = volume * 50;
//   //   if (_.isEmpty(stars)) return;
//   //
//   //   // console.log('ss');
//   //
//   //   tick++;
//   //   if (tick % 30 === 0) {
//   //     const p = stars[createIndex];
//   //     p.x = Math.random() * width;
//   //     p.y = 0;
//   //     p.life = 500;
//   //     p.size = count + 2;
//   //     createIndex++;
//   //     createIndex %= 300;
//   //   }
//   //
//   //   for (var i = 0; i < count; i++) {
//   //     const p = stars[createIndex];
//   //     p.x = Math.random() * width;
//   //     p.y = 0;
//   //     p.life = 500;
//   //     p.size = count + 2;
//   //     createIndex++;
//   //     createIndex %= 300;
//   //   }
//   //
//   //
//   //   // blendMode(BLEND);
//   //   // blendMode(MULTIPLY);
//   //   background(255, 255, 255, 25);
//   //
//   //
//   //   _.forEach(stars, particle => {
//   //     if (particle.life <= 0) return;
//   //     particle.update();
//   //     particle.life--;
//   //     fill(255, 242, 0);
//   //     console.log('s', particle.x, particle.y, particle.size);
//   //     ellipse(particle.x,
//   //       particle.y,
//   //       particle.size,
//   //       particle.size);
//   //   });
//   // };
//
// };
//
// function setup() {
//   const $root = $('body');
//   console.log($root.width(), $root.height());
//   const canvas = createCanvas($root.width(), $root.height());
//   canvas.parent('background');
//   console.log(canvas);
//   background(0);
//
//   mic = new p5.AudioIn();
//   mic.start();
//
// }
//
// let mic;
//
// function draw() {
//
//   background(0);
//   if (mic.getLevel() > 0.01) {
//     shootingStar.makeFunction(mic.getLevel());
//   }
//   shootingStar.update();
// }


// 업데이트 한번에 해서 저장하지 말고 그리면서 업데이트해야함

// const shootingStar = new function () {
//   const stars = [];
//   let twinkleStars = [];
//   let univWidth;
//   let univHeight;
//   this.setSize = (w, h) => {
//     univWidth = w;
//     univHeight = h;
//   };
//
//   this.setTwinkle = () => {
//     for (let i = 0; i < 150; i++) {
//       twinkleStars.push(new Twinkle());
//     }
//   };
//
//   function Twinkle() {
//     this.x = Math.random() * univWidth;
//     this.y = Math.random() * univHeight;
//     this.rad = Math.random() * 5 + 0.5;
//     this.update = () => {
//       if(Math.random() * 1.1 < 0.008){
//         this.r = Math.floor(Math.random() * 127);
//         this.g = Math.floor(Math.random() * 127);
//         this.b = Math.floor(Math.random() * 127);
//       }
//       else {
//         this.r = 175;
//         this.g = 175;
//         this.b = 175;
//       }
//
//       fill(this.r, this.g, this.b);
//       noStroke();
//       ellipse(this.x, this.y, this.rad, this.rad);
//
//     };
//
//
//     return this;
//   }
//
//   function Star(rad) {
//
//     this.x = Math.random() * width;
//     this.y = 20;
//     this.color = '#ffe500';
//     this.vx = 4.5 * (Math.random() * 10 - 5);
//     this.vy = 6.5 * (Math.random() * 0.5) + 1.5;
//     this.lx = [];
//     this.ly = [];
//     this.opacity = Math.random() * 0.5 + 0.3;
//     this.size = rad * 200;
//
//     this.update = () => {
//       this.x += this.vx;
//       this.y += this.vy;
//     };
//
//
//     return this;
//
//   }
//
//   let tick = 0;
//   let createIndex = 0;
//   let star;
//   this.update = (usage) => {
//
//     // if (_.isEmpty(stars)) return;
//
//     _.forEach(twinkleStars, star => {
//       star.update();
//     });
//     tick++;
//
//     // background(255, 255, 255, 25);
//
//     if (usage !== 0 && tick % 3 === 0) {
//       star = new Star(usage);
//       stars.push(star);
//     }
//
//     // console.log('ll', stars.length);
//     _.forEach(stars, particle => {
//
//
//       particle.update();
//
//       particle.size -= 0.125;
//       particle.opacity -= 0.005;
//       particle.lx.push(particle.x);
//       particle.ly.push(particle.y);
//
//       // pushㄹㅏㅇ add 차이??
//
//       if (particle.lx.length > 100) {
//         particle.lx.splice(0, 1);
//         particle.ly.splice(0, 1);
//       }
//
//       for (let j = 1; j < particle.lx.length; j++) {
//         let opa = particle.opacity * 255 * j / particle.lx.length;
//         if (opa < 0) break;
//         strokeWeight(opa * 10 / 255);
//         stroke(255, 242, 0, opa);
//         fill(200, 200, 200, particle.opacity * 255);
//         stroke(200, 200, 200, particle.opacity * 255);
//         line(particle.lx[j - 1], particle.ly[j - 1], particle.lx[j], particle.ly[j]);
//       }
//
//     });
//   };
//   // this.update1 = (volume) => {
//   //
//   //   const count = volume * 50;
//   //   if (_.isEmpty(stars)) return;
//   //
//   //   // console.log('ss');
//   //
//   //   tick++;
//   //   if (tick % 30 === 0) {
//   //     const p = stars[createIndex];
//   //     p.x = Math.random() * width;
//   //     p.y = 0;
//   //     p.life = 500;
//   //     p.size = count + 2;
//   //     createIndex++;
//   //     createIndex %= 300;
//   //   }
//   //
//   //   for (var i = 0; i < count; i++) {
//   //     const p = stars[createIndex];
//   //     p.x = Math.random() * width;
//   //     p.y = 0;
//   //     p.life = 500;
//   //     p.size = count + 2;
//   //     createIndex++;
//   //     createIndex %= 300;
//   //   }
//   //
//   //
//   //   // blendMode(BLEND);
//   //   // blendMode(MULTIPLY);
//   //   background(255, 255, 255, 25);
//   //
//   //
//   //   _.forEach(stars, particle => {
//   //     if (particle.life <= 0) return;
//   //     particle.update();
//   //     particle.life--;
//   //     fill(255, 242, 0);
//   //     console.log('s', particle.x, particle.y, particle.size);
//   //     ellipse(particle.x,
//   //       particle.y,
//   //       particle.size,
//   //       particle.size);
//   //   });
//   // };
//
// };
//
//
// function setup() {
//   const $root = $('body');
//   const $main = $('.py-5');
//   // console.log($root.width(), $root.height());
//   // console.log('main', $main.width(), $main.height());
//   const thisWidth = $root.width();
//   const thisHeight = $root.height() - $main.height();
//   const canvas = createCanvas(thisWidth, thisHeight);
//   canvas.parent('background');
//   background(0);
//
//   mic = new p5.AudioIn();
//   mic.start();
//
//   shootingStar.setSize(thisWidth, thisHeight);
//   shootingStar.setTwinkle();
//
// }
//
// let mic;
//
// function draw() {
//
//   background(0);
//   if (mic.getLevel() > 0.01) {
//     // console.log('gg');
//     shootingStar.update(mic.getLevel());
//   }
//   shootingStar.update(0);
// }


// var s = function( sketch ) {
//
//   var x = 100;
//   var y = 100;
//   console.log(sketch);
//   sketch.setup = function() {
//     sketch.createCanvas(200, 200);
//   };
//
//   sketch.draw = function() {
//     sketch.background(0);
//     sketch.fill(255);
//     sketch.rect(x,y,50,50);
//   };
// };
//
// var myp5 = new p5(s);


// new function( sketch ) {
//
//   sketch.setup = function() {
//     const $root = $('body');
//     const $main = $('.py-5');
//     // console.log($root.width(), $root.height());
//     // console.log('main', $main.width(), $main.height());
//     const thisWidth = $root.width();
//     const thisHeight = $root.height() - $main.height();
//     const canvas = sketch.createCanvas(thisWidth, thisHeight);
//     canvas.parent('background');
//     sketch.background(0);
//
//     mic = new p5.AudioIn();
//     mic.start();
//
//     shootingStar.setSize(thisWidth, thisHeight);
//     shootingStar.setTwinkle();
//     shootingStar.setSketch(sketch);
//   };
//
//
//   var mic;
//
//   sketch.draw = function() {
//
//     sketch.background(0);
//     if (mic.getLevel() > 0.01) {
//       // console.log('gg');
//       shootingStar.update(mic.getLevel());
//     }
//     shootingStar.update(0);
//   };
// };

const shootingStar = new function () {
  const stars = [];
  let twinkleStars = [];
  let univWidth;
  let univHeight;
  this.setSize = (w, h) => {
    univWidth = w;
    univHeight = h;
  };
  
  this.setTwinkle = () => {
    for (let i = 0; i < 150; i++) {
      twinkleStars.push(new Twinkle());
    }
  };
  
  function Twinkle() {
    this.sound = 0;
    this.x = Math.random() * univWidth;
    this.y = Math.random() * univHeight;
    this.rad = Math.random() * 5 + 0.5;
    this.update = () => {
      if (Math.random() * 1.1 < 0.008 || Math.random() * this.sound > 0.01) {
        this.r = Math.floor(Math.random() * 127);
        this.g = Math.floor(Math.random() * 127);
        this.b = Math.floor(Math.random() * 127);
      }
      else {
        this.r = 175;
        this.g = 175;
        this.b = 175;
      }
      
      fill(this.r, this.g, this.b);
      noStroke();
      ellipse(this.x, this.y, this.rad, this.rad);
      
    };
    
    
    return this;
  }
  
  function Star(rad) {
    
    this.x = Math.random() * width;
    this.y = 20;
    this.color = '#ffe500';
    const dir = Math.abs(4.5 * (Math.random() * 8 - 4));
    
    if (this.x < width / 2) {
      this.vx = dir;
    }
    else
      this.vx = -dir;
    
    this.vy = 7 * (Math.random() * 2) + 1.5;
    this.lx = [];
    this.ly = [];
    this.opacity = Math.random() * 0.5 + 0.3;
    this.size = rad * 200;
    
    this.update = () => {
      this.x += this.vx;
      this.y += this.vy;
    };
    
    
    return this;
    
  }
  
  let tick = 0;
  let createIndex = 0;
  let star;
  this.update = (usage) => {
    
    // if (_.isEmpty(stars)) return;
    
    tick++;
    
    // background(255, 255, 255, 25);
    
    if (usage > 0.05 && tick % 8 === 0) {
      star = new Star(usage);
      stars.push(star);
    }
    else {
      _.forEach(twinkleStars, star => {
        star.sound = usage;
      });
    }
    
    _.forEach(twinkleStars, star => {
      star.update();
    });
    
    // console.log('ll', stars.length);
    _.forEach(stars, particle => {
      
      
      particle.update();
      
      particle.size -= 0.125;
      particle.opacity -= 0.001;
      particle.lx.push(particle.x);
      particle.ly.push(particle.y);
      
      // pushㄹㅏㅇ add 차이??
      
      if (particle.lx.length > 30) {
        particle.lx.splice(0, 1);
        particle.ly.splice(0, 1);
      }
      
      for (let j = 1; j < particle.lx.length; j++) {
        let opa = particle.opacity * 255 * j / particle.lx.length;
        if (opa < 0) break;
        strokeWeight(opa * 10 / 255);
        stroke(255, 242, 0, opa);
        fill(200, 200, 200, particle.opacity * 255);
        stroke(200, 200, 200, particle.opacity * 255);
        line(particle.lx[j - 1], particle.ly[j - 1], particle.lx[j], particle.ly[j]);
      }
      
    });
  };
  // this.update1 = (volume) => {
  //
  //   const count = volume * 50;
  //   if (_.isEmpty(stars)) return;
  //
  //   // console.log('ss');
  //
  //   tick++;
  //   if (tick % 30 === 0) {
  //     const p = stars[createIndex];
  //     p.x = Math.random() * width;
  //     p.y = 0;
  //     p.life = 500;
  //     p.size = count + 2;
  //     createIndex++;
  //     createIndex %= 300;
  //   }
  //
  //   for (var i = 0; i < count; i++) {
  //     const p = stars[createIndex];
  //     p.x = Math.random() * width;
  //     p.y = 0;
  //     p.life = 500;
  //     p.size = count + 2;
  //     createIndex++;
  //     createIndex %= 300;
  //   }
  //
  //
  //   // blendMode(BLEND);
  //   // blendMode(MULTIPLY);
  //   background(255, 255, 255, 25);
  //
  //
  //   _.forEach(stars, particle => {
  //     if (particle.life <= 0) return;
  //     particle.update();
  //     particle.life--;
  //     fill(255, 242, 0);
  //     console.log('s', particle.x, particle.y, particle.size);
  //     ellipse(particle.x,
  //       particle.y,
  //       particle.size,
  //       particle.size);
  //   });
  // };
  
};


function setup() {
  const $root = $('body');
  const $main = $('.py-5');
  // console.log($root.width(), $root.height());
  // console.log('main', $main.width(), $main.height());
  const thisWidth = $root.width();
  const thisHeight = $root.height() - $main.height();
  const canvas = createCanvas(thisWidth, thisHeight);
  canvas.parent('background');
  background(0);
  
  mic = new p5.AudioIn();
  mic.start();
  
  shootingStar.setSize(thisWidth, thisHeight);
  shootingStar.setTwinkle();
  
}

let mic;

function draw() {
  
  background(0);
  // if (mic.getLevel() > 0.05) {
  //   // console.log('gg');
  //   shootingStar.update(mic.getLevel());
  // }
  // shootingStar.update(0);
  
  // console.log('gg');
  shootingStar.update(mic.getLevel());
  
}