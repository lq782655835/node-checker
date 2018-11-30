var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');
const app = express()

const url = 'https://www.usnews.com/education/best-global-universities/rankings?page=3' // 'https://cnodejs.org/'
const getList = (res, next) => {
    superagent.get(url)
    .end(function (err, sres) {
      if (err) {
        return next(err);
      }
      let result = sres.text
      res.send(result)
    //   var $ = cheerio.load(sres.text);
    //   var items = [];
    //   $('#topic_list .topic_title').each(function (idx, element) {
    //     var $element = $(element);
    //     items.push({
    //       title: $element.attr('title'),
    //       href: $element.attr('href')
    //     });
    //   });

    //   res.send(items);
    });
}

app.get('/', (req, res, next) => [
    getList(res, next)
])
app.listen(3000, () => console.log('begin'))