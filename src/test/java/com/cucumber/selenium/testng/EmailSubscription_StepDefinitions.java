package com.cucumber.selenium.testng;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class EmailSubscription_StepDefinitions extends TestBase{
	
public String emailAddress = null;
	
	WebDriver driver = null;	
	@When("^user enters valid \"([^\"]*)\" and click the submit button$")
	public void user_enters_valid_email_and_click_the_submit_button(String email)
	{
		System.out.println("Email:"+email);
		emailAddress = email;
		
		try{
			
			Thread.sleep(1000);
			driver = Hooks.driver;
			driver.findElement(By.xpath(Hooks.OR.getProperty("remind_email_input_xpath"))).sendKeys(email);
			
			driver.findElement(By.xpath(Hooks.OR.getProperty("remind_email_submit_xpath"))).click();
			
			Thread.sleep(1000);
			
		}catch(Exception ex)
		{
			System.out.println("Error processing email subscription."+ex.getMessage());
			Assert.fail("Email Subscription is not successful for the test email-"+email+"->"+ex.getMessage());
		}
		
	}

	@Then("^appropriate email subscription successful message should be displayed$")
	public void verifyEmailSubscription()
	{
		
		try{
						
			List<org.openqa.selenium.WebElement> successDivElms = driver.findElements(By.xpath(Hooks.OR.getProperty("subscription_success_div_xpath")));
			
			Assert.assertTrue(successDivElms.size()>0,"Email Subscription is not successful");
			
			Assert.assertEquals(successDivElms.get(0).getText(), Hooks.OR.getProperty("subscription_successs_message")+" "+emailAddress);
			
			
			
		}catch(Exception ex)
		{
			System.out.println("Error validating email subscription."+ex.getMessage());
			Assert.fail("Email Subscription validation is not successful for the test email-"+emailAddress+"->"+ex.getMessage());
		}
		
	}

}
