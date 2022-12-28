
$(document).ready(function(){
    var accBox = $('#lnb .motiv_acc > li.nav_item');

    for(i = 0; i < accBox.length; i++){
        var acc = accBox.eq(i).children('.nav_menu');
        for (j = 0; j < acc.length; j++) {
            acc[j].addEventListener("click", function () {
                // this.classList.toggle("active");
                $(this).parent('li.nav_item').toggleClass('open');
                // $(this).parent('li.nav_item').parent().parent().toggleClass('active');
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }
    
    // var accBox2 = $('#lnb .motiv_acc > li.nav_item');

    // for(i = 0; i < accBox2.length; i++){
    //     var acc = accBox2.eq(i).children('.nav_menu');
    //     for (j = 0; j < acc.length; j++) {
    //         acc[j].addEventListener("click", function () {
    //             // this.classList.toggle("active");
    //             $(this).parent('li.nav_item').toggleClass('open');
    //             // $(this).parent('li.nav_item').parent().parent().toggleClass('active');
    //             var panel = this.nextElementSibling;
    //             if (panel.style.maxHeight) {
    //                 panel.style.maxHeight = null;
    //             } else {
    //                 panel.style.maxHeight = panel.scrollHeight + "px";
    //             }
    //         });
    //     }
    // }


    if(location.href.indexOf('github') != -1){
        githubUi.ini();
    }
});

var githubUi = {
    ini: () => {
        console.log('github')
    },

}