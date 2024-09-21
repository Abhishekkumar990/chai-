//IN this code we learn about switch case
//this is it syntax code.

// switch (key) {
//     case value:
//         break;

//     default:
//         break;
// }

const month = "march";

switch (month.toString().toLowerCase()) { // Convert to string and lowercase to handle mixed input
    case "1":
    case "january":
        console.log("January");
        break;
    case "2":
    case "february":
        console.log("February");
        break;
    case "3":
    case "march":
        console.log("March");
        break;
    case "4":
    case "april":
        console.log("April");
        break;
    case "5":
    case "may":
        console.log("May");
        break;
    case "6":
    case "june":
        console.log("June");
        break;
    case "7":
    case "july":
        console.log("July");
        break;
    case "8":
    case "august":
        console.log("August");
        break;
    case "9":
    case "september":
        console.log("September");
        break;
    case "10":
    case "october":
        console.log("October");
        break;
    case "11":
    case "november":
        console.log("November");
        break;
    case "12":
    case "december":
        console.log("December");
        break;
    default:
        console.log("Please provide a valid month name or number.");
        break;
}