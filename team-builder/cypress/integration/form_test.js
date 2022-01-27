
describe("Team App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/add");
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

    describe("filling out inputs and canceling", () => {
        it("can type in the inputs", () => {
            nameInput()
            .should("have.value", "")
            .type("Slow down!")
            .should("have.value", "Slow down!");

            emailInput()
            .should("have.value", "")
            .type("skyhigh@gmail.com")
            .should("have.value", "skyhigh@gmail.com");
        })
    })

})