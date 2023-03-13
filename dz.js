// # Date -  HomeWork

// //! 1. Вивести на екран поточну дату у форматі - 08 листопада 2022 року

// const monthTitle = [
//     "січеня",
//     "лютого",
//     "березня",
//     "квітня",
//     "травня",
//     "червня",
//     "липня",
//     "серпня",
//     "вересня",
//     "жовтня",
//     "листопада",
//     "грудня",
// ];

// function potochnaData (){
// let today = new Date();
// console.log("today: ", today);
// const month = today.getMonth();
// console.log("month: ", monthTitle[month]);
// const years = today.getFullYear();
// console.log("years: ", years);
// const days = today.getDate().toString().padStart(2,"0");
// console.log("days: ", days);
// return `${days} ${monthTitle[month]} ${years} року`
// }
// alert(potochnaData());

// //! 2. Вивести на екран кількість годин, які пройшли з початку відліку до поточної дати та часу.

// function h (){
// let today = new Date();
// console.log(today.getTime());
// return `${Math.floor(today.getTime() / 3600000)} годин`;
// }
// alert(h());



// //! 3. Порахувати кількість днів до дня народження. Користувач вводить в input дату народження, далі натискає на кнопку і отримує кількість днів до дня народження на екрані.

// const today = new Date();

// function daystohbd() {
//   let bd = new Date(document.getElementById("birthday").value)
  
//   let nextHbd = new Date(today.getFullYear(), bd.getMonth(), bd.getDate())
//   if (nextHbd < today) {
//     nextHbd.setFullYear(nextHbd.getFullYear() + 1);
//   }
 
//   let days = Math.round((nextHbd - today) / (1000 * 60 * 60 * 24))
  
//   document.getElementById("result").innerHTML = `${days} днів до наступного дн`

// }

// document.getElementById("button").addEventListener("click", daystohbd);






// //! 4. Перевірити чи являється поточна дата вихідним днем, результат вивести на екран. Вважати вихідними суботу та неділю.
// function impreza (){
//     let today = new Date();
//     console.log(today.getDay());
//     if (today.getDay() === 5 || today.getDay() === 6 ) {
//         alert("Вихідний");
//     } else {
//         alert("Будній день");
//     }
// }
// impreza ();


