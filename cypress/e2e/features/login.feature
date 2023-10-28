Feature: Authentication
    Scenario Outline: Login to Parabank
        Given I login to Para Bank with "<username>" and "<password>"

        Examples:
            |username|password|
            |username|password|