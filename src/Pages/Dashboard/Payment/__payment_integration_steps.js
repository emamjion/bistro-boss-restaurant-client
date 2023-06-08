/**
 * 0. Install stripe and react stripe js
 * 1. Create a checkoutForm with card element(card element contains : card number, expiration date, cvs, zip code). 
 * 2. Create an account on stipe and get the publishable key --> pk
 * 3. Get card information
 * 4. Create a payment method 
 * 5. use test card to test payment
 * 6. on the server side : install stripe --> npm install --save stripe
 * 7. create a payment intent api with payment method types ['card']
 * make sure you provide amount in cents (multiply price with * 100)
 * 8. Call payment intent api to get client secret and store it in a state.
 * 9. use confirmCardPayment api with client secret card info
 * 10. Display confirm card error
 * 11. Display confirm card success
 * 13. do things after payment ---> 
 */