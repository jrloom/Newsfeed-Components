/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: "Nov 5th, 2018",
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: "Javascript and You, ES6",
    date: "May 7th, 2019",
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: "React vs Angular vs Vue",
    date: "June 7th, 2019",
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: "Professional Software Development in 2019",
    date: "Jan 1st, 2019",
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: "Fry Day",
    date: "July 16, 2019",
    firstParagraph: `Bender?! You stole the atom. Throw her in the brig. No! I want to live! There are still too many things I don't own! Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence?`,

    secondParagraph: `Hello, little man. I will destroy you! WINDMILLS DO NOT WORK THAT WAY! GOOD NIGHT! And why did 'I' have to take a cab? Oh yeah, good luck with that. Bender, we're trying our best. For example, if you killed your grandfather, you'd cease to exist!`,

    thirdParagraph: `No, I'm Santa Claus! I wish! It's a nickel. I found what I need. And it's not friends, it's things. The key to victory is discipline, and that means a well made bed. You will practice until you can make your bed in your sleep.`
  },
  {
    title: "Something Different",
    date: "July 16, 2019",
    firstParagraph: `Listen, strange women lyin' in ponds distributin' swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony.`,

    secondParagraph: `In 1945, peace broke out. It was the end of the Joke. Joke warfare was banned at a special session of the Geneva Convention, and in 1950 the last remaining copy of the joke was laid to rest here in the Berkshire countryside, never to be told again.`,

    thirdParagraph: `This morning, shortly after 11:00, comedy struck this little house on Dibley Road. Sudden, violent comedy. You don't frighten us, English pig dogs. Go and boil your bottoms, you sons of a silly person. I blow my nose at you, so-called "Arthur King," you and all your silly English K-nig-hts. We interrupt this program to annoy you and make things generally irritating.`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each peice of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new artible

*/
// class Article {
//   constructor(article, title, date, firstParagraph, secondParagraph, thirdParagraph) {
//     this.container = article.querySelector(".article");
//     console.log(this.container);
//     this.title = article.querySelector("h2");
//     this.date = article.querySelector(".date");
//     this.paragraphOne = article.querySelector(".p1");
//     this.paragraphTwo = article.querySelector(".p2");
//     this.paragraphThree = article.querySelector(".p3");
//     this.expandBtn = article.querySelector(".expandButton");

//     this.title.textContent = title;
//     this.date.textContent = date;
//     this.paragraphOne.textContent = firstParagraph;
//     this.paragraphTwo.textContent = secondParagraph;
//     this.paragraphThree.textContent = thirdParagraph;
//     this.expandBtn.textContent = "expand";

//     this.open = false;
//     this.expandBtn.addEventListener("click", () => this.expandArticle());
//   }
//   button() {
//     this.open = !this.open;
//     if (!this.open) {
//       this.expandBtn.textContent = "expand";
//     } else {
//       this.expandBtn.textContent = "close";
//     }
//   }
//   expandArticle() {
//     this.button();
//     this.container.classList.toggle("article-open");
//     console.log("click");
//   }
// }

// const createArticle = () => {
//   const insertArticle = document.querySelector(".articles");
//   const container = document.createElement("div");
//   const title = document.createElement("h2");
//   const date = document.createElement("p");
//   const paragraph1 = document.createElement("p");
//   const paragraph2 = document.createElement("p");
//   const paragraph3 = document.createElement("p");
//   const button = document.createElement("span");

//   container.classList.add("article");
//   date.classList.add("date");
//   paragraph1.classList.add("p1");
//   paragraph2.classList.add("p2");
//   paragraph3.classList.add("p3");
//   button.classList.add("expandButton");

//   insertArticle.appendChild(article);
//   container.appendChild(title);
//   container.appendChild(date);
//   container.appendChild(paragraph1);
//   container.appendChild(paragraph2);
//   container.appendChild(paragraph3);
//   container.appendChild(button);

//   return container;
// };

// data.map(article => {
//   const newArticle = new Article(createArticle(), article.title, article.date, article.firstParagraph, article.secondParagraph, article.thirdParagraph);
// });
//
// can't seem to get .article into the class. currently returns a null error.
// ok. forget the class. forget .map(). just doing a function and using .forEach().
//
//
let articles = document.querySelector(".articles");
data.forEach(data => articles.appendChild(article(data)));

function article(data) {
  const container = document.createElement("div");
  const title = document.createElement("h2");
  const date = document.createElement("p");
  const paragraph1 = document.createElement("p");
  const paragraph2 = document.createElement("p");
  const paragraph3 = document.createElement("p");
  const btn = document.createElement("span");

  container.appendChild(title);
  container.appendChild(date);
  container.appendChild(paragraph1);
  container.appendChild(paragraph2);
  container.appendChild(paragraph3);
  container.appendChild(btn);

  container.classList.add("article");
  date.classList.add("date");
  btn.classList.add("expandButton");

  title.textContent = data.title;
  date.textContent = data.date;
  paragraph1.textContent = data.firstParagraph;
  paragraph2.textContent = data.secondParagraph;
  paragraph3.textContent = data.thirdParagraph;
  btn.textContent = "open";

  btn.addEventListener("click", () => {
    container.classList.toggle("article-open");
    open = !open;
    !open ? (btn.textContent = "close") : (btn.textContent = "open");
  });

  return container;
}
