
describe("Team App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const submitBtn = () => cy.get('button[type=submit]');

    it("sanity chaeck to make sure tests work", () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    })

    it("The proper elements are showing", () => {
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        submitBtn().should('exist');
    })
})