// $(document).ready(function(){
 function writePage0(){
    let bodyElem = $('#tab0Content');
    let divElem = $('div');
    bodyElem.after(divElem);
    divElem.css('background-image','url(images/cake-2201881_1920.jpg)');
    divElem.css('background-size','cover');
    divElem.css('background-position','center top');
    divElem.html('<header><h1> When you REALLY need some donuts but a simple store won\'t do.  Come to . . . <br><span> Donut Town <\/span> <\/h1></header>');
    let header = $('header');
    let h1Element = $('h1');
    let spanElement = $('span');
    header.css('position','absolute');
    
    header.css('top','52%');
    
    header.css('left','52%');
    
    header.css('color','blue');
    
    header.css('text-align','center');
    
    header.css('transform', 'translate(-50%, -50%)');
    
    h1Element.css('margin','0');
    
    h1Element.css("font-family","'Indie Flower', cursive");
    
    h1Element.css('font-size','4rem');
    
    spanElement.css('font-size','11rem');
    
  }
   function writePage1(){
    let bodyElem = $('#tab1Content');
    let divElem = $('div');
    bodyElem.append($(divElem));
    divElem.html("ooh ooh");
    divElem.addClass("images");
//     $('<img/>', {
//     id: 'foo',
//     href: 'http://google.com',
//     title: 'Become a Googler',
//     rel: 'external',
//     text: 'Go to Google!'
// }).appendTo(bodyElem);
    // let houseElem = $('div');
    // bodyElem.append(houseElem);
    // houseElem.css('width','20px');
    // houseElem.css('height', '10px');
    // houseElem.css('border','1px solid black');

  }
  function writePage2(){
    let bodyElem = $('#tab2Content');
    let divElem = $('div');
    bodyElem.append($(divElem));
    divElem.html('3rd page');
  }
  function pickPage(number){
    if (number === 0){
      writePage0();
    } else if (number === 1) {
      writePage1();
    } else if (number ===2) {
      writePage2();
    } else {
      alert('no number');
    }
  }
  // var links = new Array();
  // var divs = new Array();
  // var tabCount;
  // console.log(tabCount);
  // var lastTabSelected = -1;
  // console.log("lastTabSelected == "  + lastTabSelected + " ;you should only see this once");
  // var resizeFlag = true;

  // function showTab(selectedTab) {
  //   console.log("inside showtab with a parameter of " + selectedTab);
  //   if (lastTabSelected == -1) {
  //       links = document.getElementsByClassName
  //       ("tablinks");
  //       divs = document.getElementsByClassName("tabs"); 
  //       tabCount = Math.min(links.length, divs.length);
  //       console.log("inside the lastTabsSelected == -1 block");
  //   }
  //   for (var i = 0; i < tabCount; i++) {
  //       console.log("tabCount = " + tabCount);
  //       console.log("selectedTab = " + selectedTab);
  //       console.log("div number " + i + " = " + divs[i]);
  //       if (i == selectedTab) {
  //         console.log("inside IF cuz i= " + i + " and selectedTab= " + selectedTab)
  //         links[i].style.backgroundColor = "pink";
  //         links[i].style.fontWeight = "bold";
  //         links[i].style.padding = "0.3em 0.3em 0.41em 0.3em";
  //         console.log(divs);
  //         divs[i].style.display = "";
  //       } else {
  //         console.log("inside ELSE cuz i= " + i + " and selectedTab= " + selectedTab)
  //         links[i].style.backgroundColor = "lightgray";
  //         links[i].style.fontWeight = "normal";
  //         links[i].style.padding = "0.3em 0.3em 0.3em 0.3em";
  //         divs[i].style.display = "none";
  //       }
  //       if (resizeFlag) {
  //         divs[i].style.height = (window.innerHeight - 60) + "px";
  //         divs[i].style.width = (window.innerWidth - 30) + "px";
  //       }
  //   }
  //   pickPage(selectedTab);
  //   lastTabSelected = selectedTab;
  //   console.log("inside showtab func: lastTabSelected is " + lastTabSelected)
  //   resizeFlag = false;
  
// });