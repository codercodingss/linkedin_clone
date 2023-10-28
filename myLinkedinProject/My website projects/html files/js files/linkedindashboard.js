// const switchButton = document.querySelector('.switch-button');
// const body = document.querySelector('body');

// const lightMode = {
//     '--bg-color': '#fff',
//     '--text-color': '#333',
// };

// const darkMode = {
//     '--bg-color': '#333',
//     '--text-color': '#fff',
// };

// function switchMode() {
//     if (body.classList.contains('light-mode')) {
//         body.classList.replace('light-mode','dark-mode');
//         Object.entries(darkmode).forEach(([key, value]) => {
//             document.documentElement.style.setProperty(key,value);
//         });
//     } else {
//         body.classList.replace('dark-mode','light-mode');
//         Object.entries(lightMode).forEach(([key,value]) => {
//             document.documentElement.style.setProperty(key,value);
//         });
//     }
// }

// switchButton.addEventListener('click', switchMode);


const backToTopButton = document.querySelector('.back-to-top-button');

window.onscroll = function () {
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

backToTopButton.addEventListener('click',function () {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
});

// const body = document.querySelector('body');
// const darkColors = ['#0f4c75'];

// // , '#002b36','#1c2331','#0f4c75','#7e57c2','#1b5e20'

// function changeBackground() {
//     const randomIndex = Math.floor(Math.random() * darkColors.length);
//     const randomColor = darkColors[randomIndex];
// //     body.style.backgroundColor = randomColor;
// }

window.addEventListener('load', changeBackground);