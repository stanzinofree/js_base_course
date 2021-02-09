    var stor = window.localStorage;
    var tog = document.getElementById('toggle');
    var localNum = stor.getItem("number");
    var plus = document.getElementById('plus');
    var minus = document.getElementById('minus');
    var contatore = document.getElementById('contatore');

    if(stor.getItem('toggle')){
      tog.checked=true;
    }
    var number = tog.checked ? parseInt(localNum):0;

    contatore.innerHTML = number;

    plus.onclick = function () {
      number = number + 1;
      contatore.innerHTML = number;
      if (tog.checked) {
        stor.setItem("number", number);
      }
    };

    minus.onclick = function () {
      number = number - 1;
      contatore.innerHTML = number;
      if (tog.checked) {
        stor.setItem("number", number);
      }
    };

    toggle.onclick = function(){
      if (!tog.checked){
        stor.removeItem("toggle");
        stor.removeItem("number");
      } else {
        stor.setItem("toggle",true);
        stor.setItem("number",number);
      }
    };
