try{
    let btn = document.querySelector('#cart-submit');
    let breadCrumbs = document.querySelector('')
    let body = document.querySelector('.cart__body');
    if(btn.attributes.getNamedItem('type') === 'button'){
        body.children.forEach(element => {
            
        });
    }   
}
catch(e){
   console.log(e) 
}