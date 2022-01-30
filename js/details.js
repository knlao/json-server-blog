// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
const detailsContainer = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');

const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/posts/' + id);
    const post = await res.json();

    const template = `
        <h1>${post.title}</h1>
        <h5>Author: ${post.author}</h5>
        <h5>Likes: ${post.likes}</h5>
        <h5>Time created: ${post.createdTime}</h5>
        <h3>${post.body}</h3>
    `

    detailsContainer.innerHTML = template;
}

deleteBtn.addEventListener('click', async (e) => {
    const response = await fetch('http://localhost:3000/posts/' + id);
    const post = await response.json();

    let username = prompt("Please enter the name of the author of the post");

    if (username === post.author) {
        const isConfirmed = confirm("Are you sure you want to delete the post?");
        if (isConfirmed) {
            const res = await fetch('http://localhost:3000/posts/' + id, {
                method: 'DELETE'
            });

            window.location.replace('/index.html')
        }
    }
})

window.addEventListener('DOMContentLoaded', () => renderDetails());