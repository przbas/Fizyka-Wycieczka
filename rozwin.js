function toggleText(numer){
    var moreText = document.getElementById("rozwin-" + numer);
    var kropki = document.getElementById("kropki-"+ numer);

    if (moreText.style.maxHeight === "0px" || moreText.style.maxHeight === ""){
        moreText.style.maxHeight = moreText.scrollHeight + "px";
    }
    else{
        moreText.style.maxHeight = "0";
    }
}