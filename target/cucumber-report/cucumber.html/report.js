$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("electronics.feature");
formatter.feature({
  "line": 1,
  "name": "Electronics Test",
  "description": "As a user navigation to Cell Phones page",
  "id": "electronics-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7925352100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should verify that the product added successfully and place order successfully",
  "description": "",
  "id": "electronics-test;user-should-verify-that-the-product-added-successfully-and-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I mouse hover on the \"Electronics\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover on \"Cell phones\" and click",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the text \"Cell phones\" on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click on the \"List View\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on the product name \"Nokia Lumia 1020\" link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can see the text \"Nokia Lumia 1020\" on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I should see the price \"$349.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I change the quantity to 2",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on the \"ADD TO CART\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see the message \"The product has been added to your shopping cart\" on the top green bar",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I close the bar by clicking on the cross button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I mouse hover on \"Shopping cart\" and click on \"GO TO CART\" button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to verify message \"shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should be able to verify quantity 2",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I can see the total $698.00",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on the checkbox “I agree with the terms of service” on page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on checkout",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should be able to see text \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on register tab",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see text Register on register page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter email \"random email\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I fill below details in the registration form",
  "rows": [
    {
      "cells": [
        "John",
        "Smith",
        "Password1",
        "Password1"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should be able to see message \"Your registration completed\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I can see text \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter email \"random email\" into email field",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter password \"Password1\" into password field",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on the checkbox I agree with the terms of service",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on the checkout tab",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter email \"random email\" into the email field",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I select country from drop down",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I fill below details in form in checkout after registration",
  "rows": [
    {
      "cells": [
        "John",
        "Smith",
        "London",
        "101 House",
        "GS1 2FG",
        "02022039384"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on continue tab",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on radio button \"2nd Day Air ($0.00)\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on continue from shipping method",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I select radio button credit card",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click on continue tab from payment method",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I select visa from select credit card dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I fill below details in credit card form",
  "rows": [
    {
      "cells": [
        "Mr Smith",
        "5105105105105100",
        "12",
        "2023",
        "203"
      ],
      "line": 57
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I click on the payment continue button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I should be able to verify payment method is \"Credit Card\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I can see shipping method is \"2nd Day Air\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I can able to verify total \"$698.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I click on confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I should be able to verify the text Thank You",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I can see the message \"Your order has been successfully processed!\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I click on the continue tab",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I can able to see the text \"Welcome to our store\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I click on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I am able to verify the URL \"https://demo.nopcommerce.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I should be able to add product successfully and placed order successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ElectronicsSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 213652000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 22
    }
  ],
  "location": "ElectronicsSteps.iMouseHoverOnTheTab(String)"
});
formatter.result({
  "duration": 413324800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 18
    }
  ],
  "location": "ElectronicsSteps.iMouseHoverOnAndClick(String)"
});
formatter.result({
  "duration": 1409462300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 23
    }
  ],
  "location": "ElectronicsSteps.iShouldSeeTheTextOnThePage(String)"
});
formatter.result({
  "duration": 68502700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "List View",
      "offset": 16
    }
  ],
  "location": "ElectronicsSteps.iClickOnTheTab(String)"
});
formatter.result({
  "duration": 135528700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia Lumia 1020",
      "offset": 29
    }
  ],
  "location": "ElectronicsSteps.iClickOnTheProductNameLink(String)"
});
formatter.result({
  "duration": 3221164100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia Lumia 1020",
      "offset": 20
    }
  ],
  "location": "ElectronicsSteps.iCanSeeTheTextOnThePage(String)"
});
formatter.result({
  "duration": 45301800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$349.00",
      "offset": 24
    }
  ],
  "location": "ElectronicsSteps.iShouldSeeThePrice(String)"
});
formatter.result({
  "duration": 34245300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "ElectronicsSteps.iChangeTheQuantityTo(int)"
});
formatter.result({
  "duration": 195044500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADD TO CART",
      "offset": 16
    }
  ],
  "location": "ElectronicsSteps.iClickOnTheButton(String)"
});
formatter.result({
  "duration": 1105199100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 26
    }
  ],
  "location": "ElectronicsSteps.iShouldSeeTheMessageOnTheTopGreenBar(String)"
});
formatter.result({
  "duration": 29335000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iCloseTheBarByClickingOnTheCrossButton()"
});
formatter.result({
  "duration": 1080756300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 18
    },
    {
      "val": "GO TO CART",
      "offset": 47
    }
  ],
  "location": "ElectronicsSteps.iMouseHoverOnAndClickOnButton(String,String)"
});
formatter.result({
  "duration": 2603453500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shopping cart",
      "offset": 36
    }
  ],
  "location": "ElectronicsSteps.iShouldBeAbleToVerifyMessage(String)"
});
formatter.result({
  "duration": 44042800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 36
    }
  ],
  "location": "ElectronicsSteps.iShouldBeAbleToVerifyQuantity(int)"
});
formatter.result({
  "duration": 72054600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "698",
      "offset": 21
    },
    {
      "val": "00",
      "offset": 25
    }
  ],
  "location": "ElectronicsSteps.iCanSeeTheTotal$(int,int)"
});
formatter.result({
  "duration": 41562000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnTheCheckboxIAgreeWithTheTermsOfServiceOnPage()"
});
formatter.result({
  "duration": 85587400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnCheckout()"
});
formatter.result({
  "duration": 553238300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 30
    }
  ],
  "location": "ElectronicsSteps.iShouldBeAbleToSeeText(String)"
});
formatter.result({
  "duration": 123741200,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnRegisterTab()"
});
formatter.result({
  "duration": 1448469900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldBeAbleToSeeTextRegisterOnRegisterPage()"
});
formatter.result({
  "duration": 68877100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "random email",
      "offset": 15
    }
  ],
  "location": "ElectronicsSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 127903500,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iFillBelowDetailsInTheRegistrationForm(DataTable)"
});
formatter.result({
  "duration": 390404600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 2732038100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 33
    }
  ],
  "location": "ElectronicsSteps.iShouldBeAbleToSeeMessage(String)"
});
formatter.result({
  "duration": 68711900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 2613554900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 16
    }
  ],
  "location": "ElectronicsSteps.iCanSeeText(String)"
});
formatter.result({
  "duration": 45152700,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 507675700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "random email",
      "offset": 15
    }
  ],
  "location": "ElectronicsSteps.iEnterEmailIntoEmailField(String)"
});
formatter.result({
  "duration": 142879300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1",
      "offset": 18
    }
  ],
  "location": "ElectronicsSteps.iEnterPasswordIntoPasswordField(String)"
});
formatter.result({
  "duration": 2115242000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnLogInButton()"
});
formatter.result({
  "duration": 1332050500,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnTheCheckboxIAgreeWithTheTermsOfService()"
});
formatter.result({
  "duration": 86723800,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnTheCheckoutTab()"
});
formatter.result({
  "duration": 1944432500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "random email",
      "offset": 15
    }
  ],
  "location": "ElectronicsSteps.iEnterEmailIntoTheEmailField(String)"
});
formatter.result({
  "duration": 204174000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iSelectCountryFromDropDown()"
});
formatter.result({
  "duration": 227289300,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iFillBelowDetailsInFormInCheckoutAfterRegistration(DataTable)"
});
formatter.result({
  "duration": 798020000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnContinueTab()"
});
formatter.result({
  "duration": 89517400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2nd Day Air ($0.00)",
      "offset": 25
    }
  ],
  "location": "ElectronicsSteps.iClickOnRadioButton(String)"
});
formatter.result({
  "duration": 3087228400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnContinueFromShippingMethod()"
});
formatter.result({
  "duration": 2128240200,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iSelectRadioButtonCreditCard()"
});
formatter.result({
  "duration": 447472700,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnContinueTabFromPaymentMethod()"
});
formatter.result({
  "duration": 80395300,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iSelectVisaFromSelectCreditCardDropdown()"
});
formatter.result({
  "duration": 435997600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iFillBelowDetailsInCreditCardForm(DataTable)"
});
formatter.result({
  "duration": 494845900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnThePaymentContinueButton()"
});
formatter.result({
  "duration": 68165700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit Card",
      "offset": 46
    }
  ],
  "location": "ElectronicsSteps.iShouldBeAbleToVerifyPaymentMethodIs(String)"
});
formatter.result({
  "duration": 525095700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2nd Day Air",
      "offset": 30
    }
  ],
  "location": "ElectronicsSteps.iCanSeeShippingMethodIs(String)"
});
formatter.result({
  "duration": 34609600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$698.00",
      "offset": 28
    }
  ],
  "location": "ElectronicsSteps.iCanAbleToVerifyTotal(String)"
});
formatter.result({
  "duration": 36438400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnConfirmButton()"
});
formatter.result({
  "duration": 84164500,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldBeAbleToVerifyTheTextThankYou()"
});
formatter.result({
  "duration": 937793700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been successfully processed!",
      "offset": 23
    }
  ],
  "location": "ElectronicsSteps.iCanSeeTheMessage(String)"
});
formatter.result({
  "duration": 25660300,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnTheContinueTab()"
});
formatter.result({
  "duration": 526309700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to our store",
      "offset": 28
    }
  ],
  "location": "ElectronicsSteps.iCanAbleToSeeTheText(String)"
});
formatter.result({
  "duration": 39118300,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnLogOutLink()"
});
formatter.result({
  "duration": 2868296400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.nopcommerce.com/",
      "offset": 29
    }
  ],
  "location": "ElectronicsSteps.iAmAbleToVerifyTheURL(String)"
});
formatter.result({
  "duration": 12349100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldBeAbleToAddProductSuccessfullyAndPlacedOrderSuccessfully()"
});
formatter.result({
  "duration": 20100,
  "status": "passed"
});
formatter.after({
  "duration": 689800,
  "status": "passed"
});
});