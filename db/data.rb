Question.create (
  question: "",
  details: "",
  author_id: ,
  topic_ids: []
)

Answer.create(
  author_id: ,
  text: "",
  question_id:
)

Topic.create(
  name: ""
)

User.create(
  username: "Harry",
  password: "password"
)
User.create(
  username: "Sue",
  password: "password"
)
User.create(
  username: "Betty",
  password: "password"
)
User.create(
  username: "James",
  password: "password"
)
User.create(
  username: "Bobo",
  password: "password"
)

1
Topic.create(
  name: "Death"
)

2
Topic.create(
  name: "Computer Programming"
)

3
Topic.create(
  name: "Inspiration"
)

4
Topic.create(
  name: "Philosophy of Everyday Life"
)

5
Topic.create(
  name: "Science"
)

1
Question.create (
  question: "What is the most brutal death?",
  details: "",
  author_id: 1,
  topic_ids: [1]
)

1
Answer.create(
  author_id: 1,
  text: "The Brazen Bull

God I hate this thing. It was an execution device used for criminals in ancient Greece, and it was brutal as all hell.

On the outside, it was a bronze statue of a bull with a door on one side. Inside, it was hollow. It worked like this-

The criminal would be thrown into the hollow statue either naked or with minimal clothing, and the door shut and locked on them. Then, they would light a fire underneath the statue, effectively cooking the victim alive. The victim’s screams would also go through a series of tubes that led to the nostrils of the bull, and the sound that came out would sound like a bull’s scream. Allegedly, the smoke produced from the nostrils were also somewhat laced with incense.

Its first victim is also somewhat interesting, as it’s actually the guy who created it. Basically, the guy who made it (Perillos) went to leader (Phalaris) and explained how the screaming conversion worked. Phalaris wanted him to demonstrate it, so once Perillos had climbed in, the door was shut and he was locked in. Then, Phalaris wanted to see it to its full effect, so he actually set a fire underneath it, and listened to the screams.

After a while, he ordered his men to pull Perillos out before he died, and they did. Covered in burns, Phalaris actually threw him off a cliff. Then he proceeded to use the Bull for executions of all sorts, until he himself was executed inside of a Brazen Bull after he was overthrown.

These two deaths are both brutal, and ironic.",
  question_id: 1
)

2
Answer.create(
  author_id: 2,
  text: "Two absolutely horrendous ways to die:

Quartering: there were a number of methods for this. People - particularly traitors - could be hanged, drawn and quartered. This was done in a variety of ways, but usually involved hanging and stretching an individual by the neck at first, and then on a rack by the neck and feet (hanging) until nearly dead, before disembowelling the victim (drawing), possibly castrating them prior to beheading and cutting their body into four pieces (quartering).

They would be alive for much of this process, and their shame continued after death by placing their head on a spike for people to see and their limbs sent to the four corners of the kingdom as a warning.

Another form of quartering was used by the French, for those who tried to kill the monarch (regicide). The traitor would be tied by their limbs and attached to four horses which pulled them apart as they were cleaved:

2. Impaling: famously practised by Vlad the Impaler (c. 1428–77), Prince of Wallachia. Impaling involved inserting a wooden stake up the victim's anus and through their body at an angle that brought it out of their mouth. The victim could survive the process and die some time later impaled upright from the ground.",
  question_id:1
)

2
Question.create (
  question: "What are some famous bugs in the computer science world?",
  details: "",
  author_id: 4,
  topic_ids: [2]
)

3
Answer.create(
  author_id: 3,
  text: "A moth is literally the first and best known bug on computer science world.

Everybody have heard of a version of the story that the computer used by Grace Hopper failed some functions. To be exact, Grace Hopper logged this error at 3:45 PM on 9 September 1947.

Then her team found out that exact reason of the computer malfunction was moths short circuiting the computer.",
  question_id:2
)

4
Answer.create(
  author_id: 5,
  text: "PayPal accidentally makes Pennsylvania man the world's richest person with $92 quadrillion.

Chris Reynolds briefly became the world's richest man after PayPal erroneously credited him with $92,233,720,368,547,800 ($92 quadrillion plus change).

This error made him the world's only quadrillionaire & helped him to overshadow the Mexican telecom mogul Carlos Slim - who was worth a mere $67 billion (when the event happened in 2013). Reynold's wealth was one thousand times greater than the GDP of the enitre planet, yikes!

P.S : For those of you wondering about amount, it's the max value for a 64-bit signed integer. Well, the exact value is 9,223,372,036,854,775,807. It isn't the same, the number was apparently rounded up.",
  question_id: 2
)

3
Question.create (
  question: "What gives you hope during tough times?",
  details: "",
  author_id: 5,
  topic_ids: [3, 4]
)

5
Answer.create(
  author_id: 2,
  text: "I have faced some very tough times. When I was 10 years old, my twin sister and I were used in medical experiments by Dr. Josef Mengele at Auschwitz. He injected me with a deadly germ and a few days later he came to the sick barrack where I was sent. He never even examined me. He looked at my fever chart and declared, laughing sarcastically, 'Too bad, she's so young - she has only two weeks to live.' At that time I knew he was right - I was very ill. But I refused to die. I made a silent pledge: That I will prove Mengele wrong, that I will survive, and I will be reunited with Miriam.

  For the next two weeks I was between life and death. I have only one memory - crawling on the barrack floor, because I no longer could walk. There was a faucet on the other end of the barrack. As I was crawling, I would fade in and out of consciousness. I just kept thinking, I must survive, I must survive. After two weeks, my fever broke and I immediately felt a lot stronger. It took me another 3 weeks before my fever chart showed normal and I was released from the barrack of the living dead and reunited with my twin sister Miriam. That event - surviving whatever I was injected with - serves to me as a very big source of strength.

  When my son had cancer, I couldn't get him to accept the fact that he had to fight for his life, that he had to make the choice to fight for his life. No one else could do it for him. I repeated to him the story of my survival in Auschwitz. He got mad at me and I just said, 'Alex, when I was in Auschwitz, the doctors who were around me wanted me dead. I made the decision that I would live. Can you make that decision?' He got mad at me and hung up the phone - he wasn't ready to deal with it. But he called me back two days later. Alex said, 'Mom, I think I understand it. This is my Auschwitz. This is my struggle that I need to survive.' If the person who is suffering from cancer doesn't even want to make the decision to live, no one can help them. My son is alive today.

  The fact that I have overcome so much adversity in my life helps me to have hope during tough times. I believe if I could survive Auschwitz, if I could survive crawling on the barrack floor between life and death, I could probably survive anything. Basically that is the way we gain confidence in our ability. When we overcome one difficulty and one hardship, we can build on that when any other hardship comes along in life. I also like the fact that people who hear me speak  can tune in and feel inspired. They see that I could do it, and they realize they can overcome whatever they are trying to overcome too. That is helpful to realize, that maybe each of us can help others overcome by sharing our stories.

  You can also look for ideas on YouTube and the Internet for people who have overcome tough times. You will find a story that fits your situation. Then when you are inspired, DO something. Make a commitment to yourself. Make a promise and keep it close by. If you get off track, don’t feel guilty - we all do it. Just get right back on it.",
  question_id: 3
)

Comment.create(
  author_id: 5,
  answer_id: 5,
  text: "Wow, so inspirational!"
)

4
Question.create (
  question: "What does it mean when an 8 year old child is writing capitals in the middle of her sentences?",
  details: "I'm really worried about my nephew writing like this all the time.",
  author_id: 2,
  topic_ids: [4]
)

6
Answer.create(
  author_id: 3,
  text: "I think an example of the writing would definitely help here.

  SomE ChildREn Try randoM casEs to hide Secret textS And thinGs likE that.
  SomE childrEn always writE cErtain lEttErs in capitals bEcausE thEy likE thE uppEr casE vErsion bEttEr, or bEcausE thEy gEt thE casEs muddlEd.
  SoMe ChIlDrEn ThInK iT’s CoOl To WrItE iN StRaNgE wAyS.
  Some children hVE A PROBLEM WITH THE CAPS LOCK KEY.
  Some children EMPHASIZE a LOT of their WORDS.
  Some Children are accustomed to the Germanic forms of Capitalization.
  So many options: examples would help.",
  question_id: 4
)

Comment.create(
  author_id: 2,
  answer_id: 6,
  text: "My daughter was caught at school writing obscene secret messages this way and was expelled!"
)

7
Answer.create(
  author_id: 5,
  text: "It may mean multiple things:

  She is communicating with aliens in a secret language and she does not want you to understand the code for security purposes.  In this case, I recommend you do not interfere.
  She wants to get into MIT when she grows up and she is practicing a code in some computer programming language you do not yet understand.  In this case, you encourage her and also, try to learn the language yourself.
  She is trying to write English, in which case you need to tell her to stop doing this immediately.  The English language usually does not recommend camel casing in regular sentences.  She needs to know that WriTing LiKe ThIs isn't cool even if her friends in school do think so.",
  question_id: 4
)

5
Question.create (
  question: "Why is the sky blue?",
  details: "I've always wondered.",
  author_id: 2,
  topic_ids: [5]
)

8
Answer.create(
  author_id: 4,
  text: "If you’re over with grade 7 or 8, you must’ve learnt about light scattering through a prism.

The light from the sun looks white. But it is really made up of all the colors of the rainbow.

When white light shines through a prism, the light is separated into all its colors.

All light travels in a straight line unless something gets in the way and does one of the following: reflect it (like a mirror), bend it (like a prism), or even scatter it (like molecules of the gases in the atmosphere).
Sunlight reaches Earth's atmosphere and is scattered in all directions by all the gases and particles in the air. Blue light is scattered in all directions by the tiny molecules of air in Earth's atmosphere. Blue, is scattered more than other colors because it travels as shorter, smaller waves.

This is why we see a blue sky most of the time.

Hope this explained well."
  question_id: 5
)

Comment.create(
  author_id: 5,
  answer_id: 8,
  text: "Wonderful answer!"
)
