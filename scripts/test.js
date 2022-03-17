$('.input-images').imageUploader({
   label: 'Перетащите сюда файлы или выберите файл',
   maxSize: 5 * 1024 * 1024, //Макс размер
   maxFiles: 5, //Макс кол. файлов
   extensions: ['.jpg', '.jpeg', '.png', '.gif', '.svg'],
});


$(".rate-in").rateYo({
   starWidth: "17px",
   normalFill: "#929292",
   ratedFill: "#059E05",
   spacing: "3px",
   numStars: 5,
   fullStar: true,
});