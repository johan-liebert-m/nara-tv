let input = document.getElementById("searchInput-desktop");
let ul = document.getElementById("searchUL-desktop");
let li = ul.getElementsByTagName("li");

function showBoth(arabicIndex) {
    if (li[arabicIndex].getElementsByTagName('a')[0].style.display != 'none' || li[arabicIndex + 1].getElementsByTagName('a')[0].style.display != 'none') {
      li[i].getElementsByTagName('a')[0].style.display = 'none';
      li[arabicIndex].getElementsByTagName('a')[0].style.display = 'block';
      li[arabicIndex + 1].getElementsByTagName('a')[0].style.display = 'block';
    }
}
showBoth(i);
