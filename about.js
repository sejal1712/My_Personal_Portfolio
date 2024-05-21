document.addEventListener('DOMContentLoaded', () => {
  const aboutSections = document.querySelectorAll('.about-section');

  aboutSections.forEach(section => {
    const header = section.querySelector('h2');
    header.addEventListener('click', () => {
      const content = section.querySelector('.content');
      const toggle = section.querySelector('.toggle');
      const isActive = section.classList.contains('active');

      if (isActive) {
        section.classList.remove('active');
        toggle.classList.remove('open');
      } else {
        aboutSections.forEach(sec => {
          sec.classList.remove('active');
          sec.querySelector('.toggle').classList.remove('open');
        });
        section.classList.add('active');
        toggle.classList.add('open');
      }
    });
  });
});

var aText = new Array(
  "I'm always expanding my skillset.", 
  "Feel free to contact me to discuss your specific project needs!"
  );
  var iSpeed = 50; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 5; // start scrolling up at this many lines
   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
   
  function typewriter()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("typedtext");
   
   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }
  
  
  typewriter();