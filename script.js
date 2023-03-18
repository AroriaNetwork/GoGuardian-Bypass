function generateIframe() {
    var url = document.getElementById('url').value;
    var iframe = document.createElement('iframe');
    iframe.src = url;
    document.body.appendChild(iframe);
}

document.getElementById('url').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        generateIframe();
    }
});
