// const inputs = $('input');
//
// $('#exe').on('click', () => {
//   const data = {};
//   for (let i = 0; i < inputs.length; i++) {
//     const $input = $(inputs[i]);
//     const k = $input.attr('name');
//     const v = $input.val();
//     data[k] = v;
//   }
//   fractalGenerator.generate(data);
// });
//
//
// $('#play').on('click', fractalGenerator.play);
// $('#pause').on('click', fractalGenerator.pause);

const inputs = $('input');
$('#exe').on('click', () => {
  const data = {};
  for (let i = 0; i < inputs.length; i++) {
    const $input = $(inputs[ i ]);
    const k = $input.attr('name');
    const v = $input.val();
    data[ k ] = v;
  }
  
  fractalGenerator.generate(data);
  
});


$('#play').on('click', fractalGenerator.play);
$('#pause').on('click', fractalGenerator.pause);
