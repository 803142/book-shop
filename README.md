# Angular 2021Q1
## №1: Intro
Создание проекта:
  - [x] С использованием angular-cli создайте новый проект (ng new bookShop) и загрузите его на гитхаб в репозиторий с названием book-shop.
  - [x] В package.json заменить содержимое команды start на ng lint && ng serve -o.

## №2: Components

## Требования:

 - [x]  Создать компонент `BookComponent`. Используйте его в `AppComponent`. Модель книг `BookModel` описать интерфейсом:  
   • `name`: _string_;  
   • `description`: _string_;  
   • `price`: _number_;  
   • `category`: _enum_ (Создайте enum с несколькими категориями);  
   • `createDate`: _number_;  
   • `isAvailable`: _boolean_;
 - [x]  Вывести свойства `BookComponent` в его темплейте. 3. Добавить кнопку `Buy` в шаблон `BookComponent`. Реализовать обработчик события `onBuy` по нажатию на кнопку `Buy`, который должен добавлять книгу в корзину. `BookComponent` реализовать как презентационный компонент с `input` и `output`, без зависимостей. Если товара нет, кнопку `Buy` делать недоступной.
 - [x]  Создать компонент `CartComponent` и использовать в `AppComponent` темплейте. Создать `CartItemComponent` и использовать внутри `CartComponent`. Компонент `CartItemComponent` должен отображать приобретенную книгу и колличество единиц данного экземпляра. Реализовать возможности: изменить количество товара, удалить товар из корзины.
 - [x]  Для взаимодействия между компонентами использовать декораторы: `@Input()`, `@Output()`.
 - [x]  По возможности использовать `OnPush` стратегию для презентационных компонентов (`BookComponent`, `CartItemComponent`).
 - [x]  По возможности использовать два или более метода-хука жизненного цикла компонента.
 - [x]  Использовать различные DOM событие (`click`, `wheel`, `blur`...).
 - [x]  Добавить в разметку AppComponent элемент <h1 #appTitle></h1> с шаблонной переменной. Использовать `@ViewChild`, получить доступ к DOM-элементу темплейта, установить заголовок для приложения из класса.