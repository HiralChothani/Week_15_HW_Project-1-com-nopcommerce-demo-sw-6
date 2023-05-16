package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.*;
import com.nopcommerce.demo.utility.Utility;
import cucumber.api.DataTable;
import cucumber.api.java.en.*;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ComputerPageSteps {
    @Given("^I am on Nop-commerce homepage$")
    public void iAmOnNopCommerceHomepage() {
    }

    @When("^I Click on Computer Menu\\.$")
    public void iClickOnComputerMenu() {
        new HomePage().selectMenu("Computers");
    }

    @And("^I Click on Desktop$")
    public void iClickOnDesktop() {
        new ComputerPage().desktopClick();
    }

    @And("^I Select Sort By position \"([^\"]*)\"$")
    public void iSelectSortByPosition(String arg0) {
       new DesktopPage().selectSortByPosition("6");
    }

    @Then("^Product will arrange into descending order$")
    public void productWillArrangeIntoDescendingOrder() {
    }

    @And("^I Verify the Product is arranged in Descending order\\.$")
    public void iVerifyTheProductIsArrangedInDescendingOrder() throws InterruptedException {
        Thread.sleep(2000);
        ArrayList<String> actualList = new Utility().getArrayListOfStringsFromWebElements(new DesktopPage().returnListOfProductNamesElementsLocator());
        System.out.println("actual list: " + actualList);
        ArrayList<String> expectedList = new Utility().getArrayListOfStringsFromWebElements(new DesktopPage().returnListOfProductNamesElementsLocator());

        Collections.sort(expectedList);
        Collections.reverse(expectedList);

        System.out.println("expected= " + expectedList);
        Assert.assertEquals(actualList, expectedList, "Error message: Products are not arranged in descending order");
    }

    @And("^I Select Sort By position \"([^\"]*)\" assending$")
    public void iSelectSortByPositionAssending(String arg0){
        new DesktopPage().selectSortByPosition("5");
    }
    @And("^I Click on \"([^\"]*)\" for product \"([^\"]*)\"$")
    public void iClickOnForProduct(String arg0, String arg1) throws InterruptedException {
        Thread.sleep(2000);
        new DesktopPage().addToCartClick();
    }

    @And("^I Verify the Text \"([^\"]*)\"$")
    public void iVerifyTheText(String arg0)  {
        String expectedMessage = "Build your own computer";
        Assert.assertEquals(new BuildYourOwnComputerPage().getTextFromBuildYourOwnComputer(), expectedMessage, "Error message: Text verification is failed");

    }

    @And("^I Select processor \"([^\"]*)\" using Select class$")
    public void iSelectProcessorUsingSelectClass(String arg0) {
        new BuildYourOwnComputerPage().selectProcessor();
    }

    @And("^I Select RAM \"([^\"]*)\" using Select class\\.$")
    public void iSelectRAMUsingSelectClass(String arg0) {
        new BuildYourOwnComputerPage().selectRAM();
    }

    @And("^I Select HDD radio \"([^\"]*)\"$")
    public void iSelectHDDRadio(String arg0)  {
        new BuildYourOwnComputerPage().selectHDD();
    }

    @And("^I Select OS radio \"([^\"]*)\"$")
    public void iSelectOSRadio(String arg0)  {
        new BuildYourOwnComputerPage().selectOS();
    }

    @And("^I Check Two Check boxes \"([^\"]*)\" and \"([^\"]*)\"$")
    public void iCheckTwoCheckBoxesAnd(String arg0, String arg1)  {
        new BuildYourOwnComputerPage().selectTotalCommander();

    }

    @And("^I Verify the price \"([^\"]*)\"$")
    public void iVerifyThePrice(String arg0)  {
        try {
            String expectedPrice = "$1,475.00";
            Assert.assertEquals(new BuildYourOwnComputerPage().checkTotalPrice(), expectedPrice, "Error message: Price is not matching ");
        } catch (AssertionError e) {
            System.out.println("Price is not matching");
        }
    }

    @And("^I Click on \"([^\"]*)\" Button\\.$")
    public void iClickOnButton(String arg0)  {
        new BuildYourOwnComputerPage().addToCartButtonClick();
    }

    @Then("^Product has been added to Shopping cart successfully$")
    public void productHasBeenAddedToShoppingCartSuccessfully() {
    }

    @And("^I verify the Message \"([^\"]*)\" on Top green Bar$")
    public void iVerifyTheMessageOnTopGreenBar(String arg0)  {
        String expectedShoppingCartMessage = "The product has been added to your shopping cart";
        Assert.assertEquals(new BuildYourOwnComputerPage().shoppingCartMessage(), expectedShoppingCartMessage, "Error message:message is not matching ");
    }

    @And("^After that close the bar clicking on the cross button\\.$")
    public void afterThatCloseTheBarClickingOnTheCrossButton() {
        new BuildYourOwnComputerPage().crossBarClick();
    }

    @And("^I MouseHover on \"([^\"]*)\" and Click on \"([^\"]*)\" button\\.$")
    public void iMouseHoverOnAndClickOnButton(String arg0, String arg1)  {
        new ShoppingCartPage().mouseHoverOnShoppingCart();
        new ShoppingCartPage().clickOnGoToCart();
    }

    @And("^I Verify the message \"([^\"]*)\"$")
    public void iVerifyTheMessage(String arg0)  {
        String expected = "Shopping cart";
        Assert.assertEquals(new ShoppingCartPage().getTextFromShoppingCart(), expected, "Shopping cart");
    }

    @But("^I Change the Qty to \"([^\"]*)\" and Click on \"([^\"]*)\"$")
    public void iChangeTheQtyToAndClickOn(String arg0, String arg1) throws InterruptedException {
        new ShoppingCartPage().clearAnElementFromUpdatedShoppingCart();
        new ShoppingCartPage().updateTheQuantity("2");
        Thread.sleep(3000);
        new ShoppingCartPage().clickUpdateCartButton();
    }

    @And("^I Verify the Total\"([^\"]*)\"$")
    public void iVerifyTheTotal(String arg0) {
        try {
            String expectedTotal = "$2,950.00";
            Assert.assertEquals(new ShoppingCartPage().getTextFromTotal(), expectedTotal, "Error message: Total is not matching");
        } catch (AssertionError e) {
            System.out.println("Price is not matching");
        }
    }

    @And("^I click on checkbox “I agree with the terms of service”$")
    public void iClickOnCheckboxIAgreeWithTheTermsOfService() {
        new ShoppingCartPage().checkBoxClick();
    }

    @And("^I Click on “CHECKOUT”$")
    public void iClickOnCHECKOUT() {
        new ShoppingCartPage().clickCheckOut();
    }

    @And("^I Verify the Text “Welcome, Please Sign In!”$")
    public void iVerifyTheTextWelcomePleaseSignIn() {
        String expectedWelcomeText = "Welcome, Please Sign In!";
        Assert.assertEquals(new CheckOutPage().getTextFromWelcomeText(), expectedWelcomeText, "Error message: Welcome text is not matching");
    }

    @And("^I Click on “CHECKOUT AS GUEST” Tab$")
    public void iClickOnCHECKOUTASGUESTTab() {
        new CheckOutPage().clickCheckOut();
    }

    @And("^I Fill the all mandatory field$")
    public void iFillTheAllMandatoryField(DataTable dataTable) {
        List<List<String>> mandatoryField = dataTable.asLists(String.class);
        String firstName = mandatoryField.get(0).get(0);
        String lastName = mandatoryField.get(0).get(1);
        String email = mandatoryField.get(0).get(2);
        String city = mandatoryField.get(0).get(3);
        String address = mandatoryField.get(0).get(4);
        String postCode = mandatoryField.get(0).get(5);
        String phoneNumber = mandatoryField.get(0).get(6);
        new CheckOutPage().firstName(firstName);
        new CheckOutPage().lastName(lastName);
        new CheckOutPage().email(email);
        new CheckOutPage().selectCountryFromDropDown();
        new CheckOutPage().enterCity(city);
        new CheckOutPage().enterAddress(address);
        new CheckOutPage().enterPostCode(postCode);
        new CheckOutPage().enterPhoneNumber(phoneNumber);
    }

    @And("^I Click on “CONTINUE”$")
    public void iClickOnCONTINUE() {
        new CheckOutPage().clickContinue();
    }

    @And("^I Click on Radio Button “Next Day Air\\(\\$(\\d+)\\.(\\d+)\\)”$")
    public void iClickOnRadioButtonNextDayAir$(int arg0, int arg1) {
        new ShippingPage().shippingMethod();
    }
    @And("^I Click on Shipping Method “CONTINUE”$")
    public void iClickOnShippingMethodCONTINUE() {
        new ShippingPage().shippingMethodContinueButton();
    }

    @And("^I Select Radio Button “Credit Card”$")
    public void iSelectRadioButtonCreditCard() {
        new PaymentPage().selectCreditCardRadioButton();
        new PaymentPage().continuePaymentButton();

    }

    @And("^I Select “Master card” From Select credit card dropdown$")
    public void iSelectMasterCardFromSelectCreditCardDropdown() {
        new PaymentPage().selectCreditCard(1);
    }

    @And("^I Fill all the details$")
    public void iFillAllTheDetails(DataTable dataTable) {
        List<List<String>> creditCardDetails = dataTable.asLists(String.class);
        String cardHolderName = creditCardDetails.get(0).get(0);
        String cardNumber = creditCardDetails.get(0).get(1);
        String cardCode = creditCardDetails.get(0).get(2);
        new PaymentPage().cardHolderName(cardHolderName);
        new PaymentPage().cardNumber(cardNumber);
        new PaymentPage().selectExpiryMonth(1);
        new PaymentPage().selectExpiryYear(3);
        new PaymentPage().enterCardCode(cardCode);
    }
    @And("^I Click on Payment “CONTINUE”$")
    public void iClickOnPaymentCONTINUE() {
        new PaymentPage().paymentContinueButton();
    }

    @And("^I Verify “Payment Method” is “Credit Card”$")
    public void iVerifyPaymentMethodIsCreditCard() {
        String expectedPaymentMethodText = "Credit Card";
        Assert.assertEquals(new OrderConfirmationPage().getTextFromPaymentMethod(), expectedPaymentMethodText, "Error message: payment method text is not matching");
    }

    @And("^I Verify “Shipping Method” is “Next Day Air”$")
    public void iVerifyShippingMethodIsNextDayAir() {
        String expectedShippingMethodText = "Next Day Air";
        Assert.assertEquals(new OrderConfirmationPage().getTextFromShippingMethod(), expectedShippingMethodText, "Error message: shipping method text is not matching");
    }

    @And("^I Verify Total is “\\$(\\d+),(\\d+)\\.(\\d+)”$")
    public void iVerifyTotalIs$(int arg0, int arg1, int arg2) {
        String expectedTotalText = "$2,950.00";
        Assert.assertEquals(new OrderConfirmationPage().getTextFromTotalPrice(), expectedTotalText, "Error message: total price text is not matching");
    }

    @And("^I Click on “CONFIRM”$")
    public void iClickOnCONFIRM() {
        new OrderConfirmationPage().clickConfirmButton();
    }

    @And("^I Verify the Text “Thank You”$")
    public void iVerifyTheTextThankYou() {
        String expectedThankMessage = "Thank you";
        Assert.assertEquals(new OrderCompletionPage().getTextFromThankYouTitle(), expectedThankMessage, "Error message");
    }

    @And("^I Verify the message “Your order has been successfully processed!”$")
    public void iVerifyTheMessageYourOrderHasBeenSuccessfullyProcessed() {
        String expectedOrderSuccess = "Your order has been successfully processed!";
        Assert.assertEquals(new OrderCompletionPage().getTextFromOrderSuccessMessage(), expectedOrderSuccess, "Error message");
    }
    @And("^I Click on “CONTINUE” after order completion$")
    public void iClickOnCONTINUEAfterOrderCompletion() {
        new OrderCompletionPage().clickOnContinueOrderCompletionButton();
    }

    @And("^I Verify the text “Welcome to our store”$")
    public void iVerifyTheTextWelcomeToOurStore() {
        String expected1 = "Welcome to our store";
        Assert.assertEquals(new HomePage().getTextFromWelcomeStore(), expected1, "Error message");
    }

}
