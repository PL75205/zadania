fetch("data.json")
    .then(res => res.json())
    .then(data => {

        var lista1 = document.getElementById("umiejetnosci");
        var lista2 = document.getElementById("projekty");

        for (var i = 0; i < data.umiejetnosci.length; i++) {
            var li = document.createElement("li");
            li.textContent = data.umiejetnosci[i];
            lista1.appendChild(li);
        }

        for (var i = 0; i < data.projekty.length; i++) {
            var li = document.createElement("li");
            li.textContent = data.projekty[i];
            lista2.appendChild(li);
        }

    });