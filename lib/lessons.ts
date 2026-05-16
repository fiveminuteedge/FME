export type Lesson = {
  id: number
  module: number
  day: number
  title: string
  subtitle: string
  story: string
  insight: string
  rule: string
  ruleSub: string
  actions: string[]
  actionNote: string
  quiz: {
    question: string
    options: string[]
    correctIndex: number
    correctFeedback: string
    wrongFeedback: string
  }
}

export const lessons: Lesson[] = [
  {
    id: 1,
    module: 1,
    day: 1,
    title: "The question that kills deals",
    subtitle: "Why 'what's the ROI?' ends careers — and how top performers answer it before it's asked",
    story: `Marcus had been in the deal for three months. The champion loved the product. The demos had gone well. Then the VP of Finance joined the final call and asked one question: "What's the return on investment here?"\n\nMarcus stumbled. He talked about features. He mentioned customer satisfaction scores. He said "most of our customers see great results."\n\nThe deal went quiet. Two weeks later, the prospect went with the incumbent — not because the product was worse, but because Marcus couldn't justify the investment in language the buyer understood.\n\nI watched this happen. I'd seen it a dozen times before. And every time, the rep thought they lost on product. They didn't.`,
    insight: `The ROI question is never really a question. It's a test. The economic buyer — the person signing the check — is asking: do you understand my business well enough to have earned this investment?\n\nMarcus failed not because he didn't know the answer. He failed because he never built the answer before he walked into the room. He confused product knowledge with business acumen. They are not the same thing.`,
    rule: "Value must be quantified before the buyer asks for it.",
    ruleSub: "If you're calculating ROI in response to a question, you're already losing. Top performers build the business case during discovery — weeks before any buying committee conversation.",
    actions: [
      "Pick one active deal in your pipeline right now.",
      "Write down in one sentence what business problem your product solves for that specific prospect — not in general, for them.",
      "Put a number on it. What does that problem cost them today — in time, money, or missed revenue? If you don't know, that's your discovery gap."
    ],
    actionNote: "You don't need to be right yet. You just need to have a number. Tomorrow's lesson shows you how to find it.",
    quiz: {
      question: "Marcus lost the deal because the VP of Finance asked about ROI. What was his real mistake?",
      options: [
        "He didn't know the product well enough to answer",
        "He should have excluded finance from the final call",
        "He never built the business case before the meeting",
        "He talked too much about customer satisfaction"
      ],
      correctIndex: 2,
      correctFeedback: "Exactly right. The ROI question exposed a discovery gap — not a knowledge gap. The business case should have been built weeks earlier, during the conversations where you learn what the problem is actually costing them.",
      wrongFeedback: "Not quite. Marcus's failure wasn't about product knowledge or call management. It was about when the work gets done. The business case must be built during discovery — not reconstructed under pressure in a buying committee meeting."
    }
  },
  {
    id: 2,
    module: 1,
    day: 2,
    title: "How to find the number",
    subtitle: "The discovery questions that surface what a problem is actually costing your prospect",
    story: `Sara was a solid rep. Good at relationships, great on demos. But her deal reviews always had the same gap: she knew the prospect had a problem, but she couldn't say what it was worth.\n\n"They said it's a priority," she'd tell me.\n\n"Priority and pain are different things," I'd tell her. "Priority is what they put on a slide. Pain is what keeps the VP up at night. You need the second one."\n\nShe went back into her next discovery call with two questions she'd never asked before. She closed the deal three weeks later at full price, no discount.`,
    insight: `Most reps treat discovery as information gathering. Top performers treat it as value construction. Every question you ask in discovery is building the business case you'll use six weeks later in the boardroom.\n\nThe difference is knowing which questions unlock numbers — not just stories.`,
    rule: "Every discovery call should end with a number you didn't have before.",
    ruleSub: "Not a feeling. Not 'they seem interested.' A specific cost, a specific volume, a specific frequency. Something you can multiply.",
    actions: [
      "In your next discovery call, ask: 'How often does this problem occur?'",
      "Then ask: 'When it happens, what does it cost you — in time, people, or dollars?'",
      "Write the answer down during the call. Say it back to them. Let them correct you."
    ],
    actionNote: "The goal isn't precision — it's ownership. When the prospect gives you the number, it becomes their number. That's what matters in the boardroom.",
    quiz: {
      question: "What's the difference between 'priority' and 'pain' in discovery?",
      options: [
        "Priority is more important than pain in complex deals",
        "Pain is emotional; priority is strategic",
        "Priority is what they say; pain is what it's actually costing them",
        "They mean the same thing in practice"
      ],
      correctIndex: 2,
      correctFeedback: "Exactly. Priority is what goes on a slide deck. Pain is quantifiable — it costs something real. Your job in discovery is to find the cost, not just confirm the priority.",
      wrongFeedback: "Think about it this way: a prospect can call something a priority and still not buy. Pain that has a real cost attached is what drives actual purchasing decisions."
    }
  },
  {
    id: 3,
    module: 1,
    day: 3,
    title: "Stop selling the product",
    subtitle: "The mental shift that separates quota-crushers from everyone else",
    story: `Early in my career I had a manager who said something that took me two years to fully understand:\n\n"Nobody wants your product. They want what your product does to their business."\n\nI was presenting to a CFO at the time. I'd spent forty minutes walking through features. She stopped me fifteen minutes in and said, "That's all interesting. But I need to know if this moves my number."\n\nI didn't know which number she meant. I hadn't asked. That was the last meeting she took with me.`,
    insight: `Feature selling is comfortable because you control it. You know the product better than anyone. But the economic buyer doesn't care about features — they care about outcomes: revenue up, costs down, risk reduced, time saved.\n\nWhen you shift from "here's what it does" to "here's what it does to your business," everything changes. Objections shrink. Urgency grows. Price becomes secondary.`,
    rule: "Every feature has a business outcome. Never present one without the other.",
    ruleSub: "Practice this formula: '[Feature] means that [business outcome], which for a company your size typically means [specific result].'",
    actions: [
      "List the three features you demo most often.",
      "For each one, write the business outcome it drives — not the function, the outcome.",
      "Practice saying it out loud using the formula above until it sounds natural, not scripted."
    ],
    actionNote: "Test it on a colleague first. Ask them: 'Does that sound like something a CFO would care about?' If they say no, rewrite it.",
    quiz: {
      question: "A CFO stops your demo and says 'does this move my number?' What's the right response?",
      options: [
        "Explain which features are most relevant to finance",
        "Ask which number matters most to her right now",
        "Share a case study from a similar company",
        "Confirm you'll send a detailed ROI analysis after the call"
      ],
      correctIndex: 1,
      correctFeedback: "Right. You don't know which number without asking. The question opens a business conversation — which is exactly where you want to be. Never assume which metric the economic buyer cares about.",
      wrongFeedback: "The right move is to ask which number matters most to her. Features, case studies, and post-call documents all bypass the real question: what business outcome is she responsible for? Get that first."
    }
  },
  {
    id: 4,
    module: 1,
    day: 4,
    title: "The cost of doing nothing",
    subtitle: "How to make the status quo the most expensive option in the room",
    story: `I was coaching a rep named James on a deal he'd been working for four months. The prospect kept saying "we're still evaluating." Classic stall.\n\nI asked James: "What's it costing them to not decide?"\n\nHe didn't know. Neither did the prospect — because no one had ever calculated it.\n\nWe built the number together. Turned out the delay was costing the company approximately $180,000 a quarter in avoidable overhead. James went back in, presented that number, and closed in two weeks.\n\nThe competitor didn't lose. The status quo lost.`,
    insight: `In complex sales, your biggest competitor is almost never another vendor. It's inertia. The decision to do nothing. "Let's revisit next quarter."\n\nThe way to beat inertia is to put a price on it. When the cost of inaction is visible and specific, staying still stops feeling safe.`,
    rule: "Every stalled deal needs a cost-of-inaction number.",
    ruleSub: "Calculate it with the prospect, not for them. Their number carries ten times the weight of yours.",
    actions: [
      "Identify your most stalled deal — the one that hasn't moved in 30+ days.",
      "Calculate what the problem is costing them per month it goes unsolved.",
      "In your next touchpoint, ask: 'Have you thought about what this is costing you while the decision is pending?'"
    ],
    actionNote: "Don't present the number as an attack. Present it as a service. You're helping them see something their internal team hasn't calculated.",
    quiz: {
      question: "In complex sales, what is usually your biggest competitor?",
      options: [
        "The market leader in your category",
        "The prospect's internal build option",
        "Inertia — the decision to do nothing",
        "Price sensitivity"
      ],
      correctIndex: 2,
      correctFeedback: "Correct. Most deals don't die because a competitor won — they die because the prospect decided to stay put. Your job is to make that decision visible and expensive.",
      wrongFeedback: "It's inertia — the decision to do nothing. 'Let's revisit next quarter' kills more deals than any competitor. The fix is making the cost of inaction concrete and specific."
    }
  },
  {
    id: 5,
    module: 1,
    day: 5,
    title: "Speaking the CFO's language",
    subtitle: "The four metrics that move every financial decision-maker",
    story: `I once watched a rep lose a $400k deal to a competitor whose product was objectively worse. After the loss, I called the CFO — something reps almost never do after losing.\n\nShe told me something I never forgot: "Your rep kept talking about efficiency. I kept waiting for him to tell me what efficiency was worth. He never did. The other team came in with a payback period. That's what I needed to see."\n\nEfficiency is a feeling. A payback period is a decision.`,
    insight: `CFOs and economic buyers think in four metrics. Learn these and you'll speak their language fluently:\n\n1. Payback period — how many months until the investment pays for itself\n2. ROI — the return as a percentage of the investment\n3. NPV — the value of future savings in today's dollars\n4. Cost avoidance — expenses prevented by the purchase\n\nYou don't need all four. You need the one your buyer reports on.`,
    rule: "Find out which metric your economic buyer uses to justify investments — then build your business case around that metric only.",
    ruleSub: "Presenting all four looks like you don't know which one matters. One metric, presented precisely, closes deals.",
    actions: [
      "In your next call with a financial stakeholder, ask: 'When you evaluate an investment like this internally, what metric does your team typically anchor on?'",
      "Write down their answer. Build every future conversation around it.",
      "Calculate that metric for your top open deal today."
    ],
    actionNote: "If they say 'payback period' — that's your number. Everything else is noise.",
    quiz: {
      question: "A CFO says she needs to see a payback period. You have ROI data ready. What do you do?",
      options: [
        "Present both — more data is always better",
        "Present the ROI and explain it's equivalent to payback period",
        "Ask her what payback period she's targeting, then calculate it",
        "Send a full financial model after the meeting"
      ],
      correctIndex: 2,
      correctFeedback: "Exactly right. You don't present what you have — you ask what she needs, then deliver it precisely. The follow-up question also gives you her success criteria, which is invaluable.",
      wrongFeedback: "The right move is to ask what payback period she's targeting, then calculate it for her. More data creates confusion. Her metric, her target, your number — that's the formula."
    }
  },
  {
    id: 6,
    module: 1,
    day: 6,
    title: "The one-page business case",
    subtitle: "How to give your champion a weapon they can use when you're not in the room",
    story: `Here's the situation every mid-level rep faces and nobody trains them for:\n\nYour champion loves the product. They want to buy it. But they have to go sell it internally — to their CFO, their CTO, their CEO — and you're not invited to those meetings.\n\nMost reps say "let me know if you need anything" and hope for the best.\n\nTop performers hand their champion a loaded weapon before they walk into that room.`,
    insight: `The internal meeting your champion has without you is where most deals actually live or die. Your champion needs three things to win that meeting:\n\n1. The business problem in one sentence\n2. The cost of that problem, quantified\n3. The payback period of solving it\n\nThat's it. One page. Three elements. Everything else is noise that dilutes the argument.`,
    rule: "Every champion should leave your meetings with a one-page business case they can present without you.",
    ruleSub: "You write it. They deliver it. The numbers come from your discovery conversations — which is why discovery is everything.",
    actions: [
      "Pick your best active deal with a champion you trust.",
      "Draft a one-page document: problem (1 sentence), cost of problem (1 number), payback period (1 number), recommended decision.",
      "Send it to your champion and say: 'I put this together for you in case it helps internally. Does this capture it accurately?'"
    ],
    actionNote: "The question at the end is critical. It invites them to correct it — which means they own it. Their version of your document is ten times more powerful than yours.",
    quiz: {
      question: "Your champion says 'I'm presenting to the CFO next week — can you send me some materials?' What do you send?",
      options: [
        "Your full product deck with pricing",
        "A case study from a similar customer",
        "A one-page business case with the problem, cost, and payback period",
        "A detailed proposal with all technical specifications"
      ],
      correctIndex: 2,
      correctFeedback: "Correct. The CFO doesn't need your deck — your champion already sold them on the product. What the CFO needs is a financial justification. One page, three numbers, clear recommendation.",
      wrongFeedback: "The champion doesn't need more product information — they're already sold. They need a financial argument they can deliver to a CFO in five minutes. One page: problem, cost, payback. That's the weapon."
    }
  },
  {
    id: 7,
    module: 1,
    day: 7,
    title: "Why price objections are value failures",
    subtitle: "Every 'too expensive' is really 'I don't see what this is worth'",
    story: `A rep came to me after a call, frustrated. "They said we're too expensive. They're going with a cheaper option."\n\n"Walk me through the call," I said.\n\nTwenty minutes in, I stopped him. He'd never established what the problem was costing them. He'd never built a business case. He'd gone straight from discovery to demo to pricing.\n\n"You didn't lose on price," I told him. "You lost because price was the only thing they had to evaluate you on. You never gave them anything else."`,
    insight: `Price objections are almost always value failures in disguise. When a buyer says "it's too expensive," what they're really saying is "the value isn't clear enough to justify the cost."\n\nThe fix is never to discount. The fix is to go back and rebuild the value equation until the price feels small relative to the problem it solves.`,
    rule: "Never discount before you've fully established value. Discounting without value is just making your product cheaper — not more compelling.",
    ruleSub: "When you hear 'too expensive,' ask: 'Can I ask what you're comparing it to?' That question tells you whether it's a budget problem or a value problem — and they require completely different responses.",
    actions: [
      "Think of the last deal you discounted. Did you fully establish the cost of their problem before pricing came up?",
      "Write down what you would do differently in that deal knowing what you know now.",
      "In your next deal, don't mention pricing until you've established a cost-of-problem number."
    ],
    actionNote: "A rep who discounts when challenged on price trains buyers to always challenge on price. Hold your number until you've built the case.",
    quiz: {
      question: "A prospect says 'your price is too high.' What's the right first response?",
      options: [
        "Ask what budget they have and work backwards",
        "Offer a discount to keep the deal moving",
        "Ask what they're comparing your price to",
        "Explain why your product justifies the premium"
      ],
      correctIndex: 2,
      correctFeedback: "Right. 'What are you comparing it to?' tells you everything. If they're comparing to a competitor, it's a value conversation. If they're comparing to their budget, it's a ROI conversation. You can't respond correctly until you know which one it is.",
      wrongFeedback: "The right first move is to ask what they're comparing it to. That single question tells you whether this is a value problem or a budget problem — and the fix for each is completely different."
    }
  },
  {
    id: 8,
    module: 1,
    day: 8,
    title: "The value conversation you're not having",
    subtitle: "Why most reps skip the most important part of every sales cycle",
    story: `I used to review call recordings for my team every week. The pattern was consistent:\n\nReps would have great rapport-building conversations. Strong technical discussions. Smooth demos. And then — nothing. They'd move to next steps without ever having the explicit conversation about business impact.\n\nThey assumed the prospect connected the dots. The prospect assumed the rep would connect the dots. Nobody connected the dots.\n\nDeals died in the gap between assumption and articulation.`,
    insight: `The value conversation is the explicit moment where you say: "Based on what you've told me, here's what I believe solving this problem is worth to your business."\n\nMost reps skip it because it feels presumptuous. It's not. It's the most valuable service you can provide. You're doing math the prospect hasn't done. You're giving them a reason to move.`,
    rule: "Have the value conversation explicitly — don't assume the prospect will do it themselves.",
    ruleSub: "Say it out loud: 'Based on what you've shared, I believe this problem is costing you approximately X. Does that match your understanding?' That one question changes the entire trajectory of the deal.",
    actions: [
      "In your next call, before you discuss pricing or next steps, explicitly state the business value you've identified.",
      "Use this exact framing: 'Based on what you've shared with me, I believe this problem is costing you approximately [number]. Does that match your understanding?'",
      "Then stop talking. Let them respond."
    ],
    actionNote: "The silence after that question is valuable. Let it sit. The prospect either confirms, corrects, or adds to the number. All three outcomes move the deal forward.",
    quiz: {
      question: "You've had three great discovery calls. You're about to present pricing. What should you do first?",
      options: [
        "Present pricing with a clear breakdown of what's included",
        "Share a customer story to build confidence before pricing",
        "Explicitly state the business value you've identified and confirm it with the prospect",
        "Send pricing via email so they can review it with their team"
      ],
      correctIndex: 2,
      correctFeedback: "Correct. Before price, establish value explicitly. Say the number out loud. Confirm it with the prospect. Only then does pricing have a context that makes it defensible.",
      wrongFeedback: "Before you present pricing, you need to anchor the value explicitly. State what you believe the problem is costing them and confirm it. Pricing without an established value foundation is just a number with no context."
    }
  },
  {
    id: 9,
    module: 1,
    day: 9,
    title: "Making urgency real",
    subtitle: "How to create genuine momentum without pressure tactics",
    story: `There's a version of urgency that destroys trust: artificial deadlines, fake discounts, end-of-quarter pressure. Reps who use these tactics close some deals and lose all their referrals.\n\nThen there's real urgency — and it comes entirely from the prospect's own numbers.\n\nWhen a prospect has told you their problem costs $50,000 a month and your solution costs $120,000 a year, the math creates urgency without you saying a word. Every month they delay costs them $50k. Your $120k solution pays for itself in less than three months. That's not pressure. That's arithmetic.`,
    insight: `Real urgency comes from making the cost of delay explicit. Not as a pressure tactic — as a service. You're helping the prospect see a calculation their team hasn't done.\n\nThe rep who shows up with that math is a business partner. The rep who says "this offer expires Friday" is a salesperson. Be the partner.`,
    rule: "Never manufacture urgency. Calculate it.",
    ruleSub: "Cost per month of delay ÷ annual contract value = months to payback. Show that math. Let it do the work.",
    actions: [
      "For your top three open deals, calculate the monthly cost of inaction.",
      "Calculate the payback period of your solution for each.",
      "In your next follow-up, lead with: 'I wanted to share something I calculated based on our last conversation...' and present the math."
    ],
    actionNote: "Never say 'if you sign by Friday.' Say 'every month this goes unsolved costs you approximately X.' The first is pressure. The second is value.",
    quiz: {
      question: "A prospect keeps pushing the decision to next quarter. What's the most effective response?",
      options: [
        "Offer a discount if they sign this quarter",
        "Explain that your calendar fills up and you want to secure their implementation slot",
        "Calculate what delaying costs them per month and present it",
        "Ask your manager to make an executive call to their VP"
      ],
      correctIndex: 2,
      correctFeedback: "Exactly right. The cost of delay, calculated from their own numbers, is the only urgency that doesn't feel like pressure. It reframes the delay as an active cost decision — not a neutral wait.",
      wrongFeedback: "Discounts and implementation slots are pressure tactics that erode trust. The right answer is to calculate the monthly cost of delay using their own numbers. That makes waiting feel expensive — which it is."
    }
  },
  {
    id: 10,
    module: 1,
    day: 10,
    title: "The value mindset: putting it all together",
    subtitle: "You now have everything you need to sell differently starting today",
    story: `Ten days ago you started this module. You've covered a lot of ground — not theory, but field-tested principles from thousands of hours inside complex deals.\n\nHere's what I know about the reps who apply this material versus the ones who don't:\n\nThe ones who apply it don't always close more deals in month one. But by month three, their average deal size is higher, their discounting is lower, and their win rate on competitive deals has moved meaningfully. The ones who don't apply it are still explaining features to people who've already decided not to buy.\n\nThe choice is made in the next call you take.`,
    insight: `The value mindset isn't a technique. It's a fundamental shift in how you see your role. You're not there to explain the product. You're there to help the prospect understand what their problem is costing them — and whether solving it makes financial sense.\n\nWhen you show up that way, everything changes. You're not a vendor. You're a trusted advisor with a calculator.`,
    rule: "Sell the outcome. Quantify the problem. Build the case before they ask. Be the partner, not the pitch.",
    ruleSub: "This is the foundation everything else in FiveMinuteEdge is built on. Module 2 goes deeper — into discovery that surfaces the pain nobody else finds.",
    actions: [
      "Review your top five open deals against everything you've learned this module.",
      "For each deal, identify: Do I have a cost-of-problem number? Have I built a business case? Does my champion have a one-pager?",
      "Pick the one deal where applying this framework could move it most — and take one action on it today."
    ],
    actionNote: "Module 2 unlocks tomorrow. You've earned it.",
    quiz: {
      question: "Which combination best describes the value mindset?",
      options: [
        "Strong product knowledge + smooth demos + competitive pricing",
        "Deep rapport + creative closing techniques + persistent follow-up",
        "Quantified problem + business case + champion-enabled + cost of delay",
        "Executive access + referrals + end-of-quarter urgency"
      ],
      correctIndex: 2,
      correctFeedback: "That's it. Quantified problem, business case, champion-enabled, and cost of delay visible. That's the full framework — and it's what separates top performers from everyone else.",
      wrongFeedback: "The value mindset is: quantify the problem, build the business case, enable your champion, make the cost of delay explicit. Everything else — rapport, demos, closing — supports that foundation but can't replace it."
    }
  }
]

export function getLessonByDay(day: number): Lesson | undefined {
  return lessons.find(l => l.id === day)
}

export function getUnlockedLessons(joinedAt: string): number {
  const joined = new Date(joinedAt)
  const now = new Date()
  const daysDiff = Math.floor((now.getTime() - joined.getTime()) / (1000 * 60 * 60 * 24))
  return Math.min(daysDiff + 1, lessons.length)
}
