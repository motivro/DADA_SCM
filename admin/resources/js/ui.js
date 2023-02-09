
$(document).ready(function(){
    
    //사이드메뉴
    dadaLnbMenu();
  
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

    $('.add_large_cate').click(function(){
        sdfun = '<li><div class="cateTree_folder"><span class="cateTree_del" onclick="cateDynamic.cateDel($(this))"></span><span class="cateTree_cont"><a href="#none">[<span class="cate_code">분류코드</span>]<span class="cate_name">대분류</span></a></span><span class="cateTree_add" onclick="cateDynamic.cateAdd($(this))"></span></div></li>';
        $('.cateTree_wrap').append(sdfun)
    });
});

//레이어팝업 아코디언
var dtlTbl = {
    init: () => {
        if($('.dtl_tbl').length > 0){
            dtlTbl.checked();
        }
    },

    checked: () => {
        var dtl_tbl = $('.dtl_tbl');
        $.each(dtl_tbl, function(index, obj){
            dtl_tbl.eq(index).find('.tbl_wrap').attr('outer_h', dtl_tbl.eq(index).find('.motiv_tbl').outerHeight());
        });
        dtlTbl.event();
    },

    event: () => {
        $('.motiv_normal_tbl .more_info').click(function(){
            var more_dtl_tbl = $(this).closest('tr').next('.dtl_tbl');
            var acc_height = $(this).closest('tr').next('.dtl_tbl').find('.tbl_wrap').attr('outer_h');
            if($(this).closest('tr').next('.dtl_tbl').hasClass('active')){
                more_dtl_tbl.removeClass('active');
                $(this).closest('tr').next('.dtl_tbl').find('.tbl_wrap').css('height', 0);
            } else {
                more_dtl_tbl.addClass('active');
                $(this).closest('tr').next('.dtl_tbl').find('.tbl_wrap').css('height', acc_height);
            }
        });
    },
}

//탭 기능
var tab_area = {
    openVal: false,
    
    init: () => {
        if($('.tab_area').length > 0){
            tab_area.checked();
        }
    },

    checked: () => {
        var tab_item = $('.tab_area .tab_box .tab_item');
        $.each(tab_item, function(index, obj){
            if(tab_item.eq(index).hasClass('active')){
                tab_area.openVal = true;
                return;
            }
        });
        if(!tab_area.openVal){
            tab_item.eq(0).addClass('active');
            $('.tab_area .tab_cont').eq(0).addClass('active');
        }
        tab_area.event();
    },

    event: () => {
        $('.layer_body .tab_item').click(function(){
            var target = $(this).attr('tab_name');
            $('.layer_body .tab_item').removeClass('active');
            $(this).addClass('active');
            $('.layer_body .tab_cont').removeClass('active');
            $('#'+target).addClass('active');
        });
    },
}

// 공통 알럿 및 레이어팝업
var mtvLp = {
    lnbw: $('#lnb').width(),
    bw: window.innerWidth,
    bh: window.innerHeight,
    prevActiveName: '',
    nowActiveName: '',
    normal: .5,
    large: .7,
    full: .9,

    init: () => {
        mtvLp.lnbw = $('#lnb').width();
        var mtv_max_h = '';
        var cont_size = '';
        $.each( $('.motiv_layer'), function(index, obj){
            var index_obj = $('.motiv_layer').eq(index);
            mtv_max_h = ( mtvLp.bh - $('#header').height() ) * .8;
            cont_size = index_obj.attr('cont_size') != undefined ? mtvLp[index_obj.attr('cont_size')] : mtvLp.normal;
            var marginTop = (index_obj.height()/2)-($('#header').height()/2);
            var cont_width = index_obj.attr('cont_type') != undefined ? 500 : (mtvLp.bw - mtvLp.lnbw) * cont_size;
            lp_width = ( cont_width / 2 ) - (mtvLp.lnbw/2);
            
            if($('.motiv_layer_bg').length == 0) $('body').append('<div class="motiv_layer_bg" style="visibility:hidden" style="display:none"></div>');
            index_obj.css({
                'display': 'none',
                'visibility': 'hidden',
                'margin-top': -marginTop,
                'margin-left': -lp_width,
                'width': cont_width,
            });
            
            if(index_obj.height() > mtv_max_h ){
                marginTop = ((mtvLp.bh * .8)/2)-($('#header').height()/2);
                index_obj.css({
                    'margin-top': -marginTop,
                    'height': mtvLp.bh * .8,
                });
                index_obj.find('.layer_body').css({
                    'height': (mtvLp.bh * .8) - $('.layer_head').height(),
                    'overflow-y':'auto'
                });
            };
            
            index_obj.attr({
                'cont_w': index_obj.width(),
                'cont_h': index_obj.height(),
                'm_top': index_obj.height(),
                'm_left': index_obj.height(),
            })
        });

        $('.ham_menu').click(function(){
            var mtvLnbOpen = setTimeout( function() {
                mtvLp.init();
                clearTimeout(mtvLnbOpen);
            }, 500);
        });
    },

    open: (id) => {
        mtvLp.prevActiveName = mtvLp.nowActiveName;
        if(mtvLp.prevActiveName != ''){
            $('#'+id).attr('prep_name', mtvLp.prevActiveName);
        } else {
            $('.motiv_layer_bg').css({'display': 'block','visibility': 'visible'});
        }
        mtvLp.nowActiveName = id;
        $('#'+id).show().css({'visibility': 'hidden'});
        $('div').removeClass('lp_active');
        $('#'+id).addClass('lp_active');
        var mtvLpOpen = setTimeout( function() {
            $('.motiv_layer_bg').css({'opacity': '1'});
            $('#'+id).show().css({
                'visibility': 'visible',
                'opacity': '1',
            });
            clearTimeout(mtvLpOpen);
        }, 100);
    },

    close: (id) => {
        $('#'+id).css({'display': 'none','visibility': 'hidden'});
        if(mtvLp.prevActiveName == ''){
            mtvLp.nowActiveName = '';
            $('.motiv_layer_bg').css({'opacity': '0'});
            var mtvLpClose = setTimeout( function() {
                $('.motiv_layer_bg').css({'visibility': 'hidden'});
                clearTimeout(mtvLpClose);
            }, 301);
        } else {
            $('#'+mtvLp.nowActiveName).attr('prep_name', '');
            mtvLp.nowActiveName = mtvLp.prevActiveName;
            if( $('#'+mtvLp.prevActiveName).attr('prep_name') != undefined){
                mtvLp.prevActiveName = $('#'+mtvLp.prevActiveName).attr('prep_name');
            } else {
                mtvLp.prevActiveName = '';
            }
            $('#'+mtvLp.nowActiveName).addClass('lp_active');
        }
        $('#'+id).removeClass('lp_active');
    },
}

cateDynamic = {
    init: () => {
        // console.log(123)
    },
    cateAdd: (obj) => {
        cateAddHtml = '<li><div class="cateTree_folder"><span class="cateTree_del" onclick="cateDynamic.cateDel($(this))"></span><span class="cateTree_cont"><a href="#none">[<span class="cate_code">분류코드</span>]<span class="cate_name">대분류</span></a></span><span class="cateTree_add" onclick="cateDynamic.cateAdd($(this))"></span></div></li>';

        if(obj.closest('li').children('ul').length == 0){
            obj.closest('li').append('<ul></ul>');
        } else {

        }
        obj.closest('li').children('ul').append(cateAddHtml);
    },

    cateDel: (obj) => {
        obj.closest('li').remove();
        console.log(obj)
    },
}

dadaLnbMenu = () => {
    // lnb가 닫혔을 때와 열렸을 때를 애니메이션 적용을 위해서 필요한 구문입니다.
    // 프로필박스 높이를 주기위한 변수
    var profileBoxHeight = $('.profile_info .member_info').outerHeight() + $('.profile_info .sell_info').outerHeight(true) + $('.profile_info .btn_wrap').outerHeight(true);
    
    // 닫혔을 때 인지를 위한 쿼리문
    if($('#lnb').hasClass('closeLnb')){
        $('#lnb, .ham_menu, .wrap #container').addClass('open');
        $('.nav_item.open').find('.submenu').css('height', 0);
    }

    // 순차적으로 진행하기 위한 쿼리문
    // 깜밖이는 효과 방지
    Promise.resolve()
    .then(() => {
        dadaLnbMenuSta1(profileBoxHeight);
    })
    .then(() => {
        if($('#lnb').hasClass('closeLnb')){
            dadaLnbMenuSta2();
        }
    })
    .then(() => {
        $('.wrap').addClass('complete');
    })

}

dadaLnbMenuSta1 = (profileBoxHeight) => {
    var lnb_menu_h = window.innerHeight - $('#header').height();// 브라우져의 높이와 헤더 높이를 뺀 값을 $lnb의 높이로 지정합니다.
    var submenuHeight = 0;//오픈되어 있는 서브 메뉴의 높이를 넣는 변수 입니다.

    $('.lnb_inner').css('height', lnb_menu_h);
    $('.profile_info').css('height', $('.profile_info').height());// 메뉴를 줄였을때 효과를 주기 위해 추가되었습니다.

    //메뉴에서 active 값을 찾습니다.
    $.each($('.nav_list > li'), (index, item) => {
        //서브메뉴중 하나의 대상의 마진 높이를 포함한 높이값을 찾고 서브메뉴 갯수를 곱합니다.
        submenuHeight = $('.nav_list > li').eq(index).find('.submenu > li').outerHeight(true) * $('.nav_list > li').eq(index).find('.submenu > li').length;

        if($('.nav_list > li').eq(index).hasClass('active')){
            $('.nav_list > li').eq(index).addClass('open');
            //서브메뉴중 하나의 대상의 마진 높이를 포함한 높이값을 찾고 서브메뉴 갯수를 곱합니다.
            $('.nav_list > li').eq(index).find('.submenu').css({'height': submenuHeight, 'max-height': submenuHeight});
        }
        $('.nav_list > li').eq(index).find('.submenu').attr('ulh', submenuHeight);
    })

    //메뉴를 아코디언
    $('.nav_item').click(function(){
        if($(this).hasClass('open')){
            $(this).removeClass('open').find('.submenu').removeAttr('style');
        } else {
            var ulh = $(this).find('.submenu').attr('ulh')
            $(this).addClass('open').find('.submenu').css({'height':ulh+'px', 'max-height': ulh+'px'});
        }
    });

    // 프로필박스의 높이값을 추가하는 구문
    $('.profile_info').css({
        'height' : profileBoxHeight,
        'transition' : '.5s',
    });

    //#lnb를 줄이고 늘리는 이벤트
    $('.ham_menu').click(function(){
        if($('#lnb').hasClass('open')){
            $('#lnb,.ham_menu').removeClass('open');
            $('.nav_item.open').find('.submenu').css('height', submenuHeight);
            $('.wrap #container').removeClass('open');//콘테이너의 padding-left의 값 조정 이벤트 입니다.
        } else {
            $('#lnb,.ham_menu').addClass('open');
            $('.nav_item.open').find('.submenu').css('height', 0);
            $('.wrap #container').addClass('open');
        }
    });

    //#lnb가 줄어든 상태일때만 구동 합니다.
    $('#lnb').hover(function(){
        if(!$(this).hasClass('open')) return;//#lnb에 open 클래스가 없으면 리턴시킵니다.
        $('.nav_item.open').find('.submenu').css('height', submenuHeight);
    }, function() {
        if(!$(this).hasClass('open')) return;
        $('.nav_item.open').find('.submenu').css('height', 0);
    });
}

// lnb를 정상적으로 동작하기위한 구문
dadaLnbMenuSta2 = () => {
    $('#lnb').removeClass('closeLnb');
    $('.nav_item.open').find('.submenu').css('height', 0);
}

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

