class Test_PO {

    visitSite() {
        cy.visit('/');
        cy.url().should('eq', 'https://www.saucedemo.com/');
    }

    login(username_field, standard_username, password_field, password, login_button) {
        cy.get(username_field).type(standard_username);
        cy.get(password_field).type(password);
        cy.get(login_button).click();

        // Validate login
        cy.url().should('include', '/inventory.html');
        cy.get('.inventory_list').should('be.visible');
    }

    verifyItemsSortedByNameAsc(sort_dropdown, inventory_item_name) {
        cy.get(sort_dropdown).select('Name (A to Z)')
        cy.get(inventory_item_name).then(($items) => {
            const names = $items.map((index, html) => Cypress.$(html).text()).get();
            const sortedNames = [...names].sort();
            expect(names).to.deep.equal(sortedNames);
        });
    }

    verifyItemsSortedByNameDesc(sort_dropdown, inventory_item_name) {
        cy.get(sort_dropdown).select('Name (Z to A)')
        cy.get(inventory_item_name).then(($items) => {
            const names = $items.map((index, html) => Cypress.$(html).text()).get();
            const sortedNames = [...names].sort().reverse();
            expect(names).to.deep.equal(sortedNames);
        });
    }
    logout(testData) {
        cy.get(testData.logout_button).click({ force: true });
    }
}

export default Test_PO;
