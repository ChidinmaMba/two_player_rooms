//code snippet from @SimonHoiberg
//This code creates unique IDS for the rooms
function uid() {
	const head = Date.now().toString(36);
	const tail = Math.random().toString(36).substr(2);

	return head + tail;
}

module.exports = {
	uid
};
