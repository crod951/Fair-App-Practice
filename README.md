Practicing creating a React App similar to to Fair Interview Exercise found at: https://github.com/wearefair/interview/tree/master/react

Still a work in progress

-Christopher Rodrigues

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


# React Take Home Exercise

README Originally From: https://github.com/wearefair/interview/tree/master/react

Create an react web app to merchandise vehicles

The web app should have the following features:
* A Car Listing Page
  * The car listing page should display a list of cars retrieved from the vehicle index API endpoint provided. At least the following information should be made available to the user
    * Vehicle Make, Model, Trim, and Year
    * Car Image
    * Start Fee and Monthly Fee
    * Use screen shot as guidance if needed.
  * Implement pagination using the data from the index api response
    * Note when calling the stub index endpoint, you will always get the same response data. So handle that as you see fit.
  * When clicking on a specific car, redirect the user to the car detail page.
* Car Details Page
  * Load the vehicle data from the vehicle specific API endpoint, do not pass in data from the index API response!
    * Only two of the vins have valid stubs, for other requests please implement proper API error handling.
  * Showcase the vehicle, using provided design as guidance.
  * Implement a car images gallery for browsing through all images of the car.
  * Implement a mileage slider to allow viewing of different prices based on mileage selected.
* Vehicle Favoriting
  * User should be able to favorite and unfavorite cars on the car listing and car details page.
  * Favorites should be tracked and persisted locally.
  * The favorites on the car listing and vehicle detail page should be in sync.

We suggest using https://github.com/ReactJSResources/react-webpack-babel to help you quickly get started on the exercise.
Use the two attached screen shots as references to what the vehicle listing and detail page should resemble. It's up to you to decide whether you want to implement it as is, or come up with your own vision of the user experience.

# Data Source
Stubbed API endpoints are available via apiary here:
https://interviewapi3.docs.apiary.io/#reference/0/vehicles
  * For car listing: https://private-4e19e-interviewapi3.apiary-mock.com/vehicles?page={page_number}
  * For car details: https://private-4e19e-interviewapi3.apiary-mock.com/vehicles/{vehicle_vin}
    * Out of the 10 vehicles returned, here are only 2 vehicles detail endpoints stubbed out.  Those 2 vehicles will be the only ones you'll be able to get to Car Details page on. For the other vehicles, go ahead and do error handling for them.

For car image urls that are no longer working, feel free to implement placeholders.
