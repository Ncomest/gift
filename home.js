document.addEventListener("DOMContentLoaded", function () {
 const authorization = sessionStorage.getItem("authorization");
 if (!authorization || authorization === "false") {
  window.location.href = "index.html";
 } else {
  const cardContainer = document.getElementById("card-container");

  const imageUrl = "./image/coffee_img.svg";
  const overImageUrl = "./image/coffee_img_over.svg"; // Путь к изображению coffee_img_over.svg

  const imageStyles = {
   height: "100px",
   width: "100px",
   margin: "5px",
  };

  // Создаем массив элементов
  const imgElements = [];

  for (let i = 0; i < 20; i++) {
   const imgElement = document.createElement("img");
   imgElement.src = imageUrl;
   imgElement.alt = "image" + (i + 1);

   Object.assign(imgElement.style, imageStyles);

   cardContainer.appendChild(imgElement);

   imgElements.push(imgElement);
  }

  // Заменяем последний и предпоследний элементы на coffee_img_over.svg
   imgElements[0].src = overImageUrl;
   imgElements[1].src = overImageUrl;
   imgElements[2].src = overImageUrl;
   imgElements[3].src = overImageUrl;
   imgElements[4].src = overImageUrl;
   imgElements[5].src = overImageUrl;
   imgElements[6].src = overImageUrl;
   imgElements[7].src = overImageUrl;
   imgElements[8].src = overImageUrl;
   imgElements[9].src = overImageUrl;
   imgElements[10].src = overImageUrl;
   imgElements[11].src = overImageUrl;
   imgElements[12].src = overImageUrl;
   imgElements[13].src = overImageUrl;
  // imgElements[14].src = overImageUrl;
  // imgElements[15].src = overImageUrl;
  // imgElements[16].src = overImageUrl;
  // imgElements[17].src = overImageUrl;
  // imgElements[18].src = overImageUrl;
  // imgElements[19].src = overImageUrl;
 }
});
