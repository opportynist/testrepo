(function(){ 
  const openingBtn = document.querySelector('.sidebar__hamburger');
  const closeingBtn = document.querySelector('.sidebar__close');
  const siderbar = document.querySelector('.siderbar');
  
  
  openingBtn.addEventListener("click",function(){
    siderbar.classList.add("siderbar--opened");
  })
  
  closeingBtn.addEventListener("click",function(){
    siderbar.classList.remove("siderbar--opened");
  })

}())


