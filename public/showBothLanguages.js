function showBothLanguages(class) {
    let searchResults = document.getElementsByClassName(class);
    if (searchResults[0].style.display != 'none' || searchResults[1].style.display != 'none') {
        searchResults[0].style.display = 'block';
        searchResults[0].style.display = 'block';
    }
}

function showBothLanguages(className) {
    let searchResults = ul.getElementsByClassName(className);
    if (searchResults[0].getElementsByTagName('a')[0].style.display != 'none' || searchResults[1].getElementsByTagName('a')[0].style.display != 'none') {
        searchResults[0].getElementsByTagName('a')[0].style.display = 'block';
        searchResults[1].getElementsByTagName('a')[0].style.display = 'block';
    }
}

function searchDesktop() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchInput-desktop");
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchUL-desktop");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a.style.display = "block";
        }
        else {
            a.style.display = "none";
        }
        if (filter.length == 0 || filter.length == 1) {
            a.style.display = "none";
        }
    }
}
