$(document).ready(function(){

  $(document).on("scroll",function(){
    if($(document).scrollTop()>175){
      $("nav").removeClass("large").addClass("small");
    } else{
      $("nav").removeClass("small").addClass("large");
    }
  });



  //Initialize image slider
  $('.cocoen').cocoen();


  //Desktop triangle click
  const popupOpen = document.querySelector('.popupOpen');
  const circle = document.querySelector('circle');
  const image = document.querySelector('.popupOpen image');
  const triangleFullImage = document.querySelectorAll('#triangleSVG > image');
  const materialTriangleTitles = document.querySelectorAll('#materialTriangleTitle > tspan');

  const textDesktop = document.querySelector('#materialTextDesktop');
  const textMobile = document.querySelector('#materialTextMobile');

  let counter = 0;
  popupOpen.addEventListener('click', function(e){
    switch (counter) {
      case 0:
        counter++;
        setTriangleTitlesLyocell(materialTriangleTitles);
        setTextLyocell(textDesktop, textMobile);
        fullLyocellBackground(triangleFullImage);
        imageCross(image);
        moveIconTop(circle, image, popupOpen);
      break;
      case 1: /*RESET TRIANGLE*/
        counter++;
        imagePlus(image);
        clearTriangleTitles(materialTriangleTitles);
        setTextDefault(textDesktop, textMobile);
        restoreTriangleBackground(triangleFullImage);
        moveIconLeft(circle, image, popupOpen);
      break;
      case 2:
        counter++;
        setTriangleTitlesPet(materialTriangleTitles);
        setTextPet(textDesktop, textMobile);
        fullPetBackground(triangleFullImage);
        imageCross(image);
        moveIconTop(circle, image, popupOpen);
      break;
      case 3: /*RESET TRIANGLE*/
        counter++;
        imagePlus(image);
        clearTriangleTitles(materialTriangleTitles);
        setTextDefault(textDesktop, textMobile);
        restoreTriangleBackground(triangleFullImage);
        moveIconRight(circle, image, popupOpen);
      break;
      case 4:
        counter++;
        setTriangleTitlesCotton(materialTriangleTitles);
        setTextCotton(textDesktop, textMobile);
        fullCottonBackground(triangleFullImage);
        imageCross(image);
        moveIconTop(circle, image, popupOpen);
      break;
      case 5: /*RESET TRIANGLE*/
        counter = 0;
        imagePlus(image);
        clearTriangleTitles(materialTriangleTitles);
        setTextDefault(textDesktop, textMobile);
        restoreTriangleBackground(triangleFullImage);
        moveIconTop(circle, image, popupOpen);
      break;
      default:
        console.error('counter out of bounds');
    }


  });






  const popupCloseButtons = document.querySelectorAll('.popupClose');
  popupCloseButtons.forEach(function(popupClose){
    popupClose.addEventListener('click', function (e) {
      text.innerHTML = 'Modeindustrin är både snårig och smutsig innan plagget hänger på galgen. Under tillverkningsprocessen används det ofta mycket kemikalier, olja och stora mängder vatten som förorenar miljön och försämrar hälsan hos människor som bor runtom industrierna.<br><br>Du kan enkelt byta ut dessa material till mer miljövänliga alternativ. Kläder som på riktigt är bra för dig och vår miljö!';
    });
  });



  //Triangle hover
  //Top
  // $('#triangleTop').click(function(){
  //   $(this).closest('.trianglePage').removeClass('topHover rightHover leftHover');
  //   $(this).closest('.trianglePage').addClass('topHover');
  // });
  // //Left
  // $('#triangleLeft').click(function () {
  //   $(this).closest('.trianglePage').removeClass('topHover rightHover leftHover');
  //   $(this).closest('.trianglePage').addClass('leftHover');
  // });
  // //Right
  // $('#triangleRight').click(function () {
  //   $(this).closest('.trianglePage').removeClass('topHover rightHover leftHover');
  //   $(this).closest('.trianglePage').addClass('rightHover');
  // });



});
