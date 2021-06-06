document.getElementById('search-bar').addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            window.location.href = "https://google.com/search?q=" + document.getElementById("search-bar").value;
        }
    });