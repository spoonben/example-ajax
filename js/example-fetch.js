(function() {
    var apiKey = '55aa9215',
        url = 'http://fake-people.benspoon.com/';
    // GET example
    var getButton = document.getElementById('get-people');
    getButton.addEventListener('click', getPeople, false);

    // POST example
    var form = document.getElementById('post-person');
    form.addEventListener('click', postPeople, false);

    /**
     * Get people from the fake-people api
     * @return array people objects
     */
    function getPeople() {
        clearPeople();
        fetch(url + apiKey + '/people')
            .then(function(response) {
                return response.json();
            }).then(function(body){
                var ul = document.querySelector('.people'),
                    frag = document.createDocumentFragment();
                body.forEach(function(person) {
                    var li = document.createElement('li');
                    li.className = "get-person";
                    li.textContent = person.name + ', ' + person.age;
                    frag.appendChild(li);
                });
                ul.appendChild(frag);
            });
    };

    /*
     * Clear out the people list
     */
    function clearPeople() {
        var people = document.querySelectorAll('.get-person');
        for(var i=0; i<people.length; i++) {
            people[i].parentNode.removeChild(people[i]);
        }

    }

    /**
     * Post a new person!
     */
    function postPeople() {
        var form = document.getElementById('new-person');
        var person = formToJSON(form);
        fetch(url + apiKey + '/people', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": person.name || '',
                "age": person.age || '',
                "email": person.email || '',
                "eyeColor": person.eyeColor || '',
                "gener": person.gender || '',
                "phoneNumber": person.phoneNumber || ''
            })
        }).then(function(body){
            if (body.ok) {
                form.reset();
                alert(body.statusText);
            }
        });
    }
})();