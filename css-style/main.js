const selector = document.querySelector('.custom-select');


selector.addEventListener('change',function(e){
    console.log(e.target.value)
})


selector.addEventListener('mousedown',function(e){
    e.preventDefault();
    const select = selector.children[0]
    const dropDown  = document.createElement('ul');
    dropDown.className = 'selector-options';
    
    for(var i=0;i<select.children.length;i++){
        const dropDownOption = document.createElement('li')
        dropDownOption.textContent = select.children[i].textContent;
        const value = select.children[i].value;
        dropDownOption.addEventListener("mousedown",function(e){
            e.stopPropagation();
            select.value =value;
            selector.value = value;
            dropDown.parentNode.removeChild(dropDown);
        })
        dropDown.appendChild(dropDownOption)
    }
    selector.appendChild(dropDown)

})