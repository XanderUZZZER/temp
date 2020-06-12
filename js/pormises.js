const posts = [
    { title: 'Post one', body: 'Post one body' },
    { title: 'Post two', body: 'Post two body' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                posts.push(post);

                const err = false;

                if (!err) {
                    resolve();
                }
                else {
                    reject('somth went wrong');
                }
            }, 2000);
        });
}

//getPosts();

// createPost(
//     { title: 'Poste three', body: 'Post three body' }
// ).then(getPosts);

//getPosts();