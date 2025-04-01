describe('Login Flow', () => {
  it('should log in and navigate to the dashboard', () => {
    // Step 1: Visit the login page
    cy.visit('http://localhost:4200/login');

    // Step 2: Fill in email and password
    cy.get('[data-cy=email]').type('testuser@example.com');
    cy.get('[data-cy=password]').type('password123');

    // Step 3: Click the login button
    cy.get('[data-cy=login-btn]').click();

    // Step 4: Assert that the user is redirected to the dashboard
    cy.url().should('eq', 'http://localhost:4200/dashboard');
    cy.contains('Welcome to the Dashboard').should('be.visible');
  });
});
