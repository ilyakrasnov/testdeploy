import { NgDeployPage } from './app.po';

describe('ng-deploy App', () => {
  let page: NgDeployPage;

  beforeEach(() => {
    page = new NgDeployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
