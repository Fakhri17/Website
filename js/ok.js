// Klik Link
$ ('.page-scroll').on('click', function(e) {

	//href
	var tujuan = $(this).attr('href');
	
	//elemen
	var elemenTujuan = $(tujuan);

	//scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'linear');
	


	e.preventDefault();

});