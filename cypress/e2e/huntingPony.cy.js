it('Проверка HuntingPony', function () {
    cy.visit('https://huntingpony.com/');
    cy.get('[data-index="0"] > .header__collections-controls > .header__collections-link').click();
    cy.wait(2000);
    cy.get('[data-product-id="338933151"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
    cy.wait(2000);
    cy.get('.add-cart-counter__btn-label').click();
    cy.wait(3000);
    cy.get('[data-add-cart-counter-plus=""]').click();
    cy.wait(3000);
    cy.get('.header__cart > .icon').click();
    cy.wait(2000);
    cy.get('.cart-controls > .button').click();
    cy.get('#client_surname').type('Давыдов');
    cy.get('#client_contact_name').type('Алексей');
    cy.get('#client_phone').type('89250000000');
    cy.get('#client_email').type('0007282@bk.ru');
    cy.get('#shipping_address_street').type('Пионерская');
    cy.get('#shipping_address_house').type('30');
    cy.get('#checkout_buyer_fields > .co-input--required > .co-input-select > .co-input-field').select('Мальчик');
    cy.get('#create_order').click();
})