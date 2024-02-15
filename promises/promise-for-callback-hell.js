function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () =>
      reject(new Error("Произошла ошибка при загрузке скрипта!"));

    document.head.append(script);
  });
}

loadScript("1.js")
  .then((script) => loadScript("2.js"))
  .then((script) => loadScript("3.js"))
  .then((script) => {
    f1();
    f2();
    f3();
    f44();
  });
