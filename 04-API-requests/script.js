// This script fetches the date form the user's github profile.
// The request is done using Legacy XMLHTTPRequest object.

const requestUrl = 'https://api.github.com/users/abhisharma1210';
const xmlRequest = new XMLHttpRequest() // This is a constructor and has to be called before anything.

xmlRequest.open('GET', requestUrl) // Opens the request. It can now be sent
xmlRequest.send();
xmlRequest.onreadystatechange = function () {
    // console.log(xmlRequest.readyState);
    if (xmlRequest.readyState === 4) {
        const fullData = JSON.parse(this.responseText);
        // console.log(fullData.followers);
        // const textFollowers = fullData.followers;
        document.getElementById('profile-photo').style.backgroundImage = `url(${fullData.avatar_url})`;

        document.getElementById('user-name').innerHTML = `${fullData.name}`;

        document.getElementById('user-followers').innerHTML = `${fullData.followers} followers`;

        document.getElementById('user-bio').innerHTML = `${fullData.bio}`;
    }
}

