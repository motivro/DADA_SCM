
//예제 데이터

//데이터의 소데이터는 최대 2개까지 배열로 넣을 수 있게끔 세팅하였습니다.
var tableData = {
    tableHead: {
        itemCode: '상품코드',
        itselfCode: '자체코드',
        itemName: '상품명(옵션수)',
        admName: '관리명',
        salesDivision: '판매구분',
        display: '진열여부',
        category: '카테고리',
        firstStock: '최초재고',
        containNum: '담아간수',
        currentInventory: '현재고',
        supplyPrice: '공급가',
        offerPrice: '판매 제안가',
        deliveryCategory: '배송구분',
        deliveryFee: '배송비',
        configureShippingCost: '배송비 구성',
        salesMethod: '판매방식',
        shippingAttribute: '배송속성',
        bundledDelivery: '묶음배송여부',
        extraShippingCost: '추가배송비',
        brand: '브랜드',
        manufacturer: '제조사',
        media: '미디어',
        views: '조회수',
        numberOfFavorites: '즐겨찾기수',
        minimumOrderQuantity: '최소주문수량',
        maximumOrderQuantity: '최대주문수량',
        membershipType: '회원유형',
        admin: '관리자',
        registrationDate: '등록일',
        fertilizationDate: '수정일'
    },
    tableBody: [
        {
            itemCode: '상품코드',
            itselfCode: ['자체코드', '자체코드2'],
            itemName: '상품명(옵션수)',
            admName: '관리명1',
            salesDivision: '판매구분',
            display: '진열여부',
            category: '카테고리',
            firstStock: '최초재고',
            containNum: '담아간수',
            currentInventory: '현재고',
            supplyPrice: '공급가',
            offerPrice: '판매 제안가',
            deliveryCategory: '배송구분',
            deliveryFee: '배송비',
            configureShippingCost: '배송비 구성',
            salesMethod: '판매방식',
            shippingAttribute: '배송속성',
            bundledDelivery: '묶음배송여부',
            extraShippingCost: '추가배송비',
            brand: '브랜드',
            manufacturer: '제조사',
            media: '미디어',
            views: '조회수',
            numberOfFavorites: '즐겨찾기수',
            minimumOrderQuantity: '최소주문수량',
            maximumOrderQuantity: '최대주문수량',
            membershipType: '회원유형',
            admin: '관리자',
            registrationDate: '등록일',
            fertilizationDate: '수정일',
            childrenData: [
                // {
                //     itemCode: '',
                //     itselfCode: '',
                //     itemName: '상품명(옵션수)',
                //     admName: '관리명1',
                //     salesDivision: '판매구분',
                //     display: '진열여부',
                //     category: '카테고리',
                //     firstStock: '최초재고',
                //     containNum: '담아간수',
                //     currentInventory: '현재고',
                //     supplyPrice: '공급가',
                //     offerPrice: '판매 제안가',
                //     deliveryCategory: '배송구분',
                //     deliveryFee: '배송비',
                //     configureShippingCost: '배송비 구성',
                //     salesMethod: '판매방식',
                //     shippingAttribute: '배송속성',
                //     bundledDelivery: '묶음배송여부',
                //     extraShippingCost: '추가배송비',
                //     brand: '브랜드',
                //     manufacturer: '제조사',
                //     media: '미디어',
                //     views: '조회수',
                //     numberOfFavorites: '즐겨찾기수',
                //     minimumOrderQuantity: '최소주문수량',
                //     maximumOrderQuantity: '최대주문수량',
                //     membershipType: '회원유형',
                //     admin: '관리자',
                //     registrationDate: '등록일',
                //     fertilizationDate: '수정일',
                // },
                // {
                //     itemCode: '',
                //     itselfCode: '',
                //     itemName: '상품명(옵션수)',
                //     admName: '관리명1',
                //     salesDivision: '판매구분',
                //     display: '진열여부',
                //     category: '카테고리',
                //     firstStock: '최초재고',
                //     containNum: '담아간수',
                //     currentInventory: '현재고',
                //     supplyPrice: '공급가',
                //     offerPrice: '판매 제안가',
                //     deliveryCategory: '배송구분',
                //     deliveryFee: '배송비',
                //     configureShippingCost: '배송비 구성',
                //     salesMethod: '판매방식',
                //     shippingAttribute: '배송속성',
                //     bundledDelivery: '묶음배송여부',
                //     extraShippingCost: '추가배송비',
                //     brand: '브랜드',
                //     manufacturer: '제조사',
                //     media: '미디어',
                //     views: '조회수',
                //     numberOfFavorites: '즐겨찾기수',
                //     minimumOrderQuantity: '최소주문수량',
                //     maximumOrderQuantity: '최대주문수량',
                //     membershipType: '회원유형',
                //     admin: '관리자',
                //     registrationDate: '등록일',
                //     fertilizationDate: '수정일',
                // },
                // {
                //     itemCode: '',
                //     itselfCode: '',
                //     itemName: '상품명(옵션수)',
                //     admName: '관리명1',
                //     salesDivision: '판매구분',
                //     display: '진열여부',
                //     category: '카테고리',
                //     firstStock: '최초재고',
                //     containNum: '담아간수',
                //     currentInventory: '현재고',
                //     supplyPrice: '공급가',
                //     offerPrice: '판매 제안가',
                //     deliveryCategory: '배송구분',
                //     deliveryFee: '배송비',
                //     configureShippingCost: '배송비 구성',
                //     salesMethod: '판매방식',
                //     shippingAttribute: '배송속성',
                //     bundledDelivery: '묶음배송여부',
                //     extraShippingCost: '추가배송비',
                //     brand: '브랜드',
                //     manufacturer: '제조사',
                //     media: '미디어',
                //     views: '조회수',
                //     numberOfFavorites: '즐겨찾기수',
                //     minimumOrderQuantity: '최소주문수량',
                //     maximumOrderQuantity: '최대주문수량',
                //     membershipType: '회원유형',
                //     admin: '관리자',
                //     registrationDate: '등록일',
                //     fertilizationDate: '수정일',
                // },
                // {
                //     itemCode: '',
                //     itselfCode: '',
                //     itemName: '상품명(옵션수)',
                //     admName: '관리명1',
                //     salesDivision: '판매구분',
                //     display: '진열여부',
                //     category: '카테고리',
                //     firstStock: '최초재고',
                //     containNum: '담아간수',
                //     currentInventory: '현재고',
                //     supplyPrice: '공급가',
                //     offerPrice: '판매 제안가',
                //     deliveryCategory: '배송구분',
                //     deliveryFee: '배송비',
                //     configureShippingCost: '배송비 구성',
                //     salesMethod: '판매방식',
                //     shippingAttribute: '배송속성',
                //     bundledDelivery: '묶음배송여부',
                //     extraShippingCost: '추가배송비',
                //     brand: '브랜드',
                //     manufacturer: '제조사',
                //     media: '미디어',
                //     views: '조회수',
                //     numberOfFavorites: '즐겨찾기수',
                //     minimumOrderQuantity: '최소주문수량',
                //     maximumOrderQuantity: '최대주문수량',
                //     membershipType: '회원유형',
                //     admin: '관리자',
                //     registrationDate: '등록일',
                //     fertilizationDate: '수정일',
                // },
            ]
        },
        {
            itemCode: '상품코드',
            itselfCode: '자체코드',
            itemName: '상품명(옵션수)',
            admName: '관리명',
            salesDivision: '판매구분',
            display: '진열여부',
            category: ['카테고리', '카테고리'],
            firstStock: '최초재고',
            containNum: '담아간수',
            currentInventory: '현재고',
            supplyPrice: '공급가',
            offerPrice: '판매 제안가',
            deliveryCategory: '배송구분',
            deliveryFee: '배송비',
            configureShippingCost: '배송비 구성',
            salesMethod: '판매방식',
            shippingAttribute: '배송속성',
            bundledDelivery: '묶음배송여부',
            extraShippingCost: '추가배송비',
            brand: '브랜드',
            manufacturer: '제조사',
            media: '미디어',
            views: '조회수',
            numberOfFavorites: '즐겨찾기수',
            minimumOrderQuantity: '최소주문수량',
            maximumOrderQuantity: '최대주문수량',
            membershipType: '회원유형',
            admin: '관리자',
            registrationDate: '등록일',
            fertilizationDate: '수정일',
            childrenData: [],
        },
        {
            itemCode: '상품코드',
            itselfCode: '자체코드',
            itemName: '상품명(옵션수)',
            admName: '관리명',
            salesDivision: '판매구분',
            display: '진열여부',
            category: '카테고리',
            firstStock: '최초재고',
            containNum: '담아간수',
            currentInventory: '현재고',
            supplyPrice: '공급가',
            offerPrice: '판매 제안가',
            deliveryCategory: '배송구분',
            deliveryFee: '배송비',
            configureShippingCost: '배송비 구성',
            salesMethod: '판매방식',
            shippingAttribute: '배송속성',
            bundledDelivery: '묶음배송여부',
            extraShippingCost: '추가배송비',
            brand: '브랜드',
            manufacturer: '제조사',
            media: '미디어',
            views: '조회수',
            numberOfFavorites: '즐겨찾기수',
            minimumOrderQuantity: '최소주문수량',
            maximumOrderQuantity: '최대주문수량',
            membershipType: '회원유형',
            admin: '관리자',
            registrationDate: '등록일',
            fertilizationDate: '수정일',
            childrenData: [],
        },
    ],
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
    checkedSta: true,//false 이면 테이블에 체크박스가 추가되지 않습니다.
    scrollLookSta: true,
    scrollLook: ['itemCode', 'itselfCode'],
}

var tableFlex = {
    headLookHtml: '<div class="look_head_head"></div><div class="look_head_box"><div class="look_head_list"></div></div>',
    bodyLookHtml: '<div class="look_body_head"></div><div class="look_body_box"><div class="look_body_list"></div></div>',
    ckbSize: 40,
    motivTblWidth: 0,
    leftWidth: 0,
    rightWidth: 0,

    init: (obj) => {
        tableFlex.errChecked();
        if (tableData.scrollLookSta) {// tableData.scrollLookSta의 값이 true 일때 실행됨니다.
            tableFlex.lookSize(obj);
            $('.motiv_tbl').addClass('look_tbl');
            tableFlex.lookTableHead(obj);
            tableFlex.lookTableBody(obj);
        } else {
            tableFlex.tableHead(obj);
            tableFlex.tableBody(obj);
        }
    },

    checkedBoxAdd: (name, val) => {
        var checkboxHtml = '<div class="hd_item" style="width:'+tableFlex.ckbSize+'px;"><div>';
        checkboxHtml += '<div class="cus_inp_wrap checkbox_inp">';
        checkboxHtml += '   <label for="'+name+'" class="inp_box">';
        checkboxHtml += '       <input type="checkbox" id="'+name+'" name="'+val+'">';
        checkboxHtml += '       <span class="inp_custom"></span>';
        checkboxHtml += '   </label>';
        checkboxHtml += '</div>';
        checkboxHtml += '</div></div>';
        return checkboxHtml;
    },

    //락이 걸리는 테이블일때 실행됨니다.
    lookSize: (data) => {
        var widthHeadVal = data.checkedSta ? 40 : 0; //체크박스의 넗이 만큼 추가 됨니다.
        var widthBodyVal = 0;
        $.each(data.scrollLook, (index, item) => {
            widthHeadVal = widthHeadVal + data.tableSize[item];
        })

        $.each(data.tableSize, (index, item) => {
            if (!data.scrollLook.includes(index)) {
                widthBodyVal = widthBodyVal + data.tableSize[index];
            }
        })
        tableFlex.motivTblWidth = $('.motiv_tbl').width();
        tableFlex.leftWidth = widthHeadVal;
        tableFlex.rightWidth = widthBodyVal;
    },

    tableHead: (data) => {
        const obj = data.tableHead;
        var headHtml = '';
        headHtml += '<div class="row_item d_flex">';
        headHtml += data.checkedSta ? tableFlex.firstCheckHtml : '';
        $.each(obj, (name, cont) => {
            headHtml += tableFlex.returnHdHtml(data.tableSize[name], cont);
        });
        headHtml += '</div>';
        $('.motiv_tbl .tbl_inner .tbl_head').append(headHtml);
    },

    tableBody: (data) => {
        const obj = data.tableBody;
        var bodyHtml = '';
        $.each(obj, (index, item) => {
            bodyHtml += '<div class="row_item d_flex">';
            bodyHtml += data.checkedSta ? tableFlex.firstCheckHtml : '';
            $.each(item, (name, cont) => {
                bodyHtml += tableFlex.returnHdHtml(data.tableSize[name], cont);
            });
            bodyHtml += '</div>';
        });
        $('.motiv_tbl .tbl_inner .tbl_body').append(bodyHtml);
    },

    lookTableHead: (data) => {
        const obj = data.tableHead;
        var leftHtml = '';
        var rightHtml = '';
        var checkFirst = false;

        $('.motiv_tbl .tbl_inner .tbl_head').append(tableFlex.headLookHtml);
        leftHtml += tableFlex.returnRowHtml(tableFlex.leftWidth);
        leftHtml += data.checkedSta ? tableFlex.checkedBoxAdd('tbl_head_0', 'ckb_all') : '';//맨 첫째 체크 박스
        rightHtml += tableFlex.returnRowHtml(tableFlex.rightWidth);
        $.each(obj, (name, cont) => {
            if (data.scrollLook.includes(name)) {
                leftHtml += tableFlex.returnHdHtml(data.tableSize[name], cont);
            } else {
                rightHtml += tableFlex.returnHdHtml(data.tableSize[name], cont);
            }
        });
        leftHtml += '</div>';
        rightHtml += '</div>';
        $('.motiv_tbl .tbl_inner .tbl_head .look_head_head').append(leftHtml);
        $('.motiv_tbl .tbl_inner .tbl_head .look_head_box .look_head_list').append(rightHtml);
    },

    lookTableBody: (data) => {
        var obj = data.tableBody;
        var leftHtml = '';
        var rightHtml = '';
        $('.motiv_tbl .tbl_inner .tbl_body').append(tableFlex.bodyLookHtml);

        $.each(obj, (index, item) => {//tableData.tableBody 데이터로 시작합니다.
            leftHtml += tableFlex.returnRowHtml(tableFlex.leftWidth, 'tbl_row_' + index);
            leftHtml += data.checkedSta ? tableFlex.checkedBoxAdd('tbl_body_'+index+'', 'item') : '';//맨 첫째 체크 박스

            rightHtml += tableFlex.returnRowHtml(tableFlex.rightWidth, 'tbl_row_' + index);

            $.each(item, (name, cont) => {
                if (data.scrollLook.includes(name) && name != 'childrenData') {
                    leftHtml += tableFlex.returnHdHtml(data.tableSize[name], cont);
                } else {
                    if (name != 'childrenData') {
                        rightHtml += tableFlex.returnHdHtml(data.tableSize[name], cont);
                    }
                }
            });
            leftHtml += '</div>';
            rightHtml += '</div>';

            //데이터에 childrenData 값이 있다면 추가 작업을 시작합니다.
            if (Object.keys(item.childrenData).length != undefined) {
                $.each(item.childrenData, (sub_index, sub_item) => {
                    leftHtml += tableFlex.returnRowHtml(tableFlex.leftWidth, 'sub_tbl_row_' + sub_index);
                    leftHtml += data.checkedSta ? tableFlex.firstCheckHtml : '';
                    rightHtml += tableFlex.returnRowHtml(tableFlex.rightWidth, 'sub_tbl_row_' + sub_index);

                    // childrenData를 신용하지 않을 경우 사용할예제 코드
                    // $.each(tableData.scrollLook, (name, cont) => {
                    //     leftHtml += tableFlex.returnHdHtml(data.tableSize[cont], '');
                    // });

                    $.each(sub_item, (name, cont) => {
                        if (data.scrollLook.includes(name)) {
                            leftHtml += tableFlex.returnHdHtml(data.tableSize[name], cont);
                        } else {
                            rightHtml += tableFlex.returnHdHtml(data.tableSize[name], cont);
                        }
                        // childrenData를 신용하지 않을 경우 사용할예제 코드
                        // if(!data.scrollLook.includes(name)){
                        //     rightHtml += tableFlex.returnHdHtml(data.tableSize[name], cont);
                        // }
                    });
                    leftHtml += '</div>';
                    rightHtml += '</div>';
                });
            }
        });
        $('.motiv_tbl .tbl_inner .tbl_body .look_body_head').append(leftHtml);
        $('.motiv_tbl .tbl_inner .tbl_body .look_body_box .look_body_list').append(rightHtml);
        tableFlex.lookWheelUi();//look 테이블 스크롤 이벤트
        tableFlex.lookTableBodyFilter();
    },

    lookTableBodyFilter: () => {
        var name = new Object();
        $.each($("div[table_name]"), (sub_index, sub_item) => {
            var t_name = $("div[table_name]").eq(sub_index).attr("table_name");
            if (Object.keys(name).includes(t_name)) {

                name[t_name] = name[t_name] >= sub_item.offsetHeight ? name[t_name] : sub_item.offsetHeight;
            } else {
                name[t_name] = sub_item.offsetHeight;
            }
        });
        $.each(Object.keys(name), (index, item) => {
            $("div[table_name=" + item + "]").css('height', name[item] + 'px');
        });
    },

    lookWheelUi: () => {
        var wheelStart = 0;
        $(".motiv_tbl.look_tbl .tbl_inner .tbl_body .look_body_box .look_body_list").on("mousewheel", function (e) {
            var wheel = e.originalEvent.deltaX;
            wheelStart = wheelStart - wheel;
            var motivrTbl = tableFlex.motivTblWidth - tableFlex.leftWidth - tableFlex.rightWidth;
            if (wheelStart >= 0) wheelStart = 0;
            if (wheelStart < motivrTbl) wheelStart = motivrTbl;
            $('.motiv_tbl .tbl_head .look_head_box .look_head_list .d_flex').css('transform', 'translateX(' + wheelStart + 'px');
            $('.motiv_tbl .tbl_body .look_body_box .look_body_list .d_flex').css('transform', 'translateX(' + wheelStart + 'px');
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    },

    //row html을 리턴합니다.
    returnRowHtml: (data, tbl_name) => {
        var html = '';
        if (tbl_name != undefined) {
            html = '<div class="row_item d_flex" table_name="' + tbl_name + '" style="width:' + data + 'px">';
        } else {
            html = '<div class="row_item d_flex" style="width:' + data + 'px">';
        }
        return html;
    },

    //hd_item을 html을 리턴합니다.
    returnHdHtml: (data, cont) => {
        var html = '';
        var contHtml = '';
        if (Array.isArray(cont)) {
            $.each(cont, (index, item) => {
                contHtml += '<div class="tbl_row"><div>' + item + '</div></div>'
            });
            html = '<div class="hd_item" style="width:' + data + 'px;">' + contHtml + '</div>';
        } else {
            html = '<div class="hd_item" style="width:' + data + 'px;"><div>' + cont + '</div></div>';
        }
        return html;
    },

    //실행에 필요한 데이터에 문제가 있을 경우 콘솔에 띄움니다.
    errChecked: (name) => {
        if (tableData.scrollLookSta && tableData.scrollLook.length <= 0) {
            console.log('스크롤락이 걸려야 하는 대상이 없습니다.');
        }
    },
}
$(document).ready( ()=> {
    tableFlex.init(tableData);
}) 
