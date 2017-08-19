import { AngularCompanyPage } from './app.po';

describe('angular-company App', () => {
  let page: AngularCompanyPage;

  beforeEach(() => {
    page = new AngularCompanyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
