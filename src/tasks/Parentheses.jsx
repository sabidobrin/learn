/* Given an expression string x,
examine whether the pairs and the orders of “{”,“}”,“(”,“)”,“[”,“]” are correct in the expression.
For example, the function should return “true” for “[()]{}{[()()]()}” and “false” for “[(])”. */

/*
What skillset is this testing for? All that you use to solve this problem is the stack. Once you realize you should be using a stack, I would say it’s a pretty straightforward question. Getting to think in that style of using a different data structure than you might think to solve it, that’s the challenge.
What you do is, when you see an open parentheses, square bracket or curly brace, you add that to the stack. And then when you see a closing side of the pair, then you need to pop from the stack. And if the closing matches the opening, good. If it doesn’t, then it’s incorrect or invalid.
Is this a good interview question? It’s actually one of my favorite problems. Thinking about it from the data structures perspective, I think that it’s a very practical skill — although you’re not necessarily going to be writing algorithms to see if parentheses are balanced. But applying knowledge to solve the problem, that’s the key here. Realizing that there are data structures out there to help solve this problem really easily, that are often used when actually building applications — and making sure that you’re using the most efficient data structure possible to accomplish whatever you’re trying to accomplish.
*/

export default function Parentheses () {
    return (<>
    <h3>Parentheses</h3>
    <p>Given an expression string x,<br/>
    examine whether the pairs and the orders of “(”,“)”,“[”,“]” are correct in the expression.<br/>
    For example, the function should return “true” for “[()][()()]()” and “false” for “[(])”.</p>
    </>);
}