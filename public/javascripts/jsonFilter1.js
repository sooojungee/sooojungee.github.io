const x = [
  {
    gender: '남',
    items: [
      {
        number: 2010,
        items: [
          {
            age: 25,
            items: [
              {
                name: '재종'
              }
            ]
          }
        ]

      },
      {
        number: 2014,
        items: [
          {
            age: 24,
            items: [
              {
                name: '준엽'
              }
            ]
          }
        ]
      },
      {
        number: 2015,
        items: [
          {
            age: 23.5,
            items: [
              {
                name: '현식'
              }
            ]
          }
        ]

      }
    ]
  },
  {
    gender: '여',
    items: [
      {
        number: 2016,
        items: [
          {
            age: 22,
            items: [
              {
                name: '수정'
              }
            ]
          },
          {
            age: 21,
            items: [
              {
                name: '주원'
              }
            ]
          }
        ]

      },
    ]
  }

];

(function () {

  const filters = ["all", "all", "all"];

  $('select').on('change', function () {

    let selector = [];
    const $this = $(this);
    const $selectedOption = $this.find('option:selected');
    const currentFilter = $selectedOption.text();
    const index = $this.attr('index') * 1;

    filters[index] = currentFilter;
    console.log(filters);
    for (var i = 0; i < filters.length; i++) {
      if (i === 0)
        selector = JSON.parse(JSON.stringify(x));
      if (filters[i] === 'all') {
        selector = selectAllFunction(selector);
      }
      else {
        selector = selectFunction(selector, i);
      }
    }

    const name = [];
    for (var i = 0; i < selector.length; i++)
      name.push(selector[i].name);
    $('.answer').text(name);

  });


  const selectAllFunction = function (selector) {
    let func = JSON.parse(JSON.stringify(selector));
    selector = [];
    for (var i = 0; i < func.length; i++) {
      for (var j = 0; j < func[i].items.length; j++) {
        selector.push(func[i].items[j]);
      }
    }
    console.log(selector);

    return selector;

  };

  const selectFunction = function (selector, num) {

    let func = JSON.parse(JSON.stringify(selector));
    selector = [];
    if (func.length !== 0) {
      for (var i = 0; i < func.length; i++) {
        if (filters[num] === func[i][Object.keys(func[i])[0]].toString()) {
          selector = func[i].items;
        }
      }
    }
    console.log(selector);

    return selector;

  };

})();
