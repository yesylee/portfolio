const quotes=[
    {
        quote:"We cannot solve problems with the kind of thinking we employed when we came up with them.",
        author:"Albert Einstein",
    },
    {
        quote:"Learn as if you will live forever, live like you will die tomorrow.",
        author:"Mahatma Gandhi",
    },
    {
        quote:"Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
        author:"Mark Twain",
    },
    {
        quote:"When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
        author:"Eleanor Roosevelt",
    },
    {
        quote:"When you change your thoughts, remember to also change your world.",
        author:"Norman Vincent Peale",
    },
    {
        quote:"It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.",
        author:"Walter Anderson",
    },
    {
        quote:"Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.",
        author:"Diane McLaren",
    },
    {
        quote:"Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author:"Winston S. Churchill",
    },
    {
        quote:"It is better to fail in originality than to succeed in imitation.",
        author:"Herman Melville",
    },
    {
        quote:"The road to success and the road to failure are almost exactly the same.",
        author:"Colin R. Davis",
    },
    {
        quote:"Success usually comes to those who are too busy looking for it.",
        author:"Henry David Thoreau",
    },
    {
        quote:"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
        author:"Dale Carnegie",
    },
    {
        quote:"There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.",
        author:"Mister Rogers",
    },
    {
        quote:"Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.",
        author:"John Wooden",
    },
    {
        quote:"I never dreamed about success. I worked for it.",
        author:"Estée Lauder",
    },
    {
        quote:"Success is getting what you want, happiness is wanting what you get.",
        author:"W. P. Kinsella",
    },
    {
        quote:"Don’t let yesterday take up too much of today.",
        author:"Will Rogers",
    },
    {
        quote:"You learn more from failure than from success. Don’t let it stop you. Failure builds character.",
        author:"Unknown",
    },
    {
        quote:"If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
        author:"Steve Jobs",
    },
    {
        quote:"Experience is a hard teacher because she gives the test first, the lesson afterwards.",
        author:"Vernon Sanders Law",
    },
    {
        quote:"To know how much there is to know is the beginning of learning to live.",
        author:"Dorothy West",
    },
    {
        quote:"Goal setting is the secret to a compelling future.",
        author:"Tony Robbins",
    },
    {
        quote:"Either you run the day or the day runs you.",
        author:"Jim Rohn",
    },
    {
        quote:"Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus. ",
        author:"Alexander Graham Bell",
    },
    {
        quote:"When we strive to become better than we are, everything around us becomes better too.",
        author:"Paulo Coelho",
    },
    {
        quote:"I’m a greater believer in luck, and I find the harder I work the more I have of it.",
        author:"Thomas Jefferson",
    },
    {
        quote:"Opportunity is missed by most people because it is dressed in overalls and looks like work.",
        author:"Thomas Edison",
    },
    {
        quote:"Setting goals is the first step in turning the invisible into the visible.",
        author:"Tony Robbins",
    },
    {
        quote:"Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.",
        author:"Oprah Winfrey",
    },
    {
        quote:"Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.",
        author:"Oprah Winfrey",
    },
];

const quote =document.querySelector("#quote span:first-child");
const author =document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText= todaysQuote.quote;
author.innerText= todaysQuote.author;
