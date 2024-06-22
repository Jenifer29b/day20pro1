const url = "https://meowfacts.herokuapp.com/"


const myform = document.getElementById("myform");

myform.addEventListener("submit", (e) => {
   e.preventDefault()
   const name = document.getElementById("username").value;
   const count = document.getElementById("userid").value;

   const data = JSON.stringify({
      name,
      count,
   })
   console.log(data)

  fetch(`${url}?count=${count}`, {
      method: "GET" 
   })
      .then((response) => response.json())
      .then((data) => {
          document.getElementById("image").innerHTML = `
         <p>${data.data}</p>`
         document.getElementById("image").style.border = "2px solid black"
          document.getElementById("image").style.padding = "5px"
          document.getElementById("image").style.margin = "5px"
          document.getElementById("image").style.borderRadius = "5px"
          document.getElementById("image").style.color = "black"
          document.getElementById("image").style.backgroundColor = "grey"
          
         
         console.log(data);
         })
      .catch((error) => console.log("error occurred", error))
      .finally(() => {
         myform.reset()
      })



})

