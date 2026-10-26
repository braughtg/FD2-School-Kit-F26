import { lib } from './lib';

describe('Test the Activity Observation lib submission', () => {
  /*
   * TODO: Create a form object that has the same format as the
   *       data.form object used in the entry point.
   *
   *       This is passed to the submitForm function as if it is
   *       coming from the entry point when the "Submit" button is clicked.
   */
  let form = {
    date: '1950-01-02',
    crop: 'ZUCCHINI', // Not in the sample form, but needed for testing
    comment: 'A comment',
  };

  let results = null;

  before(() => {
    /*
     * Submit the form using lib.submitForm from farmosUtil to create
     * all the logs, assets and quantities needed to represent a
     * Activity Observation.
     */
    cy.wrap(lib.submitForm(form), { timeout: 10000 }).then((submitted) => {
      results = submitted;
    });
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.restoreSessionStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
    cy.saveSessionStorage();
  });

  it('Activity Observation: Placeholder checks the result', () => {
    /*
     * Check to be sure we get a plant asset.  This confirms that the lib.js
     * operation created the correct type of farmOS record.
     */
    expect(results.type).to.equal('asset--plant');

    /*
     * Check the parts of the result that use the parameters that
     * the lib.js operation passed to the farmosUtil.createPlantAsset
     * function.
     */
    expect(results.attributes.name).to.equal(form.date + '_' + form.crop);
    expect(results.attributes.notes.value).to.equal(form.comment);
  });
});
