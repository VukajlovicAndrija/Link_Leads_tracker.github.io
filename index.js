/* function saveLead() {
    console.log("Button has been Clicked!");
} */

// Time to learn how pros dew it, const can't be changed aka its Constant
let myLeads = []

/* 
myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads);
myLeads = JSON.parse(myLeads)
myLeads.push("www.epicLead.com")
console.log(myLeads) 
*/

// Four step task ahead: Turn into array, Push a new value, turn it back to string, use typeof to make sure its a string

/* myLeads = JSON.parse(myLeads)
myLeads.push("www.newSite.com")
myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads); */

// DONEZO


const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
/* const tabs = [
    { url: "https://www.linkedin.com/in/per-harald-borgen/" }
] */

/* localStorage.setItem("myLeads", "www.exampleLead.com")
// Task: save a key-value in localStorage, refresh the page and log it, and after that clear localStorage

localStorage.setItem("first site", "https://www.linkedin.com/in/per-harald-borgen/")
localStorage.setItem("second site", "www.second-site.com") 
console.log(localStorage)
localStorage.clear()*/

// EPICC

tabBtn.addEventListener("click", function () {
    // Grab the url of the current tab!
    /*     createWatchCompilerHost.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            let activeTab = tabs[0]
            let activeTabId = activeTab.id
        }) */

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

    console.log(localStorage.getItem("myLeads"));
})

let leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromStorage) {
    myLeads = leadsFromStorage
    render(myLeads)
}

deleteBtn.addEventListener("click", function () {
    localStorage.clear()
    myLeads = []
    // ulEl.innerText = "" my bad idea that worked
    render(myLeads)

})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEl.value = ""
    render(myLeads)

    console.log(localStorage.getItem("myLeads"));
})

// FUTURE PROOFING RENDERLEADS, Adding arguments to functions, also we have made it more dynamic 
function render(leads) {
    let listItems = []
    for (let i = 0; i < leads.length; i++) {
        //listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"
        listItems +=
            `
        <li>
            <a href='${leads[i]}' target='_blank'>
            ${leads[i]}
            </a>
        </li>
            `
        /* const li = document.createElement("li")
        li.textContent = leads[i]
        ulEl.append(li) */
    }
    ulEl.innerHTML = listItems
}

// OZBILJNO UPAMTI KAKO SE U FOR PETLJU I STRINGOVE UBACUJE LINK JAKO JE VAZNO
// USING innerHTML WE CAN MANIPULATE THE DOM AND CREATE HTML ELEMENTS,
// Alternative way is longer write it to understand it
// TEMPLATE STRINGS


// You can remove onclick from your html and thus clean it up


// Practice with EventListeners

/* let boxEl = document.getElementById("box")

boxEl.addEventListener("click", function () {
    console.log("I want to open the Box!");
}) */

// DOONEZO

// When to let and when to const!

/* const playerName = "Per"
let credits = 65

credits -= 10 */

// If possible, use const. If not, use let

// 1. Everythings starts with let. Change to const what you can change:

// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
/* const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
const fullPrice = basePrice - discount + shippingCost

// fullPrice is only used here and nowhere else so it can be const

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)
 */
// DONEZO

// Your HTML Dev forgot to add a Buy button on your website and now you're losing money!! Quiiick you have to add it yourself with your power of JS

/* const constEl = document.getElementById("container")

constEl.innerHTML = "<button onclick='buyBtn()'>Buy!</button>"

function buyBtn() {
    constEl.innerHTML += "<p>Thank you for buying!</p>"
} */

// Wooosh that was close, now render a paragraph when a button is clicked!

// Practice template strings/literals

/* const recipient = "James"
const sender = "Alure"

const email =
    `
    Hey ${recipient}!
    How is it going?
    Cheers ${sender}.
    `
console.log(email); */

// ALL GOOD!

// falsy and truthy values?

/* const credits = 0
if (credits) {
    console.log("Let's play :D");
} else { console.log("Sorry you have no credits D:"); } */

// truthy values : strings, positive numbers, arrays
// falsy values : 0, empty string, false, null, undefined, NaN
// null -> Developer signalizes emptines
// undefiend -> JavaScript signalizes emptines

/* let views = null

views = ["Jane", "Nick"]
if (views) {
    console.log("We have viewsss!");
} */

// If you write let views and nothing else JS will give its undefiend error

// Guess the expresion practice
/*
let trueOrFalse = Boolean("hello")

console.log(trueOrFalse);
// Thats the way to test it, now guess!
console.log(Boolean("")) // false bingo
console.log(Boolean("0")) // true bingo
console.log(Boolean(100)) // true bingo
console.log(Boolean(null)) // false bingo
console.log(Boolean([0])) // true bingo
console.log(Boolean(-0)) // false bingo */

// Donezo

// Arguments practice, parametar

/* const welcomeEl = document.getElementById("welcome-el")
// Alter the function so it replaces "Welcome back" DONEZO
// Now bring back the name parametar, and add template literal
function greetUser(greet, name, emoji) {
    welcomeEl.textContent = `${greet}, ${name} ${emoji}`
}

greetUser("Elune-Adore", "Alurey", "🌙") */

// PERFECTO
/* function add(firstNumb, secondNumb) {
    return firstNumb + secondNumb
}
console.log(add(3, 4));
console.log(add(9, 102)); */

// Difference between Arguments and Parameters is:
// parameters are defined when making a function, but arguments are used when calling a function

// If you understood that correctly, answer the next few questions:

// What are greeting and name? --> parameters bingo
// What are "Howdy" and "James"? --> arguments bingo
// What are num1 and num2? --> parameters bingo
// What are 3 and 4? --> arguments bingo

// Perfectly balanced as all things should be

// Create a function, getFirst(arr), that returns the first item in the array

/* function getFirst(arr) {
    return arr[0]
}
let bingo = ["jedan", "dva", "tri"]

console.log(getFirst(bingo)) */

// SUPERB
