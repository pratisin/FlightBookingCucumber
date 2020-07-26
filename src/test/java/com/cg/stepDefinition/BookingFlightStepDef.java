package com.cg.stepDefinition;



import java.util.List;

import org.openqa.selenium.*;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.*;



public  class BookingFlightStepDef {
	
	WebDriver driver;

@Given("^user is on booking Page$")
public void user_is_on_booking_Page() throws InterruptedException {
	System.setProperty("webdriver.chrome.driver", "C:\\SeleniumDriver\\chromedriver.exe");
	 driver = new ChromeDriver();
	driver.manage().window().maximize();
	driver.manage().deleteAllCookies();
   System.out.println("user is on booking Page");

	driver.get("https://flight.yatra.com/");
	Thread.sleep(6000);
	JavascriptExecutor js=(JavascriptExecutor) driver;
	String script = "window.confirm = function(message) {"+
	        "document.lastConfirmationMessage = message; return true; }";
	js.executeScript(script);
	
	//driver.switchTo().alert().dismiss();;
//	driver.findElement(By.xpath("//a[@class='close' and @id='webklipper-publisher-widget-container-notification-close-div']")).click();
	

}


@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
public void user_enters_and(String source, String des) throws Throwable {
	
	String s=source;
	String d=des;
	 WebDriverWait wt=new WebDriverWait(driver,20);
	   wt.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.xpath("//input[@id='BE_flight_origin_city']")));
  
	  // JavascriptExecutor js = (JavascriptExecutor)driver;
	   
	   WebElement src=driver.findElement(By.xpath("//input[@id='BE_flight_origin_city']"));
 
  
  ////input[@name='flight_origin' and @class='required_field cityPadRight ac_input origin_ac']
//  src.clear();
  Thread.sleep(2000);
  for (int i=0;i<12;i++)
  src.sendKeys(Keys.BACK_SPACE);

  src.sendKeys(s);

  
  WebDriverWait wait=new WebDriverWait(driver,20);
  wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.xpath("//input[@id='BE_flight_arrival_city']")));
  
  WebElement dest=driver.findElement(By.xpath("//input[@id='BE_flight_arrival_city']"));
   //  dest.clear();
  Thread.sleep(2000);
  
  for (int i=0;i<12;i++)
      dest.sendKeys(Keys.BACK_SPACE);
      dest.sendKeys(d);
      for (int i=0;i<12;i++)
          dest.sendKeys(Keys.BACK_SPACE);
          dest.sendKeys(d);
  Thread.sleep(2000);
  dest.sendKeys(Keys.ARROW_DOWN);
  dest.sendKeys(Keys.ENTER);
  
//*[@id="01/08/2020"]
//
 
//  dest.sendKeys(Keys.TAB);
}


@When("^user selects \"([^\"]*)\"$")
public void user_selects(String travelDate) throws Throwable {
	WebElement ele=driver.findElement(By.xpath("//input[@id='BE_flight_origin_date']"));
	ele.click();
	System.out.println("calendar clicked");
	  Thread.sleep(3000);
	//JavascriptExecutor js = (JavascriptExecutor)driver;
	//String dateVal="4 Aug'20";
	//js.executeScript("arguments[0].setAttribute('value','"+dateVal+"');",ele);
  //  src.sendKeys("New Delhi");
	  String td="//div[ @class='cal-body BE_flight_origin_date']//tr/td[@data-date='"+travelDate+"']";
	driver.findElement(By.xpath(td)).click();
	  
	//  driver.findElement(By.xpath("//div[ @class='cal-body BE_flight_origin_date']//tr/td[@data-date='01/08/2020']")).click();
	//"//div[ @class='cal-body BE_flight_origin_date']//tr/td[@data-date='01/08/2020']"

  
}

@Then("^user clicks on search flight button$")
public void user_clicks_on_search_flight_button() throws InterruptedException  {
	Thread.sleep(2000);
	
	driver.findElement(By.xpath("//input[@type='submit' and @id='BE_flight_flsearch_btn']")).click();
	
	List<WebElement> li=driver.findElements(By.xpath("//div[@class='schedule v-aligm-t pr']//div[@class='stop-det bdr-btm pb-5 v-aligm-t text-left']//p[contains(@class,'bold du mb-2')]"));
	for(WebElement name: li)
		System.out.println(name.getText());
	

	
  
}



}
