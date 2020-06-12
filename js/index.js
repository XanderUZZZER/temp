// import { area } from './circle.js';
// console.log(`The area of a circle of radius 4 is ${area(4)}`);

function loadScript(src, clb) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => clb(null, script);
    script.onerror = () => clb(new Error(`script ${script.src} not found`));

    document.head.append(script);
}

//loadScript('./js/temp.js', () => { console.log('script  loaded'); newFunction() });

//loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//     console.log(`Здорово, скрипт ${script.src} загрузился`);
//     console.log(_); // функция, объявленная в загруженном скрипте
// });

loadScript('./js/fetch.js', function (error, script) {
    if (error) {
        handleErr(error);
    }
    else {
        console.log(`Здорово, скрипт ${script.src} загрузился, загрузим ещё один`);

        loadScript('./js/pormises.js', function (error, script) {
            if (error) {
                handleErr(error);
            }
            else {
                console.log(`Здорово, второй скрипт ${script.src} загрузился, загрузим ещё один`);

                loadScript('./js/callbacks.js', function (error, script) {
                    if (error) {
                        handleErr(error);
                    }
                    else {
                        console.log(`Здорово, третий скрипт ${script.src} загрузился, no more scripts`);
                        loadScript('./js/callbasdcks.js', function (error, script) {
                            if (error) {
                                handleErr(error);
                            }
                            else {
                                console.log(`Здорово, fourth скрипт ${script.src} загрузился, no more scripts`);
                            }
                        });
                    }
                });
            }
        });
    }
});

function handleErr(erMsg) {
    console.error("cccccccccccccccccccc" + erMsg);
}

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(5) }, ms);
    });
}

delay(2000).then(data => console.log(data));
//newFunction();