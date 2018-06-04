function render() {
  let container = document.getElementById("container");
  container.innerHTML = store.getState().count;
}

button.addEventListener("click", function() {
  store.dispatch({ type: "INCREASE_COUNT" });
});
