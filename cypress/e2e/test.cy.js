import Test_PO from "../page_objects/Test_PO";
describe('Sauce Demo Tests', () => {

  const test_PO = new Test_PO()
  let testData;

  beforeEach(() => {

    cy.fixture('test_data.json').then((data) => {
      testData = data
    })

  })

  it('should visit the saucedemo site and login', () => {
    test_PO.visitSite()
    test_PO.login(
      testData.username_field,
      testData.standard_username,
      testData.password_field,
      testData.password,
      testData.login_button
    )
  })

  it('should verify that the items are sorted by Name ( A -> Z )', () => {
    test_PO.visitSite()
    test_PO.login(
      testData.username_field,
      testData.standard_username,
      testData.password_field,
      testData.password,
      testData.login_button
    )
    test_PO.verifyItemsSortedByNameAsc(testData.sort_dropdown, testData.inventory_item_name)
  })

  it('should verify that the items are sorted by Name ( Z -> A )', () => {
    test_PO.visitSite()
    test_PO.login(
      testData.username_field,
      testData.standard_username,
      testData.password_field,
      testData.password,
      testData.login_button
    )
    test_PO.verifyItemsSortedByNameDesc(testData.sort_dropdown, testData.inventory_item_name)
  })
})

