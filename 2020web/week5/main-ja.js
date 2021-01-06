const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '外は華氏94度だったので、暑い日だった。:insertx:は散歩に出かけました。彼が:inserty:に到達したとき、:insertz:。体重300ポンドの:insertx:は、驚いた。しかし、ボブはすべてを見ましたが、驚かなかった。:inserty:ではよくあることだ。';
let insertX = ['ゴブリン','サンタクロース','エルフ'];
let insertY = ['スーパーマーケット','ディズニーランド','ホワイトハウス'];
let insertZ = ['火事がおきた','歩道の水たまりに溶けた','ナメクジになって這い去った'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('ボブ',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + 'kg';
    const temperature =  '摂氏' +Math.round((94-32) * 5 / 9) + '度';
    newStory = newStory.replace('華氏94度',temperature);
    newStory = newStory.replace('300ポンド',weight);
  }


  story.textContent = newStory;
  story.style.visibility = 'visible';
}
