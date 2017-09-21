function hack(){
    if (window.User){
        console.log("hacking...");
        console.log(window.User);
        window.User.is_premium = true;
    }
}
setTimeout(hack,5000);