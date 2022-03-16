/* Design a parking lot using object-oriented principles. */

/*
What skillset is this testing for? Here we’re looking at, “Can you think through how to take something that’s not obviously an object at first, and turn it into a series of objects to accomplish what you’re trying to accomplish?” This will vary a little by language, but ultimately it’s a class. It’s a problem to get you to think through and break down classes.
Sure, you have the parking lot and you have parking spaces. But if we have a programming need for this, we probably need to think through, is a space occupied? That means you have to have the concept of a class of a vehicle, and the vehicle has to occupy a space. You can have the concept of entrances, and parking lots can even have more than one floor. So it really comes down to whether you can take this problem and break it down and think through all of the possible things that need to be considered when building a parking lot.
Is this a good interview question? It’s very common to have a question that is vague, but it’s also acceptable for the interviewee to come back and ask questions. “What are you looking for out of this problem? Are we talking a parking lot at Walmart? Are we talking a parking lot with multiple floors?” You can ask questions to determine how complex you need to make this. But it’s a very valid piece for them to just see your thought process and things that you might need to take into consideration.
*/

export default function ParkingLot () {
    return (<>
    <h3>Parking lot</h3>
    <p>Design a parking lot using object-oriented principles.</p>
    </>);
}