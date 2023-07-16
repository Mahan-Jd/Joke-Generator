const jokeli = document.getElementById('jokee');
const jokebtn = document.getElementById('jokeb');

const generateJoke = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                
                jokeli.innerHTML = JSON.parse(this.responseText).value;
            }
            else {
                jokeli.innerHTML = 'Something went wrong (not funny)';
            }
        }
    };
    xhr.send();
};

jokebtn.addEventListener('click', generateJoke);
