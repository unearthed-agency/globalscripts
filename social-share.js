$("[share-button='mail']").click(function() {
    var a = encodeURIComponent(document.title),
        b = encodeURIComponent(document.URL);
    location.href = "mailto:?subject=" + a + "&body=" + a + "%0A" + b;
});

$("[share-button='copy']").click(function() {
    var a = document.createElement("input");
    document.body.appendChild(a);
    a.value = window.location.href;
    a.select();
    document.execCommand("copy");
    document.body.removeChild(a);
});

$("[share-button='text']").click(function() {
    var a = document.createElement("input");
    document.body.appendChild(a);
    a.value = $(this).text();
    a.select();
    document.execCommand("copy");
    document.body.removeChild(a);
});

$("[share-button='whatsapp']").click(function() {
    window.open("whatsapp://send?text=" + document.title + "%0a" + document.URL);
});

$("[share-button='facebook']").click(function() {
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(document.URL) + "&t=" + encodeURIComponent(document.title));
});

$("[share-button='twitter']").click(function() {
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.title) + "%0a" + encodeURIComponent(document.URL));
});

"share" in navigator && $("[share-button='other']").hide();

$("[share-button='other']").click(function() {
    let a = {
        title: document.title,
        text: $('meta[name="description"]').prop("content"),
        url: window.location.href
    };
    navigator.share(a);
});

$("[share-button='linkedin']").click(function() {
    window.open("https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(document.URL));
});

if (typeof navigator.share !== "function") {
    $("[share-button='other']").addClass("disabled");
}
