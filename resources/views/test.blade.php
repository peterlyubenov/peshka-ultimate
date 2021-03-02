<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hello world</h1>

  <input type="text" id="query">
  <div id="suggestions"></div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
  <script>
    const queryElement = document.getElementById("query");
    queryElement.addEventListener('keyup', (event) => {
      axios('/api/majors_suggestions', {params: {q: event.target.value}})
        .then(response => {
          let suggestionsList = "<ul>";

          response.data.forEach(suggestion => {
            suggestionsList += `<li>${suggestion.name}</li>`;
          });

          suggestionsList += "</ul>";

          document.getElementById('suggestions').innerHTML = suggestionsList
        });
    })
  </script>
</body>
</html>