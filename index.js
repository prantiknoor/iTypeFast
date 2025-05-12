const el = document.querySelector("#ityped")

const timeStamps = [];
const stats = [];
let text200 = ''
let text150 = ''
let text100 = ''

let lastTimeStamp = 0;

el.addEventListener('keypress', event => {
  // console.log(event);
  timeStamps.push(event.timeStamp)
  const stat = {
    key: event.key,
    time: lastTimeStamp ? event.timeStamp - lastTimeStamp : 0
  }
  stats.push(stat)
  lastTimeStamp = event.timeStamp;

  text200 += stat.time < 200 ? stat.key : "•" + stat.key;
  text150 += stat.time < 150 ? stat.key : "•" + stat.key;
  text100 += stat.time < 100 ? stat.key : "•" + stat.key;


  document.querySelector('#output200').textContent = text200
  document.querySelector('#output150').textContent = text150
  document.querySelector('#output100').textContent = text100
})