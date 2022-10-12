async function getStripeSession () {

	// Call the Stripe API
	let stripeRequest = await fetch('https://api.stripe.com/v1/checkout/sessions', {
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${API_TOKEN}`,
			'Content-type': 'application/x-www-form-urlencoded'
		},
		body: buildQuery({
            payment_method_types: ['card'],
            mode: 'payment',
            // success_url: 'http://my-website.com/success/',
            // cancel_url: 'http://my-website.com/checkout/',
            
		})
	});

}