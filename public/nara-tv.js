// side navigation menu
function openSideNav() {
	document.getElementById('sideNav').style.height = '100%';
}

function closeSideNav() {
	document.getElementById('sideNav').style.height = '0';
}
// side navigation menu END

// change theme
let action = 1;
let i;

function changeTheme() {
	if(action == 1) {
        document.body.style.background = 'linear-gradient(to bottom right, #140606, #270c0c) no-repeat center fixed';
		document.getElementById('title').style.color = 'white';
		document.getElementById('brightness-desktop').innerHTML = 'brightness_5';
		document.getElementById('brightness-mobile').innerHTML = 'brightness_5';
        action = 2;
	}
    else if(action == 2) {
        document.body.style.background = 'linear-gradient(to bottom right, #a6a6a6, #f2f2f2) no-repeat center fixed';
		document.getElementById('title').style.color = 'black';
		document.getElementById('brightness-desktop').innerHTML = 'brightness_2';
		document.getElementById('brightness-mobile').innerHTML = 'brightness_2';
        action = 1;
    }
}
// change theme END

// search
function searchDesktop() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchInput-desktop");
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchUL-desktop");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        aArabic = li[i].getElementsByTagName("a")[0];
				aFrench = li[i].getElementsByTagName("a")[1];
        txtValueArabic = aArabic.textContent;
				txtValueFrench = aFrench.textContent;
        if (txtValueArabic.toUpperCase().indexOf(filter) > -1 || txtValueFrench.toUpperCase().indexOf(filter) > -1) {
            aArabic.style.display = "block";
						aFrench.style.display = "block";
        }
        else {
            aArabic.style.display = "none";
						aFrench.style.display = "none";
        }
        if (filter.length == 0 || filter.length == 1) {
					aArabic.style.display = "none";
					aFrench.style.display = "none";
        }
    }
}

function searchMobile() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchInput-mobile");
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchUL-mobile");
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
//clear search
function clearSearch() {
	document.getElementById('searchInput-desktop').value = 'إبحث عن أنمي أو فلم . . .';
	document.getElementById('searchInput-mobile').value = 'إبحث عن أنمي أو فلم . . .';
}
// clear search END
// search END
