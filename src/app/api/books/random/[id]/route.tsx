
import { NextResponse } from "next/server";

const books = [
  {
    id: 1,
    title: "Harry Potter and the philosopher's stone",
    author: "J.K.Rowling",
    price: "800 PKR",
    image: "/img/books/english/hp1.webp",
    category: "random",
    description: "Harry Potter, an orphan mistreated by his relatives, discovers on his 11th birthday that he is a wizard. He attends Hogwarts School of Witchcraft and Wizardry, where he learns about his magical heritage and the death of his parents at the hands of the dark wizard Voldemort. Along with his new friends Ron Weasley and Hermione Granger, Harry uncovers the mystery of the Philosopher’s Stone, which grants immortality. Together, they thwart Voldemort’s attempt to return to power, establishing Harry as a brave and capable young wizard."
  },
  {
    id: 2,
    title: "Harry Potter and the chamber of secrets",
    author: "J.K.Rowling",
    price: "7500 PKR",
    image: "/img/books/english/hp2.webp",
    category: "random",
    description: "In his second year at Hogwarts, Harry faces new dangers as the Chamber of Secrets is opened, releasing a monster that petrifies students. The legend warns that only the Heir of Slytherin can control the creature. With Hermione’s intellect, Ron’s loyalty, and Harry’s courage, they unravel the mystery, discovering that a young Voldemort had manipulated events through a magical diary. Harry defeats the monster, a deadly basilisk, and destroys the diary, a fragment of Voldemort’s soul."
  },
  {
    id: 3,
    title: "Harry Potter and the prisoner of Azkaban",
    author: "J.K.Rowling",
    price: "700 PKR",
    image: "/img/books/english/hp3.webp",
    category: "random",
    description: "Harry learns that Sirius Black, a convicted murderer, has escaped from the wizarding prison Azkaban and is believed to be after him. Over the course of his third year, Harry uncovers the truth: Sirius is his godfather and was falsely accused. With Hermione's help and the use of a Time-Turner, Harry saves Sirius from execution and learns more about his parents’ past. The story introduces the concept of the Dementors and the Patronus charm, showcasing Harry's growing maturity and skill."
  },
  {
    id: 4,
    title: "Harry Potter and the goblet of fire",
    author: "J.K.Rowling",
    price: "800 PKR",
    image: "/img/books/english/hp4.webp",
    category: "random",
    description: "Hogwarts hosts the Triwizard Tournament, a magical competition between three schools, and Harry is unexpectedly chosen as a fourth participant. Facing dangerous tasks, including battling a dragon and navigating a deadly maze, Harry shows bravery and ingenuity. The tournament ends in tragedy when Voldemort returns to power, killing a fellow competitor, Cedric Diggory, and using Harry’s blood to restore his physical form. The book marks a dark turning point as Voldemort’s threat becomes imminent."
  },
  {
    id: 5,
    title: "Harry Potter and the order of phoenix",
    author: "J.K.Rowling",
    price: "900 PKR",
    image: "/img/books/english/hp5.webp",
    category: "random",
    description: "As Voldemort’s return is denied by the wizarding government, Harry faces skepticism and hostility. He learns about the Order of the Phoenix, a secret group resisting Voldemort. Meanwhile, Hogwarts is under the oppressive rule of Dolores Umbridge, a Ministry official. Harry leads his friends in forming Dumbledore’s Army to prepare for the looming war. The story culminates in a battle at the Ministry of Magic, where Harry witnesses the death of Sirius Black and gains insight into a prophecy linking him to Voldemort."
  },
  {
    id: 6,
    title: "Harry Potter and the half blood prince",
    author: "J.K.Rowling",
    price: "950 PKR",
    image: "/img/books/english/hp6.webp",
    category: "random",
    description: "In his sixth year, Harry delves into Voldemort’s past, learning about Horcruxes—objects containing pieces of Voldemort’s soul. Guided by Professor Dumbledore, Harry uncovers clues vital to Voldemort’s defeat. Harry also grows closer to Ginny Weasley, and tensions rise as Draco Malfoy takes on a dangerous mission. The book ends tragically when Dumbledore is killed by Severus Snape, leaving Harry determined to find and destroy the remaining Horcruxes on his own."
  },
  {
    id: 7,
    title: "Harry Potter and the deathly hallows",
    author: "J.K.Rowling",
    price: "1000 PKR",
    image: "/img/books/english/hp7.webp",
    category: "random",
    description: "Harry, Ron, and Hermione abandon Hogwarts to hunt Voldemort’s Horcruxes. Their journey is fraught with danger, loss, and revelations, including the truth about Snape’s loyalty and sacrifices. The story climaxes in the Battle of Hogwarts, where Harry confronts Voldemort and learns he is a Horcrux himself. Sacrificing himself, Harry dies briefly but returns to defeat Voldemort once and for all. The series concludes with hope and closure as peace is restored to the wizarding world."
  },
  {
    id: 8,
    title: "The Hobbit",
    author: "J.R.R.Tolkien",
    price: "1500 PKR",
    image: "/img/books/english/hobbit.jpg",
    category: "random",
    description: "The Hobbit is a beloved english fantasy novel that serves as a prelude to Tolkien's The Lord of the Rings. The story follows Bilbo Baggins, a timid and comfort-loving hobbit who is thrust into an adventure by Gandalf, a wizard, and a group of dwarves seeking to reclaim their homeland from the dragon Smaug. Reluctantly, Bilbo joins the company as a burglar. They face numerous challenges, including trolls, goblins, and spiders, on their journey to the Lonely Mountain. Bilbo's cleverness and courage grow throughout the story, especially when he encounters Gollum and acquires the One Ring, a magical object that plays a pivotal role in future events. Ultimately, Bilbo aids the dwarves in their quest and demonstrates his wit and bravery, transforming from a simple hobbit into an unlikely hero."
  },
  {
    id: 9,
    title: "Ikigai",
    author: "Héctor García and Francesc Miralles",
    price: "400 PKR",
    image: "/img/books/english/ikigai.jpeg",
    category: "random",
    description: "Ikigai by Héctor García and Francesc Miralles explores the Japanese concept of (Ikigai) which translates to (reason for being). The book delves into how finding one’s purpose can lead to a long, fulfilling, and happy life. Drawing inspiration from Okinawa, Japan—a region with the highest population of centenarians—the authors share insights into longevity, well-being, and purpose."
  },
  {
    id: 10,
    title: "Narnia",
    author: "C.S.Lewis",
    price: "1250 PKR",
    image: "/img/books/english/narnia.jpg",
    category: "random",
    description: "The Chronicles of Narnia is a fantasy series consisting of seven books, with The Lion, the Witch, and the Wardrobe being the most famous. It transports readers to the magical land of Narnia, where talking animals, mythical creatures, and epic battles between good and evil unfold. The series is rich with Christian allegory, themes of redemption, courage, and friendship. Four siblings—Peter, Susan, Edmund, and Lucy—stumble upon Narnia through a magical wardrobe. They find Narnia under the spell of the White Witch, who has plunged it into eternal winter. With the help of Aslan, the noble lion and true king of Narnia, they lead a rebellion against the Witch, restoring peace and springtime to the land."
  },
  {
    id: 11,
    title: "Peer-e-Kamil",
    author: "Umera Ahmed",
    price: "1200 PKR",
    image: "/img/books/urdu/peer.jpg",
    category: "random",
    description: "**“Peer-e-Kamil”** by Umera Ahmed is a standout work in Urdu literature, known for its depth beyond the usual romance novel. This book explores themes of faith, love, and self-discovery, leaving readers with a profound sense of reflection.\nThe story follows two central characters: Salaar Sikandar and Imama Hashim. Salaar is a brilliant young man with a restless spirit, constantly questioning the meaning of life. In contrast, Imama comes from a stable, religious background and carries a quiet strength. Their lives intersect in an unexpected way, sparking an intense journey for both.\nAs the plot unfolds, Salaar undergoes a powerful transformation, shifting from internal conflict to finding inner peace. Imama, a devout and resilient woman, faces hardships due to her steadfast commitment to her beliefs.\nThis novel is far more than a love story; it’s a tale of spiritual awakening and profound change. Set against the varied landscapes of Islamabad, America, Paris, and Lahore, the story brings a unique, immersive feel to the journey of these characters."
  },
  {
    id: 12,
    title: "Jannat key Pattay",
    author: "Nemrah Ahmed",
    price: "1000 PKR",
    image: "/img/books/urdu/jannat.jpg",
    category: "random",
    description: "Haya Suleman, an LLB (Hons) student, receives a scholarship to study in Turkey, but her plans take a dark turn when a private video of her surfaces online. Desperate to keep it from her traditional family, she contacts a Cyber Crime Cell officer who offers help—but he knows more about her than he should.\nAs Haya navigates this mystery, she faces the challenge of removing the video, going to Turkey, and possibly meeting the one person she's been searching for. *Jannat Kay Pattay* (Leaves of Heaven) is a thrilling ride filled with secrets, surprises, and twists that will keep you guessing until the end."
  },
  {
    id: 13,
    title: "Haalim",
    author: "Nemrah Ahmed",
    price: "3000 PKR",
    image: "/img/books/urdu/haalim.jpg",
    category: "random",
    description: "**Haalim** revolves around dream interpretation and the intriguing concept of time travel. Set primarily in Malaysia and the historical Malaka, the narrative intertwines the lives of its central characters – Fateh, Taalia, and Adam – against the backdrop of political maneuvers. Fateh is an aspiring politician, eager to change the political landscape of Malaysia, Taalia is a con artist with various identities, and Adam, a man struggling with self-esteem issues. These characters, despite their differences, share entwined storylines and evolve through their personal growth throughout the novel."
  },
  {
    id: 14,
    title: "Khud se khuda tak",
    author: "Muhammad Nasir Iftikhar",
    price: "800 PKR",
    image: "/img/books/urdu/khudatak.jpg",
    category: "random",
    description: "Khud Se Khuda Tak is a spiritual and philosophical book by Muhammad Nasir Iftikhar that guides readers on the path of self-awareness and closeness to God. It emphasizes introspection, simplicity, and the understanding of one’s inner self to attain divine connection. The book discusses profound topics like the purpose of life, spirituality, and the significance of surrendering to God’s will, offering deep insights into the journey from the self (khud) to the divine (khuda)."
  }, 
  {
    id: 15,
    title: "Namal",
    author: "Nemrah Ahmed",
    price: "3300 PKR",
    image: "/img/books/urdu/namal.jpeg",
    category: "random",
    description: "The novel is named after a chapter in the Quran, Surah An-Naml, which means “The Ants”. The author has skillfully woven the verses and meanings of this surah into the plot and the characters of the novel. The novel revolves around a multiple murder case. Faris Ghazi, an intelligence officer, is accused of killing his step-brother, his wife, and attempting to kill his cousin Zumar Yusuf. However, his nephew Saadi Yusuf believes in his innocence and fights to prove it in court. On the other hand, Zumar, who is a district attorney and lost her kidneys in the attack, is convinced that Faris is guilty and wants him to pay for his crimes. Hashim Kardaar is the real culprit behind the murders. He is a corrupt lawyer and oil tycoon, and also happens to be Faris’s first cousin with a personal vendetta against him. Hashim and his mother Jawahirat become caught up in a complex web of conspiracies and deception. They manipulate reality and create misunderstandings among the characters."
  },
  {
    id: 16,
    title: "Usri yusra",
    author: "Husna Hussain",
    price: "950 PKR",
    image: "/img/books/urdu/usri-yusra.jpg",
    category: "random",
    description: "Usri Yusra is a tale of hope, endurance, and faith, inspired by the Quranic verse, “Indeed, with hardship comes ease”. The novel narrates the struggles and resilience of its protagonist as they navigate through life's adversities, finding solace and strength in their unwavering belief in God. It’s a heartwarming story of how patience and trust in divine plans can lead to triumph over difficulties.",
  },
  {
    id: 17,
    title: "Raja Gidh",
    author: "Bano Qudsia",
    price: "1100 PKR",
    image: "/img/books/urdu/raja-gidh.png",
    category: "random",
    description: "Raja Gidh is a philosophical masterpiece that delves into the concepts of morality, forbidden love, and the psychological effects of greed and materialism. The story is told through the life of Qayyum, who becomes infatuated with Seemi, a woman he can never have. The narrative interweaves human actions with allegorical references to vultures (Gidh) to discuss ethical decay in society. The novel explores the consequences of breaking moral boundaries and the spiritual suffering that follows.",
    },
  {
    id: 18,
    title: "Sulphite",
    author: "Noor Rajpoot",
    price: "500 PKR",
    image: "/img/books/urdu/sulphite.jpg",
    category: "random",
    description: "**Sulphite** is a gripping novel that delves deep into the complexities of human emotions, mental health, and relationships. The plot centers on a young woman, Meher, who struggles with her own identity and place in the world. After a tragic event that alters her life, she embarks on a journey of self-discovery, navigating a web of societal expectations, family pressure, and personal trauma. The novel explores themes of healing, personal growth, and the struggle to find meaning in a chaotic world. Through Meher's journey, readers are reminded of the importance of self-acceptance and the power of perseverance."
  },
  {
    id: 19,
    title: "Aks",
    author: "Umera Ahmed",
    price: "700 PKR",
    image: "/img/books/urdu/aks.jpg",
    category: "random",
    description: "**Aks** is a compelling story about identity, self-reflection, and the complexities of the human soul. The novel follows the journey of a young woman named Sana, who struggles to find her true self amidst the expectations of society and her family. As Sana grapples with her inner demons, she begins to question the very nature of her existence. The story is a beautiful exploration of the inner world of its characters and their quest for peace, truth, and understanding. Through Sana's transformation, the novel highlights the importance of embracing one’s true self, no matter the consequences."
  },
  {
    id: 20,
    title: "Main Anmol",
    author: "Nemrah Ahmed",
    price: "1500 PKR",
    image: "/img/books/urdu/anmol.jpg",
    category: "random",
    description: "The book is as precious as its name indicates Main Anmol (I Am Precious). This title gives you a sense of self-worth, and makes you think that how much different and unique you're in your own way. This is one of the great self-help book, and the author has done her best to help you in your spiritual as well as psychological journey to your true-self"
  }
  ]

  
    export async function GET(req: Request) {
        const url = new URL(req.url);
        const pathSegments = url.pathname.split("/");
      
        const id = pathSegments[pathSegments.length - 1]; 
      
        if (id && !isNaN(Number(id))) {
          const book = books.find((book) => book.id === parseInt(id, 20));  
          if (book) {
            return NextResponse.json(book);  
          } else {
            return NextResponse.json({ error: "Book not found" }, { status: 404 });  
          }
        } else {
          return NextResponse.json({ error: "Invalid ID" }, { status: 400 });  
        }
      }