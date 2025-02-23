class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
        if (this.state > 100) {
            this.state = 100;
        }
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

console.log(sherlock.releaseDate); // 2019
console.log(sherlock.state); // 100
sherlock.fix();
console.log(sherlock.state); // 100

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);

console.log(picknick.author); // "Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); // 10
picknick.fix();
console.log(picknick.state); // 15


class Library {
    constructor(name) {
        this.name = name; // Название библиотеки
        this.books = []; // Хранилище книг (пустой массив)
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book); // Добавляем книгу, если её состояние > 30
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
        // Возвращаем найденную книгу или null, если книга не найдена
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
        if (index !== -1) {
            return this.books.splice(index, 1)[0];
        }
        return null;
    }
}

// Создаем библиотеку
const library = new Library("Библиотека имени Ленина");

// Добавляем книги и журналы
library.addBook(
    new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
    )
);
library.addBook(
    new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
    )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));


console.log(library.findBookBy("name", "Властелин колец"));
console.log(library.findBookBy("releaseDate", 1924).name);


console.log("Количество книг до выдачи: " + library.books.length);


const givenBook = library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length);


if (givenBook) {
    givenBook.state = 20;
    console.log("Состояние выданной книги: " + givenBook.state);
}

if (givenBook) {
    givenBook.fix();
    console.log("Состояние восстановленной книги: " + givenBook.state);
}


library.addBook(givenBook);
console.log("Количество книг после попытки добавления: " + library.books.length);