// const posts = [
//     { title: 'Post one', body: 'Post one body' },
//     { title: 'Post two', body: 'Post two body' }
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 4000)
// }

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 3000);
// }

// //getPosts();

// createPost(
//     { title: 'Poste three', body: 'Post three body' }, getPosts
// );

// //getPosts();