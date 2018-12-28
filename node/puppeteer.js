const puppeteer = require('puppeteer');
(async () => {

    const executeCrawlPlan = async (browser, page) => {
        await page.evaluate(async() => {
            let pageNumList = [...document.querySelectorAll('#resultsMain .sep')]
            console.log(pageNumList)
            // return pageNumList.map(item => {
            //   return item.text
            // })
        })
    }

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  page
  .waitForSelector('img')
  .then(async() => {
      console.log(123)
      let numList = await page.evaluate(async() => {
        let pageNumList = [...document.querySelectorAll('#page-nav .page-number')]
        return pageNumList.map(item => {
          return item.text
        })
      })
    // executeCrawlPlan(browser, page)
    // console.log(123)
  })
  await page.goto('https://www.usnews.com/education/best-global-universities/rankings');
//   await page.screenshot({path: 'example.png'});
//   await browser.close();

})();



// const puppeteer = require('puppeteer');

// const url = true ? 'https://www.usnews.com/education/best-global-universities/rankings' : 'https://www.baidu.com/'
// puppeteer.launch({ headless: true }).then(async browser => {
//     const page = await browser.newPage();
//     page
//     .waitForSelector('img')
//     .then(async() => {
//         console.log(123)
//     //   executeCrawlPlan(browser, page)
//     })
//     page.on('requestfinished', result => {
//         console.log(result.url, 2132)
//     })
//     await page.goto(url);
//     //   await page.screenshot({path: 'example.png'});
//     //   await browser.close();
// })

// const executeCrawlPlan = async (browser, page) => {
//     await page.evaluate(async() => {
//         let pageNumList = [...document.querySelectorAll('#resultsMain .sep')]
//         console.log(pageNumList)
//         // return pageNumList.map(item => {
//         //   return item.text
//         // })
//     })
// }