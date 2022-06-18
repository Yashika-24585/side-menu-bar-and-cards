let arrow = document.querySelectorAll('.arrow');

arrow.forEach(element=>{
    var a = element.children
    // console.log(a)

for(var child of a){
    child.addEventListener('click', ()=>{
        if (child.className == "fa-solid fa-angle-up") {
                child.classList.replace('fa-angle-up','fa-angle-down')
           let pr =  element.parentNode
           let label = pr.getElementsByTagName('label')
           for(var child1 of label){
            child1.style.display = "none"
           }
    
           
    }
    else{
        child.classList.replace('fa-angle-down','fa-angle-up')  
        let pr =  element.parentNode
           let label = pr.getElementsByTagName('label')
           for(var child1 of label){
            child1.style.display = "block"
           }  
    }})

}})

