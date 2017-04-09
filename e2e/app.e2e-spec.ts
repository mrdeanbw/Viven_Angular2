import { VivenHealth4Page } from './app.po';

describe('viven-health4 App', () => {
  let page: VivenHealth4Page;

  beforeEach(() => {
    page = new VivenHealth4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
