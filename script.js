function search() {
  var input = document.getElementById("searchInput").value;
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Очищаем предыдущие результаты

  // Отправляем AJAX запрос для загрузки данных из JSON файла
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var foundOrder = null;

        // Ищем заказ с введенным номером
        for (var i = 0; i < data.length; i++) {
          if (data[i].Comanda == input) {
            foundOrder = data[i];
            break;
          }
        }

        if (foundOrder) {
          resultDiv.innerHTML = "<strong>Comanda:</strong> " + foundOrder.Comanda + "<br>" +
            "<strong>Statut:</strong> " + foundOrder.Statut;
        } else {
          resultDiv.innerHTML = "Заказ с таким номером не найден";
        }
      } else {
        resultDiv.innerHTML = "Ошибка загрузки данных";
      }
    }
  };
  xhr.open("GET", "http://127.0.0.1:5502/info.json", true);
  xhr.send();
}
