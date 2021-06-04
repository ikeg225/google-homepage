document.getElementById('search-bar').addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            searchValue()
        }
    });


function searchValue() {
    const y = document.getElementById("search-bar").value;
    window.location.href = "https://google.com/search?q=" + y;
};