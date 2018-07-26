let blogCard = [
  {
    text: 'fractal',
    date: 'JULY 2018',
    img: '../images/fractal.png',
    siteUrl: 'https://sooojungee.github.io/public/views/instagram.html',
    tag: ['fractal', 'canvas', 'rotate', 'color', 'skdufhskdufh', 'a']
  },
  {
    text: 'textFinder',
    date: 'JULY 2018',
    img: '/images/textFinder.png',
    siteUrl: 'https://sooojungee.github.io/public/views/textfinder.html',
    tag: ['button', 'input', 'skdufhskdufh']
  },
  {
    text: 'JsonFilter',
    date: 'JUNE 2018',
    img: '/images/jsonFilter.png',
    siteUrl: 'https://sooojungee.github.io/public/views/jsonfilter.html',
    tag: ['json', 'filter', 'select', 'skdufhskdufh']
  },
  {
    text: 'calculator',
    date: 'JUNE 2018',
    img: '/images/calculator.png',
    siteUrl: 'https://sooojungee.github.io/public/views/calculator.html',
    tag: ['calculator', 'eval', 'math', 'skdufhskdufh']
  },
  {
    text: 'kakaotalk',
    date: 'JUNE 2018',
    img: '/images/kakao.png',
    siteUrl: 'https://sooojungee.github.io/public/views/kakaologin.html',
    tag: ['input', 'password', 'atag...........', 'skdufhskdufh', 'a']
  },
  {
    text: 'firebase',
    date: 'JUNE 2018',
    img: '/images/firebase.png',
    siteUrl: 'https://sooojungee.github.io/public/views/firebase.html',
    tag: ['animation', 'hover', 'grid', 'a']
  },
  
  {
    text: 'instagram',
    date: 'JUNE 2018',
    img: '/images/instagram.png',
    siteUrl: 'https://sooojungee.github.io/public/views/instagram.html',
    tag: ['flex-wrap', 'icon', 'grid']
  },

];
let data = JSON.parse(JSON.stringify(blogCard));

let template = `<div class="col-md-4 view">
    <div class="card mb-4 box-shadow"><img class="card-img-top padding-8" alt="Card image cap" />
        <div class="card-body">
            <div class="tag-content">
            </div>
            <p class="card-text"></p>
            <div class="d-flex justify-content-between align-items-center"><a class="btn-group"><button class="btn btn-sm btn-outline-secondary width" type="button">View</button></a><small class="text-muted"></small></div>
        </div>
    </div>
</div>`;

let $row = $('#row').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.col-md-4',
  // use element for option
  columnWidth: '.col-md-4',
  // initLayout: false,
  percentPosition: true
});


function Element(data) {
  const $ele = $(template);
  this.$ele = $ele;
  
  $ele.find('img').attr('src', data.img);
  $ele.find('.card-text').text(data.text);
  $ele.find('.text-muted').text(data.date);
  $ele.find('.btn-group').attr('href', data.siteUrl);
  
  $row.append($ele).masonry('appended', $ele);
  
  for (let i = 0; i < data.tag.length; i++) {
    $ele.find('.tag-content').append(`<div class = tag>#${data.tag[i]}</div>`);
  }
  
  
  this.hasTag = (val) => {
    
    for (let i = 0; i < data.tag.length; i++) {
      const tagValue = data.tag[i].toLowerCase();
      if (tagValue.indexOf(val) !== -1) {
        
        if ($ele.hasClass('display-none'))
          $ele.removeClass('display-none');
        
        break;
      }
      else {
        
        if (!$ele.hasClass('display-none'))
          $ele.addClass('display-none');
        
      }
    }
    
  };
  
  $row.imagesLoaded().progress(function () {
    $row.masonry('layout');
  });
  
  
  return this;
}


let elements = _.map(data, (d) => new Element(d));
const $input = $(input);

$input.on('keyup', () => {
  
  let val = $input.val().toLowerCase();
  
  _.filter(elements, (e) => e.hasTag(val));
  
  $row.imagesLoaded(function () {
    $row.masonry('layout');
  });
  
  
});