const $root = $('#renderer');

function setup() {
  const canvas = createCanvas($root.width(), $root.height());
  
  canvas.parent('renderer');
  background(0);
}

const inputs = $('input');
const $pause = $('#pause');
let exec = false;

$('#exe').on('click', () => {
  const data = {};
  for (let i = 0; i < inputs.length; i++) {
    const $input = $(inputs[i]);
    const k = $input.attr('name');
    const v = $input.val();
    data[k] = v;
  }
  
  if($pause.hasClass('click')){
    $pause.removeClass('click');
  }
  
  exec = true;
  fractalGenerator.setExec(exec);
  fractalGenerator.generator(data);
});

$pause.on('click', ()=>{
  
  if(!$pause.hasClass('click')){
    $pause.addClass('click');
    exec = false;
  }
  else {
    $pause.removeClass('click');
    exec = true;
  }
  
  fractalGenerator.setExec(exec);
  
});

const $saveImage = $('#save');

$saveImage.on('click', (e)=>{
  console.log('ss');
  Canvas2Image.saveAsJPEG(canvas ,$root.width(), $root.height());
  
});

function draw() {
  fractalGenerator.setFrameCount(frameCount);
}
