document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.getElementById("menu-button");
    var submenu = document.getElementById("submenu");

    function checkScreenWidth() {
        if (window.innerWidth <= 1024) {
            submenu.classList.remove("on");
            menuButton.classList.remove("on");
        } else {
            submenu.classList.add("on");
            menuButton.classList.add("on");
        }
    }

    menuButton.addEventListener("click", function () {
        if (window.innerWidth <= 1024) {
            if (submenu.classList.contains("on")) {
                submenu.classList.remove("on");
                menuButton.classList.remove("on");
            } else {
                submenu.classList.add("on");
                menuButton.classList.add("on");
            }
        }
    });

    window.addEventListener("resize", checkScreenWidth);
    checkScreenWidth(); // 페이지 로드 시 화면 크기 확인
});




// 페이지 로드 시 초기 탭 활성화
function openTab(tabId) {
    // 모든 탭 내용 숨김
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach((content) => {
      content.style.display = 'none';
    });
  
    // 모든 탭 버튼에서 'active' 클래스 제거
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach((button) => {
      button.classList.remove('active');
    });
  
    // 선택한 탭 내용 보이기
    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';
  
    // 선택한 탭 버튼에 'active' 클래스 추가
    const selectedButton = document.querySelector(`[onclick="openTab('${tabId}')"]`);
    selectedButton.classList.add('active');
  }
  