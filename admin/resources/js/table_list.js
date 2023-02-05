
var tFlex = {
    ckbSize: 40,
    init: (obj) => {
        //체크박스 유무 확인을 합니다.
        if($('#'+ obj.id +' .motiv_tbl .hd_item[keyname=checkedbox]').length == 0){
            //체크박스가 없다면 tFlex.ckbSize 을 0으로 변경합니다.
            tFlex.ckbSize = 0;
        } else {
            $('#'+ obj.id +' .motiv_tbl .hd_item[keyname=checkedbox]').css('width', tFlex.ckbSize+'px');
        }
        //전체 데이터의 넓이를 구하기 시작합니다.
        obj.totalSize = tFlex.ckbSize; 
        //순차적으로 값을 계산하기 위해 Promise를 사용합니다.
        Promise.resolve()
        .then(() => {
            //체크박스 넓이를 제외한 데이터 전체 넓이를 계산합니다.
            tFlex.tableSize(obj);
        })
        .then(() => {
            var reSize = 0;//사이즈를 다시 체크하기 위한 여비 변수 입니다.
            //데이터의 전체 넓이가 테이블의 넓이보다 작을 경우에 각 데이터의 넓이를 테이블의 넓이에 맞게 변경합니다.
            if($('#'+ obj.id).find('.tbl_inner').width() > obj.totalSize){
                //전체 데이터의 넓이를 다시 구하기 시작합니다.
                var reTotalSize = tFlex.ckbSize;
                //테이블의 넓이와 데이터 넓이를 뺀 값에 데이터 갯수를 나눠 데이터 각각에 나눠주기 위한 값을 계산합니다.
                reSize = ($('#'+ obj.id).find('.tbl_inner').width() - obj.totalSize) / Object.keys(obj.tableSize).length;
                $.each( obj.tableSize, (name, val) => {
                    //전달받은 데이터 각각의 값에 reSize값을 더합니다.
                    obj.tableSize[name] = val + reSize;
                    reTotalSize = reTotalSize + val + reSize;
                });
                //다시 구한 전체 넓이로 값을 변경합니다.
                obj.totalSize = reTotalSize;
            }

            //계산이 끝난 데이터 넓이를 hd_item 각각 추가합니다.
            $.each( obj.tableSize, (name, size) => $('#'+ obj.id +' .motiv_tbl .hd_item[keyname='+ name +']').css('width', size +'px') );
            //테이블 리스트의 스크롤을 넣기 위해 전체 넓이를 추가합니다.
            $('#'+ obj.id +' .motiv_tbl').find('.tbl_body').css('width', obj.totalSize +'px');
            //리스트의 형태를 잡기 위해 넓이를 추가합니다.
            $('#'+ obj.id +' .motiv_tbl').find('.row_item').css('width', obj.totalSize +'px');
            
            //item_row가 있을 경우 실행됨니다.
            if($('#'+ obj.id).find('.item_row').length > 0){
                //item_row 넓이값을 구하기 위해 필요한 값을 구합니다.
                $.each( $('#'+ obj.id).find('.hd_item'), (index, target) => {
                    var hdItem = $('#'+ obj.id).find('.hd_item').eq(index);
                    if(hdItem.hasClass('item_row')){
                        hdItem.css('width', tFlex.rowItemTh(hdItem, obj));
                    }
                });
            }
            //브라우져의 사이즈가 변경될때 대비합니다.
            $(window).on('resize', function(){
                tFlex.reSizeChange(obj);
            });

            //lnb 이벤트가 발생할 경우 테이블의 넓이조정이 필요할때 구동될 이벤트 입니다.
            //주 대상은 데이터 전체 넓이가 데이블 넓이보다 작을 경우에 주 대상입니다.
            const $target = document.querySelector('#'+ obj.id +' .tbl_inner');
            const observer = new ResizeObserver((entries) => {
                tFlex.reSizeChange(obj);
            });
            observer.observe($target);  // 크기변화를 관찰할 요소지정
        })
    },

    //리사이즈 및 lnb 이벤트가 발생할때 값을 다시 구합니다.
    //함수 내용은 위와 동일 합니다.
    reSizeChange: (obj) => {
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
        $('#'+ obj.id +' .motiv_tbl').find('.tbl_body').css('width', obj.totalSize +'px');
        $('#'+ obj.id +' .motiv_tbl').find('.row_item').css('width', obj.totalSize +'px');
        $.each( $('#'+ obj.id).find('.hd_item'), (index, target) => {
            var hdItem = $('#'+ obj.id).find('.hd_item').eq(index);
            if(hdItem.hasClass('item_row')){
                hdItem.css('width', tFlex.rowItemTh(hdItem, obj));
            }
        });
    },

    //데이터의 전체 넓이를 구하기 위한 함수 입니다.
    tableSize: (obj) => {
        $.each( obj.tableSize, (name, size) => obj.totalSize = obj.totalSize + size);
    },

    //item_row의 넓이를 계산하는 함수 입니다.
    rowItemTh: (target, obj) => {
        //item_row 포함된 데이터 객체의 넓이를 구하기 위한 변수입니다.
        var itemThSize = 0;
        //item_row 포함된 데이터를 찾습니다.
        var targetCh = target.children('.item_row_tbl').children('div');
        $.each(  targetCh, (index, size) => {
            //대상의 keyname을 찾습니다.
            var keynameSize = obj.tableSize[targetCh.eq(index).attr('keyname')];
            //찾은 대상에게 해당하는 데이터의 넓이를 부여합니다.
            targetCh.eq(index).css('width', keynameSize+'px');
            itemThSize = itemThSize + keynameSize;
        });
        target.css('width', itemThSize);
    },
}

//리스트 테이블중 일부가 고정일경우 사용할 함수입니다.
var tFlexLock = {
    ckbSize: 40,
    init: (obj) => {
        //체크박스 유무 확인을 합니다.
        if($('#'+ obj.id +' .motiv_tbl .hd_item[keyname=checkedbox]').length == 0){
            tFlexLock.ckbSize = 0;
        } else {
            $('#'+ obj.id +' .motiv_tbl .hd_item[keyname=checkedbox]').css('width', tFlexLock.ckbSize+'px');
        }
        //전체 데이터의 넓이를 구하기 시작합니다.
        obj.totalSize = tFlexLock.ckbSize; 
        var motivTblW = 0;
        var scrollRowSize = 0;
        var scrollRowBoxSize = 0;
        var reSize = 0;
        var scrollTableName = new Array(); 
        var reScrollRowSize = 0;
        //일반 테이블 리스트를 재활용하기 위해 클래스를 추가합니다.
        $('#'+ obj.id +' .motiv_tbl').addClass('lock_tbl');

        //순차적으로 값을 계산하기 위해 Promise를 사용합니다.
        Promise.resolve()
        .then(() => {
            //고정되는 리스트와 스크롤 되는 리스트의 row_num을 추가합니다.
            tFlexLock.rowItem('look_body_head', obj);
            tFlexLock.rowItem('look_body_box', obj);
        })
        .then(() => {
            //고정되는 리스트와 스크롤 되는 리스트의 높이를 체크하여 더 높은 값으로 통일 시킴니다.
            tFlexLock.rowItems('look_body_head', obj);
        })
        .then(() => {
            //체크박스 넓이를 제외한 데이터 전체 넓이를 계산합니다.
            //hd_item에 해당 데이터 넓이를 추가합니다.
            
            $.each( obj.tableSize, (name, size) => {
                $('#'+ obj.id +' .motiv_tbl .hd_item[keyname='+ name +']').css('width', size +'px');
                //전체 데이터 name을 배열에 저장합니다.
                scrollTableName.push(name);
                obj.totalSize = obj.totalSize + size;
            });

            //고정되는 리스트의 넓이를 구합니다.
            obj.scrollLookSize = tFlexLock.ckbSize;
            $.each( obj.scrollLook, (index, name) => {
                obj.scrollLookSize = obj.scrollLookSize + obj.tableSize[name];
                //스크롤 리스트의 데이터 객체만 변수에 저장합니다.
                for(let i = 0; i < scrollTableName.length; i++) {
                    //scrollTableName 에서 obj.scrollLook 데이터만 삭제 시킴니다.
                    if (scrollTableName[i] === name) scrollTableName.splice(i, 1);
                }
            });

            //item_row가 있을 경우 실행됨니다.
            if($('#'+ obj.id).find('.item_row').length > 0){
                //item_row 넓이값을 구하기 위해 필요한 값을 구합니다.
                $.each( $('#'+ obj.id).find('.hd_item'), (index, target) => {
                    var hdItem = $('#'+ obj.id).find('.hd_item').eq(index);
                    if(hdItem.hasClass('item_row')){
                        hdItem.css('width', tFlexLock.rowItemTh(hdItem, obj));
                    }
                });
            }

            //테이블의 전체 넓이를 구합니다.
            motivTblW = $('#'+ obj.id +' .motiv_tbl').width();
            scrollRowSize = obj.totalSize - obj.scrollLookSize;
            scrollRowBoxSize = motivTblW - obj.scrollLookSize;
            reSize = 0;//사이즈를 다시 체크하기 위한 여비 변수 입니다.

            if(($('#'+ obj.id).find('.tbl_inner').width() - obj.scrollLookSize) > scrollRowSize){
                //데이터의 전체 넓이가 테이블의 넓이보다 작을 경우에 각 데이터의 넓이를 테이블의 넓이에 맞게 변경합니다.
                //전체 데이터의 넓이를 다시 구하기 시작합니다.
                
                //테이블의 넓이와 데이터 넓이를 뺀 값에 데이터 갯수를 나눠 데이터 각각에 나눠주기 위한 값을 계산합니다.
                reSize = (scrollRowBoxSize - scrollRowSize) / scrollTableName.length;
                $.each( scrollTableName, (index, name) => {
                    // console.log( obj.tableSize[name], index, name )
                    //전달받은 데이터 각각의 값에 reSize값을 더합니다.
                    obj.tableSize[name] = obj.tableSize[name] + reSize;
                    reScrollRowSize = reScrollRowSize + obj.tableSize[name];
                    // console.log( index, obj.tableSize[name])
                });
                //다시 구한 전체 넓이로 값을 변경합니다.
            } else {
                reScrollRowSize = scrollRowSize;
            }
        })
        .then(() => {
            
            //look_body_head의 th영역은 고정되는 영역이라 동일 한값을 같습니다.
            $('#'+ obj.id +' .motiv_tbl').find('.look_body_head, .look_body_head .row_item').css('width', obj.scrollLookSize +'px');
            //스크롤 리스트 영역의 look_body_box 넓이는 테이블의 넓이에서 고정 테이블의 넓이를 뺀 값을 추가합니다.
            $('#'+ obj.id +' .motiv_tbl').find('.look_body_box').css('width', scrollRowBoxSize +'px');
            //스크롤 리스트의 row_item은 고정되는 테이블의 데이터 넓이를 뺀 나머지 넓이값을 추가 합니다.
            $('#'+ obj.id +' .motiv_tbl').find('.look_body_box .row_item').css('width', scrollRowSize +'px');

            //lnb 이벤트가 발생할 경우 테이블의 넓이조정이 필요할때 구동될 이벤트 입니다.
            //주 대상은 데이터 전체 넓이가 데이블 넓이보다 작을 경우에 주 대상입니다.
            const $target = document.querySelector('#'+ obj.id +' .tbl_inner');
            const observer = new ResizeObserver((entries) => {
                tFlexLock.reSizeChange(obj, scrollTableName, reScrollRowSize);
            });
            observer.observe($target);  // 크기변화를 관찰할 요소지정

            $(window).on('resize', function(){
                tFlexLock.reInit(obj);
            });
        })
        
    },

    //리사이즈 및 lnb 이벤트가 발생할때 값을 다시 구합니다.
    //함수 내용은 위와 동일 합니다.
    reSizeChange: (obj, scrollTableName, scrollRowSize) => {
        // console.log('reSizeChange', ($('#'+ obj.id).find('.tbl_inner').width() - obj.scrollLookSize) > scrollRowSize)
        var motivTblW = $('#'+ obj.id +' .motiv_tbl').width();
        var scrollRowBoxSize = motivTblW - obj.scrollLookSize;
        var reSize = 0;//사이즈를 다시 체크하기 위한 여비 변수 입니다.
        var reScrollRowSize = 0;
        
        $.each( obj.tableSize, (name, size) => {
            $('#'+ obj.id +' .motiv_tbl .hd_item[keyname='+ name +']').css('width', size +'px');
            //전체 데이터 name을 배열에 저장합니다.
            obj.totalSize = obj.totalSize + size;
        });

        //item_row가 있을 경우 실행됨니다.
        if($('#'+ obj.id).find('.item_row').length > 0){
            //item_row 넓이값을 구하기 위해 필요한 값을 구합니다.
            $.each( $('#'+ obj.id).find('.hd_item'), (index, target) => {
                var hdItem = $('#'+ obj.id).find('.hd_item').eq(index);
                if(hdItem.hasClass('item_row')){
                    hdItem.css('width', tFlexLock.rowItemTh(hdItem, obj));
                }
            });
        }

        $('#'+ obj.id +' .motiv_tbl').find('.look_body_box').css('width', scrollRowBoxSize +'px');
        //스크롤 리스트의 row_item은 고정되는 테이블의 데이터 넓이를 뺀 나머지 넓이값을 추가 합니다.
        $('#'+ obj.id +' .motiv_tbl').find('.look_body_box .row_item').css('width', scrollRowSize +'px');
        
    },


    reInit: (obj) => {
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
