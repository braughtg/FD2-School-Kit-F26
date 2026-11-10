import ActivityTypeSelector from '@comps/ActivityTypeSelector/ActivityTypeSelector.vue';

describe('Test the default ActivityTypeSelector content', () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.restoreSessionStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
    cy.saveSessionStorage();
  });

  it('Check all of the default data-cy elements', () => {
    /*
     * See the Components Guide (`docs/contributing/components.md` for more
     * information about component testing. Also, see other components in
     * the `components/` directory for examples.
     */
    const readySpy = cy.spy().as('readySpy');

    cy.mount(ActivityTypeSelector, {
      props: {
        onReady: readySpy,
      },
    });

    cy.get('@readySpy')
      .should('have.been.calledOnce')
      .then(() => {
        /*
         * Replace this assertion with assertions that check that all of the
         * default data-cy elements exist and have the correct initial content.
         */
        cy.get('[data-cy="component-group"]').should('exist');
        cy.get('[data-cy="selector-label"]').should('have.text', 'Type:');
        cy.get('[data-cy="selector-required"]').should('not.exist');
        cy.get('[data-cy="activity-observation-type"]')
          .find('[data-cy="selector-option-1"]')
          .should('have.value', 'amendment');
        cy.get('[data-cy="activity-observation-type"]')
          .find('[data-cy="selector-option-13"]')
          .should('have.value', 'weed_control');
        cy.get('[data-cy="selector-input"]').should(
          'not.have.class',
          'is-valid'
        );
        cy.get('[data-cy="selector-input"]').should(
          'not.have.class',
          'is-invalid'
        );
        cy.get('[data-cy="selector-invalid-feedback"]').should(
          'not.be.visible'
        );
        cy.get('[data-cy="selector-invalid-feedback"]').should(
          'contain.text',
          'An activity type is required.'
        );
      });
  });

  it('Test that props are passed', () => {
    const readySpy = cy.spy().as('readySpy');

    cy.mount(ActivityTypeSelector, {
      props: {
        onReady: readySpy,
        required: true,
        showValidityStyling: true,
      },
    });

    cy.get('@readySpy')
      .should('have.been.calledOnce')
      .then(() => {
        cy.get('[data-cy="selector-required"]')
          .should('exist')
          .should('have.text', '*');
        cy.get('[data-cy="selector-input"]').should('have.class', 'is-invalid');
      });
  });
});
