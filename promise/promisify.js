function promisify(f) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }

      args.push(callback);

      f.call(this, ...args);
    });
  };
}

function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () =>
    callback(new Error("Произошла ошибка при загрузке скрипта!"));

  document.head.append(script);
}

const loadScriptPromise = promisify(loadScript);

const _base = "utils/simple-output-functions";

// loadScriptPromise(`${_base}/1.js`)
//   .then((script) => loadScriptPromise(`${_base}/2.js`))
//   .then((script) => loadScriptPromise(`${_base}/3.js`))
//   .then((script) => {
//     console.log(script);
//     f1();
//     f2();
//     f3();
//   })
//   .catch((e) => console.log(e));

const fileNames = ["1.js", "2.js", "3.js"];
Promise.allSettled(
  fileNames.map((fileName) => loadScriptPromise(`${_base}/${fileName}`))
)
  .then((value) => {
    console.log("using Promise.all():");
    console.log(value);
    f1();
    f2();
    f3();
  })
  .catch((e) => console.log(e));
