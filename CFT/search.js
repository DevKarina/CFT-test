function scr(find) {
  let col = document.getElementsByClassName("moscow")[0].children;
  let totalOccurrences = 0;

  for (let i = 1; i < 5; i++) {
    col[i].innerHTML = col[i].innerHTML
      .replace(/<span class="alert">/g, "")
      .replace(/<\/span>/g, "");

    let matchedOccurrences = col[i].innerHTML.match(new RegExp(find, "gi"));

    if (matchedOccurrences) {
      totalOccurrences += matchedOccurrences.length;
      col[i].innerHTML = col[i].innerHTML.replace(
        new RegExp(find, "gi"),
        function (matched) {
          return "<span class='alert'>" + matched + "</span>";
        }
      );
    }
  }

  if (totalOccurrences == 0) {
    return "Ничего не найдено";
  }

  if (find == 0) {
    return "Ошибка. Введена пустая строка";
  }

  return totalOccurrences;
}

function search() {
  var find = document.getElementById("text").value;

  document.getElementById("city").innerHTML = scr(find);
}
