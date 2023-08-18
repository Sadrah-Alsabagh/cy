///reference types ="cypress"/>

describe('Sign up & login test', () => {
    let name = "sedra__33";
    let password="sedra@123";

    beforeEach(() => {
        cy.visit("https://automationteststore.com/index.php?rt=account/login");
    });

    //Sign up test
    it('sign up', () => {
        // cy.visit("https://automationteststore.com/index.php?rt=account/login")
        cy.get('#accountFrm > fieldset > .btn').click();
        cy.get('#AccountFrm_firstname').type("Sedra");
        cy.get('#AccountFrm_lastname').type("Alsabbagh");
        cy.get('#AccountFrm_email').type("sedrasabbagh03@gmail.com");
        cy.get('#AccountFrm_telephone').type("+962798639728");
        cy.get('#AccountFrm_fax').type("842418");
        cy.get('#AccountFrm_company').type("HTU");
        cy.get('#AccountFrm_address_1').type("Buisness park");
        cy.get('#AccountFrm_address_2').type("Makka street");
        cy.get('#AccountFrm_city').type("Amman");
        cy.get('#AccountFrm_zone_id').select("Bristol");
        cy.get('#AccountFrm_postcode').type("1133");
        cy.get('#AccountFrm_country_id').select("United Kingdom");
        cy.get('#AccountFrm_loginname').type(name);
        cy.get('#AccountFrm_password').type(password);
        cy.get('#AccountFrm_confirm').type(password);
        cy.get('#AccountFrm_newsletter1').first().check();
        cy.get('#AccountFrm_agree').check();
        cy.get('.col-md-2 > .btn').click();


    });

    // Login test
    it('login process', () => {
        // cy.visit("https://automationteststore.com/index.php?rt=account/login")
        cy.get('#loginFrm_loginname').type(name);
        cy.get('#loginFrm_password').type(password);
        cy.get('#loginFrm > fieldset > .btn > .fa').click();
    });

});