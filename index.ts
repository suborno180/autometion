const puppeteer = require('puppeteer')


const lauchedBrowser = async () => {
    const browserPromis = await puppeteer.launch({ headless: false })
        .then((browser) => {
            browser.pages()
                .then((pages)=> {
                    const mypage = pages[0];
                    mypage.goto('https://translate.google.com/').then(()=>{
                        console.log('reched');
                        
                    })
                })

        })
}
lauchedBrowser()