let blogCard = [
  {
    text: 'fractal',
    date: 'JULY 2018',
    imgUrl: 'https://preview.ibb.co/nkPato/2018_07_24_3_21_38.png',
    siteUrl: 'https://sooojungee.github.io/public/views/newFractal.html',
    tag: ['fractal', 'canvas', 'rotate', 'color', 'skdufhskdufh', 'a']
  },
  {
    text: 'textFinder',
    date: 'JULY 2018',
    imgUrl: 'https://preview.ibb.co/c0zJ9J/2018_07_22_7_06_49.png',
    siteUrl: 'https://sooojungee.github.io/public/views/textfinder.html',
    tag: ['button', 'input', 'skdufhskdufh']
  },
  {
    text: 'JsonFilter',
    date: 'JUNE 2018',
    imgUrl: 'https://preview.ibb.co/crYpGy/2018_07_22_5_56_08.png',
    siteUrl: 'https://sooojungee.github.io/public/views/jsonfilter.html',
    tag: ['json', 'filter', 'select', 'skdufhskdufh']
  },
  {
    text: 'calculator',
    date: 'JUNE 2018',
    imgUrl: 'https://preview.ibb.co/g5Gy9J/2018_07_22_7_03_06.png',
    siteUrl: 'https://sooojungee.github.io/public/views/calculator.html',
    tag: ['calculator', 'eval', 'math', 'skdufhskdufh']
  },
  {
    text: 'kakaotalk',
    date: 'JUNE 2018',
    imgUrl: 'https://preview.ibb.co/eMr9Gy/2018_07_22_5_55_12.png',
    siteUrl: 'https://sooojungee.github.io/public/views/kakaologin.html',
    tag: ['input', 'password', 'atag...........', 'skdufhskdufh', 'a']
  },
  {
    text: 'firebase',
    date: 'JUNE 2018',
    imgUrl: 'https://preview.ibb.co/iVmtby/2018_07_22_5_54_35.png',
    siteUrl: 'https://sooojungee.github.io/public/views/firebase.html',
    tag: ['animation', 'hover', 'grid', 'a']
  },
  
  {
    text: 'instagram',
    date: 'JUNE 2018',
    imgUrl: 'https://preview.ibb.co/jeFpid/2018_07_22_5_53_59.png',
    siteUrl: 'https://sooojungee.github.io/public/views/instagram.html',
    tag: ['flex-wrap', 'icon', 'grid', 'a']
  },

];

//
let $row = $('#row').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.view',
  // use element for option
  columnWidth: '.col-md-4',
  percentPosition: true
});

const cardJson = JSON.parse(JSON.stringify(blogCard));
const blogEvent = new function () {
  
  this.addCard = (arr) => {
    let template = `<div class="col-md-4 view">
    <div class="card mb-4 box-shadow"><div class="card-img-top padding-8 back-img" alt="Card image cap"></div>
        <div class="card-body">
            <div class="tag-content" id=${arr.text}>
            </div>
            <p class="card-text">${arr.text}</p>
            <div class="d-flex justify-content-between align-items-center"><a class="btn-group" href=${arr.siteUrl}><button class="btn btn-sm btn-outline-secondary width" type="button">View</button></a><small class="text-muted">${arr.date}</small></div>
        </div>
    </div>
</div>`;
    
    
    const id = arr.text;
    const tags = arr.tag;
    
    
    $('#row').append(template);
    
    const $id = $('#' + id);
    
    $id.parents('.col-md-4').find('.back-img').css('background-image', `url('${arr.imgUrl}')`);
    for (let i = 0; i < tags.length; i++) {
      console.log($id);
      $id.append(`<div class="tag"> #${tags[i]}</div>`);
    }
    
    return this;
  };
  
  this.update = (val) => {
    console.log(val);
    for (let i = 0; i < cardJson.length; i++) {
      let arr = cardJson[i];
      let ele = cardJson[i].tag;
      for (let j = 0; j < ele.length; j++) {
        if ((ele[j].toLowerCase()).indexOf(val.toLowerCase()) == -1) {
          $('#' + cardJson[i].text).parents('.col-md-4').addClass('display-none');
          if (($('#' + cardJson[i].text).parents('.col-md-4').hasClass('view'))) {
            console.log('ss', cardJson[i].text);
            $('#' + cardJson[i].text).parents('.col-md-4').removeClass('view');
          }
        }
        else {
          
          
          if (!($('#' + cardJson[i].text).hasClass($('.view')))) {
            $('#' + cardJson[i].text).addClass('.view');
          }
          if (($('#' + cardJson[i].text).parents('.col-md-4').hasClass('display-none'))) {
            console.log('ss', cardJson[i].text);
            $('#' + cardJson[i].text).parents('.col-md-4').removeClass('display-none');
          }
          
          
          console.log(cardJson[i].text);
          
          
          break;
        }
      }
    }
    
    
    $row.imagesLoaded().progress(function () {
      $row.masonry('layout');
    });
    
  };
  
  this.allUpdate = () => {
    for (let i = 0; i < cardJson.length; i++) {
      $('#' + cardJson[i].text).parents('.col-md-4').removeClass('display-none');
    }
  };
};


new function () {
  
  for (let i = 0; i < cardJson.length; i++) {
    blogEvent.addCard(cardJson[i]);
  }
  
  const $input = $('#input');
  const $search = $('#search');
  const $tag = $('.tag');
  $search.on('click', () => {
    const val = $input.val();
    if (val.length > 0)
      blogEvent.update(val);
  });
  
  $input.on('keyup', (e) => {
    const val = $input.val();
    if (e.keyCode === 13) {
      if (val.length > 0)
        blogEvent.update(val);
      else
        blogEvent.allUpdate();
    }
    
  });
  
  $tag.on('click', (event) => {
    const $this = $(event.target);
    const text = $this.html().toString();
    const val = text.slice(2, text.length);
    $input.val(val);
    blogEvent.update(val);
  });
  
  
  $('#row').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.view',
    // use element for option
    columnWidth: '.col-md-4',
    percentPosition: true
  });
  
};

