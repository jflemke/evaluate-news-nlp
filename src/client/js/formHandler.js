function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('url-input').value;
    Client.checkForName(formText);

    console.log("::: Form Submitted :::");
    fetch('http://localhost:8080/text/sentiment', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({url: formText})
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = `The polarity of the article ist ${res.polarity} and its subjectivity is ${res.subjectivity}.`;
    });
}

export { handleSubmit }
