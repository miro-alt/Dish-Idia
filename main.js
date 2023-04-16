const url = "https://cookpad.com/search/";

var maindish = document.getElementById('maindish');

// console.log(maindish.textContent);

//maindish.textContent = "コロッケ";

const maindishlist =[
    'ハンバーグ',
    '唐揚げ',
    '焼き鮭',
    'グラタン',
    'かつ丼',
    'カレー',
    'ピザ',
    '寿司',
    '生姜焼き',
    '回鍋肉',
    'チキン南蛮',
    'お刺身',
    'フライ',
    'ピカタ'
];
maindish.textContent = maindishlist[Math.floor(Math.random() * maindishlist.length)];

var sidedish = document.getElementById('sidedish');
// sidedish.textContent = 'ポテトサラダ';
const sidedishlist = [
    'おひたし',
    'きんぴらごぼう',
    '豆腐',
    '枝豆',
    'ポテトサラダ',
    'ひじき',
    '切り干し大根',
    'サラダ',
    'キムチ'
];
sidedish.textContent = sidedishlist[Math.floor(Math.random() * sidedishlist.length)];

var soup = document.getElementById('soup');
// soup.textContent = 'コーンスープ';
const souplist = [
    'コーンスープ',
    '味噌汁',
    'トマトスープ',
    'ポトフ',
    'クラムチャウダー',
    'お吸い物',
    'ポタージュ',
    'ミネストローネ'
];
soup.textContent = souplist[Math.floor(Math.random() * souplist.length)];

const getLink = function(Id,text){
    link = document.getElementById(Id);
    newUrl = url + text;
    link.setAttribute('href', newUrl);
};
const ButtonClick = function(){
    maindish.textContent = maindishlist[Math.floor(Math.random() * maindishlist.length)];
    console.log(url+maindish.textContent);
    sidedish.textContent = sidedishlist[Math.floor(Math.random() * sidedishlist.length)];
    soup.textContent = souplist[Math.floor(Math.random() * souplist.length)];

    getLink("link",maindish.textContent);
    getLink("sidedishlink",sidedish.textContent);
    getLink("souplink",soup.textContent);    

};

getLink("link",maindish.textContent);
getLink("sidedishlink",sidedish.textContent);
getLink("souplink",soup.textContent);
