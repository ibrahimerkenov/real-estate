<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="utf-8">
	<!-- Name site title -->
	<title>Недвижимость</title>
	<!-- Meta tag -->
	<meta name="author" content="">
	<meta name="description" lang="ru" content="">
	<meta name="keywords" lang="ru" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Load CSS Compiled-->
	<link rel="shortcut icon" href="img/favicon/favicon.ico" type="image/x-icon">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="libs/normalize/normalize.css">
	<link rel="stylesheet" href="css/style.min.css">
</head>

<body>
	<button class="menu-link"><span></span></button>
	<div class="container">
		<div class="row">
			<main class="main">
				<!-- Cards holder -->
				<div class="cards-holder" id="cards-holder"></div>
				<!-- // Cards holder -->
				<!-- Pagination -->
				<ul class="pagination" id="pagination"></ul>
				<!-- // Pagination -->
			</main>
			<aside class="sidebar">
				<form class="filters" id="filters" action="#">
					<!-- Widgets -->
					<div class="widget">
						<div class="widget__title">Близость к метро</div>
						<div class="widget__body">
							<div class="distance-to-metro">
								<div class="distance-to-metro__row">
									<input class="distance-to-metro__checkbox" data-some-checkbox type="checkbox" id="distance-to-metro-1" value="0" checked>	
									<label class="distance-to-metro__btn" for="distance-to-metro-1">&lt; 10</label>
									<input class="distance-to-metro__checkbox" data-some-checkbox type="checkbox" id="distance-to-metro-2" value="10" checked>
									<label class="distance-to-metro__btn" for="distance-to-metro-2">10-20</label>
									<input class="distance-to-metro__checkbox" data-some-checkbox type="checkbox" id="distance-to-metro-3" value="20">
									<label class="distance-to-metro__btn" for="distance-to-metro-3">20-30</label>
									<input class="distance-to-metro__checkbox" data-some-checkbox type="checkbox" id="distance-to-metro-4" value="30">
									<label class="distance-to-metro__btn" for="distance-to-metro-4">30+</label>
								</div>
								<div class="distance-to-metro__row">
									<input class="distance-to-metro__checkbox" type="checkbox" id="distance-to-metro-5"  value="Любая">
									<label class="distance-to-metro__btn" for="distance-to-metro-5">Любая</label>
								</div>
							</div>
						</div>
					</div>		
					<div class="widget">
						<div class="widget__title">Срок сдачи</div>
						<div class="widget__body">
							<div class="deadline">
								<label class="deadline__radio">
									<input type="radio" class="deadline__real-radio" name="deadline-radio" value="Любой" checked>
									<span class="deadline__fake-radio"></span>
									<span class="deadline__title">Любой</span>
								</label>
								<label class="deadline__radio">
									<input type="radio" class="deadline__real-radio" name="deadline-radio" value="was passed">
									<span class="deadline__fake-radio"></span>
									<span class="deadline__title">Сдан</span>
								</label>
								<label class="deadline__radio">
									<input type="radio" class="deadline__real-radio" name="deadline-radio" value="2020">
									<span class="deadline__fake-radio"></span>
									<span class="deadline__title">В этом году</span>
								</label>
								<label class="deadline__radio">
									<input type="radio" class="deadline__real-radio" name="deadline-radio" value="2021">
									<span class="deadline__fake-radio"></span>
									<span class="deadline__title">В следующем году</span>
								</label>
							</div>
						</div>
					</div>
					<div class="widget">
						<div class="widget__title">Дополнительные опции</div>
						<div class="widget__body">
							<div class="add-options">
								<label class="add-options__checkbox">
									<input type="checkbox" class="add-options__real-checkbox" name="add-options-checkbox1" value="yard without cars" checked>
									<span class="add-options__fake-checkbox"></span>
									<span class="add-options__title">Двор без машин</span>
								</label>
								<label class="add-options__checkbox">
									<input type="checkbox" class="add-options__real-checkbox" name="add-options-checkbox2" value="high ceilings">
									<span class="add-options__fake-checkbox"></span>
									<span class="add-options__title">Высокие потолки</span>
								</label>
								<label class="add-options__checkbox">
									<input type="checkbox" class="add-options__real-checkbox" name="add-options-checkbox3" value="panoramic windows">
									<span class="add-options__fake-checkbox"></span>
									<span class="add-options__title">Панорамные окна</span>
								</label>
								<label class="add-options__checkbox">
									<input type="checkbox" class="add-options__real-checkbox" name="add-options-checkbox4" value="there are pantries">
									<span class="add-options__fake-checkbox"></span>
									<span class="add-options__title">Есть кладовые</span>
								</label>
								<label class="add-options__checkbox">
									<input type="checkbox" class="add-options__real-checkbox" name="add-options-checkbox5" value="low-rise">
									<span class="add-options__fake-checkbox"></span>
									<span class="add-options__title">Малоэтажный</span>
								</label>
								<label class="add-options__checkbox add-options__checkbox--hidden">
									<input type="checkbox" class="add-options__real-checkbox" name="add-options-checkbox6" value="playground">
									<span class="add-options__fake-checkbox"></span>
									<span class="add-options__title">Детская площадка</span>
								</label>
								<label class="add-options__checkbox add-options__checkbox--hidden">
									<input type="checkbox" class="add-options__real-checkbox" name="add-options-checkbox7" value="parking">
									<span class="add-options__fake-checkbox"></span>
									<span class="add-options__title">Парковка</span>
								</label>
								<label class="add-options__checkbox add-options__checkbox--hidden">
									<input type="checkbox" class="add-options__real-checkbox" name="add-options-checkbox8" value="sportground">
									<span class="add-options__fake-checkbox"></span>
									<span class="add-options__title">Спортивная площадка</span>
								</label>
							</div>
							<button class="add-options__show-more" data-show-value="hidden">Показать ещё</button>
						</div>
					</div>	
					<div class="widget">
						<div class="widget__body">
							<label class="services__checkbox">
								<input type="checkbox" class="services__real-checkbox" name="services-checkbox" value="Услуги 0%" checked>
								<span class="services__fake-checkbox"></span>
								<span class="services__title">Услуги 0%</span>
							</label>
						</div>
					</div>
					<div class="widget">
						<div class="widget__body">
							<button type="submit" class="form-btn form-btn--apply">
								<p class="form-btn__text">Применить фильтры</p>
							</button>
							<button class="form-btn form-btn--reset">
								<img class="form-btn__icon" src="img/svg/close.svg" alt="Close">
								<p class="form-btn__text">Сбросить фильтры</p>
							</button>
						</div>
					</div>
					<!-- // Widgets -->
				</form>
			</aside>
		</div>
	</div>

	<!-- Load Scripts Start -->
	<script src="libs/jquery/jquery-3.5.1.min.js"></script>
	<script src="js/main.min.js"></script>
	<!-- Load Scripts End -->

</body>
</html>