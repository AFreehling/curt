import { CurtPage } from './app.po';

describe('curt App', function() {
  let page: CurtPage;

  beforeEach(() => {
    page = new CurtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
