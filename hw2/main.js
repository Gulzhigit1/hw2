// document.getElementById('startButton').addEventListener('click', () => {
//     console.log('Начало');

//     setTimeout(() => {
//         console.log('2 секунды прошло');

//         setTimeout(() => {
//             console.log('3 секунды прошло');
//         }, 1000);
//     }, 2000);
// });


document.getElementById('startButton').addEventListener('click', () => {
    console.log('Начало работы');

    setTimeout(() => {
        console.log('Прошла 1 секунда');
    }, 1000);

    const intervalId = setInterval(() => {
        console.log('Прошло еще 2 секунды');
    }, 2000);

    setTimeout(() => {
        clearInterval(intervalId);
        console.log('Прошло 10 секунд');
    }, 10000);
});