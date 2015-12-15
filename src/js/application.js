import messages from './messages';

class Application {
	constructor() {
		let { init } = messages;
		console.log(`Some important message: ${init}`);
	}

	start() {
		const { start: START_MESSAGE } = messages;
		console.log(`Wow, look at this message: ${START_MESSAGE}`);
	}
}

let app = new Application();
app.start();
