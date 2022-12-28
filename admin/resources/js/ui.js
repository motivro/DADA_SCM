
$(document).ready(function(){
    
    //사이드메뉴 추가
    gitHubTgMenu();

    if(location.href.indexOf('github') != -1){
        githubUi.ini();
    }
});

gitHubTgMenu = () => {
    var locationOrigin = location.origin;
    var serverSta = location.href.indexOf('github') != -1 ? '/DADA_SCM/admin/html/' : '/html/';
    var pageRoute = location.origin + serverSta;
    var depth2 = location.pathname.replace('/html/', '').split('.')[0];
    var depth1 = depth2.substr(0, 9);
    

    var sideMenuHtml = '';
    sideMenuHtml += '<ul class="nav_list motiv_acc">';
    $.each(PCADME, (index, item) => {
        
        var numBer = 0;
        $.each( item, (s_index, s_item) => {
            if(numBer == 0){
                numBer++;
                sideMenuHtml += '<li class="nav_item" menuname="' + s_index + '" childMenu="'+Object.keys(item).length+'">';
                sideMenuHtml += '   <div class="nav_menu">' + s_item + '</div>';
                sideMenuHtml += '   <ul class="submenu">';
            } else {
                sideMenuHtml += '<li class="sub_item" menuname="' + s_index + '"><a href="' + pageRoute + s_index + '.html">' + s_item + '</a></li>';
            }
        })
        sideMenuHtml += '</ul>';
        sideMenuHtml += '</li>';
    })
    sideMenuHtml += '</ul>';
    $('.lnb_menu .motiv_acc').remove();
    $('.lnb_menu').append(sideMenuHtml);
    var dp2ChilH = $('li.nav_item[menuname='+depth1+']').children('.submenu').children('li').eq(1).outerHeight(true);
    console.log(dp2ChilH)
    openMenu(depth1, depth2, dp2ChilH);
    $('.nav_item').click(function(){
        var dp2ChilHSta = $(this).attr('childmenu') * dp2ChilH;
        //dp2ChilH
        if($(this).hasClass('open')){
            $(this).removeClass('open').children('.submenu').attrStyle('css');
        } else {
            $(this).addClass('open').children('.submenu').css('max-height', dp2ChilHSta);
        }
    })

    console.log( depth1, depth2 );
}

openMenu = (depth1, depth2, dp2ChilH) => {
    var openTg = $('li.nav_item[menuname='+depth1+']');
    
    var dp2ChilHSta = openTg.attr('childmenu') * dp2ChilH;
    console.log(dp2ChilHSta)
    openTg.addClass('open').children('.submenu').css('max-height', dp2ChilHSta).children('.sub_item[menuname='+depth2+']').addClass('active');
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
        PCADME003001: '상품목록',
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
    {
        PCADME008: '고객센터',
        PCADME008001: '고객센터',
    },
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
        PCADME010002: '패널티관리',
        PCADME010003: '휴면회원관리',
        PCADME010004: '탈퇴회원',
    },
    {
        PCADME011: '고객센터관리',
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
