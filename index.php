<?PHP
/*

	# Version : 2022 06 23
	# demo : https://aurelien.grimpard.net/outils-tutoriels-et-projets/lorem-ipsum-normaund/

*/
?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Lorem ipsum generator</title>
		<link href="tpl/bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<link href="tpl/app.css?<?PHP echo time(); ?>" rel="stylesheet">
		<script src="tpl/jquery.js"></script>
		<script src="tpl/bootstrap/js/bootstrap.bundle.min.js"></script>
		<script src="tpl/app.js?<?PHP echo time(); ?>"></script>
	</head>
	<body>

		<div class="container mt-4">

			<h1><strong>Lorem ipsum</strong> <em>generator</em></h1>

			<div class="lorem-opt row py-3">
				<div class="col-1">
					<button class="btn btn-lg btn-primary regen-lorem" type="button">GEN</button>
				</div>
				<div class="col-7">
					<div class="form-floating d-inline-block float-start me-3" style="max-width:200px">
						<input id="opt_pnb" type="number" data-opt="prnb" class="form-control form-control-lg" value="5" placeholder="5" list="prnb-list" autocomplete="off">
						<label for="opt_pnb">Paragraphs</label>
					</div>
					<button class="btn btn-lg btn-outline-dark opt-lorem" type="button" data-opt="head">H</button>
					<button class="btn btn-lg btn-outline-dark opt-lorem" type="button" data-opt="bold">B</button>
					<button class="btn btn-lg btn-outline-dark opt-lorem" type="button" data-opt="itlc">I</button>
					<button class="btn btn-lg btn-outline-dark opt-lorem" type="button" data-opt="lien">A</button>
					<button class="btn btn-lg btn-outline-dark opt-lorem" type="button" data-opt="ulli">UL</button>
					<button class="btn btn-lg btn-outline-dark opt-lorem" type="button" data-opt="olli">OL</button>
				</div>
				<div class="col-3">
					<button class="btn btn-lg btn-outline-secondary show-lorem" type="button" data-opt="2">TEXT</button>
					<button class="btn btn-lg btn-secondary show-lorem sel" type="button" data-opt="0">HTML</button>
					<button class="btn btn-lg btn-outline-secondary show-lorem" type="button" data-opt="1">TAGS</button>
				</div>
				<div class="col-1">
					<button class="btn btn-lg btn-outline-success lorem-cc" type="button">CC</button>
				</div>
			</div>

			<div class="clearfix"></div>
			<div class="divider divider-center m-0 my-3"></div>
			<div class="lorem-ajax"></div>

		</div>

	</body>
</html>