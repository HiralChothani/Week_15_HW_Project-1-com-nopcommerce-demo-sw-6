package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BuildYourOwnComputerPage extends Utility {

    private static final Logger log = LogManager.getLogger(BuildYourOwnComputerPage.class.getName());

    public BuildYourOwnComputerPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath="//h2[@class='product-title']//a[normalize-space()='Build your own computer']")
    WebElement buildYourOwnComputerTitleLocator;

    @CacheLookup
    @FindBy(css="#product_attribute_1")
    WebElement processorDropdownLocator;

    @CacheLookup
    @FindBy(css="#product_attribute_2")
    WebElement ramDropdownLocator;

    @CacheLookup
    @FindBy(css="#product_attribute_3_7")
    WebElement hddRadioButtonLocator;

    @CacheLookup
    @FindBy(css="#product_attribute_4_9")
    WebElement osRadioButtonLocator;

    @CacheLookup
    @FindBy(xpath="(//input[@id='product_attribute_5_10'])[1]")
    WebElement msOfficeCheckBoxLocator;

    @CacheLookup
    @FindBy(xpath="(//input[@id='product_attribute_5_12'])[1]")
    WebElement totalCommanderCheckBoxLocator;

    @CacheLookup
    @FindBy(xpath="(//span[@id='price-value-1'])[1]")
    WebElement priceTotalLocator;

    @CacheLookup
    @FindBy(xpath="//button[@id='add-to-cart-button-1']")
    WebElement addToCartButton1Locator;

    @CacheLookup
    @FindBy(css=".content")
    WebElement messageConfirmationLocator;

    @CacheLookup
    @FindBy(xpath="//span[@title='Close']")
    WebElement crossToCloseLocator;


    public String getTextFromBuildYourOwnComputer() {
        log.info("Get Text From Build Your Own Product Title" );
        return getTextFromElement(buildYourOwnComputerTitleLocator);

    }

    public void selectProcessor(){
        log.info("Select Processor" );
        selectByIndexFromDropDown(processorDropdownLocator, 1);

    }
    public void selectRAM(){
        log.info("Select RAM" );
        selectByIndexFromDropDown(ramDropdownLocator, 3);

    }
    public void selectHDD()
    {
        log.info("Select HDD" );
        clickOnElement(hddRadioButtonLocator);
    }

    public void selectOS()
    {
        log.info("Select OS" );
        clickOnElement(osRadioButtonLocator);
    }

    public void selectMicrosoftOffice() {
        log.info("Select MS Office" );
        WebElement element = driver.findElement(By.cssSelector("#product_attribute_5_10"));
        if (!element.isSelected()) {
            clickOnElement(msOfficeCheckBoxLocator);
        }
    }
    public void selectTotalCommander(){
        log.info("Select Total Commander" );
        clickOnElement(totalCommanderCheckBoxLocator);
    }

    public String checkTotalPrice(){
        log.info("Check Total Price" );
        return getTextFromElement(priceTotalLocator);
    }

    public void addToCartButtonClick(){
        log.info("Click on Add to Cart Button" );
        clickOnElement(addToCartButton1Locator);

    }

    public String shoppingCartMessage(){
        log.info("Shopping Cart Msg" );
        return getTextFromElement(messageConfirmationLocator);

    }

    public void crossBarClick(){
        log.info("Click on Cross Bar" );
        clickOnElement(crossToCloseLocator);
    }
}
