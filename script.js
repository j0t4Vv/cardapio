function mostrarDiv(divId) {

    var divs = document.getElementsByClassName('container');
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }

    var divToShow = document.getElementById(divId);
    if (divToShow) {
        divToShow.style.display = 'block';
    }
}
