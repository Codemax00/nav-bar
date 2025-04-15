a=document.getElementById("spin")
console.log(a)
a.addEventListener('mouseover',function (){
    
    a.classList.add('hover')
    
})
a.addEventListener('mouseout',()=>{
    a.classList.remove('hover-effect')
})
element.addEventListener('mouseover', () => {
    element.style.backgroundColor = 'yellow';
});