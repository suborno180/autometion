const puppeteer = require('puppeteer')


const lauchedBrowser = async () => {

    const browserPromis = await puppeteer.launch({ headless: false })
        .then((browser) => {
            browser.pages()
                .then((pages) => {
                    pages[0].goto('https://btebresulthub.vercel.app/results')
                        .then(() => {
                            pages[0].type("input[type=number]", `620340`)
                            pages[0].click("button[type=submit]")
                            // get the value from html p tag [p.relative]

                            pages[0].evaluate(() => {
                                const elements = document.querySelector("#parentView");
                                return elements;
                            }).then((elements) => {
                                console.log(elements);
                            })
                        })


                })
        }).then(() => {
            console.log("Browser closed")
        })
}
lauchedBrowser()
