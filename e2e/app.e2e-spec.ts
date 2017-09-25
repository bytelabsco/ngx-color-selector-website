import { NgxColorSelectorWebsitePage } from './app.po';

describe('ngx-color-selector-website App', () => {
  let page: NgxColorSelectorWebsitePage;

  beforeEach(() => {
    page = new NgxColorSelectorWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
