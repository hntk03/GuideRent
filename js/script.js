function CalcGuideRent(){
	// 賃料
	let rent = document.getElementById("rent").value;
	// 共益費・管理費
	let manegementFee = document.getElementById("manegementFee").value;

	let guiderent = document.getElementById("guiderent").innerText = rent;
	guiderent.value = rent.value;
}

