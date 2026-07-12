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
  },
  {
    id: 11,
    module: 2,
    day: 11,
    title: "The deal you think you have",
    subtitle: "Why single-threaded deals die — and what to do about it today",
    story: `I once watched a rep carry a deal through six months of discovery, demos, and negotiations. He had one contact: a director of operations who loved the product, responded to every email, and told him repeatedly they were going to buy.\n\nThen the director left the company.\n\nThe deal didn't just stall. It vanished. There was no one else who knew us, trusted us, or had any reason to push the decision forward. Six months of work. Gone in a week.\n\nWhen I debriefed with him, he said: "I thought I had a great relationship."\n\n"You did," I told him. "With one person. In a company of four hundred."`,
    insight: `Single-threaded deals are the most common reason good reps lose deals they should win. You build a relationship with one person, and you mistake that relationship for pipeline.\n\nIn complex B2B sales, the person you talk to is almost never the person who decides. There's a buying committee — and if you're not known to most of them, you're not really in the deal. You're just in a conversation.`,
    rule: "A deal with one contact is not a deal. It's a conversation with an expiration date.",
    ruleSub: "Multi-threading isn't aggressive. It's professional. Top performers map the full buying committee in the first thirty days of a deal — before anyone asks them to.",
    actions: [
      "List your top five open deals. For each one, write down every person at that company you've spoken to directly.",
      "For any deal where the answer is one person — flag it. That deal is at risk.",
      "In your next call with that contact, ask: 'As we move toward a decision, who else in your organization typically weighs in on something like this?'"
    ],
    actionNote: "You're not asking to go around them. You're asking them to help you help them. Frame it that way and they'll give you the map.",
    quiz: {
      question: "A rep has a strong relationship with a director who is enthusiastic about the product. What's the biggest risk?",
      options: [
        "The director might negotiate too hard on price",
        "The rep hasn't multi-threaded and is fully dependent on one contact",
        "The product demo hasn't been tailored to the director's team",
        "The deal timeline is too aggressive"
      ],
      correctIndex: 1,
      correctFeedback: "Correct. One enthusiastic contact feels like momentum — but it's fragile. If that person leaves, goes quiet, or loses internal influence, the deal collapses. Multi-threading is how you protect six months of work.",
      wrongFeedback: "The real risk is single-threading. One contact, no matter how enthusiastic, is a single point of failure. Multi-threading the deal protects everything you've built."
    }
  },
  {
    id: 12,
    module: 2,
    day: 12,
    title: "Who actually decides",
    subtitle: "Mapping the four roles that exist in every buying committee",
    story: `Sara had been in sales for four years when she came to me with a deal she couldn't figure out. She had three people engaged — a VP of Sales, an IT director, and a procurement manager. All of them were asking questions. None of them were moving.\n\n"Who's the economic buyer?" I asked.\n\nShe stared at me. "I thought it was the VP."\n\n"Does the VP control the budget?"\n\nShe didn't know. She'd never asked. Turned out the budget sat with the CFO — someone she'd never spoken to, who didn't know her name, and who would ultimately sign or kill the deal.\n\nShe'd been selling to the audience. Not the decision-maker.`,
    insight: `Every buying committee has four roles. The same person can play more than one, but every role exists in every deal:\n\n1. Economic Buyer — controls the budget and has final say. This is the person you must reach.\n2. Champion — wants you to win and will sell internally on your behalf.\n3. Influencer — has an opinion that matters but doesn't decide.\n4. Blocker — has a reason to want you to lose. Every deal has at least one.\n\nIf you don't know who's playing each role, you're navigating blind.`,
    rule: "Map all four roles before your third meeting. Every meeting after that should be building or protecting your position with each one.",
    ruleSub: "The economic buyer is the one role reps most often skip. They focus on the champion because it's comfortable. The champion can't save a deal the economic buyer kills.",
    actions: [
      "For your top open deal, draw a simple map: list every stakeholder and write their role next to their name.",
      "Identify anyone playing the Blocker role — even if you're not sure. Assume one exists.",
      "Identify who you haven't spoken to yet who likely has influence. That's your outreach list for this week."
    ],
    actionNote: "You don't need a perfect map. You need a working one. Update it after every call.",
    quiz: {
      question: "You've been working with a VP of Sales for two months. The deal stalls. You learn the CFO controls the budget. What happened?",
      options: [
        "The VP of Sales misled you about their authority",
        "You failed to identify and reach the economic buyer early enough",
        "The deal needed a better business case for the VP",
        "Procurement got involved too late"
      ],
      correctIndex: 1,
      correctFeedback: "Exactly. The economic buyer — the person who controls budget and has final say — was never identified or engaged. The VP was an influencer, not a decision-maker. This is the most common reason complex deals stall.",
      wrongFeedback: "The issue is the economic buyer was never identified. The CFO controlled the budget and had never been engaged. Selling to influencers without reaching the economic buyer is the most expensive mistake in complex sales."
    }
  },
  {
    id: 13,
    module: 2,
    day: 13,
    title: "How to reach the economic buyer",
    subtitle: "The approach that gets you into the room without burning your champion",
    story: `The most common mistake reps make when they learn about economic buyers is this: they try to go around their champion to get there.\n\nI watched a rep send a cold LinkedIn message to a CFO while simultaneously working with that CFO's direct report as his champion. The champion found out. The deal died the next day.\n\n"I was just trying to get to the right person," the rep told me.\n\n"You got there," I said. "Just not the way that works."`,
    insight: `The economic buyer is rarely accessible to you directly — at least not at first. The path to them runs through your champion. Your champion is the bridge, and burning it to shortcut the process is one of the costliest mistakes in complex sales.\n\nThe right approach is to ask your champion to bring the economic buyer in — and to give your champion a reason to do it that makes them look good, not threatened.`,
    rule: "Always reach the economic buyer through your champion, never around them.",
    ruleSub: "The ask that works: 'At some point in deals like this, it helps to have a brief conversation with whoever owns the budget — just to make sure we're solving the right problem at the right level. Is that something you'd be comfortable arranging?'",
    actions: [
      "Identify the economic buyer in your top open deal.",
      "If you haven't met them, draft the ask above — tailored to your deal — and send it to your champion this week.",
      "If your champion resists, that's a signal worth understanding. Ask them: 'Is there a reason that wouldn't work?'"
    ],
    actionNote: "A champion who won't introduce you to the economic buyer is either not as strong as you think, or protecting their own position. Both are worth knowing now.",
    quiz: {
      question: "Your champion is a director. You know the CFO controls the budget. What's the right move?",
      options: [
        "Email the CFO directly with a business case",
        "Ask your champion to arrange an introduction to the CFO",
        "Wait until the director brings the CFO in naturally",
        "Request a multi-stakeholder demo and invite the CFO yourself"
      ],
      correctIndex: 1,
      correctFeedback: "Right. The path to the economic buyer runs through your champion. Asking them to arrange an introduction respects the relationship, protects their position, and gets you where you need to be.",
      wrongFeedback: "Going directly to the CFO without your champion's knowledge risks the most important relationship in the deal. The right move is to ask your champion to make the introduction — framing it as something that will help them look prepared and thorough."
    }
  },
  {
    id: 14,
    module: 2,
    day: 14,
    title: "Building a real champion",
    subtitle: "The difference between someone who likes you and someone who will fight for you",
    story: `I used to think a champion was someone who answered my calls and said nice things about the product. I was wrong.\n\nI learned the difference the hard way. I had a contact at a prospect who loved our product, came to every meeting, and told me weekly that things were looking good. Then the internal committee met without me. My contact said nothing when the CFO raised budget concerns. Said nothing when a competitor was brought up. Walked out of the room and sent me an email saying the deal had been put on hold.\n\nHe was a fan. Not a champion. Fans like you. Champions fight for you.`,
    insight: `A real champion has three things:\n\n1. They have a personal stake in the outcome — solving this problem helps their career, their team, or their numbers.\n2. They have credibility inside the organization — people listen to them in rooms you're not in.\n3. They are willing to spend political capital on your behalf — they'll push when pushed back on.\n\nIf your contact has all three, you have a champion. If they have one or two, you have a supporter. Supporters lose deals in committee.`,
    rule: "Test your champion before you depend on them.",
    ruleSub: "Ask them to do something small that requires internal effort — set up a meeting with another stakeholder, share a document with their VP, get you thirty minutes with finance. How they respond tells you everything.",
    actions: [
      "Identify who you're relying on as a champion in your top deal.",
      "Ask yourself honestly: do they have a personal stake, internal credibility, and willingness to spend political capital?",
      "Give them a small test this week. Ask them to arrange one internal action on your behalf. Watch what happens."
    ],
    actionNote: "If they can't do something small, they won't do something hard. Find that out now, not at the finish line.",
    quiz: {
      question: "Your contact responds to every email, praises your product, but goes quiet when internal objections arise. What are they?",
      options: [
        "A strong champion who needs more information to defend the deal",
        "A fan — someone who likes the product but won't fight for it internally",
        "A blocker in disguise",
        "An influencer who needs to be converted to a champion"
      ],
      correctIndex: 1,
      correctFeedback: "Exactly. A fan engages with you but goes quiet under pressure. A real champion uses their credibility and political capital to defend the deal when you're not in the room. You need the second type.",
      wrongFeedback: "This person is a fan, not a champion. They like the product and like you — but when internal pressure hits, they don't fight. A champion is someone who will spend political capital on your behalf. That's the test."
    }
  },
  {
    id: 15,
    module: 2,
    day: 15,
    title: "The blocker you're ignoring",
    subtitle: "How to identify and neutralize the person working against you",
    story: `Every deal has one. The person who doesn't return your emails. The stakeholder who asks skeptical questions in every group call. The IT lead who keeps raising security concerns that seem designed to delay rather than resolve.\n\nI once had a deal where the blocker was the CFO's executive assistant. Nobody took her seriously. She controlled the CFO's calendar and had strong opinions about vendors. She'd been burned by a similar product two years earlier and told everyone who would listen.\n\nWe found out six weeks too late. By then she'd shaped the CFO's opinion in ways we couldn't undo.\n\nYou ignore blockers at your own risk.`,
    insight: `Blockers aren't always obvious, and they're rarely malicious. Most blockers have a reason for their position — a past experience, a competing priority, a loyalty to an incumbent vendor, or a fear that your solution makes their role less important.\n\nThe mistake is ignoring them hoping they'll stay quiet. They won't. The right move is to identify them early and understand their objection — because an objection you understand is one you can address.`,
    rule: "Name every blocker in your deal. An unnamed blocker is an unmanaged risk.",
    ruleSub: "Ask your champion directly: 'Is there anyone internally who might have concerns about moving forward with us?' A good champion will tell you. What they say — and how they say it — tells you a great deal about your position.",
    actions: [
      "For your top deal, ask yourself: who has been unusually quiet, skeptical, or slow to engage?",
      "Ask your champion the question above. Write down exactly what they say.",
      "For each blocker you identify, write down one hypothesis about why they might be opposed — and one thing you could do to address it."
    ],
    actionNote: "You may not be able to convert every blocker. But you can contain them. Knowing they exist is the first step.",
    quiz: {
      question: "An IT director keeps raising new security questions every time you answer the last ones. What's likely happening?",
      options: [
        "Your product has genuine security gaps that need to be addressed",
        "The IT director is doing their job thoroughly",
        "The IT director may be a blocker using technical questions as cover",
        "You need to bring in your security team to handle the objections"
      ],
      correctIndex: 2,
      correctFeedback: "Correct. When objections keep multiplying after each answer, the issue usually isn't the answers — it's the intent behind the questions. A blocker uses legitimate-sounding concerns as delay tactics. Identify it, then address the real concern.",
      wrongFeedback: "Perpetually regenerating objections are often a sign of a blocker. The questions are real, but they're not the real issue. Ask your champion what's actually going on with the IT director. The answer will tell you whether this is diligence or resistance."
    }
  },
  {
    id: 16,
    module: 2,
    day: 16,
    title: "The internal meeting you'll never attend",
    subtitle: "How to influence a decision made in a room you're not invited into",
    story: `Here's what nobody tells you about complex sales: the most important meeting in your deal is one you'll never be in.\n\nIt's the internal committee review. The budget discussion. The vendor comparison session. The conversation between the CFO and the VP after your presentation.\n\nEvery rep knows these meetings happen. Almost no rep prepares for them specifically.\n\nThe ones who do win a disproportionate number of deals.`,
    insight: `You can't attend the internal meeting. But you can shape everything that happens in it — if you've done the work before it starts.\n\nThree things determine what happens in that room:\n\n1. What your champion says — and how prepared they are to say it\n2. What materials they have in hand — one-pagers, business cases, comparison frameworks\n3. What objections come up — and whether your champion has answers ready\n\nYour job in the two weeks before any major internal meeting is to prepare your champion for every scenario they'll face.`,
    rule: "Treat your champion's internal meeting like it's your most important sales call. Prepare for it that way.",
    ruleSub: "Ask your champion: 'What questions do you think will come up in that meeting?' Then build the answers together. When they walk in with your arguments in their own words, you've done your job.",
    actions: [
      "Find out when your champion's next internal review or budget discussion is.",
      "Ask them: 'What objections do you think will come up?' Write down every answer.",
      "For each objection, give them a one or two sentence response they can deliver naturally. Practice it with them if they're open to it."
    ],
    actionNote: "The champion who walks into that room feeling prepared is ten times more effective than the one who wings it. You're the reason they're prepared.",
    quiz: {
      question: "Your champion says their internal review is in two weeks. What's the most valuable thing you can do right now?",
      options: [
        "Send them your full product deck to share with the committee",
        "Ask them what objections they expect and prepare responses together",
        "Request to join the meeting as a subject matter expert",
        "Send a personalized email to every committee member"
      ],
      correctIndex: 1,
      correctFeedback: "Exactly right. The most valuable preparation is objection-based. Ask what's coming, build the answers together, and arm your champion to handle every scenario without you. That's how you win rooms you can't enter.",
      wrongFeedback: "The most valuable thing you can do is prepare your champion for the objections they'll face. A product deck doesn't help them when the CFO asks a hard question. Answers they've practiced do."
    }
  },
  {
    id: 17,
    module: 2,
    day: 17,
    title: "The 'I need to run this by my team' stall",
    subtitle: "What it really means and how to respond without pushing them away",
    story: `"I need to run this by my team" is the most common stall in complex sales. Most reps hear it and say "of course, let me know what they think."\n\nThat's the wrong answer. Not because it's impolite — because it's passive. You've just handed control of your deal to a room you've never been in, filled with people who don't know you, armed with nothing.\n\nI spent the first two years of my career saying "of course." I spent the next ten figuring out that the right response to that sentence is a question, not an answer.`,
    insight: `"I need to run this by my team" can mean several different things:\n\n- "I'm genuinely interested but don't have final authority" — you need to help them sell it internally\n- "I'm not convinced yet and I'm using my team as cover" — you have a value gap to close\n- "I like it but I'm afraid to stick my neck out" — you have a champion confidence problem\n\nThe only way to know which one it is — and respond to the right one — is to ask a clarifying question before you say anything else.`,
    rule: "Never accept 'I need to run this by my team' without understanding what that process looks like.",
    ruleSub: "Ask: 'Of course — can you walk me through how that process typically works and what they'll need to feel confident?' That one question tells you whether you have a champion, a stall, or a value gap.",
    actions: [
      "Think of the last time you heard 'I need to run this by my team.' How did you respond?",
      "Write down what you would ask next time using the framework above.",
      "In your current pipeline, identify any deal where you're waiting on an internal process you don't fully understand. That's a deal to re-engage this week."
    ],
    actionNote: "The goal isn't to pressure them. It's to understand the process well enough to support it. There's a big difference — and your contact will feel it.",
    quiz: {
      question: "A prospect says 'this looks good — I just need to run it by my leadership team.' What do you do?",
      options: [
        "Thank them and ask them to let you know what their team thinks",
        "Ask if you can join the leadership meeting to answer questions",
        "Ask how that process works and what their leadership team will need to feel confident",
        "Send a follow-up email summarizing the key benefits for the leadership team"
      ],
      correctIndex: 2,
      correctFeedback: "Right. You need to understand the internal process before you can support it. Asking how it works and what they'll need tells you whether you have a champion who's ready, a value gap to close, or a process to navigate.",
      wrongFeedback: "Waiting passively hands control of your deal to people you've never met. The right move is to understand the process — ask how it works and what the leadership team will need to feel confident. Then you can actually help."
    }
  },
  {
    id: 18,
    module: 2,
    day: 18,
    title: "Selling to people who don't want to meet you",
    subtitle: "How to create value for stakeholders who never agreed to be sold to",
    story: `Not every stakeholder in a buying committee wants to talk to you. Some of them were added to the evaluation because their role requires it. Some of them have already formed an opinion. Some of them are busy and skeptical and have seen a hundred reps just like you.\n\nI once had a CTO who made it clear in the first ten minutes of our first meeting that he didn't want to be there. He'd been asked to validate the technical fit. He had forty-five minutes and no patience.\n\nI stopped my prepared agenda and asked him one question: "What would make this a waste of your time?"\n\nHe paused. Then he told me exactly what he needed to see. We covered it in thirty minutes. He became our strongest internal advocate.`,
    insight: `Reluctant stakeholders are not lost causes. They're people who haven't been given a reason to engage yet. The mistake is treating them like a standard sales audience — walking through your deck, telling your story, asking for their buy-in.\n\nThe right approach is to flip the dynamic immediately. Ask them what they need. Let them set the agenda. Give them control of the meeting and then deliver against it. A stakeholder who gets what they came for is a stakeholder who has a reason to support you.`,
    rule: "For every reluctant stakeholder, lead with a question — not a presentation.",
    ruleSub: "'What would make this meeting valuable for you?' is the most disarming question in complex sales. Use it every time you're in a room with someone who didn't ask to be there.",
    actions: [
      "Identify one stakeholder in your current pipeline who seems disengaged or reluctant.",
      "Prepare one opening question for your next interaction with them — not a pitch, a genuine question about what they need.",
      "After the meeting, note whether the dynamic shifted. Reluctant stakeholders who feel heard almost always move toward neutral or positive."
    ],
    actionNote: "You don't need every stakeholder to love you. You need them to not block you. Feeling heard is usually enough.",
    quiz: {
      question: "A VP joins a call and immediately says 'I only have thirty minutes and I'm not sure why I'm here.' What's your first move?",
      options: [
        "Quickly summarize why the meeting was set up and what you hope to cover",
        "Ask them what would make the thirty minutes valuable for them",
        "Jump to the most relevant part of your deck to respect their time",
        "Acknowledge their time constraint and promise to be brief"
      ],
      correctIndex: 1,
      correctFeedback: "Exactly right. When a stakeholder signals reluctance, the worst thing you can do is push your agenda. Ask them what they need. Let them tell you. Then deliver it. That's how reluctant stakeholders become neutral ones — and sometimes advocates.",
      wrongFeedback: "Pushing your agenda when someone signals they don't want to be there makes it worse. Ask them what would make the meeting valuable for them. That question resets the dynamic and gives you a fighting chance."
    }
  },
  {
    id: 19,
    module: 2,
    day: 19,
    title: "When the committee goes quiet",
    subtitle: "How to re-engage a buying committee that has stopped responding",
    story: `A rep on my team had a deal that went dark. Three weeks of silence after what seemed like a great final presentation. Every follow-up went unanswered. He was ready to mark it closed-lost.\n\n"Before you do that," I told him, "send one more email. But not a follow-up. A breakup."\n\nHe looked at me like I'd lost my mind.\n\nHe sent it. The VP responded within four hours. Turns out the deal had been delayed by an internal reorg — had nothing to do with us. They signed six weeks later.\n\nSilence is not always rejection. But it always requires a different kind of response.`,
    insight: `When a buying committee goes quiet, it usually means one of three things:\n\n1. An internal event — reorg, budget freeze, leadership change — has put decisions on hold\n2. A blocker has gained influence and is quietly killing the deal\n3. They're evaluating another option and don't want to tell you\n\nStandard follow-ups don't work in any of these scenarios because they assume the problem is information. The real problem is momentum — or the loss of it.\n\nThe re-engagement that works is the one that creates a response, even a negative one. Knowing where you stand is always more valuable than silence.`,
    rule: "After three unanswered follow-ups, stop following up. Send a pattern-interrupt instead.",
    ruleSub: "The breakup email: 'I want to be respectful of your time. If priorities have shifted and this isn't the right moment, I completely understand — just let me know and I'll close out my side. If it's still live, I'd love to find fifteen minutes to reconnect.' Short. No pressure. Requires a response.",
    actions: [
      "Identify any deal in your pipeline that has gone quiet for more than two weeks.",
      "Count how many follow-ups you've sent. If it's three or more with no response, stop.",
      "Send the breakup email above — adapted to your deal — and see what comes back."
    ],
    actionNote: "A 'no' now is worth more than a 'maybe' that never converts. Clear your pipeline and spend your time on deals that are real.",
    quiz: {
      question: "A prospect went silent after a strong final presentation. You've followed up three times. What should you do?",
      options: [
        "Send one more detailed follow-up summarizing your key differentiators",
        "Call their main switchboard and ask to be transferred",
        "Mark it closed-lost and move on",
        "Send a short breakup email that gives them permission to say no"
      ],
      correctIndex: 3,
      correctFeedback: "Right. After three unanswered follow-ups, more of the same won't work. The breakup email changes the dynamic — it removes pressure and requires a response. Most of the time you'll find out what's actually happening.",
      wrongFeedback: "More follow-ups won't break the silence. The breakup email works because it changes the dynamic entirely — it removes pressure, invites honesty, and almost always produces a response. That response tells you where you actually stand."
    }
  },
  {
    id: 20,
    module: 2,
    day: 20,
    title: "The committee win: putting it all together",
    subtitle: "You now know how to navigate the room that decides your deals",
    story: `Most reps lose deals in committee not because their product loses — but because they were only known to one person in the room.\n\nThe economic buyer didn't know them. The blocker was never addressed. The champion walked in unprepared. The internal meeting happened without a business case in hand.\n\nEvery one of those failures is preventable. Not with luck or timing or a better product. With process.\n\nYou now have the process.`,
    insight: `Buying committees are not obstacles. They're the actual sales motion in complex B2B deals. The rep who learns to navigate them — who maps the stakeholders, builds the champion, reaches the economic buyer, neutralizes the blocker, and prepares for the room they'll never be in — wins a fundamentally different category of deal.\n\nNot just bigger deals. More predictable deals. Deals that don't collapse in the final week because someone you'd never met decided they didn't want to move forward.`,
    rule: "Map the committee. Build the champion. Reach the economic buyer. Contain the blocker. Prepare for the room you'll never enter.",
    ruleSub: "This is the full framework for Module 2. Every lesson in this module is a tool. Used together, they give you more control over complex deals than most reps will ever have.",
    actions: [
      "Go back to your top open deal and apply the full module framework: Who is the economic buyer? Who is the champion? Who is the blocker? Have you multi-threaded?",
      "Identify the single biggest gap in your position on that deal — the thing that, if it stays unaddressed, could cost you the deal.",
      "Take one action on that gap today. Not this week. Today."
    ],
    actionNote: "Module 3 unlocks tomorrow. It goes deeper into discovery — finding the pain nobody else finds, in the conversations most reps don't know how to have.",
    quiz: {
      question: "Which combination represents the full buying committee framework from this module?",
      options: [
        "Strong champion + competitive pricing + executive sponsor + fast close",
        "Multi-threaded + economic buyer reached + blocker identified + champion prepared for internal meeting",
        "Product fit confirmed + legal review complete + procurement engaged + timeline agreed",
        "Demo completed + business case sent + follow-ups logged + decision date confirmed"
      ],
      correctIndex: 1,
      correctFeedback: "That's the framework. Multi-threaded across the committee, economic buyer engaged, blocker identified and addressed, champion prepared to win the room you'll never be in. That's how complex deals get won.",
      wrongFeedback: "The buying committee framework is: multi-thread early, identify and reach the economic buyer, name and address the blocker, and prepare your champion for the internal meeting. Everything else supports that foundation."
    }
  },
    {
    id: 21,
    module: 3,
    day: 21,
    title: "The question nobody asks",
    subtitle: "Why most discovery stops at the surface — and how to go deeper",
    story: `I was sitting in on a discovery call with one of my reps. She was good — thorough, organized, asked all the right questions from the playbook. She covered current process, pain points, timeline, budget. Forty-five minutes in, she wrapped up and said "great, I think I have everything I need."\n\nAfter the call I asked her one question: "Do you know what happens to that VP's career if this problem doesn't get solved?"\n\nShe stared at me.\n\n"That's the question nobody asked," I told her. "And it's the one that tells you whether this deal is real."`,
    insight: `Most discovery is surface-level because reps are trained to gather information, not uncover stakes. They ask what the problem is. They rarely ask what it costs if the problem stays unsolved — not just in dollars, but in careers, relationships, and organizational consequences.\n\nThe deeper you go in discovery, the more leverage you have in every conversation that follows. Pain that has personal stakes attached is pain that drives decisions. Pain that's merely operational gets deprioritized.`,
    rule: "Great discovery uncovers what's at stake personally, not just operationally.",
    ruleSub: "Ask about the business problem. Then ask what happens to the people responsible for it if it doesn't get fixed. That second question changes everything.",
    actions: [
      "In your next discovery call, after identifying the core business problem, ask: 'What happens internally if this doesn't get resolved in the next six months?'",
      "Then ask: 'Who owns this problem — and how does it affect them personally?'",
      "Write down the answers. If the answer to the second question is 'not much,' you have a low-urgency deal. If the answer is 'it's a serious issue for them,' you have a real one."
    ],
    actionNote: "The personal stakes question feels uncomfortable the first few times. Do it anyway. The answers will change how you sell.",
    quiz: {
      question: "After identifying a business problem in discovery, what's the most important follow-up question?",
      options: [
        "What's your timeline for solving this?",
        "What budget have you allocated for this?",
        "What happens internally if this doesn't get resolved?",
        "Who else is involved in evaluating solutions?"
      ],
      correctIndex: 2,
      correctFeedback: "Exactly right. Timeline and budget matter — but stakes matter more. Understanding what happens if the problem stays unsolved tells you how motivated the organization is to actually move. That's the question that separates real deals from conversations.",
      wrongFeedback: "Timeline and budget are important but they come later. The question that changes everything is: what happens if this doesn't get fixed? That answer tells you the real urgency — and whether this deal will ever actually close."
    }
  },
  {
    id: 22,
    module: 3,
    day: 22,
    title: "The three levels of pain",
    subtitle: "How to move from symptoms to causes to consequences",
    story: `A rep on my team came to me with a deal he was excited about. "They have a huge problem with their reporting," he told me. "It takes their team three days to produce a report that should take three hours."\n\n"That's a symptom," I said. "What's causing it?"\n\nHe didn't know. We went back in together. The root cause turned out to be five disconnected systems that didn't talk to each other — a problem that had been growing for three years and had survived two previous attempts to fix it.\n\nNow we weren't selling a reporting tool. We were selling a solution to a systemic data problem that had beaten two other vendors. Completely different deal. Completely different price.`,
    insight: `Every problem has three levels:\n\n1. The symptom — what the prospect complains about ("our reporting takes too long")\n2. The root cause — why the symptom exists ("five disconnected systems")\n3. The consequence — what the root cause is doing to the business ("we can't make decisions fast enough to compete")\n\nMost reps sell to the symptom. Top performers dig to the root cause and sell to the consequence. The deeper you go, the more valuable your solution becomes — and the harder it is to replace you with a cheaper alternative.`,
    rule: "Never sell to a symptom when you can sell to the root cause.",
    ruleSub: "The question that moves you from symptom to cause: 'How long has this been happening, and what have you tried before?' The answer to that question tells you the depth of the problem — and why previous solutions failed.",
    actions: [
      "Take your best active deal. Write down the problem as the prospect described it to you.",
      "Now ask yourself: is that a symptom or a root cause? If it's a symptom, what's causing it?",
      "In your next call, ask: 'How long has this been a problem, and have you tried to solve it before? What happened?'"
    ],
    actionNote: "A problem that has survived previous solution attempts is a problem worth a lot of money to solve. Find those deals and go deep.",
    quiz: {
      question: "A prospect says 'our sales team spends too much time on manual data entry.' What's the right response?",
      options: [
        "Explain how your product automates data entry",
        "Ask how many hours per week are lost to manual entry",
        "Ask how long this has been a problem and what they've tried before",
        "Share a case study of a customer with a similar problem"
      ],
      correctIndex: 2,
      correctFeedback: "Right. 'How long has this been a problem and what have you tried?' moves you from symptom to root cause. The answer tells you the depth of the problem, why previous solutions failed, and what you're really selling against.",
      wrongFeedback: "Jumping to your solution or quantifying the symptom is premature. The right move is to find the root cause first. Ask how long it's been happening and what they've tried — those answers tell you what you're actually selling against."
    }
  },
  {
    id: 23,
    module: 3,
    day: 23,
    title: "What they won't tell you in the first meeting",
    subtitle: "The information that only comes out after trust is established",
    story: `There's a piece of information in almost every deal that doesn't come out in the first meeting. Sometimes not the second. It's the thing the prospect is embarrassed about, worried will make them look bad, or simply doesn't think is relevant to tell you.\n\nI once worked a deal for four months where the prospect kept saying everything was fine internally. No objections, great alignment. Then in week sixteen, their champion told me something she'd never mentioned: there was a senior leader who had been burned by a similar vendor three years ago and was quietly lobbying against any new purchase in this category.\n\nWe'd been selling into a headwind we didn't know existed. We lost the deal two weeks later.\n\nThe information was always there. Nobody asked the right question to surface it.`,
    insight: `Trust unlocks information that politeness conceals. In the first meeting, prospects tell you what they want you to know. In subsequent meetings — when they trust you — they tell you what's actually happening.\n\nYour job is to build trust fast enough that the real story comes out before it's too late to act on it. That means asking questions that feel slightly uncomfortable, sharing relevant vulnerabilities of your own, and demonstrating that you can handle difficult information without using it against them.`,
    rule: "The real discovery happens in the second and third conversations, not the first.",
    ruleSub: "After your second meeting, ask your champion: 'Is there anything going on internally that might affect this decision that I should know about?' Most reps never ask this. The ones who do rarely get surprised late in a deal.",
    actions: [
      "Identify a deal where you're two or more meetings in.",
      "Ask your champion directly: 'Is there anything going on internally around this decision that I should know about — anything that could make this harder to move forward?'",
      "Write down exactly what they say. If they hesitate before answering, that hesitation is information too."
    ],
    actionNote: "This question only works if you've built enough trust for them to answer honestly. If they say 'no, everything's fine' too quickly, you may not have that trust yet.",
    quiz: {
      question: "You're three meetings into a deal and things seem to be going well. What question should you ask your champion?",
      options: [
        "Are you still on track for a decision by end of quarter?",
        "Is there anything going on internally that could affect this decision that I should know about?",
        "Have you had a chance to share the business case with your leadership?",
        "What would it take to get this across the finish line?"
      ],
      correctIndex: 1,
      correctFeedback: "Exactly. This question surfaces the hidden information that derails deals at the finish line. Most reps never ask it. The ones who do consistently avoid late-stage surprises — because the surprises were always there, just unasked.",
      wrongFeedback: "Timeline and next steps matter, but the question that protects your deal is the one that surfaces hidden risks. After three meetings, ask your champion directly if there's anything going on internally you should know about. That question changes the trajectory of more deals than any other."
    }
  },
  {
    id: 24,
    module: 3,
    day: 24,
    title: "The power of silence",
    subtitle: "Why the best discovery move is often saying nothing",
    story: `I used to fill every pause in a discovery call. A prospect would finish answering a question and if they stopped talking for more than two seconds, I'd ask the next question. I thought I was being efficient. I was actually cutting off the most important part of the conversation.\n\nMy manager sat in on a call and gave me one piece of feedback afterward: "You interrupted the three best answers of the call. They were about to go deeper and you stopped them."\n\nI started counting to five after every answer before saying anything. The deals I was working changed within a month. Prospects started telling me things I'd never heard before — not because they were new things, but because I'd finally stopped talking long enough to hear them.`,
    insight: `Silence is the most underused tool in discovery. When a prospect finishes answering a question, the instinct is to move on. The reality is that the most valuable information often comes in the pause after the first answer — when the prospect is deciding whether to tell you the thing they were about to say before you interrupted.\n\nA five-second pause after an answer signals that you're listening, that you're not in a rush, and that you have the confidence not to fill every moment with noise. That signal alone builds more trust than most discovery techniques.`,
    rule: "Count to five after every answer before you speak. The best information lives in that pause.",
    ruleSub: "If the silence feels uncomfortable, it's working. Discomfort in a pause means something real is about to be said. Let it come.",
    actions: [
      "In your next discovery call, set a silent rule for yourself: count to three after every answer before speaking.",
      "Notice how often the prospect starts talking again before you reach three. What they say next is almost always more valuable than what came before.",
      "After the call, note one piece of information you got because you stayed silent that you would have missed otherwise."
    ],
    actionNote: "This is a discipline, not a technique. It takes practice. The first few times will feel awkward. Do it anyway.",
    quiz: {
      question: "A prospect finishes answering your question about their biggest challenge. They pause. What do you do?",
      options: [
        "Ask your next prepared discovery question",
        "Summarize what they said to show you were listening",
        "Stay silent and count to five before speaking",
        "Transition to explaining how your product addresses that challenge"
      ],
      correctIndex: 2,
      correctFeedback: "Right. The pause after an answer is where the real information lives. Staying silent signals that you're listening and gives the prospect space to say the thing they were about to say. Most reps never hear it because they move on too fast.",
      wrongFeedback: "Moving to the next question or pivoting to your solution cuts off the most valuable part of the answer. Stay silent for five seconds after every answer. The prospect will often keep talking — and what they say next is almost always more important than what came before."
    }
  },
  {
    id: 25,
    module: 3,
    day: 25,
    title: "Finding the trigger",
    subtitle: "Why prospects buy now — and how to find what changed",
    story: `Every deal has a trigger — a specific event that caused the prospect to start looking for a solution right now rather than six months ago or six months from now.\n\nI learned to ask for it after losing a deal I was certain we'd won. Post-mortem revealed that the prospect had chosen a competitor not because of features or price, but because that competitor had found out about the trigger event — a board meeting where the CEO had made solving this problem a Q3 priority — and built their entire proposal around it.\n\nWe had the better product. They had the better intelligence. They won because they knew why the prospect was buying now. We never asked.`,
    insight: `The trigger is the event that changed the timing. A merger. A new executive. A failed audit. A competitor gaining market share. A regulation taking effect. A bad quarter that made the status quo untenable.\n\nWhen you know the trigger, you know the real deadline, the real stakeholder, and the real urgency. You can align your entire sales motion to the event that's driving the decision — which is far more powerful than aligning it to your own quarter-end goals.`,
    rule: "Always find the trigger. Ask: 'What happened that made this a priority right now?'",
    ruleSub: "The trigger tells you the real deadline, the real decision-maker, and the real stakes. Without it, you're selling to a generic problem. With it, you're solving a specific crisis.",
    actions: [
      "In your next discovery call, ask: 'What happened that made this a priority right now, versus six months ago?'",
      "For your current top three deals, do you know the trigger? If not, find out this week.",
      "Once you know the trigger, ask: 'Is there a specific date or event that makes solving this by a certain time critical?'"
    ],
    actionNote: "The trigger is rarely volunteered. You have to ask for it directly. When you find it, everything about the deal gets clearer.",
    quiz: {
      question: "A prospect says they're looking to solve their data integration problem 'sometime this year.' What do you ask?",
      options: [
        "What's your ideal timeline for implementation?",
        "What happened that made this a priority right now versus six months ago?",
        "Have you looked at any other solutions yet?",
        "What does your budget cycle look like?"
      ],
      correctIndex: 1,
      correctFeedback: "Exactly. 'Sometime this year' is vague. The trigger question — what happened that made this a priority now — surfaces the real event driving the decision. That event gives you the real deadline and the real urgency.",
      wrongFeedback: "Timeline questions confirm vague intentions. The trigger question finds the specific event that changed the timing. 'What happened that made this a priority right now?' is the question that turns a soft opportunity into a real deal."
    }
  },
  {
    id: 26,
    module: 3,
    day: 26,
    title: "Quantifying pain they haven't measured",
    subtitle: "How to calculate the cost of a problem your prospect has never put a number on",
    story: `Most prospects have never calculated what their problem costs them. They know it's painful. They know it's a priority. But they've never sat down and done the math.\n\nThat's your opportunity.\n\nI once worked a deal where the prospect described their problem as "really disruptive." When I asked what it was costing them, they said they'd never actually calculated it. We built the number together on a shared spreadsheet during the call. By the time we were done, we'd calculated $2.3M in annual avoidable cost.\n\nThe prospect stopped the call, called their CFO, and had a conversation I wasn't part of. They came back with a budget that hadn't existed before we started calculating.`,
    insight: `Pain that has a number attached to it is pain that gets funded. Pain that's described in adjectives — "really bad," "very disruptive," "a major headache" — stays on the priority list forever without ever becoming a purchase order.\n\nYour job is to help prospects calculate what they've never calculated. Not to make up a number — to help them find the number that's already there, hiding in their own data.`,
    rule: "Help prospects calculate the cost of their problem. Don't estimate it for them — calculate it with them.",
    ruleSub: "The formula: frequency × impact per occurrence = total cost. Walk them through it. When they do the math themselves, it's their number — and their number is the one that gets funded.",
    actions: [
      "For your top open deal, identify the core problem and ask: 'How often does this happen?'",
      "Then ask: 'When it happens, what does it cost — in time, people, or revenue?'",
      "Multiply those numbers together on the call. Say the result out loud. Ask: 'Does that match what you'd expect?'"
    ],
    actionNote: "Do this on the call, not in a follow-up email. Real-time calculation creates real-time urgency.",
    quiz: {
      question: "A prospect says their manual process is 'a real problem' but hasn't quantified it. What do you do?",
      options: [
        "Share an industry benchmark for what this type of problem typically costs",
        "Include an estimated ROI in your proposal based on similar customers",
        "Walk them through calculating the cost on the call using their own numbers",
        "Ask them to get their finance team to calculate it before your next meeting"
      ],
      correctIndex: 2,
      correctFeedback: "Exactly right. Their number, calculated in real time, is the number that gets funded. Benchmarks and estimates are yours — they carry a fraction of the weight. Do the math together, on the call, using their data.",
      wrongFeedback: "Benchmarks and estimates are your numbers. They carry a fraction of the weight of a number the prospect calculates themselves. Walk them through it on the call — frequency times impact equals total cost. Their math, their urgency."
    }
  },
  {
    id: 27,
    module: 3,
    day: 27,
    title: "The discovery mistake that kills deals",
    subtitle: "Why pitching during discovery is the most expensive error in complex sales",
    story: `I used to do it. Every rep I've ever managed has done it. The prospect mentions a problem and before they finish the sentence, you're connecting it to your product.\n\n"Oh, that's exactly what our [feature] solves—"\n\nAnd just like that, discovery is over. The prospect stops sharing because you've signaled that you have what you need. They go into evaluation mode. You've turned a conversation into a pitch thirty minutes too early.\n\nI watched a rep do this in a discovery call last year. The prospect had three problems. We heard one. We pitched to one. We lost to a competitor who discovered all three and built a solution around the full picture.`,
    insight: `Pitching during discovery is the single most common and most costly mistake in complex sales. It feels productive — you're connecting their pain to your solution in real time. But what it actually does is stop the prospect from telling you more.\n\nThe discipline of discovery is staying in question mode long after you think you have enough information. You almost never have enough. The rep who asks one more question after they think they're done is the rep who finds the third problem — the one that closes the deal.`,
    rule: "Never pitch during discovery. Stay in question mode until the prospect has nothing left to share.",
    ruleSub: "When you feel the urge to connect their problem to your product, ask another question instead. 'Tell me more about that' buys you information that pitching gives away.",
    actions: [
      "In your next discovery call, set a personal rule: no product mentions until the last ten minutes.",
      "Every time you feel the urge to pitch, ask 'tell me more about that' instead.",
      "After the call, note how many additional pieces of information you gathered by staying in question mode longer than you normally would."
    ],
    actionNote: "The prospect who feels fully heard before you pitch is the prospect who listens when you do. Sequence matters.",
    quiz: {
      question: "A prospect describes a problem that your product solves perfectly. What do you do?",
      options: [
        "Explain how your product addresses that exact problem",
        "Ask a follow-up question to understand the problem more deeply",
        "Share a case study of a customer with a similar challenge",
        "Confirm that this is their top priority before moving forward"
      ],
      correctIndex: 1,
      correctFeedback: "Right. Ask a follow-up question. Pitching now stops the discovery. There are almost always more problems to find — and the next one might be the one that actually closes the deal. Stay in question mode.",
      wrongFeedback: "Pitching the moment you recognize a problem stops discovery cold. The prospect goes into evaluation mode and stops sharing. Ask a follow-up question instead — you almost always have more to learn, and the next problem is often the one that wins the deal."
    }
  },
  {
    id: 28,
    module: 3,
    day: 28,
    title: "The future state question",
    subtitle: "How to make the prospect sell themselves on your solution",
    story: `The most powerful question I ever added to my discovery process wasn't about pain. It was about aspiration.\n\n"If you had this completely solved a year from now, what would be different?"\n\nI started asking this in every discovery call and something unexpected happened: prospects started describing outcomes that went far beyond the problem I'd identified. They talked about what their team could do, what they could report to the board, what competitive advantage they'd have.\n\nThey were describing value I hadn't thought to sell. And they were selling it to themselves.`,
    insight: `Pain-focused discovery is essential. But discovery that only covers pain misses half the picture. The future state question — what does solved look like? — unlocks the aspirational side of the decision.\n\nWhen a prospect articulates what success looks like in their own words, two things happen: they connect emotionally to the outcome, and they give you the exact language to use in your business case. Their description of success becomes your value proposition — and that's far more persuasive than anything you'd write yourself.`,
    rule: "Always ask what solved looks like. The prospect's answer becomes your most powerful selling tool.",
    ruleSub: "Ask: 'If we fast-forward twelve months and this problem is completely behind you, what's different about your business — and about your role?' The second part of that question surfaces the personal stake.",
    actions: [
      "In your next discovery call, after exploring the problem, ask: 'If this were completely solved a year from now, what would be different?'",
      "Write down their exact words. Use their language — not yours — in your follow-up and proposal.",
      "Ask the personal version too: 'And what does that mean for you specifically in your role?'"
    ],
    actionNote: "When prospects describe their own success, they've already bought emotionally. Your job from that point is to make the financial case match the emotional one.",
    quiz: {
      question: "After exploring a prospect's pain, what's the most valuable next question?",
      options: [
        "What's your budget for solving this?",
        "Have you looked at any other solutions?",
        "If this were completely solved a year from now, what would be different?",
        "What's your timeline for making a decision?"
      ],
      correctIndex: 2,
      correctFeedback: "Exactly. The future state question makes the prospect articulate success in their own words. That description becomes your value proposition — and it's infinitely more persuasive coming from them than from you.",
      wrongFeedback: "Budget and timeline questions are important but they're logistics. The future state question is strategic — it makes the prospect articulate what success looks like in their own words, which becomes the most persuasive content in your entire sales process."
    }
  },
  {
    id: 29,
    module: 3,
    day: 29,
    title: "Confirming what you heard",
    subtitle: "The step that separates good discovery from great discovery",
    story: `I made an assumption once that cost me a $200,000 deal.\n\nThe prospect had described their problem clearly — or so I thought. I built an entire proposal around what I'd heard. When I presented it, the economic buyer stopped me ten minutes in.\n\n"This isn't what we're trying to solve," he said.\n\nI'd misunderstood the core problem. My champion had described it from her perspective. The economic buyer's perspective was different — and the proposal I'd built was solving the wrong one.\n\nAfter that, I added one step to every discovery process: before ending any discovery conversation, I play back what I heard and ask if I got it right.`,
    insight: `Confirmation is the most skipped step in discovery. Reps gather information and move straight to proposal without checking that they understood correctly. The prospect assumes you understood. You assume you understood. Neither of you confirms it.\n\nA simple playback at the end of discovery — "here's what I heard, does that match your understanding?" — catches misalignments before they become lost deals. It also demonstrates that you were actually listening, which builds the trust that makes everything else easier.`,
    rule: "End every discovery conversation with a playback. Confirm before you build.",
    ruleSub: "The playback formula: 'Based on what you've shared, here's what I understand to be true: [problem], [root cause], [impact], [what success looks like]. Did I get that right?' That one question prevents more proposal failures than any other.",
    actions: [
      "At the end of your next discovery call, spend two minutes playing back what you heard.",
      "Use the formula: problem, root cause, impact, future state. Say it in their words, not yours.",
      "End with: 'Did I get that right, and is there anything I missed?' Then stay silent."
    ],
    actionNote: "The corrections they make in the playback are as valuable as the original discovery. That's where the nuance lives.",
    quiz: {
      question: "You've completed a thorough discovery call. What should you do before ending the meeting?",
      options: [
        "Outline the next steps and confirm the follow-up meeting",
        "Ask if they're ready to see a demo",
        "Play back what you heard and ask if you got it right",
        "Send a summary email after the call with your understanding"
      ],
      correctIndex: 2,
      correctFeedback: "Exactly right. The playback on the call — not in a follow-up email — catches misalignments in real time when you can still correct them. It also demonstrates that you listened, which builds trust and differentiates you from every rep who just takes notes and moves on.",
      wrongFeedback: "Next steps and emails come after. The most important thing before ending a discovery call is confirming that you understood correctly. Play back what you heard — problem, cause, impact, future state — and ask if you got it right. The corrections they make are as valuable as the original answers."
    }
  },
  {
    id: 30,
    module: 3,
    day: 30,
    title: "Discovery never stops",
    subtitle: "Why the best reps are still learning in the final negotiation",
    story: `I had a mentor who closed some of the largest deals I've ever seen. I asked him once what his secret was. He said something I've never forgotten:\n\n"I'm always in discovery. Even when I'm negotiating price, I'm learning something. The rep who thinks discovery ends after the first two calls has already lost half the deal."\n\nHe told me about a deal where he learned the most critical piece of information — that the CEO had made a personal commitment to the board about this initiative — in the fourth month of the sales cycle, during what was supposed to be a routine check-in call.\n\nThat piece of information changed his entire negotiating position. He held price. He won the deal.`,
    insight: `Discovery is a mindset, not a phase. The best salespeople treat every conversation — every call, every email, every negotiation — as an opportunity to learn something new about the deal.\n\nOrganizations change. Priorities shift. New stakeholders emerge. Budgets get cut or expanded. The rep who stops learning after the first discovery call is working with a snapshot. The rep who keeps asking questions is working with a live picture — and live pictures win deals.`,
    rule: "Treat every conversation as a discovery opportunity. Never stop learning about your deals.",
    ruleSub: "In every call, no matter the stated purpose, ask one question you don't know the answer to. One question per call compounds into a massive informational advantage over the life of a deal.",
    actions: [
      "Pick your top three active deals. For each one, write down the one thing you most want to know but don't.",
      "In your next touchpoint on each deal, ask that question.",
      "Make it a habit: every call ends with one new piece of information you didn't have before it started."
    ],
    actionNote: "Module 4 unlocks tomorrow. It covers controlling the sales process — because great discovery means nothing if you can't drive the deal forward.",
    quiz: {
      question: "You're in month three of a deal, negotiating final terms. A discovery mindset means:",
      options: [
        "Discovery is complete — focus entirely on closing",
        "Ask about any organizational changes that might affect the decision",
        "Revisit the original pain points to reinforce urgency",
        "Confirm the timeline and decision criteria one more time"
      ],
      correctIndex: 1,
      correctFeedback: "Exactly. Discovery never stops. In month three, organizations have changed, priorities have shifted, new stakeholders may have emerged. One question about what's changed internally can give you the information that changes your entire negotiating position.",
      wrongFeedback: "Discovery doesn't end at a specific phase — it's a mindset that runs through the entire deal. In month three, the most valuable question is about what's changed since you last spoke. Organizations shift. Priorities move. The rep who keeps asking keeps winning."
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
