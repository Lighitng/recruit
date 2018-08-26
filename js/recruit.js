$("#submit").click(function () {
	handleSubmit();
})

var SEL = SEL || {};


function handleSubmit() {
	var form = handleSerialize();
	if(form){
		//submit
	}
	else{
		//error_msg
	}
	//var form = new FormData();
	//var name = $("input#name").val();
	//var gender = $("input[name='gender']:checked").val();
}
function handleSerialize() {
	var form = new FormData();
	var element = ['name', 'gender', 'school', 'dorm', 'tele', 'fir', 'sec', 'obey'];
	var name = $("input[name='name']").val();
	var gender = $("input[name='gender']:checked").val();
	var school = $("select[name='school']").find("option:selected").text();
	var dorm = $("input[name='dorm']").val();
	var tele = $("input[name='tele']").val();
	var fir = $("select[name='fir']").find("option:selected").text();
	var sec = $("select[name='sec']").find("option:selected").text();
	var obey = $("input[name='obey']:checked").val();
	var ary = new Array(name, gender, school, dorm, tele, fir, sec, obey);
	console.log("ary: "+ary+'\n');
	for(var i = 0; i < 8; ++i){
		form.append(element[i], ary[i]);
		console.log(element[i]+" : "+ary[i]+'\n');
	}
	return form;
}