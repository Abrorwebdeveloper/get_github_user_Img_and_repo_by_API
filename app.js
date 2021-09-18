let myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", function (e) {
    
  e.preventDefault()
  
  let search = document.querySelector("#search").value;

  fetch("https://api.github.com/users/" + search)
    .then((result) => result.json())
    .then((data) => {
      let result = document.querySelector(".result");

      result.innerHTML = `
      <a href="https://github.com/${search}">
         <img src="${data.avatar_url}"/>
         <span>https://api.github.com/users/${search}</span>
         
      </a>
      <span>${data.repos_url}</span>
    `
    });

    search.value = ''
});
