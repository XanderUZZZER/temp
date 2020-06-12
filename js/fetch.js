// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

let url = 'https://jsonplaceholder.typicode.com/todos/1';

function f1() {
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}

function f2() {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {

    };
}

// f1();
// f2();