const ID = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25
];

const URL = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',

];

const DESCRIPTION = [
  'Передо мной интересная фотография',
  'Мне нравится эта фотография, потому что она точно передаёт настроение',
  'Мне нравится',
  'Отличная фотография',
  'Прекрасно'
];


const LIKES = Array(186).fill('').map((it, index)=> 15 + index);

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артем',
  'Егор',
  'Виталий',
  'Анастасия',
  'Полина',
  'Сергей',
  'Никита'
];


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createUser = (id) => ({
  id: id,
  url: getRandomArrayElement(URL),
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomArrayElement(LIKES),
  comments: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),

});

const similarUsers = Array.from(ID, createUser);

export default similarUsers;


