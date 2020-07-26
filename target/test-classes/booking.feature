Feature: Flight booking Features
@Chrome
Scenario Outline: Booking cheapest and fastest flights
Given user is on booking Page 
When user enters "<source>" and "<des>"
And user selects "<travelDate>"
Then user clicks on search flight button  
Examples: 
|source|des| travelDate|
|New Delhi|Mumbai|01/08/2020| 
