function init() {
    x = document.getElementById("fileContent")
    y = document.getElementById('fileInput')
    document.getElementById("fileContent").style.visibility = "hidden";
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
    x.style.display = "none"
    document.getElementById("dwn-btn").value = "download blank file";

    document.getElementById("up").addEventListener("click", function () {
        document.getElementById("fileContent").style.visibility = "visible";
        x.style.display = "block";
        document.getElementById('dwn-btn').value = 'download'
        document.getElementById("fileContent").value = ""
    });
}

function handleFileSelect(event) {
    const reader = new FileReader()
    reader.onload = handleFileLoad;
    reader.readAsText(event.target.files[0])
    document.getElementById('dwn-btn').value = 'download'
}



function handleFileLoad(event) {
    document.getElementById("fileContent").style.visibility = "visible";
    x.style.display = "block";
    console.log(event);
    document.getElementById('fileContent').value = event.target.result;

    


}


function new_file() {
    document.getElementById("up").addEventListener("click", function () {
        document.getElementById("fileContent").style.visibility = "visible";
        x.style.display = "block";
        document.getElementById('dwn-btn').value = 'download'
        document.getElementById("fileContent").value = ""
    });
}

function content() {

    // Start file download.
    // Generate download of hello.txt file with some content
    var text = document.getElementById("fileContent").value;
    var filename = prompt("Please enter the file name");
    if (filename == null || filename == "") {

    } else {
        var fileType = prompt("Please enter the file format, default is .txt", ".txt");
        if (fileType == null || filename == "") {
            filename = filename + ".txt"
            download(filename, text);
        } else {
            filename = filename + fileType
            download(filename, text);
        }
    }

}



function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}