package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckOutPage extends Utility {

    private static final Logger log = LogManager.getLogger(CheckOutPage.class.getName());

    public CheckOutPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath="//h1[normalize-space()='Welcome, Please Sign In!']")
    WebElement welcomeSignInPageTitleLocator;

    @CacheLookup
    @FindBy(css=".button-1.checkout-as-guest-button")
    WebElement checkoutAsGuestButtonLocator;

    @CacheLookup
    @FindBy(css="#BillingNewAddress_FirstName")
    WebElement firstNameFieldLocator;

    @CacheLookup
    @FindBy(css="#BillingNewAddress_LastName")
    WebElement lastNameFieldLocator;


    @CacheLookup
    @FindBy(css="#BillingNewAddress_Email")
    WebElement emailFieldLocator;

    @CacheLookup
    @FindBy(css="#BillingNewAddress_CountryId")
    WebElement countryDropDownLocator;

    @CacheLookup
    @FindBy(css="#BillingNewAddress_City")
    WebElement cityFieldLocator;

    @CacheLookup
    @FindBy(css="#BillingNewAddress_Address1")
    WebElement addressFieldLocator;

    @CacheLookup
    @FindBy(css="#BillingNewAddress_ZipPostalCode")
    WebElement postCodeFieldLocator;

    @CacheLookup
    @FindBy(css="#BillingNewAddress_PhoneNumber")
    WebElement phoneNumberFieldLocator;

    @CacheLookup
    @FindBy(name="save")
    WebElement continueButtonLocator;

    @CacheLookup
    @FindBy(linkText="Register")
    WebElement ButtonRegister;

    //By ButtonRegister = By.cssSelector(".button-1.register-button");


    public String getTextFromWelcomeText() {
        log.info("Get Text From Welcome Text" );
        return getTextFromElement(welcomeSignInPageTitleLocator);
    }

    public void clickCheckOut() {
        log.info("Click Check Out" );
        clickOnElement(checkoutAsGuestButtonLocator);
    }

    public void firstName(String fName) {
        log.info("Enter First Name " + fName + " to First Name field " + firstNameFieldLocator.toString());
        sendTextToElement(firstNameFieldLocator, fName);
    }

    public void lastName(String lName) {
        log.info("Enter Last Name " + lName + " to Last Name field " + lastNameFieldLocator.toString());
        sendTextToElement(lastNameFieldLocator, lName);
    }

    public void email(String email) {
        log.info("Enter email  " + email + " to Email  field " + emailFieldLocator.toString());
        sendTextToElement(emailFieldLocator, email);
    }

    public void selectCountryFromDropDown() {
        log.info("Select Country From DropDown" );
        selectByIndexFromDropDown(countryDropDownLocator, 2);

    }
    public void enterCity(String cityName){
        log.info("Enter City Name " + cityName + " to City Name field " + cityFieldLocator.toString());
        sendTextToElement(cityFieldLocator, cityName);
    }

    public void enterAddress(String address){
        log.info("Enter Address " + address + " to Address field " + addressFieldLocator.toString());
        sendTextToElement(addressFieldLocator,address );
    }

    public void enterPostCode(String postcode){
        log.info("Enter Post Code " + postcode + " to Post Code field " + postCodeFieldLocator.toString());
        sendTextToElement(postCodeFieldLocator, postcode);
    }

    public void enterPhoneNumber(String phoneNumber){
        log.info("Enter Phone Number " + phoneNumber + " to Phone Number field " + phoneNumberFieldLocator.toString());
        sendTextToElement(phoneNumberFieldLocator, phoneNumber);
    }

    public void clickContinue(){
        log.info("Click on Continue" );
        clickOnElement(continueButtonLocator);
    }

    public void clickOnButtonRegister() throws InterruptedException {
        log.info("Click On Button Register" );
        clickOnElement(ButtonRegister);
        Thread.sleep(1000);
    }

}
