let shareBtn = document.querySelector('.share');
let websites = document.querySelectorAll('.box > div');

for (let i = 0; i < websites.length; i++){
    websites[i].onclick = function(){
        if (i == 0) {
            window.open('https://www.facebook.com/profile.php?id=61577160616475');
        }
        else if (i == 1) {
            window.open('https://t.me/White_Tex_cairo')
        }
        else if (i == 2) {
            window.open('https://wa.me/201063490407')
        }
        else {
            window.open('https://maps.app.goo.gl/wie5NTt8z7JLEwUP9')
        }
    }
}
let shared = {
    title: "White Tex",
    text: 'Share our website to someone else !',
    url: "https://omarso7.github.io/White_Tex/",
};
shareBtn.onclick = function () {
    navigator.share(shared);
}
