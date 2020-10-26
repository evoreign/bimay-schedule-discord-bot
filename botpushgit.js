const Discord = require("discord.js");
const puppeteer = require('puppeteer');
const client = new Discord.Client({
    partials: ["MESSAGE"]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async message => {
    if (message.content === "!!jadwal") {
        async function scrapeJadwal(url) {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(url);
            await page.type('#Username', 'usernamebimay')
            await page.type('#Password', 'password bimay')
            page.click('#btnSubmit')
            await page.waitFor(10000)

            let div_selector_to_remove = ".trTemplate";
            await page.evaluate((sel) => {
                var elements = document.querySelectorAll(sel);
                for (var i = 0; i < elements.length; i++) {
                    elements[i].parentNode.removeChild(elements[i]);
                }
            }, div_selector_to_remove)

            let div_selector_to_remove1 = ".loaderRow";
            await page.evaluate((sel) => {
                var elements = document.querySelectorAll(sel);
                for (var i = 0; i < elements.length; i++) {
                    elements[i].parentNode.removeChild(elements[i]);
                }
            }, div_selector_to_remove1)

            let div_selector_to_remove2 = ".iRoom";
            await page.evaluate((sel) => {
                var elements = document.querySelectorAll(sel);
                for (var i = 0; i < elements.length; i++) {
                    elements[i].parentNode.removeChild(elements[i]);
                }
            }, div_selector_to_remove2)

            let div_selector_to_remove3 = ".iCampus";
            await page.evaluate((sel) => {
                var elements = document.querySelectorAll(sel);
                for (var i = 0; i < elements.length; i++) {
                    elements[i].parentNode.removeChild(elements[i]);
                }
            }, div_selector_to_remove3)

            let div_selector_to_remove4 = ".iWeek";
            await page.evaluate((sel) => {
                var elements = document.querySelectorAll(sel);
                for (var i = 0; i < elements.length; i++) {
                    elements[i].parentNode.removeChild(elements[i]);
                }
            }, div_selector_to_remove4)

            let div_selector_to_remove5 = ".iSession";
            await page.evaluate((sel) => {
                var elements = document.querySelectorAll(sel);
                for (var i = 0; i < elements.length; i++) {
                    elements[i].parentNode.removeChild(elements[i]);
                }
            }, div_selector_to_remove5)

            let div_selector_to_remove6 = ".iAction";
            await page.evaluate((sel) => {
                var elements = document.querySelectorAll(sel);
                for (var i = 0; i < elements.length; i++) {
                    elements[i].parentNode.removeChild(elements[i]);
                }
            }, div_selector_to_remove6)

            const data8 = await page.$$eval('.viconTable tbody tr', trs8 => trs8.map((tr8) => {
                return tr8.innerText;
            }));
            console.log(data8);
            message.channel.send('TANGGAL                        JAM             KELAS    TYPE                     MATKUL                                                      MEET ID         PASSWORD');
            message.channel.send('-------------------------------------------------------------------------------------------------------------------------------------------------');
            message.channel.send(data8);
            message.channel.send('-------------------------------------------------------------------------------------------------------------------------------------------------');
        }
        scrapeJadwal('https://myclass.apps.binus.ac.id/Home/Index');
    }

});


client.login("ur bot token");