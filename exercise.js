beforeEach(function() {
      return browser.ignoreSynchronization = true;
    });

describe('Google Demo', function() {
  it('Should Search 1', function() {
    browser.driver.get('http://google.com/');
    expect(browser.getCurrentUrl()).toEqual(("https://www.google.com/?gws_rd=ssl"));
    console.log("Google search open successfully");
    browser.driver.findElement(by.name('q')).sendKeys('rainbow');
    expect(query = 'rainbow');
    console.log("In google search should be entered 'rainbow'");
    browser.sleep(3000);
    browser.driver.findElement(by.name('btnK')).click();
    browser.sleep(3000);
    expect (browser.getTitle()).toBe('rainbow - Szukaj w Google');
    console.log("In google tab should be entered 'rainbow - Szukaj w Google'");
    browser.sleep(3000);
  });
  it('Should Search 2', function() {
    browser.driver.get('http://google.com/');
    expect(browser.getCurrentUrl()).toEqual(("https://www.google.com/"));
    console.log("Google search open successfully");
    browser.driver.findElement(by.name('q')).sendKeys('rainbow');
    expect(query = 'rainbow');
    console.log("In google search should be entered 'rainbow'");
    browser.sleep(3000);
    browser.driver.findElement(by.name('btnI')).click();
    browser.sleep(3000);
    expect(browser.getCurrentUrl()).toEqual(("https://r.pl/"));
    console.log("In google window should be entered 'https://r.pl/'");
    browser.sleep(3000);
  });
});