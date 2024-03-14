function downloadFile() {
    var url = "https://api.github.com/repos/acamlated2/acamlated2.github.io/contents/Builds/ProjectZipZap_v0.2.0-beta.zip";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var downloadUrl = data.download_url;
            window.location.href = downloadUrl;
        })
        .catch(error => console.error('Error:', error));
}