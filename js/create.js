// javascript for create.html
const form = document.querySelector('form')

const createPost = async (e) => {
    e.preventDefault();

    const doc = {
        title: form.title.value,
        author: form.author.value,
        body: form.body.value,
        likes: 0,
        createdTime: JSON.stringify(new Date())
    };

    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: { 'Content-Type': 'application/json' }
    });

    window.location.replace('/index.html');
}

form.addEventListener('submit', createPost);