// export function makeCoffee(callback) {
//   // 1000 milidetik = 1 detik
//   const estimationTime = 5000;

//   const inSecond = Math.ceil(estimationTime / 1000);
//   console.log(
//     `Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`
//   );

//   setTimeout(() => {
//     // Do some tasks to make coffee...
//     console.log("Pramusaji selesai membuat kopi.");

//     callback();
//   }, estimationTime);
// }

/*
export function makeCoffee(callback) {
  const estimationTime = 5000;

  const inSecond = Math.ceil(estimationTime / 1000);
  console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);

  setTimeout(() => {
    // Do some tasks to make coffee...
    console.log('Pramusaji selesai membuat kopi.');

    callback();
  }, estimationTime);
}
*/

// export function makeCoffee(callback) {
//   const estimationTime = 5000;

//   const inSecond = Math.ceil(estimationTime / 1000);
//   console.log(
//     `Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`
//   );

//   setTimeout(() => {
//     // Do some tasks to make coffee...

//     console.log("Pramusaji selesai membuat kopi.");
//     callback();
//   }, estimationTime);
// }

// export function sendCoffee(callback) {
//   const estimationTime = 2000;

//   console.log("Pramusaji sedang mengantarkan kopi pesanan");

//   setTimeout(() => {
//     // Do some tasks to send coffee...

//     console.log("Pramusaji sudah sampai ke meja.");
//     callback();
//   }, estimationTime);
// }

// Penanganan Error dengan Callback
// export function makeCoffee(name, callback) {
//   const estimationTime = 5000;
//   let isSuccess = false;

//   const inSecond = Math.ceil(estimationTime / 1000);
//   console.log(
//     `Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`
//   );

//   setTimeout(() => {
//     // Penentuan hasil dari proses asinkron
//     const number = Math.random();
//     if (number > 0.3) {
//       isSuccess = true;
//     }

//     if (!isSuccess) {
//       callback(new Error("Gagal membuatkan kopi."), null);
//       return;
//     }

//     console.log("Pramusaji selesai membuat kopi.");
//     callback(null, name);
//   }, estimationTime);
// }

// export function sendCoffee(name, callback) {
//   const estimationTime = 2000;
//   let isSuccess = false;

//   console.log("Pramusaji sedang mengantarkan kopi pesanan");

//   setTimeout(() => {
//     // Penentuan hasil dari proses asinkron
//     const number = Math.random();
//     if (number > 0.3) {
//       isSuccess = true;
//     }

//     if (!isSuccess) {
//       callback(new Error("Gagal mengantarkan kopi."), null);
//       return;
//     }

//     console.log("Pramusaji sudah sampai ke meja.");
//     callback(null, name);
//   }, estimationTime);
// }

// Penanganan Error dengan Promise dengan penerapan metode chaining
export function makeCoffee(name) {
  return new Promise((resolve, reject) => {
    const estimationTime = 2000;
    let isSuccess = false;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(
      `Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`
    );

    setTimeout(() => {
      const number = Math.random();
      if (number > 0.3) {
        isSuccess = true;
      }

      if (!isSuccess) {
        reject(new Error("Maaf, kopi gagal dibuatkan."));
        return;
      }

      console.log("Pramusaji selesai membuat kopi.");
      resolve(name);
    }, estimationTime);
  });
}

export function sendCoffee(name) {
  return new Promise((resolve, reject) => {
    const estimationTime = 1000;
    let isSuccess = false;

    console.log("Pramusaji sedang mengantarkan kopi pesanan");

    setTimeout(() => {
      const number = Math.random();
      if (number > 0.1) {
        isSuccess = true;
      }

      if (!isSuccess) {
        reject(new Error("Maaf, kopi gagal diantarkan."));
        return;
      }

      console.log("Pramusaji sudah sampai ke meja.");
      resolve(name);
    }, estimationTime);
  });
}
