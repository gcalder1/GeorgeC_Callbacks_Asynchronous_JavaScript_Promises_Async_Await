const whoAreYou = (person) => (new Promise ((resolve, reject) => {
	if(person == "George"){
		setTimeout(() => {
			resolve(`Welcome back, ${person}!`);
		}, 1000);
	} else {
			reject(`Who are you, ${person}? You are not this computer's owner!`);
	}
}));

whoAreYou('George') //<--Fill this with the value you're trying to check
	.then((confirmedIdentity)=> {
		console.log('Identity Confirmed.. ', confirmedIdentity);
	})
	.catch((invalidIdentity) => {
		console.log('Identity Denied.. ', invalidIdentity);
	})


	
	console.log(whoAreYou('George'));