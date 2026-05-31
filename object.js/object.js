const news = [
  {
    id: 1,
    news: "Aanchal is smart",
  },
  {
    id: 2,
    news: "Aanchal is beautiful",
  },
  {
    id: 3,
    news: "Aanchal is intelligent",
  },
];
const findNewsById = (id) => {
  return news.find((item) => item.id === id);
};
console.log(findNewsById(2));
//WAF to print only N number of news from the start
function getlimit(news, index) {
  return news.slice(0, index);
}
console.log(getlimit(news, 2));
//WAF to print only N number of news from the end
function getlimitfromend(news, index) {
  const last = news.length;
  return news.slice(last - index);
}
console.log(getlimitfromend(news, 2));

//WAF to search news and show valid list matches
function search(news, keyword) {
  for (let i = 0; i < news.length; i++) {
    const n = [];
    if (
      (news[i].news, news[i].news.toLowerCase().includes(keyword.toLowerCase()))
    ) {
      n.push(news[i]);
    }

    if (n.length === 0) {
      return 0;
    }
    return n;
  }
}
console.log(search(news, "Aanchal is smart"));
