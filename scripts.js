"use strict";

const articleData = [
	{
		"imgId": 1032,
		"title": "crater",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		"imgId": 103,
		"title": "feet",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		"imgId": 1039,
		"title": "waterfall",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
];

function buildArticleFromData(data) {
	const article = document.createElement("article");
	const img = document.createElement('img');
	const section = document.createElement("section");
	const h2 = document.createElement('h2');
	const p = document.createElement('p');

	h2.textContent = data["title"];
	img.alt = `picsum image ${data["imgId"]}`;
	img.src = `https://picsum.photos/id/${data["imgId"]}/150`;
	p.textContent = data["description"];

	article.appendChild(img);
	article.appendChild(section);
	section.appendChild(h2);
	section.appendChild(p);
	return article;
}

const articles = articleData.map(buildArticleFromData).forEach(el => target.appendChild(el));
