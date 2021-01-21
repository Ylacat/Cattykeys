function disableKeys (){
    document.onkeyup = function (e) {
        return false;
    }
    document.onkeydown = function (e) {
        return false;
    }
    document.onkeypress = function (e) {
        return false;
    }

}
function enableKeys () {
    document.onkeyup = function (e) {
        return true;
    }
    document.onkeydown = function (e) {
        return true;
    }
    document.onkeypress = function (e) {
        return true;
    }
}