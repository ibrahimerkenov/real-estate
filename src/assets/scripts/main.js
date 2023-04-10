// Полифил для IE метода forEach
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


// Переменные
const menuLink = document.querySelector(".menu-link"),
			sidebar = document.querySelector(".sidebar"),
			widgets = document.querySelectorAll(".widget"),
			cardsHidden = document.querySelectorAll(".card--hidden"),
			distanceSomeCheckboxs = document.querySelectorAll("[data-some-checkbox]"),
			distanceCheckboxAny = document.querySelector("#distance-to-metro-5"),
			addOptionsShowMoreBtn = document.querySelector(".add-options__show-more"),
			addOptionsCheckboxHidden = document.querySelectorAll(".add-options__checkbox--hidden"),
			btnResetCheckbox = document.querySelector(".form-btn--reset"),
			allInputs = document.querySelectorAll("input"),
			btnSubmit = document.querySelector(".form-btn--apply");

// Показ/скрытие фильтра на мобильных устройствах
menuLink.addEventListener("click", () => {
  menuLink.classList.toggle("menu-link--active");
  sidebar.classList.toggle("sidebar--active");
  document.body.classList.toggle("overflow-hidden");
});

// Показ/скрытие контента при клике по соответствующему заголовку
widgets.forEach(item => {
  item.addEventListener("click", (e) => {
	  if (e.target.classList.contains("widget__title")) {
	  	const widget = e.target
	  	widget.classList.toggle("widget__title--active");
	  	const widgetBody = widget.nextElementSibling;
	  	widgetBody.classList.toggle("widget__body--hidden");
	  }
	});
})

// Выбор чекбокса "Любая" и сброс остальных
distanceCheckboxAny.addEventListener("change", () => {
  if (distanceCheckboxAny.checked) {
  	distanceSomeCheckboxs.forEach(item => {
  	  item.checked = false;
  	})
  }
});

// Выбор какого-либо из чекбоксов, кроме "Любая"
// Если она выбрана, то сбрасываем ее
distanceSomeCheckboxs.forEach(item => {
  item.addEventListener("change", () => {
  	if (distanceCheckboxAny.checked) {
  		distanceCheckboxAny.checked = false;
  	}
  });
});

// Показ/скрытие чекбоксов в разделе "Доп. опции"
// по клику на кнопку "Показать еще"
addOptionsShowMoreBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const showValue = addOptionsShowMoreBtn.dataset.showValue;
	if (showValue === "hidden") {
		addOptionsCheckboxHidden.forEach(item => {
			item.classList.remove("add-options__checkbox--hidden")
		});
		addOptionsShowMoreBtn.textContent = "Скрыть";
		addOptionsShowMoreBtn.dataset.showValue = "visible";
	} else if (showValue === "visible") {
		addOptionsCheckboxHidden.forEach(item => {
			item.classList.add("add-options__checkbox--hidden")
		});
		addOptionsShowMoreBtn.textContent = "Показать еще";
		addOptionsShowMoreBtn.dataset.showValue = "hidden";
	}
});

// Сброс всех фильтров (чекбоксов)
btnResetCheckbox.addEventListener("click", (e) => {
  e.preventDefault();
  allInputs.forEach(item => {
    item.checked = false;
  })
});

// Применение фильтров
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
});

// Получаем JSON карточек get запросом
const requestUrl = "json/real-estate.json",
			xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
		// При успешном запросе, сохраняем ответ сервера в переменной data
		// и вызываем функцию loadRealEstate с аргументом data
    if (this.readyState === 4 && this.status === 200) {
       const data = JSON.parse(xhr.response);
       loadRealEstate(data)
    }
};

xhr.open("GET", requestUrl);

xhr.send();

// Загрузка карточек на страницу
function loadRealEstate(data) {
	const dataBase = data,
				// Вставка карточек в div.cards-holder
				cards = document.getElementById("cards-holder"),
				// Div пагинации
				pagination = document.getElementById("pagination");
		// Количество показываемых карточек
		let countShowCard = 6,
				// Вычисление количества кнопок пагинации
				countPaginationItem = Math.ceil(dataBase.length / countShowCard);
	// Вставка кнопок пагинации
	for (let i = 1; i <= countPaginationItem; i++) {
		pagination.insertAdjacentHTML("beforeend", `
			<li class="pagination__item">${i}</li>
		`);
	}
	// Массив кнопок пагинации
	const paginationItems = document.querySelectorAll(".pagination__item");
	// При загрузке страницы вставляем нужную часть карточек по желанию
	// По умолчанию активной будет первая часть карточек, т.е кнопка 1
	showCards(paginationItems[0], dataBase)
	// Перебираем массив с кнопками пагинации и 
	// вызываем на каждом функцию showCards
	for (let item of paginationItems) {
		item.addEventListener("click", function () {
    	showCards(item, dataBase)
    	window.scrollTo({
    		top: 0,
    		behavior: "smooth"
    	})	
    });
	}
	// Функция показа карточек
	function showCards(item, data) {
  	// Удаляем активный класс с текущей кнопки
		// перед тем, как добавить его к нажатой кнопке
		let activePaginationItem = document.querySelector('.pagination__item--active');
  	if (activePaginationItem) {
  		activePaginationItem.classList.remove('pagination__item--active')
  	}
  	// Добавляем активный класс для нажатой кнопки пагинации
  	item.classList.add('pagination__item--active')
  	// pageNum - число кнопки пагинации
  	// start - откуда начать вырезания
  	// end - до куда вырезать (не включительно)
  	// newRealEstate - массив вырезанных карточек нужного кол-ва
  	let pageNum = +item.innerHTML,
  			start = (pageNum - 1) * countShowCard,
  			end = start + countShowCard,
  			newRealEstate = data.slice(start, end);
  	// При каждом клике очищаем предыдущую вставку карточек
  	cards.innerHTML = "";
  	// Перебор и вставка карточек из вырезанного массива в div.cards-holder
  	newRealEstate.forEach(item => {
  	 	cards.insertAdjacentHTML("beforeend", `
  	 		<a class="card" href="#">
  	 			<div class="card__offers">
  	 				<p class="card__offer card__offer--class">${item.class}</p>
  	 				<p class="card__offer card__offer--credit">${item.credit}</p>
  	 			</div>
  	 			<div class="card__img">
  	 				<img src=${item.image} alt=${item.name}>
  	 			</div>
  	 			<div class="card__content">
  	 				<h4 class="card__title">${item.name}</h4>
  	 				<div class="card__term">${item.term}</div>
  	 				<div class="card__metro">${item.metro}</div>
  	 				<div class="card__address">${item.address}</div>
  	 			</div>
  	 		</a>
  	 	`);
  	})

		const card = document.querySelectorAll(".card");
		
		card.forEach((item) => {
		  item.addEventListener("click", (e) => {
		    e.preventDefault();
		  });
		})
	
	}
}





// // Фильтр товаров
// const filters = document.querySelector('#filters');
// filters.addEventListener('input', filterRealEstate);

// function filterRealEstate() {

//   let
//     proximityToMetro = [...filters.querySelectorAll('.distance-to-metro__checkbox:checked')].map(item => item.value),
//     deadline = filters.querySelector('.deadline__real-radio:checked').value,
//     addOptions = [...filters.querySelectorAll('.add-options__real-checkbox:checked')].map(item => item.value);

//     console.log([...proximityToMetro, ...addOptions, deadline])

// }