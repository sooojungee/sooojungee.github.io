const userId = '이수정';
const $root = $('.chatting');
const $room = $('.chatting-room');

const template = `<div class="chat-group">
  <div class="chat">
    <div class="profile">
      <div class="profile-image"></div>
    </div>
    <div class="text-group">
      <div class="name"> </div>
      <div class="message-group">
        <div class="text"> </div>
        <div class="date"> </div>
        <div class="delete">x</div>
        <div class="empty"></div>
      </div>
    </div>
  </div>
</div>`;

const modal = new CreatModal($('.modal'));

function Element(id, isMine) {
  
  const $ele = $(template);
  const that = this;
  
  $ele.attr('id', id);
  
  if (isMine) {
    $ele.find('.profile').remove();
    $ele.find('.name').remove();
    $ele.addClass('sender');
    $ele.find('.delete').on('click', function () {
      modal.open(
        {
          headerText: '메세지를 지울거예요',
          contentText: '진짜?',
          positiveText: 'DELETE',
          negativeText: 'CANCEL'
        },
        chatApi.deleteMessage(id)
      );
    })
    
  }
  
  if (!isMine) {
    //isMine === undefined 왜해
    // console.log(isMine)하면 false만 뜨는데
    $ele.find('.delete').remove();
  }
  
  let elementData = {};
  
  this.setMessage = function (data) {
    $ele.find('.text').text(data.message);
    $ele.find('.name').text(data.id);
    $ele.find('.date').text(data.date);
    
    elementData = data;
  };
  
  
  this.getUsername = function () {
    return elementData.id
  };
  
  this.getUsertime = function () {
    return elementData.date
  };
  
  this.setVisibledate = function (usage) {
    $ele.find('.date').css('display', usage ? 'block' : 'none');
  };
  
  this.setVisiblename = function (usage) {
    $ele.find('.name').css('display', usage ? 'block' : 'none');
  };
  
  this.setVisibleprofile = function (usage) {
    $ele.find('.profile-image').css('visibility', usage ? 'visible' : 'hidden');
    
  };
  
  let prev = null;
  this.prev = function (ele) {
    if (ele === undefined) return prev;
    prev = ele;
    that.update();
  };
  
  let next = null;
  this.next = function (ele) {
    if (ele === undefined) return next;
    next = ele;
    that.update();
  };
  
  this.update = function () {
    // if(prev !== null
    // && prev.getUsername() === that.getUsername()
    // && prev.getUsertime() === that.getUsertime()){
    //   that.setVisiblename(false);
    //   that.setVisibleprofile(false);
    //   prev.setVisibledate(false);
    // }
    
    if (prev !== null
      && prev.getUsername() === that.getUsername()
      && prev.getUsertime() === that.getUsertime()) {
      that.setVisiblename(false);
      that.setVisibleprofile(false);
    }
    
    // 1. 다음꺼와 나의 이름이 같으면서 나의 시간이 같으면 나의 시간을 삭제한다.
    if (next !== null
      && next.getUsername() === that.getUsername()
      && next.getUsertime() === that.getUsertime()) {
      that.setVisibledate(false);
    }
    
    
  };
  
  this.remove = function () {
    $('[id =' + id + ']').remove();
    const prev = that.prev();
    const next = that.next();
    if (prev !== null)
      prev.next(next);
    if (next != null)
      next.prev(prev);
    
    if (next === null)
      prev.setVisibledate(true);
  };
  
  $ele.appendTo($root);
  this.$ele = $ele;
  return this;
  
  
}


function CreatModal(targetClass) {
  
  const $modal = $(targetClass);
  const $buttonPositive = $modal.find('.button.positive');
  const $buttonNegative = $modal.find('.button.negative');
  const that = this;
  const $header = $('.header');
  const $text = $('.text');
  let positiveEvent = null;
  
  this.open = function (option, event) {
    console.log(event);
    positiveEvent = event;
    $header.text(option.headerText);
    $text.text(option.contentText);
    $buttonPositive.text(option.positiveText);
    $buttonNegative.text(option.negativeText);
    $modal.attr('status', 'open');
    
  };
  
  this.close = function () {
    $modal.attr('status', 'close');
  };
  
  $buttonPositive.on('click', function () {
    // if(positiveEvent !== null) positiveEvent();
    that.close();
  });
  
  $buttonNegative.on('click', function () {
    that.close();
  });
  
};

const eles = {};
let lastElement = null;
chatApi.on('child_added', function (d) {
  const id = Object.keys(d)[0];
  const data = d[id];
  const date = new Date(data.date);
  const dataString = `${date.getHours() > 12 ? '오후' : '오전'} ${date.getHours() % 12}:${date.getMinutes()}`
  data.date = dataString;
  const ele = new Element(id, userId === data.id);
  ele.setMessage(data);
  
  if (lastElement !== null) {
    lastElement.next(ele);
    ele.prev(lastElement);
  }
  lastElement = ele;
  eles[id] = ele;
  $('.chatting').scrollTop($('.chatting')[0].scrollHeight);
  
  
});

chatApi.on('child_removed', function (d) {
  const id = Object.keys(d)[0];
  const ele = eles[id];
  ele.remove();
  delete eles[id];
});

const $textarea = $('textarea');
$textarea.on('keyup', function (event) {
  const val = $textarea.val();
  if (event.keyCode === 13) {
    console.log('enter !!!', val);
    $textarea.val('');
    
    if (val.replace('\n', '') === '') return;
    if (val !== '') chatApi.sendMessage(userId, val);
  }
});

