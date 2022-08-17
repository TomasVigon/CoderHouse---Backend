const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];

const getPosts = () => {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 3000)
};

const createPost = (post) => { //en esta linea recibe { title: "Post three", body: "This is post three"}
    return new Promise((resolve, reject) => {       //las promesas se pueden resolver o rechazar
        setTimeout(() => { //el settimeout es para simular un delay de procesamiento
            
            const error = false;  //no hay error
            //const error = true;     //hay error
            if(!error) {
                resolve(posts.push(post););          //resuelve y va al .then
            } else {
                reject('Error...');      //mensaje en caso de que haya error
            }
        }, 2000)
    })
};

createPost({ title: "Post three", body: "This is post three"})
    .then(getPosts)
    .catch(err => console.log(err));
