
describe("Team App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');

    it("sanity chaeck to make sure tests work", () => {
        expect(1 + 2).to.equal(3);
    })
})