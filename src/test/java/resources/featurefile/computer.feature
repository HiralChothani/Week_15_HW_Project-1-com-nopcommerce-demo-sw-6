Feature:  Computer Page Test
  As user I want to check computer page on nop-commerce website

 # @sanity @regression
  Scenario: Verify Product arrange in alphabetical order
    Given I am on Nop-commerce homepage
    When  I Click on Computer Menu.
    And   I Click on Desktop
    And   I Select Sort By position "Name: Z to A"
    Then  Product will arrange into descending order
    And   I Verify the Product is arranged in Descending order.

 # @smoke @regression
  Scenario: Verify product added to shopping cart successFully
    Given I am on Nop-commerce homepage
    When  I Click on Computer Menu.
    And   I Click on Desktop
    And   I Select Sort By position "Name: A to Z" assending
    And   I Click on "Add To Cart" for product "Build your own computer"
    And   I Verify the Text "Build your own computer"
    And   I Select processor "2.2 GHz Intel Pentium Dual-Core E2200" using Select class
    And   I Select RAM "8GB [+$60.00]" using Select class.
    And   I Select HDD radio "400 GB [+$100.00]"
    And   I Select OS radio "Vista Premium [+$60.00]"
    And   I Check Two Check boxes "Microsoft Office [+$50.00]" and "Total Commander [+$5.00]"
    And   I Verify the price "$1,475.00"
    And   I Click on "ADD TO CARD" Button.
    Then  Product has been added to Shopping cart successfully
    And   I verify the Message "The product has been added to your shopping cart" on Top green Bar
    And   After that close the bar clicking on the cross button.
    And   I MouseHover on "Shopping cart" and Click on "GO TO CART" button.
    And   I Verify the message "Shopping cart"
    But   I Change the Qty to "2" and Click on "Update shopping cart"
    And   I Verify the Total"$2,950.00"
    And   I click on checkbox “I agree with the terms of service”
    And   I Click on “CHECKOUT”
    And   I Verify the Text “Welcome, Please Sign In!”
    And   I Click on “CHECKOUT AS GUEST” Tab
    And   I Fill the all mandatory field
      | John | Smith | XYZ@gmail.com | London | Random Street  | WES 6RT | 0777777777 |
    And   I Click on “CONTINUE”
    And   I Click on Radio Button “Next Day Air($0.00)”
    And   I Click on Shipping Method “CONTINUE”
    And   I Select Radio Button “Credit Card”
    And   I Select “Master card” From Select credit card dropdown
    And   I Fill all the details
       | Mr Smith | 5425233430109903 | 123 |
    And   I Click on Payment “CONTINUE”
    And   I Verify “Payment Method” is “Credit Card”
    And   I Verify “Shipping Method” is “Next Day Air”
    And   I Verify Total is “$2,950.00”
    And   I Click on “CONFIRM”
    And   I Verify the Text “Thank You”
    And   I Verify the message “Your order has been successfully processed!”
    And   I Click on “CONTINUE” after order completion
    And   I Verify the text “Welcome to our store”