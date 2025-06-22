// const { spawn } = require('child_process');

// const child = spawn('cmd', ['/c', 'dir']); // Windowsda 'ls' o‘rniga 'dir'

// child.stdout.on('data', (data) => {
//   console.log(`Natija: ${data}`);
// });

// child.stderr.on('data', (data) => {
//   console.error(`Xatolik: ${data}`);
// });

// child.on('close', (code) => {
//   console.log(`Jarayon tugadi. Kod: ${code}`);
// });

// Parent'dan xabar olish


process.on('message', (data) => {
    console.log('Parent yubordi:', data);

    // Javob yuborish
    process.send({ javob: 'Assalomu alaykum, parent!' });
});