// const welcomeMessage = prompt('Welcome to your browser. Please enter your name before we begin.');
// const nameIntake = welcomeMessage.charAt(0).toUpperCase() + welcomeMessage.slice(1) ?? 'Unknown';

const whoAreYou = (person) => (new Promise ((resolve, reject) => {
	if(person == "George"){
		setTimeout(() => {
			resolve(`Welcome back, ${person}!`);
		}, 2000);
	} else {
			reject(`Who are you, ${person}? You are not this computer's owner!`);
	}
}));

whoAreYou('George') //<--Fill this with the value you're trying to check
	.then((confirmedIdentity)=> {
		console.log('Identity Confirmed.. ', confirmedIdentity);
	})
	.catch((invalidIdentity) => {
        alert(`${invalidIdentity}`)
		console.error(`Computer self-destruct sequence activated.`);
        const selfDestruct = (countDown) =>{
            if(countDown < 1){
                console.log(`Bye Bye!`)
                return;
                
                // return window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
            }

            console.log(countDown);
            setTimeout(() => selfDestruct(countDown -1), 1000);

        }
        selfDestruct(5)
        
	})


