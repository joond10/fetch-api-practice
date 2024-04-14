//Pass the url as the first property
//Fetch does GET by default,

//Fetch is promise based which requires us to use then/async/await
//Promise to get me the data at this URL
function fetchData(event) {
  event.preventDefault(); // Prevent form submission and page refresh

  let username = document.querySelector("#github-user").value;
  let url = `https://api.github.com/users/${username}`;

  fetchGithub(url);
}

function fetchGithub(url) {
  fetch(url)
    //Once the promise is resolved, then do this
    .then((res) => {
      //If the response was successful
      if (res.ok) {
        //Return the response in JSON
        console.log("success");
        //The body of data is not directly accessible from the response alone  - convert to JSON
        return res.json();
        //If unsuccessfuL
      } else {
        console.log("error");
        throw new Error("Network response not okay");
      }
    })

    .then((data) => {
      handleGithub(data);
    });
}

function handleGithub(githubinfo) {
  let display = document.querySelector("#display");
  display.innerHTML = "";
  let imgDiv = document.createElement("div");
  imgDiv.className = "profile-picture";
  let img = new Image();
  img.src = githubinfo.avatar_url;
  imgDiv.appendChild(img);
  display.appendChild(imgDiv);
  let infoDiv = document.createElement("div");
  infoDiv.className = "profile-info";
  let username = document.createElement("h4");
  username.innerText = "Name: " + githubinfo.name;
  let followers = document.createElement("h4");
  followers.innerText = "Followers: " + githubinfo.followers;
  let following = document.createElement("h4");
  following.innerText = "Following: " + githubinfo.following;
  let location = document.createElement("h4");
  location.innerText = "Location: " + githubinfo.location;
  let bio = document.createElement("h4");
  bio.innerText = "Bio: " + githubinfo.bio;
  [username, followers, following, location, bio].forEach((element) => {
    infoDiv.appendChild(element);
  });
  display.appendChild(infoDiv);
}
