"use strict";

const articleData = [
	{
		"imgId": 1032,
	},
	{
		"imgId": 103,
	},
	{
		"imgId": 1039,
	}
];

function buildArticleFromData(data) {
	const article = document.createElement("article");
	const img = document.createElement('img');
	img.alt = `picsum image ${data["imgId"]}`;
	img.src = `https://picsum.photos/id/${data["imgId"]}/150`;
	article.appendChild(img);
	return article;
}

const articles = articleData.map(buildArticleFromData).forEach(el => target.appendChild(el));
