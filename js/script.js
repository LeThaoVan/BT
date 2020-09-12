 // MENU
  
function myFunction() {
    var e = document.getElementById("submenu-phone")
    if (e.style.display === "none")
      e.style.display = "block";
    else 
      e.style.display = "none";
  };
  //QUANG CAO
  jQuery(document).ready(function() {
    //Quang cao so 1
    var x = document.getElementById("hideIcon");
  $("#show").click(function(){
      $("#b-quang-cao").show();
      x.style.display = "none";
    });
  $("#hide").click(function(){
        $("#b-quang-cao").hide();
        x.style.display = "block";
    }); 

    //Quang cao so 2
    var y = document.getElementById("hideIcon-1");
  $("#show-1").click(function(){
      $("#b-quang-cao-1").show();
      y.style.display = "none";
    });
  $("#hide-1").click(function(){
        $("#b-quang-cao-1").hide();
        y.style.display = "block";
    }); 

    var v = document.getElementById("hideIcon-2");
  $("#show-2").click(function(){
      $("#b-quang-cao-2").show();
      v.style.display = "none";
    });
  $("#hide-2").click(function(){
        $("#b-quang-cao-2").hide();
        v.style.display = "block";
    }); 
    // Nut bam xem them
    var z = document.getElementById("listBox-1");
    var t = document.getElementById("button-xem-them");
    var l = document.getElementById("button-xem-them-2");
  $("#see-listBox-no1").click(function(){
        z.style.display = "block";
        t.style.display = "none";
        l.style.display = "block";
    });
    var k = document.getElementById("listBox-2");
    var g = document.getElementById("button-xem-them-3");
  $("#see-listBox-no2").click(function(){
        k.style.display = "block";
        l.style.display = "none";
        g.style.display = "block";
    });
});


function kt(element) {
  if (element.value == "") {
    return false
  }
  return true
}
function gui() {
  var yn = document.getElementById("yourName");
  var ye = document.getElementById("yourEmail");
  var ym = document.getElementById("yourMess");
  var s = "Gửi thành công!!!";
  var q = "Vui lòng nhập đầy đủ thông tin";
  if (yn != undefined && ye != undefined && ym != undefined)
  {
      if (kt(yn) == true && kt(ye) == true && kt(ym) == true)
          alert(s);
      else
          alert(q);

  }
      
}
