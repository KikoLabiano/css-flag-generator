function changeFlag(flag_class){
  let f = document.getElementById("flag");
  f.className='';
  //tr td specifity from .flag class is greater than .bhu-flag class
  if(flag_class!=="bhu-flag"){    
    f.classList.add("flag-clean");
  }
  f.classList.add("flag-border");
  f.classList.add(flag_class);
}
