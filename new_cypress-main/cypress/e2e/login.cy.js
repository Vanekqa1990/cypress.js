describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru') // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1') // ввели верный пароль
         cy.get('#loginButton').click(); // нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // вижу текст после авторизации
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
      
     })

     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').click(); // нажал забыл пароль
        cy.get('#mailForgot').type('azarikkk@yandex.ru') // ввёл почту
        cy.get('#restoreEmailButton').click(); // нажал отправить код
        cy.get('#message').contains('Успешно отправили пароль на e-mail');// вижу текст после отправки кода
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю

    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru') // ввели верный логин
        cy.get('#pass').type('iLoveqastudio12') // ввели неверный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#message').contains('Такого логина или пароля нет');// вижу текст после ввода не верного пароля
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
     
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov123.ru') // ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1') // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#message').contains('Такого логина или пароля нет'); // вижу текст после ввода не верного логина
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
     
    })

    it('Проверяю что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('germandolnikov.ru') // ввели логин без @
        cy.get('#pass').type('iLoveqastudio1') // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#message').contains('Нужно исправить проблему валидации'); // вижу текст после ввода логина без @
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
     
    })

    it('Проверяю на строчные буквы в логине', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru') // ввели логин с строчными буквами
        cy.get('#pass').type('iLoveqastudio1') // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#message').contains('Такого логина или пароля нет'); // вижу текст после ввода логина с строчными буквами
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
     
    })
 })
 
 
 
