function download(text, name, type) {
    let file = new Blob([text], {type: type});
    let link = document.getElementById("ok");
    link.href = URL.createObjectURL(file);
    link.download = name;
    console.log(link);
  }
  
window.onload = () => {
    let bt = document.getElementById("createPage");
    bt.addEventListener("click", () => download(create(),document.getElementById("nameFile").value+".html", 'text/plain'));
}

/**
 * Template pagina HTML
 * @returns : stringa contentente la pagina HTML
 */
function create(){
    return '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Dashboard</title><link rel="stylesheet" href="style.css"><script src="file.js"></script></head><body>    <label>Inserisci nome file: <input type="text" id = "nameFile"></label><a href = "" id="ok"><input type="submit" value="submit" id = "createPage"></a></body></html>'
}