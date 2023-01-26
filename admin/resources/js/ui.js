
$(document).ready(function(){
    
    //사이드메뉴 추가
    gitHubTgMenu();
    if(location.href.indexOf('github') != -1){
        githubUi.ini();
    }
    
});

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
                sideMenuHtml += '   <i class="icon_nav_menu"></i>';

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
    console.log(dp2ChilH)

    if(dp2ChilH == undefined){
        dp2ChilH = $('li.nav_item').children('.nav_menu_wrap').children('.submenu').children('li').eq(0).outerHeight(true);
    }

    openMenu(depth1, depth2, dp2ChilH);
    $('.nav_item').click(function(){
        
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
        PCADME011: '고객센터',
        PCADME011001: '문의사항관리',
        PCADME011002: '공지사항관리',
    },
    {
        PCADME010: '회원관리',
        PCADME010001: '회원현황',
        // PCADME010002: '패널티관리',
        PCADME010003: '휴면회원관리',
        PCADME010004: '탈퇴회원관리',
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

        setTimeout( function() {
            $(target).show().css({
                'visibility': 'visible',
                'opacity': '1',
            });
            clearTimeout(toast);
        }, 100);

        //닫기 이벤트 활성화
        $(target+' .dada_close_btn').click( () => { dadaAlert.close(id); });
    },

    close: (id) => {
        var target = dadaAlert.targetCk(id);
        $(target).css({
            'opacity': '0',
        });
        setTimeout( function() {
            $(target).hide()
            clearTimeout(toast);
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
        setTimeout( function() {
            toast.removeClass('reveal');
            clearTimeout(toast);
        }, 1500);
    }, 10);

    
}
