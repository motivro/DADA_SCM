
//예제 데이터
var tableListData = "<div class='motiv_tbl'><div class='tbl_inner'><div class='tbl_head'><div class='look_head_head'><div class='row_item d_flex'><div class='hd_item' keyname='checkedbox'><div><div class='cus_inp_wrap checkbox_inp'> <label for='tbl_head_0' class='inp_box'> <input type='checkbox' id='tbl_head_0' name='ckb_all'><span class='inp_custom'></span> </label></div></div></div><div class='hd_item' keyname='itemCode'><div>상품코드</div></div><div class='hd_item' keyname='itselfCode'><div>자체코드</div></div></div></div><div class='look_head_box'><div class='look_head_list'><div class='row_item d_flex'><div class='hd_item' keyname='itemName'><div>상품명(옵션수)</div></div><div class='hd_item' keyname='admName'><div>관리명</div></div><div class='hd_item' keyname='salesDivision'><div>판매구분</div></div><div class='hd_item' keyname='display'><div>진열여부</div></div><div class='hd_item' keyname='category'><div>카테고리</div></div><div class='hd_item' keyname='firstStock'><div>최초재고</div></div><div class='hd_item' keyname='containNum'><div>담아간수</div></div><div class='hd_item' keyname='currentInventory'><div>현재고</div></div><div class='hd_item' keyname='supplyPrice'><div>공급가</div></div><div class='hd_item' keyname='offerPrice'><div>판매 제안가</div></div><div class='hd_item' keyname='deliveryCategory'><div>배송구분</div></div><div class='hd_item' keyname='deliveryFee'><div>배송비</div></div><div class='hd_item' keyname='configureShippingCost'><div>배송비 구성</div></div><div class='hd_item' keyname='salesMethod'><div>판매방식</div></div><div class='hd_item' keyname='shippingAttribute'><div>배송속성</div></div><div class='hd_item' keyname='bundledDelivery'><div>묶음배송여부</div></div><div class='hd_item' keyname='extraShippingCost'><div>추가배송비</div></div><div class='hd_item' keyname='brand'><div>브랜드</div></div><div class='hd_item' keyname='manufacturer'><div>제조사</div></div><div class='hd_item' keyname='media'><div>미디어</div></div><div class='hd_item' keyname='views'><div>조회수</div></div><div class='hd_item' keyname='numberOfFavorites'><div>즐겨찾기수</div></div><div class='hd_item' keyname='minimumOrderQuantity'><div>최소주문수량</div></div><div class='hd_item' keyname='maximumOrderQuantity'><div>최대주문수량</div></div><div class='hd_item' keyname='membershipType'><div>회원유형</div></div><div class='hd_item' keyname='admin'><div>관리자</div></div><div class='hd_item' keyname='registrationDate'><div>등록일</div></div><div class='hd_item' keyname='fertilizationDate'><div>수정일</div></div></div></div></div></div><div class='tbl_body'><div class='look_body_head'><div class='row_item d_flex'><div class='hd_item' keyname='checkedbox'><div><div class='cus_inp_wrap checkbox_inp'> <label for='tbl_head_0' class='inp_box'> <input type='checkbox' id='tbl_head_0' name='ckb_all'><span class='inp_custom'></span> </label></div></div></div><div class='hd_item' keyname='itemCode'><div>상품코드</div></div><div class='hd_item' keyname='itselfCode'><div>자체코드</div></div></div><div class='row_item d_flex'><div class='hd_item' keyname='checkedbox'><div><div class='cus_inp_wrap checkbox_inp'> <label for='tbl_head_0' class='inp_box'> <input type='checkbox' id='tbl_head_0' name='ckb_all'><span class='inp_custom'></span> </label></div></div></div><div class='hd_item' keyname='itemCode'><div>상품코드</div></div><div class='hd_item' keyname='itselfCode'><div>자체코드</div></div></div></div><div class='look_body_box'><div class='look_body_list'><div class='row_item d_flex'><div class='hd_item' keyname='itemName'><div>상품명(옵션수)</div></div><div class='hd_item' keyname='admName'><div>관리명</div></div><div class='hd_item' keyname='salesDivision'><div>판매구분</div></div><div class='hd_item' keyname='display'><div>진열여부</div></div><div class='hd_item' keyname='category'><div>카테고리</div></div><div class='hd_item' keyname='firstStock'><div>최초재고</div></div><div class='hd_item' keyname='containNum'><div>담아간수</div></div><div class='hd_item' keyname='currentInventory'><div>현재고</div></div><div class='hd_item' keyname='supplyPrice'><div>공급가</div></div><div class='hd_item' keyname='offerPrice'><div>판매 제안가</div></div><div class='hd_item' keyname='deliveryCategory'><div>배송구분</div></div><div class='hd_item' keyname='deliveryFee'><div>배송비</div></div><div class='hd_item' keyname='configureShippingCost'><div>배송비 구성</div></div><div class='hd_item' keyname='salesMethod'><div>판매방식</div></div><div class='hd_item' keyname='shippingAttribute'><div>배송속성</div></div><div class='hd_item' keyname='bundledDelivery'><div>묶음배송여부</div></div><div class='hd_item' keyname='extraShippingCost'><div>추가배송비</div></div><div class='hd_item' keyname='brand'><div>브랜드</div></div><div class='hd_item' keyname='manufacturer'><div>제조사</div></div><div class='hd_item' keyname='media'><div>미디어</div></div><div class='hd_item' keyname='views'><div>조회수</div></div><div class='hd_item' keyname='numberOfFavorites'><div>즐겨찾기수</div></div><div class='hd_item' keyname='minimumOrderQuantity'><div>최소주문수량</div></div><div class='hd_item' keyname='maximumOrderQuantity'><div>최대주문수량</div></div><div class='hd_item' keyname='membershipType'><div>회원유형</div></div><div class='hd_item' keyname='admin'><div>관리자</div></div><div class='hd_item' keyname='registrationDate'><div>등록일</div></div><div class='hd_item' keyname='fertilizationDate'><div>수정일</div></div></div><div class='row_item d_flex'><div class='hd_item' keyname='itemName'><div>상품명(옵션수)</div></div><div class='hd_item' keyname='admName'><div>관리명</div></div><div class='hd_item' keyname='salesDivision'><div>판매구분</div></div><div class='hd_item' keyname='display'><div class='tbl_row'><div>진열여부</div></div><div class='tbl_row'><div>진열여부</div></div></div><div class='hd_item' keyname='category'><div>카테고리</div></div><div class='hd_item' keyname='firstStock'><div>최초재고</div></div><div class='hd_item' keyname='containNum'><div>담아간수</div></div><div class='hd_item' keyname='currentInventory'><div>현재고</div></div><div class='hd_item' keyname='supplyPrice'><div>공급가</div></div><div class='hd_item' keyname='offerPrice'><div>판매 제안가</div></div><div class='hd_item' keyname='deliveryCategory'><div>배송구분</div></div><div class='hd_item' keyname='deliveryFee'><div>배송비</div></div><div class='hd_item' keyname='configureShippingCost'><div>배송비 구성</div></div><div class='hd_item' keyname='salesMethod'><div>판매방식</div></div><div class='hd_item' keyname='shippingAttribute'><div>배송속성</div></div><div class='hd_item' keyname='bundledDelivery'><div>묶음배송여부</div></div><div class='hd_item' keyname='extraShippingCost'><div>추가배송비</div></div><div class='hd_item' keyname='brand'><div>브랜드</div></div><div class='hd_item' keyname='manufacturer'><div>제조사</div></div><div class='hd_item' keyname='media'><div>미디어</div></div><div class='hd_item' keyname='views'><div>조회수</div></div><div class='hd_item' keyname='numberOfFavorites'><div>즐겨찾기수</div></div><div class='hd_item' keyname='minimumOrderQuantity'><div>최소주문수량</div></div><div class='hd_item' keyname='maximumOrderQuantity'><div>최대주문수량</div></div><div class='hd_item' keyname='membershipType'><div>회원유형</div></div><div class='hd_item' keyname='admin'><div>관리자</div></div><div class='hd_item' keyname='registrationDate'><div>등록일</div></div><div class='hd_item' keyname='fertilizationDate'><div>수정일</div></div></div></div></div></div></div></div><div class='motiv_paging'><a class='first' href='#none'></a><a class='prev' href='#none'></a><ul><li><a class='this' href='#none'>1</a></li><li><a href='#none'>2</a></li><li><a href='#none'>3</a></li><li><a href='#none'>4</a></li><li><a href='#none'>5</a></li><li><a href='#none'>6</a></li><li><a href='#none'>7</a></li><li><a href='#none'>8</a></li><li><a href='#none'>9</a></li><li><a href='#none'>10</a></li></ul><a class='next' href='#none'></a><a class='last' href='#none'></a></div>"
var tableListData2 = "<div class='motiv_tbl'><div class='tbl_inner'><div class='tbl_head'><div class='look_head_head'><div class='row_item d_flex'><div class='hd_item' keyname='checkedbox'><div><div class='cus_inp_wrap checkbox_inp'> <label for='tbl_head_0' class='inp_box'> <input type='checkbox' id='tbl_head_0' name='ckb_all'><span class='inp_custom'></span> </label></div></div></div><div class='hd_item' keyname='itemCode'><div>상품코드</div></div><div class='hd_item' keyname='itselfCode'><div>자체코드</div></div></div></div><div class='look_head_box'><div class='look_head_list'><div class='row_item d_flex'><div class='hd_item' keyname='itemName'><div>상품명(옵션수)</div></div><div class='hd_item' keyname='admName'><div>관리명</div></div><div class='hd_item' keyname='salesDivision'><div>판매구분</div></div><div class='hd_item' keyname='display'><div>진열여부</div></div><div class='hd_item' keyname='category'><div>카테고리</div></div><div class='hd_item' keyname='firstStock'><div>최초재고</div></div><div class='hd_item' keyname='containNum'><div>담아간수</div></div><div class='hd_item' keyname='currentInventory'><div>현재고</div></div><div class='hd_item' keyname='supplyPrice'><div>공급가</div></div><div class='hd_item' keyname='offerPrice'><div>판매 제안가</div></div><div class='hd_item' keyname='deliveryCategory'><div>배송구분</div></div><div class='hd_item' keyname='deliveryFee'><div>배송비</div></div><div class='hd_item' keyname='configureShippingCost'><div>배송비 구성</div></div><div class='hd_item' keyname='salesMethod'><div>판매방식</div></div><div class='hd_item' keyname='shippingAttribute'><div>배송속성</div></div><div class='hd_item' keyname='bundledDelivery'><div>묶음배송여부</div></div><div class='hd_item' keyname='extraShippingCost'><div>추가배송비</div></div><div class='hd_item' keyname='brand'><div>브랜드</div></div><div class='hd_item' keyname='manufacturer'><div>제조사</div></div><div class='hd_item' keyname='media'><div>미디어</div></div><div class='hd_item' keyname='views'><div>조회수</div></div><div class='hd_item' keyname='numberOfFavorites'><div>즐겨찾기수</div></div><div class='hd_item' keyname='minimumOrderQuantity'><div>최소주문수량</div></div><div class='hd_item' keyname='maximumOrderQuantity'><div>최대주문수량</div></div><div class='hd_item' keyname='membershipType'><div>회원유형</div></div><div class='hd_item' keyname='admin'><div>관리자</div></div><div class='hd_item' keyname='registrationDate'><div>등록일</div></div><div class='hd_item' keyname='fertilizationDate'><div>수정일</div></div></div></div></div></div><div class='tbl_body'><div class='look_body_head'><div class='row_item d_flex'><div class='hd_item' keyname='checkedbox'><div><div class='cus_inp_wrap checkbox_inp'> <label for='tbl_head_0' class='inp_box'> <input type='checkbox' id='tbl_head_0' name='ckb_all'><span class='inp_custom'></span> </label></div></div></div><div class='hd_item' keyname='itemCode'><div>상품코드</div></div><div class='hd_item' keyname='itselfCode'><div>자체코드</div></div></div><div class='row_item d_flex'><div class='hd_item' keyname='checkedbox'><div><div class='cus_inp_wrap checkbox_inp'> <label for='tbl_head_0' class='inp_box'> <input type='checkbox' id='tbl_head_0' name='ckb_all'><span class='inp_custom'></span> </label></div></div></div><div class='hd_item' keyname='itemCode'><div>상품코드</div></div><div class='hd_item' keyname='itselfCode'><div>자체코드</div></div></div></div><div class='look_body_box'><div class='look_body_list'><div class='row_item d_flex'><div class='hd_item' keyname='itemName'><div>상품명(옵션수)</div></div><div class='hd_item' keyname='admName'><div>관리명</div></div><div class='hd_item' keyname='salesDivision'><div>판매구분</div></div><div class='hd_item' keyname='display'><div>진열여부</div></div><div class='hd_item' keyname='category'><div>카테고리</div></div><div class='hd_item' keyname='firstStock'><div>최초재고</div></div><div class='hd_item' keyname='containNum'><div>담아간수</div></div><div class='hd_item' keyname='currentInventory'><div>현재고</div></div><div class='hd_item' keyname='supplyPrice'><div>공급가</div></div><div class='hd_item' keyname='offerPrice'><div>판매 제안가</div></div><div class='hd_item' keyname='deliveryCategory'><div>배송구분</div></div><div class='hd_item' keyname='deliveryFee'><div>배송비</div></div><div class='hd_item' keyname='configureShippingCost'><div>배송비 구성</div></div><div class='hd_item' keyname='salesMethod'><div>판매방식</div></div><div class='hd_item' keyname='shippingAttribute'><div>배송속성</div></div><div class='hd_item' keyname='bundledDelivery'><div>묶음배송여부</div></div><div class='hd_item' keyname='extraShippingCost'><div>추가배송비</div></div><div class='hd_item' keyname='brand'><div>브랜드</div></div><div class='hd_item' keyname='manufacturer'><div>제조사</div></div><div class='hd_item' keyname='media'><div>미디어</div></div><div class='hd_item' keyname='views'><div>조회수</div></div><div class='hd_item' keyname='numberOfFavorites'><div>즐겨찾기수</div></div><div class='hd_item' keyname='minimumOrderQuantity'><div>최소주문수량</div></div><div class='hd_item' keyname='maximumOrderQuantity'><div>최대주문수량</div></div><div class='hd_item' keyname='membershipType'><div>회원유형</div></div><div class='hd_item' keyname='admin'><div>관리자</div></div><div class='hd_item' keyname='registrationDate'><div>등록일</div></div><div class='hd_item' keyname='fertilizationDate'><div>수정일</div></div></div><div class='row_item d_flex'><div class='hd_item' keyname='itemName'><div>상품명(옵션수)</div></div><div class='hd_item' keyname='admName'><div>관리명</div></div><div class='hd_item' keyname='salesDivision'><div>판매구분</div></div><div class='hd_item' keyname='display'><div class='tbl_row'><div>진열여부</div></div><div class='tbl_row'><div>진열여부</div></div></div><div class='hd_item' keyname='category'><div>카테고리</div></div><div class='hd_item' keyname='firstStock'><div>최초재고</div></div><div class='hd_item' keyname='containNum'><div>담아간수</div></div><div class='hd_item' keyname='currentInventory'><div>현재고</div></div><div class='hd_item' keyname='supplyPrice'><div>공급가</div></div><div class='hd_item' keyname='offerPrice'><div>판매 제안가</div></div><div class='hd_item' keyname='deliveryCategory'><div>배송구분</div></div><div class='hd_item' keyname='deliveryFee'><div>배송비</div></div><div class='hd_item' keyname='configureShippingCost'><div>배송비 구성</div></div><div class='hd_item' keyname='salesMethod'><div>판매방식</div></div><div class='hd_item' keyname='shippingAttribute'><div>배송속성</div></div><div class='hd_item' keyname='bundledDelivery'><div>묶음배송여부</div></div><div class='hd_item' keyname='extraShippingCost'><div>추가배송비</div></div><div class='hd_item' keyname='brand'><div>브랜드</div></div><div class='hd_item' keyname='manufacturer'><div>제조사</div></div><div class='hd_item' keyname='media'><div>미디어</div></div><div class='hd_item' keyname='views'><div>조회수</div></div><div class='hd_item' keyname='numberOfFavorites'><div>즐겨찾기수</div></div><div class='hd_item' keyname='minimumOrderQuantity'><div>최소주문수량</div></div><div class='hd_item' keyname='maximumOrderQuantity'><div>최대주문수량</div></div><div class='hd_item' keyname='membershipType'><div>회원유형</div></div><div class='hd_item' keyname='admin'><div>관리자</div></div><div class='hd_item' keyname='registrationDate'><div>등록일</div></div><div class='hd_item' keyname='fertilizationDate'><div>수정일</div></div></div></div></div></div></div></div><div class='motiv_paging'><a class='first' href='#none'></a><a class='prev' href='#none'></a><ul><li><a class='this' href='#none'>1</a></li><li><a href='#none'>2</a></li><li><a href='#none'>3</a></li><li><a href='#none'>4</a></li><li><a href='#none'>5</a></li><li><a href='#none'>6</a></li><li><a href='#none'>7</a></li><li><a href='#none'>8</a></li><li><a href='#none'>9</a></li><li><a href='#none'>10</a></li></ul><a class='next' href='#none'></a><a class='last' href='#none'></a></div>"

//데이터의 소데이터는 최대 2개까지 배열로 넣을 수 있게끔 세팅하였습니다.
var tableData2 = {
    tableSize: {
        itemCode: 100,
        itselfCode: 150,
        itemName: 180,
        admName: 100,
        salesDivision: 100,
        display: 100,
        category: 180,
        firstStock: 80,
        containNum: 80,
        currentInventory: 80,
        supplyPrice: 100,
        offerPrice: 100,
        deliveryCategory: 100,
        deliveryFee: 80,
        configureShippingCost: 100,
        salesMethod: 100,
        shippingAttribute: 100,
        bundledDelivery: 80,
        extraShippingCost: 80,
        brand: 100,
        manufacturer: 100,
        media: 80,
        views: 80,
        numberOfFavorites: 100,
        minimumOrderQuantity: 100,
        maximumOrderQuantity: 100,
        membershipType: 100,
        admin: 100,
        registrationDate: 150,
        fertilizationDate: 150
    },
    scrollLookSta: true,
    scrollLook: ['itemCode', 'itselfCode'],
}

var tFlex = {
    ckbSize: 40,
    init: (obj) => {
        if($('#'+ obj.id +' .motiv_tbl .hd_item[keyname=checkedbox]').length == 0){
            tFlex.ckbSize = 0;
        } else {
            $('#'+ obj.id +' .motiv_tbl .hd_item[keyname=checkedbox]').css('width', tFlex.ckbSize+'px');
        }
        tFlex.obj = obj;
        obj.totalSize = tFlex.ckbSize; 
        Promise.resolve()
        .then(() => {
            tFlex.tableSize(obj);
        })
        .then(() => {
            var reSize = 0;
            if($('#'+ obj.id).find('.tbl_inner').width() > obj.totalSize){
                var reTotalSize = tFlex.ckbSize;
                reSize = ($('#'+ obj.id).find('.tbl_inner').width() - obj.totalSize) / Object.keys(obj.tableSize).length;
                $.each( obj.tableSize, (name, size) => {
                    obj.tableSize[name] = size + reSize;
                    reTotalSize = reTotalSize + size + reSize;
                });
                obj.totalSize = reTotalSize;
            }

            $.each( obj.tableSize, (name, size) => $('#'+ obj.id +' .motiv_tbl .hd_item[keyname='+ name +']').css('width', size +'px') );
            $('#'+ obj.id +' .motiv_tbl').find('.tbl_head, .tbl_body').css('width', obj.totalSize +'px');
            $('#'+ obj.id +' .motiv_tbl').find('.row_item').css('width', obj.totalSize +'px');
            
            $.each( $('#'+ obj.id).find('.hd_item'), (index, target) => {
                var hdItem = $('#'+ obj.id).find('.hd_item').eq(index);
                if(hdItem.hasClass('item_row')){
                    hdItem.css('width', tFlex.rowItemTh(hdItem, obj));
                }
            });
            
            $(window).on('resize', function(){
                tFlex.init(obj);
            });

            const $target = document.querySelector('#'+ obj.id +' .tbl_inner');
            const observer = new ResizeObserver((entries) => {
                reSize = 0;
                if($('#'+ obj.id).find('.tbl_inner').width() > obj.totalSize){
                    var reTotalSize = tFlex.ckbSize;
                    reSize = ($('#'+ obj.id).find('.tbl_inner').width() - obj.totalSize) / Object.keys(obj.tableSize).length;
                    $.each( obj.tableSize, (name, size) => {
                        obj.tableSize[name] = size + reSize;
                        reTotalSize = reTotalSize + size + reSize;
                    });
                    obj.totalSize = reTotalSize;
                }
    
                $.each( obj.tableSize, (name, size) => $('#'+ obj.id +' .motiv_tbl .hd_item[keyname='+ name +']').css('width', size +'px') );
                $('#'+ obj.id +' .motiv_tbl').find('.tbl_head, .tbl_body').css('width', obj.totalSize +'px');
                $('#'+ obj.id +' .motiv_tbl').find('.row_item').css('width', obj.totalSize +'px');
                
                $.each( $('#'+ obj.id).find('.hd_item'), (index, target) => {
                    var hdItem = $('#'+ obj.id).find('.hd_item').eq(index);
                    if(hdItem.hasClass('item_row')){
                        hdItem.css('width', tFlex.rowItemTh(hdItem, obj));
                    }
                });
            });
            observer.observe($target);  // 크기변화를 관찰할 요소지정
            
        })
       
    },

    tableSize: (obj) => {
        $.each( obj.tableSize, (name, size) => obj.totalSize = obj.totalSize + size);
    },

    rowItemTh: (target, obj) => {
        var itemThSize = 0;
        var targetCh = target.children('.item_row_tbl').children('div');
        $.each(  targetCh, (index, size) => {
            var keynameSize = obj.tableSize[targetCh.eq(index).attr('keyname')];
            targetCh.eq(index).css('width', keynameSize+'px');
            itemThSize = itemThSize + keynameSize;
        });
        target.css('width', itemThSize);
    },
}

var tFlexLock = {
    ckbSize: 40,
    init: (obj) => {
        tFlexLock.obj = obj;
        $('#'+ obj.id +' .motiv_tbl .hd_item[keyname=checkedbox]').css('width', tFlexLock.ckbSize+'px');
        if($('#'+ obj.id +' .motiv_tbl .hd_item[keyname=checkedbox]').length == 0){
            tFlexLock.ckbSize = 0;
        } else {
            $('#'+ obj.id +' .motiv_tbl .hd_item[keyname=checkedbox]').css('width', tFlexLock.ckbSize+'px');
        }
        obj.totalSize = tFlex.ckbSize; 

        $('#'+ obj.id +' .motiv_tbl').addClass('lock_tbl');

        Promise.resolve()
        .then(() => {
            tFlexLock.rowItem('look_body_head', obj);
            tFlexLock.rowItem('look_body_box', obj);
        })
        .then(() => {
            tFlexLock.rowItems('look_body_head', obj);
        })

        $.each( obj.tableSize, (name, size) => {
            $('#'+ obj.id +' .motiv_tbl .hd_item[keyname='+ name +']').css('width', size +'px');
            obj.totalSize = obj.totalSize + size;
        });
        obj.scrollLookSize = tFlex.ckbSize;

        $.each( obj.scrollLook, (name, size) => {
            obj.scrollLookSize = obj.scrollLookSize + obj.tableSize[size];
        });

        $.each( $('#'+ obj.id).find('.hd_item'), (index, target) => {
            var hdItem = $('#'+ obj.id).find('.hd_item').eq(index);
            if(hdItem.hasClass('item_row')){
                hdItem.css('width', tFlexLock.rowItemTh(hdItem, obj));
            }
        });

        var motivTblW = $('#'+ obj.id +' .motiv_tbl').width();
        $('#'+ obj.id +' .motiv_tbl').find('.look_body_head, .look_body_head .row_item').css('width', obj.scrollLookSize +'px');
        $('#'+ obj.id +' .motiv_tbl').find('.look_body_box').css('width', (motivTblW-obj.scrollLookSize) +'px');
        $('#'+ obj.id +' .motiv_tbl').find('.look_body_box .row_item').css('width', (obj.totalSize-obj.scrollLookSize) +'px');

        const $target = document.querySelector('#'+ obj.id +' .tbl_inner');
        const observer = new ResizeObserver((entries) => {
            // 관찰 중인 배열 형식의 객체 리스트
            entries.forEach((entry) => {
                motivTblW = $('#'+ obj.id +' .motiv_tbl').width();
            });
            
            $('#'+ obj.id +' .motiv_tbl').find('.look_body_box').css('width', (motivTblW-obj.scrollLookSize) +'px');
        });
        observer.observe($target);  // 크기변화를 관찰할 요소지정

        $(window).on('resize', function(){
            tFlexLock.init(obj);
        });
    },

    tableSize: (obj) => {
        $.each( obj.tableSize, (name, size) => obj.totalSize = obj.totalSize + size);
    },

    rowItemTh: (target, obj) => {
        var itemThSize = 0;
        var targetCh = target.children('.item_row_tbl').children('div');
        $.each(  targetCh, (index, size) => {
            var keynameSize = obj.tableSize[targetCh.eq(index).attr('keyname')];
            targetCh.eq(index).css('width', keynameSize);
            itemThSize = itemThSize + keynameSize;
        });
        target.css('width', itemThSize);
    },

    rowItem: (name, obj) => {
        $.each( $('#'+ obj.id).find('.'+ name + ' .row_item'), (index, size) => {
            $('#'+ obj.id).find('.'+ name +' .row_item').eq(index).attr('row_num', index);
        });
    },

    rowItems: (name, obj) => {
        $.each( $('#'+ obj.id).find('.'+ name + ' .row_item'), (index, object) => {
            var rowCont = $('div[row_num='+index+']');
            var rowContHeight = rowCont.eq(0).height() > rowCont.eq(1).height() ? rowCont.eq(0).height() : rowCont.eq(1).height();
            rowCont.css('height', rowContHeight);
        });
    },
}
