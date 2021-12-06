//File download script ====
function DownloadFile(fileName, url) {
  //Set the File URL.
  // var url = "https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf";
  // var url = "../files/" + fileName;

  //Create XMLHTTP Request.
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.responseType = "blob";
  req.onload = function () {
    //Convert the Byte Data to BLOB object.
    var blob = new Blob([req.response], { type: "application/octetstream" });

    //Check the Browser type and download the File.
    var isIE = false || !!document.documentMode;
    if (isIE) {
      window.navigator.msSaveBlob(blob, fileName);
    } else {
      var url = window.URL || window.webkitURL;
      link = url.createObjectURL(blob);
      var a = document.createElement("a");
      a.setAttribute("download", fileName);
      a.setAttribute("href", link);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };
  req.send();
}

const btnFileButtons = document.querySelectorAll(".btn_file");

if (btnFileButtons) {
  for (let index = 0; index < btnFileButtons.length; index++) {
    const btn = btnFileButtons[index];
    const downloader = btn.addEventListener("click", (e) => {
      e.preventDefault();
      DownloadFile;
    });
    btn.removeEventListener("click", downloader);
  }
}
