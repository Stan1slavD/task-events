/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let el = document.createElement('button');
    el.textContent = 'Удали меня';
    document.body.append(el);
    el.addEventListener('click', () => document.body.removeChild(el));
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let el = document.createElement('ul');
    document.body.append(el);
    for (let i in arr) {
        let el_li = document.createElement('li');
        el_li.textContent = arr[i];
        el_li.addEventListener('mouseover', () =>
            el_li.setAttribute('title', arr[i]),
        );
        el.append(el_li);
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/

export function createLink() {
    let el = document.createElement('a');
    el.href = 'https://tensor.ru/';
    el.textContent = 'tensor';
    el.addEventListener(
        'click',
        (event) => {
            event.preventDefault();
            el.textContent = el.textContent + ' ' + el.href;
        },
        { once: true },
    );
    document.body.append(el);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let el_ul = document.createElement('ul');
    document.body.append(el_ul);
    createLi(el_ul);
    let el_btn = document.createElement('button');
    el_btn.textContent = 'Добавить пункт';
    document.body.append(el_btn);
    el_btn.addEventListener('click', () => {
        createLi(el_ul);
    });
}

function createLi(el_ul) {
    let el_li = document.createElement('li');
    el_ul.append(el_li);
    el_li.textContent = 'Пункт';
    el_li.addEventListener(
        'click',
        () => (el_li.textContent = el_li.textContent.concat('!')),
    );
}
