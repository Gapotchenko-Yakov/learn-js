function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () =>
    callback(new Error("Произошла ошибка при загрузке скрипта!"));

  document.head.append(script);
}

loadScript("1.js", (error, script) => {
  if (error) {
    handleError(error);
  } else {
    loadScript("2.js", (error, script) => {
      if (error) {
        handleError(error);
      } else {
        loadScript("3.js", (error, script) => {
          if (error) {
            handleError(error);
          } else {
            console.log("using all scripts together...");
          }
        });
      }
    });
  }
});
