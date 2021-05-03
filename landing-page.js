var menuList = document.getElementById("menuList");

        menuList.style.maxHeight  = "0px";
        function togglemenu()
        {
            if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "150px";
            }
            else
            {
                menuList.style.maxHeight = "0px";
            }
        }

        function updateTimer() {
  future = Date.parse("May 23, 2021 11:30:00");
  now = new Date();
  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;
  var x=":";

  document.getElementById("timer1")
      .innerHTML =
      '<div>' + h + '<span>hrs</span></div>' +
      '<div>' + x+ '<span>&nbsp</span></div>' +
      '<div>' + m + '<span>mins</span></div>' ;

  document.getElementById("timer2")
      .innerHTML =
      '<div>' + d + '<span>Days to go</span></div>' ;

    
}
setInterval('updateTimer()', 1000);