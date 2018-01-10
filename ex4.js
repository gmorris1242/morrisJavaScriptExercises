var time = prompt("What time of day is it?");

if(time.toLowerCase() == "morning".toLowerCase()) {
	console.log("Since it is morning, you should be eating breakfast.  We suggest eggs and toast.");
} else if(time.toLowerCase() == "evening".toLowerCase()) {
	console.log("Since it is evening, you should be eating dinner.  We suggest chicken and rice.");
} else if(time.toLowerCase() == "noon".toLowerCase()) {
	console.log("Since it is noon, you should be eating lunch.  We suggest a salad.");
} else {
	console.log("Please select morning, noon or evening.");
} 
