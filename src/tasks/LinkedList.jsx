import React, { useEffect, useState } from 'react';

/* Merge two sorted linked lists and return it as a sorted list. */

/*
What skillset is this testing for? A lot of the time, you’re not necessarily encountering a specific problem with a linked list. But you are encountering problems like what this is asking, where perhaps the developer has to get data from two separate APIs and find some way to present it together in a sorted fashion. They might be solving the exact same problem, just not using a linked list. We can also generalize this problem by saying, “Alright, we have two lists of numbers that are sorted. How would we go about producing a third one where it includes all of them?”
Is this a good interview question? There’s yet to be a scenario in my professional development career where I’ve encountered a linked list, but the algorithm is what’s really important here. If I gave you two things in sorted order, could you find a way to merge them in another sorted order? 
Some companies that are maybe not as familiar with alternative education options for software development, or that are more fundamentally rooted in solving deep algorithmic problems, might leverage questions like this. In the markets that we’re in at Tech Elevator in the Midwest, we actually don’t have a lot of questions like this. Out of a class of 40 or 50 students, there might be one student that has been given a question with a linked list, for example.
*/

export default function LinkedList () {

    var list1 = [];
    var list2 = [];

    function makeList () {

    }

    useEffect(() => {
        makeList();
    }, []);

    return (
        <>
        <h3>Linked list</h3>
        <p>Merge two sorted linked lists and return it as a sorted list.</p>

    
        </>
    );
}