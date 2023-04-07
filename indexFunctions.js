function close() {
    let result = document.getElementById("sidebar");
    let clicker = document.getElementById("close-button");
    let opener = document.getElementById("open-button");
    result.style.display = "none";
    clicker.style.display = "none";
    opener.style.display = "block";

}

function open() {
    let result = document.getElementById("sidebar");
    let clicker = document.getElementById("close-button");
    let opener = document.getElementById("open-button");
    result.style.display = "block";
    clicker.style.display = "block";
    opener.style.display = "none";
}

if("Notification" in window){
    Notification.requestPermission().then(function(permission) {
        if(Notification.permission==="granted"){
            await(5);
            let notification = new Notification("Any bugs? Please refer to my contact information and send an email to report them!");
        }
    });
}


const closeButton = document.getElementById('close-button');
const openButton = document.getElementById("open-button");

closeButton.addEventListener("click", close);
openButton.addEventListener("click", open);

