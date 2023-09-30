submit.addEventListener("click",(e)  =>{
    e.preventDefault();
    
    let titlec = title.value
    let descc = desc.value
    localStorage.setItem("todo", JSON.stringify([titlec,descc]))
    console.log(e)
    todo.innerHTML = `
    <h2>${titlec}</h2>
    <p>${descc}</p>`
    title.value = ""
    desc.value = ""

})


deleteBtn.addEventListener("click",(e) =>{
    e.preventDefault()
     localStorage.removeItem("todo")
     todo.innerHTML =""
});
