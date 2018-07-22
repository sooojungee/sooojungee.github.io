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

const dialogueTemplage = `<div class="dialogue-bar">
  <div class="dialogue">
    <div class="text">삭제하시겠습니까?</div>
    <div class="buttons">
      <div class="button close-button">닫기</div>
      <div class="button delete-button">삭제하기</div>
    </div>
  </div>
</div>`

function Dialogue() {
  const dels = {};
  this.notify = function (id) {
    $room.find('.dialogue-bar').css('display', 'block');
    $room.find('.close-button').on('click', function () {
      $room.find('.dialogue-bar').css('display', 'none');
      delete dels[id];
      console.log(dels[id]);
      
    })
    
    $room.find('.delete-button').on('click', function () {
      $room.find('.dialogue-bar').css('display', 'none');
      dels[id] = true;
      if (dels[id] !== undefined && dels[id])
        chatApi.deleteMessage(id);
      console.log(dels[id]);
    })
  };
  
  this.select = function (id) {
    if (dels[id] !== undefined && dels[id])
      chatApi.deleteMessage(id);
  }
  this.setDels = function (id) {
    dels[id] = false;
    console.log('sd', Object.keys(dels).length);
  };
  
  return this;
  
}


function Element(id, isMine) {
  
  const $ele = $(template);
  const that = this;
  
  $ele.attr('id', id);
  
  
  if (isMine) {
    dialogue.setDels(id);
    $ele.find('.profile').remove();
    $ele.find('.name').remove();
    $ele.addClass('sender');
    $ele.find('.delete').on('click', function () {
      dialogue.notify(id);
      dialogue.select(id);
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
  // 이거 안하면 ㅇ떻게되나
  return this;
  
  
}

const eles = {};
let lastElement = null;
chatApi.on('child_added', function (d) {
  const id = Object.keys(d)[0];
  const data = d[id];
  const date = new Date(data.date);
  const dataString = `${date.getHours() > 12 ? '오후' : '오전'} ${date.getHours() % 12}:${date.getMinutes()}`;
  data.date = dataString;
  const ele = new Element(id, userId === data.id);
  ele.setMessage(data);
  
  if (lastElement !== null) {
    lastElement.next(ele);
    ele.prev(lastElement);
  }
  lastElement = ele;
  eles[id] = ele;
  $(".chatting").scrollTop($(".chatting")[0].scrollHeight);
  
  
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