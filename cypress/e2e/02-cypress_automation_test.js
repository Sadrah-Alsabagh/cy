///reference types ="cypress"/>

beforeEach(() => {
    cy.visit("https://www.automationteststore.com/");
});

describe('Print the name of the first item and the last item ', () => {
  it('first category - FEATURED', () => {
        // cy.visit("https://www.automationteststore.com/");

        cy.get('#featured > .container-fluid').find('.prdocutname').first().invoke('text').then((the_text)=>{
          cy.log("first item inside the Featured Category is : ",the_text)
        })

        cy.get('#featured > .container-fluid').find('.prdocutname').last().invoke('text').then((the_text)=>{
          cy.log("last item inside the Featured Category is : ",the_text)

        })
  });

  it('second category - latest products', () => {
    // cy.visit("https://www.automationteststore.com/");

    cy.get('#latest > .container-fluid').find('.prdocutname').first().invoke('text').then((the_text)=>{
      cy.log("first item inside the latest Category is : ",the_text)
    })

    cy.get('#latest > .container-fluid').find('.prdocutname').last().invoke('text').then((the_text)=>{
      cy.log("last item inside the latest Category is : ",the_text)

    })
});
});

describe("this is to see the price multiply by 10 ", () => {
  it("hey we need to see the price multiply by 10 for the first item inside best seller category", () => {
    // cy.visit("https://www.automationteststore.com/");
    cy.get("#bestseller > .container-fluid")
      .find(".oneprice")
      .first()
      .invoke("text")
      .then((the_text) => {
        // cy.log(the_text.replace("$", "") * 10);
        let ModifiedPrice = (the_text.replace("$",""))*10
        cy.log(ModifiedPrice)
        let myage = 30

        myage+=myage

        cy.log(myage)
      });
  });
});



  
// Assignment
  describe('assignment', () => {
    it.only('Calculate sum of all old and all new prices in the SPECIALS category', () => {
        let sum_old_prices = 0;
        let  sum_new_prices = 0;
      cy.get('#special > .container-fluid')
        .find('.pricenew')
        .each((new_price_text, index) => {
          cy.get('#special > .container-fluid')
            .find('.priceold')
            .eq(index)
            .invoke('text')
            .then(old_price_text => {
              const old_price = parseInt(old_price_text.replace('$', ''));
              const new_price = parseInt(new_price_text.text().replace('$', ''));
              
              sum_old_prices += old_price;
              sum_new_prices += new_price;
            });
        }).then(() => {
        //   cy.log(`old: ${sum_old_prices}`);
        //   cy.log(`new : ${sum_new_prices}`);
          alert(`hey the sum of the old prices is ${sum_old_prices} and the sum of the new prices is ${sum_new_prices}`)
        });
    });
  });
  