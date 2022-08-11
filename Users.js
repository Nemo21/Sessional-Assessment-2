function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            data.forEach(ele => {
                const card = document.createElement("div");
                const h1 = document.createElement("h1");
                const h2 = document.createElement("h2");
                const p = document.createElement("p");
                card.className = "card";
                h1.className = "title";
                h2.className = "UserID";
                p.className = "desc";
                h1.innerHTML = ele.title;
                h2.innerHTML = ele.userId;
                p.innerHTML = ele.body;
                card.appendChild(h1);
                card.appendChild(h2);
                card.appendChild(p);
                document.getElementById("cards").appendChild(card);
            })
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send();
}

loadDoc();