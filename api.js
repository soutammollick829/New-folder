const lodeData = ()=> {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data))
};
const displayUser =(posts)=>{
const postContainer = document.getElementById(`user-title`);
for(const post of posts){
const div = document.createElement("div");
div.innerHTML = `
<div class="card w-72 h-80 bg-gradient-to-r from-purple-500 to-pink-500 text-neutral-content">
  <div class="card-body items-center">
    <h1 class="card-title text-zinc-700	">Title:${post.title.slice(0, 50)}</h1>
    <p class="">Body:${post.body.slice(0, 100)}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary bg-red-400 border-none">Accept</button>
      <button class="btn btn-ghost">Deny</button>
    </div>
  </div>
</div>`;
postContainer.appendChild(div);
};
};
// lodeData();
