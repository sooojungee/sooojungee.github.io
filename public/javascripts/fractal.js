// const fractalGenerator = new function () {
//   let generateData = {};
//   let lineData = [];
//
//   function getLinedataByDepth(depth) {
//     return _.filter(lineData, d => d.depth === depth)
//   }
//
//   const drawLineByAngle = function (x1, y1, degree, depth) {
//     const length = Math.pow(generateData.childBranchLengthRatio, depth)
//       * generateData.initialBranchLength;
//
//     if (depth > generateData.depthCount) return;
//
//     const radian = degree / 180 * Math.PI;
//     const x2 = Math.cos(radian) * length + x1;
//     const y2 = Math.sin(radian) * length + y1;
//
//     const c = lerpHexColor(depth / generateData.depthCount);
//
//     lineData.push({
//       depth,
//       x1,
//       y1,
//       x2,
//       y2,
//       c,
//       opacity: 255 - depth / generateData.depthCount * 255
//     });
//
//     let startAngle = -(generateData.childBranchCount - 1)
//       * generateData.childBranchAngle / 2 + degree * 1;
//
//     for (let i = 0; i < generateData.childBranchCount; i++) {
//       drawLineByAngle(x2, y2, startAngle, depth + 1);
//       startAngle += generateData.childBranchAngle * 1;
//     }
//
//
//   };
//
//   // const lerpHexColor = (ratio) => {
//   //
//   //   const r1 = Number('0x' + generateData.startColor[1] + generateData.startColor[2]);
//   //   const g1 = Number('0x' + generateData.startColor[3] + generateData.startColor[4]);
//   //   const b1 = Number('0x' + generateData.startColor[5] + generateData.startColor[6]);
//   //   const r2 = Number('0x' + generateData.endColor[1] + generateData.endColor[2]);
//   //   const g2 = Number('0x' + generateData.endColor[3] + generateData.endColor[4]);
//   //   const b2 = Number('0x' + generateData.endColor[5] + generateData.endColor[6]);
//   //
//   //   let r = r1 * (1 - ratio) + r2 * ratio;
//   //   let g = g1 * (1 - ratio) + g2 * ratio;
//   //   let b = b1 * (1 - ratio) + b2 * ratio;
//   //
//   //   let max = Math.max(r, g, b), min = Math.min(r, g, b),
//   //     d = max - min,
//   //     h,
//   //     s = (max === 0 ? 0 : d / max),
//   //     v = max / 255;
//   //
//   //   switch (max) {
//   //     case min:
//   //       h = 0;
//   //       break;
//   //     case r:
//   //       h = (g - b) + d * (g < b ? 6 : 0);
//   //       h /= 6 * d;
//   //       break;
//   //     case g:
//   //       h = (b - r) + d * 2;
//   //       h /= 6 * d;
//   //       break;
//   //     case b:
//   //       h = (r - g) + d * 4;
//   //       h /= 6 * d;
//   //       break;
//   //   }
//   //   return {h: Math.floor(h * 360), s: Math.floor(s * 100), v: Math.floor(v * 100)};
//   // };
//
//   const lerpHexColor = (ratio) => {
//     const r1 = Number('0x' + generateData.startColor[ 1 ] + generateData.startColor[ 2 ]);
//     const g1 = Number('0x' + generateData.startColor[ 3 ] + generateData.startColor[ 4 ]);
//     const b1 = Number('0x' + generateData.startColor[ 5 ] + generateData.startColor[ 6 ]);
//     const r2 = Number('0x' + generateData.endColor[ 1 ] + generateData.endColor[ 2 ]);
//     const g2 = Number('0x' + generateData.endColor[ 3 ] + generateData.endColor[ 4 ]);
//     const b2 = Number('0x' + generateData.endColor[ 5 ] + generateData.endColor[ 6 ]);
//     const r = r1 * (1 - ratio) + r2 * ratio;
//     const g = g1 * (1 - ratio) + g2 * ratio;
//     const b = b1 * (1 - ratio) + b2 * ratio;
//     return {
//       r,
//       g,
//       b,
//     }
//   };
//
//   this.generator = (data) => {
//     lineData = [];
//     generateData = data;
//     blendMode(BLEND);
//     background(0);
//     blendMode(ADD);
//
//     const cx = width / 2;
//     const cy = height / 2;
//
//     const dAngle = 360 / generateData.startBranchCount;
//     let currentAngle = 0;
//
//     for (let i = 0; i < generateData.startBranchCount; i++) {
//       drawLineByAngle(cx, cy, currentAngle, 1);
//       currentAngle += dAngle;
//     }
//
//   };
//
//   let tick = 0;
//   let isPause = false;
//
//   this.play = () => {
//     tick = 0;
//   };
//
//   this.pause = () => {
//     isPause = !isPause;
//   };
//
//   this.update = () => {
//     if (isPause) return;
//     tick++;
//     const depth = Math.floor(tick / 100) + 1;
//     drawLineData(getLinedataByDepth(depth), 0.01);
//   };
//
//   function drawLineData(datas, opacity) {
//     _.forEach(datas, d => {
//       stroke(
//         d.c.r,
//         d.c.g,
//         d.c.b,
//         d.opacity * opacity);
//
//       line(d.x1, d.y1, d.x2, d.y2);
//
//     })
//   }
//
// };
//
//
// function setup() {
//   const $root = $('#renderer');
//   const canvas = createCanvas($root.width(), $root.height());
//
//   canvas.parent('renderer');
//   background(0);
// }
//
// function draw() {
//   fractalGenerator.update();
// }

// const fractalGenerator = new function () {
//   let generateData = {};
//   let lineData = [];
//
//   this.getLineData = () => {
//     return lineData;
//   };
//
//   const drawLineByAngle = (x1, y1, degree, depth) => {
//     const length = Math.pow(generateData.childBranchLengthRatio, depth)
//       * generateData.initialBranchLength;
//
//     if (depth > generateData.depthCount) return;
//     const radian = degree / 180 * Math.PI;
//     const x2 = Math.cos(radian) * length + x1;
//     const y2 = Math.sin(radian) * length + y1;
//
//     const c = lerpHexColor(depth / generateData.depthCount);
//
//     lineData.push({
//       depth,
//       x1,
//       y1,
//       x2,
//       y2,
//       c,
//       opacity: 255 - depth / generateData.depthCount * 255,
//     });
//
//
//     let startAngle = -(generateData.childBranchCount - 1)
//       * generateData.childBranchAngle / 2 + degree * 1;
//
//     for (let i = 0; i < generateData.childBranchCount; i++) {
//       drawLineByAngle(x2, y2, startAngle, depth + 1);
//       startAngle += generateData.childBranchAngle * 1;
//     }
//   };
//
//   const lerpHexColor = (ratio) => {
//
//     const r1 = Number('0x' + generateData.startColor[1] + generateData.startColor[2]);
//     const g1 = Number('0x' + generateData.startColor[3] + generateData.startColor[4]);
//     const b1 = Number('0x' + generateData.startColor[5] + generateData.startColor[6]);
//     const r2 = Number('0x' + generateData.endColor[1] + generateData.endColor[2]);
//     const g2 = Number('0x' + generateData.endColor[3] + generateData.endColor[4]);
//     const b2 = Number('0x' + generateData.endColor[5] + generateData.endColor[6]);
//
//     let r = r1 * (1 - ratio) + r2 * ratio;
//     let g = g1 * (1 - ratio) + g2 * ratio;
//     let b = b1 * (1 - ratio) + b2 * ratio;
//
//     let max = Math.max(r, g, b), min = Math.min(r, g, b),
//       d = max - min,
//       h,
//       s = (max === 0 ? 0 : d / max),
//       v = max / 255;
//
//     switch (max) {
//       case min:
//         h = 0;
//         break;
//       case r:
//         h = (g - b) + d * (g < b ? 6 : 0);
//         h /= 6 * d;
//         break;
//       case g:
//         h = (b - r) + d * 2;
//         h /= 6 * d;
//         break;
//       case b:
//         h = (r - g) + d * 4;
//         h /= 6 * d;
//         break;
//     }
//     return {h: Math.floor(h * 360), s: Math.floor(s * 100), v: Math.floor(v * 100)};
//   };
//
//   this.generate = (data) => {
//     lineData = [];
//     generateData = data;
//     blendMode(BLEND);
//     background(0);
//     blendMode(ADD);
//     const cx = width / 2;
//     const cy = height / 2;
//
//     const dAngle = 360 / data.startBranchCount;
//     let currentAngle = 0;
//     for (let i = 0; i < data.startBranchCount; i++) {
//       drawLineByAngle(cx, cy, currentAngle, 1);
//       currentAngle += dAngle;
//     }
//
//     console.log(lineData);
//     // drawLine(0, 0, 500, 500, '#ff0000');
//   };
//
//
//   let tick = 0;
//   let isPause = false;
//   this.play = () => {
//     tick = 0;
//
//   };
//
//   this.pause = () => {
//     isPause = !isPause;
//   };
//
//   this.update = () => {
//     if (isPause) return;
//     tick++;
//     const depth = Math.floor(tick / 100) + 1;
//     drawLineData(getLineDataByDepth(depth), 0.0001);
//   };
//
//   function drawLineData(datas, opacity) {
//     colorMode(HSB);
//     _.forEach(datas, d => {
//
//       stroke(d.c.h,
//         d.c.s,
//         d.c.v,
//         d.opacity * opacity);
//       strokeWeight(1 / d.depth);
//       line(d.x1,
//         d.y1,
//         d.x2,
//         d.y2);
//     });
//
//   }
//
//   function getLineDataByDepth(depth) {
//     return _.filter(lineData, d => d.depth === depth);
//   }
// };
//
// function setup() {
//   const $root = $('body');
//   console.log($root.width(), $root.height());
//   const canvas = createCanvas($root.width(), $root.height());
//   canvas.parent('renderer');
//   console.log(canvas);
//   background(0);
//
// }
//
//
// function draw() {
//   fractalGenerator.update();
//
// }

// const fractalGenerator = new function () {
//
//   let generateData = {};
//   let count = 0;
//   let checkCount = 0;
//   let checkFrame = 0;
//   let exec = false;
//
//   const drawLineByAngle = (x1, y1, degree, depth, count) => {
//     const length = Math.pow(generateData.childBranchLengthRatio, depth)
//       * generateData.initialBranchLength;
//
//     if (depth > generateData.depthCount) return;
//
//     const radian = degree / 180.0 * Math.PI;
//     const x2 = Math.cos(radian) * length + x1;
//     const y2 = Math.sin(radian) * length + y1;
//
//
//     const c = lerpHexColor(depth / generateData.depthCount);
//     const opacity = 255 - depth / generateData.depthCount * 255;
//
//     // if(depth < generateData.depthCount / 2)
//     //   stroke(c.r, c.g, c.b, opacity / 50);
//     // else
//     //   stroke(c.r, c.g, c.b, (255 - (depth / generateData.depthCount * 255)) / (50 * depth / 2));
//     //
//
//     if(checkCount === depth) {
//       stroke(c.r, c.g, c.b, opacity);
//       line(x1, y1, x2, y2);
//     }
//
//     let startAngle = -(generateData.childBranchCount - 1)
//       * generateData.childBranchAngle / 2 + degree * 1;
//
//     for (let i = 0; i < generateData.childBranchCount; i++) {
//       drawLineByAngle(x2, y2, startAngle, depth + 1);
//       startAngle += generateData.childBranchAngle * 1;
//     }
//
//   };
//
//   const lerpHexColor = (ratio) => {
//     const r1 = Number('0x' + generateData.startColor[1] + generateData.startColor[2]);
//     const g1 = Number('0x' + generateData.startColor[3] + generateData.startColor[4]);
//     const b1 = Number('0x' + generateData.startColor[5] + generateData.startColor[6]);
//     const r2 = Number('0x' + generateData.endColor[1] + generateData.endColor[2]);
//     const g2 = Number('0x' + generateData.endColor[3] + generateData.endColor[4]);
//     const b2 = Number('0x' + generateData.endColor[5] + generateData.endColor[6]);
//
//     const r = r1 * (1 - ratio) + r2 * ratio;
//     const g = g1 * (1 - ratio) + g2 * ratio;
//     const b = b1 * (1 - ratio) + b2 * ratio;
//
//     return {r, g, b};
//
//   };
//
//   this.setFrameCount = (frame) => {
//     count = frame;
//     checkFrame = frame;
//     this.draws();
//   };
//
//   this.setExec = (exe) => {
//     exec = exe;
//   };
//
//   this.generator = (data) => {
//     generateData = data;
//     blendMode(BLEND);
//     background(0);
//     blendMode(ADD);
//     checkCount = 0;
//     // const cx = width / 2;
//     // const cy = height / 2;
//     // let checkCount = 0;
//     // const dAngle = 360.0 / generateData.startBranchCount;
//     // let currentAngle = 0;
//     //
//     // if(count % 10 === 0) {
//     //   checkCount += 1;
//     //   console.log(checkCount);
//     // }
//     //
//     // if(checkCount < 10) {
//     //   for (let i = 0; i < generateData.startBranchCount; i++) {
//     //     drawLineByAngle(cx, cy, currentAngle, 1);
//     //     currentAngle += dAngle;
//     //   }
//     // }
//     // this.draws();
//   };
//
//   this.draws = () => {
//     const cx = width / 2;
//     const cy = height / 2;
//     const dAngle = 360.0 / generateData.startBranchCount;
//     let currentAngle = 0;
//
//
//     if (exec && count % 2 === 0 && checkCount < generateData.depthCount) {
//       for (let i = 0; i < generateData.startBranchCount; i++) {
//         drawLineByAngle(cx, cy, currentAngle, 1, count);
//         currentAngle += dAngle;
//       }
//       checkCount += 1;
//
//     }
//   }
//
// };


const fractalGenerator = new function () {
  var generateData = {};
  var lineData = [];

  this.getLineData = () => {
    return lineData;
  };

  const drawLineByAngle = (x1, y1, degree, depth) => {
    const length = Math.pow(generateData.childBranchLengthRatio, depth)
      * generateData.initialBranchLength;

    if (depth > generateData.depthCount) return;
    const radian = degree / 180 * Math.PI;
    const x2 = Math.cos(radian) * length + x1;
    const y2 = Math.sin(radian) * length + y1;

    const c = lerpHexColor(depth / generateData.depthCount);

    lineData.push({
      depth,
      x1,
      y1,
      x2,
      y2,
      c,
      opacity: 255 - depth / generateData.depthCount * 255,
    });
    
    
    var startAngle = -(generateData.childBranchCount - 1)
      * generateData.childBranchAngle / 2 + degree * 1;

    for (var i = 0; i < generateData.childBranchCount; i++) {
      drawLineByAngle(x2, y2, startAngle, depth + 1);
      startAngle += generateData.childBranchAngle * 1;
    }
  };

  const lerpHexColor = (ratio) => {

    const r1 = Number('0x' + generateData.startColor[1] + generateData.startColor[2]);
    const g1 = Number('0x' + generateData.startColor[3] + generateData.startColor[4]);
    const b1 = Number('0x' + generateData.startColor[5] + generateData.startColor[6]);
    const r2 = Number('0x' + generateData.endColor[1] + generateData.endColor[2]);
    const g2 = Number('0x' + generateData.endColor[3] + generateData.endColor[4]);
    const b2 = Number('0x' + generateData.endColor[5] + generateData.endColor[6]);
    
    var r = r1 * (1 - ratio) + r2 * ratio;
    var g = g1 * (1 - ratio) + g2 * ratio;
    var b = b1 * (1 - ratio) + b2 * ratio;
    
    var max = Math.max(r, g, b), min = Math.min(r, g, b),
      d = max - min,
      h,
      s = (max === 0 ? 0 : d / max),
      v = max / 255;

    switch (max) {
      case min:
        h = 0;
        break;
      case r:
        h = (g - b) + d * (g < b ? 6 : 0);
        h /= 6 * d;
        break;
      case g:
        h = (b - r) + d * 2;
        h /= 6 * d;
        break;
      case b:
        h = (r - g) + d * 4;
        h /= 6 * d;
        break;
    }
    return {h: Math.floor(h * 360), s: Math.floor(s * 100), v: Math.floor(v * 100)};
  };

  this.generate = (data) => {
    lineData = [];
    generateData = data;
    blendMode(BLEND);
    background(0);
    blendMode(ADD);
    const cx = width / 2;
    const cy = height / 2;

    const dAngle = 360 / data.startBranchCount;
    var currentAngle = 0;
    for (var i = 0; i < data.startBranchCount; i++) {
      drawLineByAngle(cx, cy, currentAngle, 1);
      currentAngle += dAngle;
    }

    console.log(lineData);
    // drawLine(0, 0, 500, 500, '#ff0000');
  };
  
  
  var tick = 0;
  var isPause = false;
  this.play = () => {
    tick = 0;

  };

  this.pause = () => {
    isPause = !isPause;
  };

  this.update = () => {
    if (isPause) return;
    tick++;
    const depth = Math.floor(tick / 100) + 1;
    drawLineData(getLineDataByDepth(depth), 0.0001);
  };

  function drawLineData(datas, opacity) {
    colorMode(HSB);
    _.forEach(datas, d => {

      stroke(d.c.h,
        d.c.s,
        d.c.v,
        d.opacity * opacity);
      strokeWeight(1 / d.depth);
      line(d.x1,
        d.y1,
        d.x2,
        d.y2);
    });

  }

  function getLineDataByDepth(depth) {
    return _.filter(lineData, d => d.depth === depth);
  }
};

function setup() {
  const $root = $('body');
  console.log($root.width(), $root.height());
  const canvas = createCanvas($root.width(), $root.height());
  canvas.parent('renderer');
  console.log(canvas);
  background(0);

}


function draw() {
  fractalGenerator.update();

}