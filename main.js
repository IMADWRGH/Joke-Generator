const btn = document.getElementById('btn');
const p = document.getElementById('joke');
async function getResponse() {
    const response = await fetch(`https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    p.innerHTML = `${data.setup + '<br>' + data.delivery}`;
}

btn.addEventListener('click', getResponse);