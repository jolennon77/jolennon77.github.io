function openTab(event, inform) {
    //변수 선언
    let tabPage, tablinks;
    tabPage = document.getElementsByClassName("tabPage");
    tablinks = document.getElementsByClassName("tablinks");

    //클래스가 tabPage인 요소들 가져와서 숨기기
    for (let i = 0; i < tabPage.length; i++) {
      tabPage[i].style.display = "none";
    } //end of for

    //
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    } //end of for'

    document.getElementById(inform).style.display = "block";
    event.curentarget.className += "active";
  } //end of openTab