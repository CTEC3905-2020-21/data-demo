"use strict";

const articleData = [
	{
		"imgId": 1032,
		"title": "crater",
		"description": "An impact crater is an approximately circular depression in the surface of a planet, moon, or other solid body in the Solar System or elsewhere, formed by the hypervelocity impact of a smaller body."
	},
	{
		"imgId": 103,
		"title": "feet",
		"description": "The foot (plural: feet) is an anatomical structure found in many vertebrates. It is the terminal portion of a limb which bears weight and allows locomotion. In many animals with feet, the foot is a separate organ at the terminal part of the leg made up of one or more segments or bones, generally including claws or nails."
	},
	{
		"imgId": 1039,
		"title": "waterfall",
		"description": "A waterfall is an area where water flows over a vertical drop or a series of steep drops in the course of a stream or river. Waterfalls also occur where meltwater drops over the edge of a tabular iceberg or ice shelf."
	},
	{
		"imgId": 1069,
		"title": "jellyfish",
		"description": "Jellyfish and sea jellies are the informal common names given to the medusa-phase of certain gelatinous members of the subphylum Medusozoa, a major part of the phylum Cnidaria. Jellyfish are mainly free-swimming marine animals with umbrella-shaped bells and trailing tentacles, although a few are anchored to the seabed by stalks rather than being mobile."
	},
	{
		"imgId": 1074,
		"title": "lion",
		"description": "The lion (Panthera leo) is a species in the family Felidae and a member of the genus Panthera. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail."
	},
	{
		"imgId": 1080,
		"title": "strawberries",
		"description": "The garden strawberry (or simply strawberry; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit."
	},
	{
		"imgId": 1084,
		"title": "walrus",
		"description": "The walrus (Odobenus rosmarus) is a large flippered marine mammal with a discontinuous distribution about the North Pole in the Arctic Ocean and subarctic seas of the Northern Hemisphere. The walrus is the only living species in the family Odobenidae and genus Odobenus."
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
