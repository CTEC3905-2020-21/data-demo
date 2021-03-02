"use strict";

const articleData = [
	{
		"imgId": 1032,
		"title": "crater",
	},
	{
		"imgId": 103,
		"title": "feet",
	},
	{
		"imgId": 1039,
		"title": "waterfall",
	}
];

function buildArticleFromData(data) {
	const article = document.createElement("article");
	const img = document.createElement('img');
	const h2 = document.createElement('h2');
	h2.textContent = data["title"];
	img.alt = `picsum image ${data["imgId"]}`;
	img.src = `https://picsum.photos/id/${data["imgId"]}/150`;
	article.appendChild(img);
	article.appendChild(h2);
	return article;
}

const articles = articleData.map(buildArticleFromData).forEach(el => target.appendChild(el));
