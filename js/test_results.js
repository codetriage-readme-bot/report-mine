$(document).ready(function() {

    $.getJSON('../data/result.json', function(jd) {

        test_list = jd.report.tests;
        for(i=0; i<test_list.length; i++){
            if (test_list[i].outcome == "failed"){
                $(".container tbody").append("<tr id='table-row-"+i+"'><td>" + fetch_module_name(test_list[i].name)
                +
                "</td><td>"
                +
                fetch_test_name(test_list[i].name)
                +
                "</td><td><a onclick='showModal("+i+");'>Show Failure Trace</a></td><td>"
                +
                has_artifact()
                +
                "</td></tr>");
              }
            }
        }).then(function(){
                var url = window.location.href;
                hash = url.split("?")[1];
                if(hash !== undefined){
                    filter_module = hash.split("=")[1];
                    var table = document.querySelector("table");
                    var rows = table.rows;
                    for (var i = 1; i < rows.length; i++) {
                        if(rows[i].cells[0].innerHTML != filter_module){
                            rows[i].remove();
                            i = i - 1;
                        }
                    }
                }
        });


});


function fetch_module_name(name_string){

    module_name = name_string.split("::")[1];
    return module_name;

}

function fetch_test_name(name_string){

    module_name = name_string.split("::")[2];
    return module_name;

}

function has_artifact(){
    return true;
}
