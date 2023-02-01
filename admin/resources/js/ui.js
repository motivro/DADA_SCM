
$(document).ready(function(){
    
    //사이드메뉴 추가
    gitHubTgMenu();
    if(location.href.indexOf('github') != -1){
        githubUi.ini();
    }
    searchCont.init();

    // 검색창 단순 이벤트 
    $('.btn_search_open').click(function(){
        if($(this).children().hasClass('down')){
            $(this).children().removeClass('down');
            $(this).closest('.contents_box').addClass('open');
        } else {
            $(this).closest('.contents_box').removeClass('open');
            $(this).children().addClass('down');
        }
    });

    $('.testAc').click(function(){
        console.log(123)
        
    });

});

searchCont = {
    init: () => {
        // console.log(123)
    },

    
}


gitHubTgMenu = () => {
    var locationOrigin = location.origin;
    var serverSta = location.href.indexOf('github') != -1 ? '/DADA_SCM/admin/html/' : '/admin/html/';
    var pageRoute = location.origin + serverSta;
    var depth2 = location.pathname.replace(serverSta, '').split('.')[0];
    var depth1 = depth2.substr(0, 9);
    var sideMenuHtml = '';
    sideMenuHtml += '<ul class="nav_list motiv_acc">';
    $.each(PCADME, (index, item) => {
        var numBer = 0;
        $.each( item, (s_index, s_item) => {
            if(numBer == 0){
                numBer++;
                sideMenuHtml += '<li class="nav_item" menuname="' + s_index + '" childmenu="'+Object.keys(item).length+'">';
                console.log(s_index, s_item)
                if(s_index == 'PCADME001'){
                    sideMenuHtml += '   <i class="icon_nav_menu testAc"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><g id="vuesax_linear_3d-square" data-name="vuesax/linear/3d-square" transform="translate(-300 -252)"><g id="_3d-square" data-name="3d-square" transform="translate(300 252)"><path id="Vector" d="M12.5,19.984H6.732c-2.672,0-4.483-.566-5.7-1.782S-.75,15.174-.75,12.5V6.732c0-2.672.566-4.483,1.782-5.7S4.059-.75,6.732-.75H12.5c2.672,0,4.483.566,5.7,1.782s1.782,3.027,1.782,5.7V12.5c0,2.672-.566,4.483-1.782,5.7S15.174,19.984,12.5,19.984ZM6.732.75c-2.248,0-3.722.427-4.639,1.343S.75,4.483.75,6.732V12.5c0,2.248.427,3.722,1.343,4.639s2.39,1.343,4.639,1.343H12.5c2.248,0,3.722-.427,4.639-1.343s1.343-2.39,1.343-4.639V6.732c0-2.248-.427-3.722-1.343-4.639S14.75.75,12.5.75Z" transform="translate(1.383 1.383)" fill="#fff"/><g id="Group" transform="translate(5.72 5.497)"><g id="Group-2" data-name="Group" transform="translate(0.422 2.992)"><path id="Vector-2" data-name="Vector" d="M4.858,3.564a.749.749,0,0,1-.376-.1L-.376.649A.75.75,0,0,1-.649-.376.75.75,0,0,1,.376-.649l4.482,2.6L9.3-.63a.75.75,0,1,1,.752,1.3l-4.822,2.8A.75.75,0,0,1,4.858,3.564Z" fill="#fff"/><path id="Vector-3" data-name="Vector" d="M0,5.746A.75.75,0,0,1-.75,5V0A.75.75,0,0,1,0-.75.75.75,0,0,1,.75,0V5A.75.75,0,0,1,0,5.746Z" transform="translate(4.858 2.805)" fill="#fff"/></g><path id="Vector-4" data-name="Vector" d="M5.289-.75h0a3.158,3.158,0,0,1,1.5.353L9.724,1.236a3.305,3.305,0,0,1,1.6,2.709V7.062a3.371,3.371,0,0,1-1.6,2.709L6.79,11.4a3.177,3.177,0,0,1-1.509.356,3.133,3.133,0,0,1-1.5-.357L.845,9.771A3.305,3.305,0,0,1-.75,7.062V3.954a3.371,3.371,0,0,1,1.6-2.709l2.93-1.63A3.1,3.1,0,0,1,5.289-.75ZM5.281,10.258a1.715,1.715,0,0,0,.783-.168L8.995,8.46a1.88,1.88,0,0,0,.825-1.4V3.945A1.835,1.835,0,0,0,9,2.55L6.061.916A1.7,1.7,0,0,0,5.289.75h0a1.641,1.641,0,0,0-.773.17l-.009,0L1.575,2.556a1.88,1.88,0,0,0-.825,1.4V7.062a1.835,1.835,0,0,0,.82,1.4l2.938,1.634A1.675,1.675,0,0,0,5.281,10.258Z" transform="translate(0 0)" fill="#fff"/></g><path id="Vector-5" data-name="Vector" d="M0,0H22V22H0Z" fill="none" opacity="0"/></g></g></svg></i>';
                } else {
                    sideMenuHtml += '   <i class="icon_nav_menu"></i>';
                }

                sideMenuHtml += '   <div class="nav_menu_wrap">';
                sideMenuHtml += '   <div class="nav_menu">' + s_item + '</div>';
                sideMenuHtml += '   <ul class="submenu">';
            } else {
                sideMenuHtml += '<li class="sub_item" menuname="' + s_index + '"><a href="' + pageRoute + s_index + '.html">' + s_item + '</a></li>';
            }
        })
        sideMenuHtml += '</ul>';
        sideMenuHtml += '</div>';
        sideMenuHtml += '</li>';
    })
    sideMenuHtml += '</ul>';
    $('.lnb_menu .motiv_acc').remove();
    $('.lnb_menu').append(sideMenuHtml);
    
    var dp2ChilH = $('li.nav_item[menuname='+depth1+']').children('.nav_menu_wrap').children('.submenu').children('li').eq(0).outerHeight(true);
    if(dp2ChilH == undefined){
        dp2ChilH = $('li.nav_item').children('.nav_menu_wrap').children('.submenu').children('li').eq(0).outerHeight(true);
    }

    openMenu(depth1, depth2, dp2ChilH);
    $('.nav_item').click(function(){
        if($(this).find('.icon_nav_menu').hasClass('testAc')) return
        var dp2ChilHSta = $(this).attr('childmenu') * dp2ChilH;
        //dp2ChilH
        if($(this).hasClass('open')){
            $(this).removeClass('open').children('.nav_menu_wrap').children('.submenu').removeAttr('style');
        } else {
            $(this).addClass('open').children('.nav_menu_wrap').children('.submenu').css('max-height', dp2ChilHSta);
        }
    });
}

openMenu = (depth1, depth2, dp2ChilH) => {
    var openTg = $('li.nav_item[menuname='+depth1+']');
    var dp2ChilHSta = openTg.attr('childmenu') * dp2ChilH;
    openTg.addClass('open').children('.nav_menu_wrap').children('.submenu').css('max-height', dp2ChilHSta).children('.sub_item[menuname='+depth2+']').addClass('active');
}

var githubUi = {
    ini: () => {
        console.log('github');
    },
}

var PCADME = [
    {
        PCADME001: '상품관리',
        PCADME001001: '상품목록',
        PCADME001002: '일괄등록',
    },
    {
        PCADME002: '다다딜관리',
        PCADME002001: '상품관리',
        PCADME002002: '판매요청',
        PCADME002003: '판매현황',
        PCADME002004: '판매종료',
    },
    {
        PCADME003: '지정판매관리',
        PCADME003001: '지정판매자 관리',
    },
    {
        PCADME004: '판매상품관리',
        PCADME004001: '전체상품목록',
        PCADME004002: '소싱일반상품',
        PCADME004003: '다다딜상품',
        PCADME004004: '지정판매자상품',
        PCADME004005: '쇼핑몰연계상품',
    },
    {
        PCADME005: '강제종료관리',
        PCADME005001: '강제종료상품관리',
    },
    {
        PCADME006: '주문관리',
        PCADME006001: '주문조회',
        PCADME006002: '미결제확인',
        PCADME006003: '발주확인/발송',
        PCADME006004: '배송현황',
        PCADME006005: '구매확정내역조회',
        PCADME006006: '취소관리',
        PCADME006007: '반품관리',
        PCADME006008: '교환관리',
    },
    {
        PCADME007: '정산관리',
        PCADME007001: '정산내역조회',
        PCADME007002: '정산지급현황',
        PCADME007003: '매출증빙내용',
    },
    // {
    //     PCADME008: '고객센터',
    //     PCADME008001: '고객센터',
    // },
    {
        PCADME009: '통계',
        PCADME009001: '통계요약',
        PCADME009002: '매출통계',
        PCADME009003: '결제수단통계',
        PCADME009004: '상품매출통계',
        PCADME009005: '판매자판매통계',
        PCADME009006: 'SCM플랫폼리포트',
    },
    
    {
        PCADME010: '회원관리',
        PCADME010001: '회원현황',
        // PCADME010002: '패널티관리',
        PCADME010003: '휴면회원관리',
        PCADME010004: '탈퇴회원관리',
    },
    {
        PCADME011: '고객센터',
        PCADME011001: '문의사항관리',
        PCADME011002: '공지사항관리',
    },
    {
        PCADME012: '기본정보관리',
        PCADME012001: '회사정보관리',
        PCADME012002: '약관/개인/금융관리',
        PCADME012003: '운영자계정관리',
        PCADME012004: '수수료설정',
        PCADME012005: '소싱진열관리',
    },
    {
        PCADME013: '쇼핑몰관리',
        PCADME013001: '상품카테고리관리',
        PCADME013002: '주소지관리',
        PCADME013003: '금칙단어관리',
        PCADME013004: '통합쇼핑몰',
        PCADME013005: '로컬상가관리'
    }
]

navToggle = () => {
    var clickTarget = $('#btnNavbar');
    var wrap = $('body .wrap');
    $(clickTarget).click(function(){
        if($(wrap).hasClass('nav_open')){
            $(wrap).removeClass('nav_open');
            $(this).removeClass('open');
        }else{
            $(wrap).addClass('nav_open');
            $(this).addClass('open');
        }
    });
}


/* 셀렉트 박스 */
var selectUi = {
    class : 'select_wrap',
    seData : [],
    init :() => {
        $.each( $('.'+selectUi.class+''), (index, item) => {
            var seObjData = new Object();
            seObjData.optData = new Array();
            seObjData.seNum = index;
            seObjData.actNum = '';
            seObjData.actVal = '';
            seObjData.actSta = false;
            var seTarget = $('.'+selectUi.class+'').eq(index).children('select');
            $.each( seTarget.children("option"), (seIndex, seItem) => {
                if(seTarget.children("option").eq(seIndex).attr('selected') != undefined){
                    seObjData.actSta = true;
                    seObjData.actNum = seIndex;
                    seObjData.actVal = seItem.text;
                }
                seObjData.optData.push(seItem.text);
            });
            selectUi.seData.push(seObjData);
        })
        selectUi.customSelect();
    },

    customSelect: () => {
        $.each( selectUi.seData, (index, item) => {
            var selectHtml = '';
            var selectTname = item.actVal ? item.actVal : item.optData[0];
            selectHtml+= '<div class="select_box" onclick="selectUi.boxOpen($(this))">';
            selectHtml+= '  <div class="select_name">'+selectTname+'</div>';
            selectHtml+= '  <div class="opt_list">';
            $.each( item.optData, (seindex, seitem) => {
                selectHtml+= '<div class="opt_item" optnum="'+seindex+'" onclick="selectUi.optionClick($(this))">'+seitem+'</div>';
            });
            selectHtml+= '  </div>';
            selectHtml+= '</div>';
            $('.'+selectUi.class+'').eq(item.seNum).append(selectHtml);
        });
    },

    boxOpen : (obj) =>{
        if(!obj.hasClass('active')) $('.select_box.active').removeClass('active');
        if(obj.hasClass('active')){
            obj.removeClass('active');
        }else{
            obj.addClass('active');
        }
    },

    optionClick : (obj) =>{
        obj.parent().parent().children('.select_name').text(obj.text());
        obj.closest('.select_wrap').children('select').children("option").eq(obj.attr('optnum')).prop('selected', 'selected');
    },
}

/* 공용 알럿 */
var dadaAlert = {
    open: (id, text) => {
        var target = dadaAlert.targetCk(id);
        $(target+' .dada_cont').html(text);

        $(target).show().css({
            'visibility': 'hidden',
        });

        var dadaAlertOpen = setTimeout( function() {
            $(target).show().css({
                'visibility': 'visible',
                'opacity': '1',
            });
            clearTimeout(dadaAlertOpen);
        }, 100);

        //닫기 이벤트 활성화
        $(target+' .dada_close_btn').click( () => { dadaAlert.close(id); });
    },

    close: (id) => {
        var target = dadaAlert.targetCk(id);
        $(target).css({
            'opacity': '0',
        });
        var dadaAlertClose = setTimeout( function() {
            $(target).hide();
            clearTimeout(dadaAlertClose);
        }, 100);
    },

    targetCk: (id) => {
        return id == undefined ? '.dada_alt_wrap': '#'+id+'.dada_alt_wrap';
    }
}

/* 타이머 */
startTimer = (time, obj) => {
    var hour, min, sec;
    var timer = setInterval(function(){
        time--; // 1초마다 감소
        
        //time가 0이되면 멈추게 합니다.
        if(time <= 0) clearInterval(timer);
            
        min = Math.floor(time/60);
        hour = Math.floor(min/60);
        sec = time%60;
        min = min%60;
        var th = hour;
        var tm = min;
        var ts = sec;
        
        // 한자리일 경우 처리
        if(th < 10) th = "0" + hour;
        if(tm < 10) tm = "0" + min;
        if(ts < 10) ts = "0" + sec;

        // 함수 호출 당시 받은 object의 html 교체
        $('#'+obj).html(tm + ":" + ts);
        // console.log(tm + ":" + ts)
    } , 1000);
}

/* 토스트 메세지 */
toast = (string, location) => {
    /* 토스트메세지 바디를 생성합니다. */
    if($('.dada_toast').length == 0 ) $('body').append('<div class="dada_toast"></div>');

    if(location != undefined){
        $('.dada_toast').addClass('center');
    }
    setTimeout( function() {
        const toast = $('.dada_toast');
        toast.addClass('reveal');
        toast.html(string);
        var toasts = setTimeout( function() {
            toast.removeClass('reveal');
            clearTimeout(toasts);
        }, 1500);
    }, 10);
}

listToast = (obj) => {
    /* 토스트메세지 바디를 생성합니다. */
    $(obj).addClass('close');
    if($(obj).closest('.thumb').children('.dada_toast').length == 0) $(obj).closest('.thumb').append('<div class="dada_toast"><div class="loading_spinner"></div>담는 중 입니다.</div>');
  
    setTimeout( function() {
        const toast = $('.dada_toast');
        toast.addClass('reveal');
        var toasts = setTimeout( function() {
            $(obj).removeClass('close');
            toast.removeClass('reveal');
            clearTimeout(toasts);
        }, 1500);
    }, 10);
}

/* 복사 기능 */
clip = (obj) => {
    var url = '';    // <a>태그에서 호출한 함수인 clip 생성
    var textarea = document.createElement("textarea");  
    //url 변수 생성 후, textarea라는 변수에 textarea의 요소를 생성
    document.body.appendChild(textarea); //</body> 바로 위에 textarea를 추가(임시 공간이라 위치는 상관 없음)
    url = obj.parent().children('a').attr('href');  //url에는 현재 주소값을 넣어줌
    textarea.value = url;  // textarea 값에 url를 넣어줌
    textarea.select();  //textarea를 설정
    document.execCommand("copy");   // 복사
    document.body.removeChild(textarea); //extarea 요소를 없애줌
    alert("URL이 복사되었습니다.")  // 알림창
}

/* 텍스트 실시간 체크 */
textKeyup = () => {
    
}

