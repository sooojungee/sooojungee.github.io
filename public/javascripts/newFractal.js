const fractalGenerator = new function () {
  
  let generateData = {};
  let count = 0;
  let checkCount = 0;
  let checkFrame = 0;
  let exec = false;
  
  const drawLineByAngle = (x1, y1, degree, depth, count) => {
    const length = Math.pow(generateData.childBranchLengthRatio, depth)
      * generateData.initialBranchLength;
    
    if (depth > generateData.depthCount) return;
    
    const radian = degree / 180.0 * Math.PI;
    const x2 = Math.cos(radian) * length + x1;
    const y2 = Math.sin(radian) * length + y1;
    
    
    const c = lerpHexColor(depth / generateData.depthCount);
    const opacity = 255 - depth / generateData.depthCount * 255;
    
    // if(depth < generateData.depthCount / 2)
    //   stroke(c.r, c.g, c.b, opacity / 50);
    // else
    //   stroke(c.r, c.g, c.b, (255 - (depth / generateData.depthCount * 255)) / (50 * depth / 2));
    //
    
    if(checkCount === depth) {
      stroke(c.r, c.g, c.b, opacity);
      line(x1, y1, x2, y2);
    }
    
    let startAngle = -(generateData.childBranchCount - 1)
      * generateData.childBranchAngle / 2 + degree * 1;
    
    for (let i = 0; i < generateData.childBranchCount; i++) {
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
    
    const r = r1 * (1 - ratio) + r2 * ratio;
    const g = g1 * (1 - ratio) + g2 * ratio;
    const b = b1 * (1 - ratio) + b2 * ratio;
    
    return {r, g, b};
    
  };
  
  this.setFrameCount = (frame) => {
    count = frame;
    checkFrame = frame;
    this.draws();
  };
  
  this.setExec = (exe) => {
    exec = exe;
  };
  
  this.generator = (data) => {
    generateData = data;
    blendMode(BLEND);
    background(0);
    blendMode(ADD);
    checkCount = 0;
    // const cx = width / 2;
    // const cy = height / 2;
    // let checkCount = 0;
    // const dAngle = 360.0 / generateData.startBranchCount;
    // let currentAngle = 0;
    //
    // if(count % 10 === 0) {
    //   checkCount += 1;
    //   console.log(checkCount);
    // }
    //
    // if(checkCount < 10) {
    //   for (let i = 0; i < generateData.startBranchCount; i++) {
    //     drawLineByAngle(cx, cy, currentAngle, 1);
    //     currentAngle += dAngle;
    //   }
    // }
    // this.draws();
  };
  
  this.draws = () => {
    const cx = width / 2;
    const cy = height / 2;
    const dAngle = 360.0 / generateData.startBranchCount;
    let currentAngle = 0;
    
    
    if (exec && count % 4 === 0 && checkCount < generateData.depthCount) {
      checkCount += 1;
      for (let i = 0; i < generateData.startBranchCount; i++) {
        drawLineByAngle(cx, cy, currentAngle, 1, count);
        currentAngle += dAngle;
      }
    }
  }
  
};


// var canvasImageSaver = new CanvasImageSaver(
//   this.game.canvas, {
//     xCropOffset: 180,
//     yCropOffset: 0,
//     width: 470,
//     height: this.game.height
//   }, function (canvas, fileName) {
//     // Success callback
//   }, function (error) {
//     // Error callback
//   }, this);
//
// canvasImageSaver.save(filename, directory);

