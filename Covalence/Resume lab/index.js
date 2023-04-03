const MyName = "andrew crutchfield"

console.log("My name is", MyName.toUpperCase())
console.log("my Field of study is Psychology, but I am moving towords programming as new field of study and my career")
console.log("Id describe my self as goal focused with a pation for efficiency. My strongest attribute is problem solving with what I have and if there is a way I find it. My weakness is that I doubt my ability nigh constantly despite examples of me succseading. When I am working on my own it is a test of can I figure out the problem before my moral breaks.")
console.log("my intrests:")
console.log("* dnd")
console.log("* video games")
console.log("* table top war games and minature crafting/ painting.")
console.log("* hiking")
console.log("* black smithing")
console.log("* traveling to cathedrals. ")
console.log("* fencing")
console.log("* horse back riding.")
console.log("Previous work experince:")
displayPosition ("PPG Paint:", "Sales/Deliver", "Tint paint, answer phones, conduct storefront transactions, make deliveries. Increase workplace efficiency by taking large, complex orders as a solo task. Maintain computer network and install new PCs.")
displayPosition ("Murdocks", "Hardside Sales Associate", "Sell and assemble hardside products like chainsaws and snowblowers. Optimized chainsaw construction pipeline for efficiency and safety. Improved freight handling processes, resulting in an increase in team capacity.")
displayPosition("Columbia International University", "Librarian", "Efficiently digitized books for the online library. Reorganized multiple sections of the library for better client access. Specialist in Hermeneutics research. ")
console.log("MY skils: ")
console.log("* I have a beginners knowledge to python")
console.log("* I can ride and care for a horse")
console.log("* ", displaySkill(true), " forklift certified")
console.log("* can conduct a ct brain scan")
console.log("* ", displaySkill(true), " experienced in translating text from ancient languages.")


var job1name = "PPG Paint:"
var job1title = "Sales/Deliver"
var job1desc = "Tint paint, answer phones, conduct storefront transactions, make deliveries. Increase workplace efficiency by taking large, complex orders as a solo task. Maintain computer network and install new PCs."
//var insert = displayPosition (job1name, job1title, job1desc);

function displayPosition (CompanyName, JobTitle, JobDescription) {
    console.log ("* ", CompanyName)
    console.log ("* ", JobTitle)
    console.log ("* ", JobDescription)
}

function displaySkill (print) {
if (print === true){
    return "BAN:"} 
else {
    return
}
}


