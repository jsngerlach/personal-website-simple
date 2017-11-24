var naviBtns = [
  {title: 'who'},
  {title: 'what'},
  {title: 'where'},
  {title: 'when'},
  {title: 'why'},
  {title: 'how'}
];

const whatItems = [
  {
    icon: 'code',
    info: 'I like to code because I like to create. If you can dream it you can do it with coding.'
  },
  {
    icon: 'mtn',
    info: 'I like to snowboard because it is theraputic. Snowbaording no matter what skill level is always a great time.'
  },
  {
    icon: 'weight',
    info: 'I like to lift weights because it feels good. It helps keep my energy levels high and me healthy.'
  },
  {
    icon: 'bike',
    info: 'I like to ride my bicycle, I like to ride my bike. It is so fun to ride my beach cruiser to the ocean and feel the sea breeze.'
  },
  {
    icon: 'gamer',
    info: 'I like to play video games because I like overcoming challenges. Always a fun fallback of entertainment whether it is a sports game or a fantasy game.'
  }
];

const whereItems = [
  {
    name: 'Redding California',
    wiki: 'https://en.wikipedia.org/wiki/Redding,_California',
    imgClass: 'redding',
    info: 'I spent most of my life in Redding California. It is where I grew up. All my best friends are from here. It has two lakes and Mount Shasta is close by. It is a great place for being outdoors.'
  },
  {
    name: 'Ashland Oregon',
    wiki: 'https://en.wikipedia.org/wiki/Ashland,_Oregon',
    imgClass: 'ashland',
    info: 'For a short time I lived in a small town called Ashland Oregon. Even though I lived here for only one year I made lots of new friends and went on many adventures. I would snowboard the local mountain daily.'
  },
  {
    name: 'San Diego California',
    wiki: 'https://en.wikipedia.org/wiki/San_Diego',
    imgClass: 'sd',
    info: 'I currently live in San Diego California and I love it. I enjoy cruising the beach on my bike and trying the local breweries. There are a lot of events to go to like concerts and comedy shows which I am fond of.'
  }
]

var naviBtn = document.getElementById('navi-btn');
var whatItem = document.getElementById('what-item');
var whereItem = document.getElementById('where-item');


function renderHtml() {
    var naviBtnHtml = naviBtns.map( nb => {
      return (
        '<a class="header-a" href="#' + nb.title + '">' + nb.title +'</a></div>'
      )
    }).join(' ');
    var whatItemsHtml = whatItems.map( what => {
      return(
      '<div class="what-icon ' + what.icon + '-icon"></div><div class="what-info">' + what.info + '</div>'
      )
    }).join(' ');
    var whereItemsHtml = whereItems.map( where => {
      return(
        '<div class="place-img ' + where.imgClass + '"></div><div class="place-title"><a href="'+ where.wiki +'" target="_blank">' + where.name + '</a></div><div class="place-info">' + where.info + '</div>'
      )
    }).join(' ');


    naviBtn.innerHTML = naviBtnHtml;
    whatItem.innerHTML = whatItemsHtml;
    whereItem.innerHTML = whereItemsHtml
  }
  renderHtml();




function menuToggle() {
  var x = document.getElementById('mobile-menu');
  if(x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
