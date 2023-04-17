import { getRandomArrayElement, getRandomInteger } from './util.js';

const IDS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25
];

const URLS = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
];

const AVATAR_COMMENTS = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
];

const DESCRIPTIONS = [
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
const createComment = (value) => ({
  id: `comment-${value}`,
  avatar: AVATAR_COMMENTS[getRandomInteger(0,5)],
  message: COMMENTS[value],
  name: NAMES[value]
});
const comments = Array.from([0,1,2,3,4,5], createComment);

export const createUser = (id) => ({
  id: id,
  url: URLS[id - 1],
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomArrayElement(LIKES),
  comments: comments.slice(getRandomInteger(0,5)),
  name: getRandomArrayElement(NAMES),
});

const similarUsers = Array.from(IDS, createUser);
export { similarUsers };

export const mas = [];
