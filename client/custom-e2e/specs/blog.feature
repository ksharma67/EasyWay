Feature: Test Blog Page

  Scenario: Go to Get Blog page
    Given I view the "http://localhost:4200/blog"
    When I click on button
    When I wait for 3000 ms
    Then the page title should be "EasyWay"