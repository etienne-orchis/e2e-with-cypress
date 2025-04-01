describe('Login Flow', () => {
  beforeEach(() => {
    // Runs before each test to reset the state
    cy.visit('http://localhost:4200/login');
  });

  it('should log in and navigate to the dashboard', () => {
    cy.get('[data-cy=email]').type('testuser@example.com');
    cy.get('[data-cy=password]').type('password123');
    cy.get('[data-cy=login-btn]').click();

    // Assert that user is redirected to dashboard
    cy.url().should('eq', 'http://localhost:4200/dashboard');
    cy.contains('Welcome to the Dashboard').should('be.visible');
  });

  it('should show an error when email and password are empty', () => {
    cy.get('[data-cy=login-btn]').click();

    // Expect an error message (Modify based on your app's validation)
    cy.contains('Email and password are required').should('be.visible');
  });

  it('should show an error with incorrect credentials', () => {
    cy.get('[data-cy=email]').type('wronguser@example.com');
    cy.get('[data-cy=password]').type('wrongpassword');
    cy.get('[data-cy=login-btn]').click();

    // Expect an error message (Modify based on your backend response)
    cy.contains('Invalid email or password').should('be.visible');
  });

  it('should allow user to log out', () => {
    // Log in first
    cy.get('[data-cy=email]').type('testuser@example.com');
    cy.get('[data-cy=password]').type('password123');
    cy.get('[data-cy=login-btn]').click();

    // Assert navigation to dashboard
    cy.url().should('eq', 'http://localhost:4200/dashboard');
    cy.contains('Welcome to the Dashboard').should('be.visible');

    // Click logout button
    cy.get('[data-cy=logout-btn]').click();

    // Assert user is redirected to login page
    cy.url().should('eq', 'http://localhost:4200/login');
  });
});
