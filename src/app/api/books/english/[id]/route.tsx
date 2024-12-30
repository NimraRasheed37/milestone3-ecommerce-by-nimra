
import { NextResponse } from "next/server";

const books = [
  { 
    id: 1,
    title: "Harry Potter and the philosopher's stone",
    author: "J.K.Rowling",
    price: "800 PKR",
    image: "/img/books/english/hp1.webp",
    category: "english",
    description: "Harry Potter, an orphan mistreated by his relatives, discovers on his 11th birthday that he is a wizard. He attends Hogwarts School of Witchcraft and Wizardry, where he learns about his magical heritage and the death of his parents at the hands of the dark wizard Voldemort. Along with his new friends Ron Weasley and Hermione Granger, Harry uncovers the mystery of the Philosopher’s Stone, which grants immortality. Together, they thwart Voldemort’s attempt to return to power, establishing Harry as a brave and capable young wizard."
  },
  {
    id: 2,
    title: "Harry Potter and the chamber of secrets",
    author: "J.K.Rowling",
    price: "7500 PKR",
    image: "/img/books/english/hp2.webp",
    category: "english",
    description: "In his second year at Hogwarts, Harry faces new dangers as the Chamber of Secrets is opened, releasing a monster that petrifies students. The legend warns that only the Heir of Slytherin can control the creature. With Hermione’s intellect, Ron’s loyalty, and Harry’s courage, they unravel the mystery, discovering that a young Voldemort had manipulated events through a magical diary. Harry defeats the monster, a deadly basilisk, and destroys the diary, a fragment of Voldemort’s soul."
  },
  {
    id: 3,
    title: "Harry Potter and the prisoner of Azkaban",
    author: "J.K.Rowling",
    price: "700 PKR",
    image: "/img/books/english/hp3.webp",
    category: "english",
    description: "Harry learns that Sirius Black, a convicted murderer, has escaped from the wizarding prison Azkaban and is believed to be after him. Over the course of his third year, Harry uncovers the truth: Sirius is his godfather and was falsely accused. With Hermione's help and the use of a Time-Turner, Harry saves Sirius from execution and learns more about his parents’ past. The story introduces the concept of the Dementors and the Patronus charm, showcasing Harry's growing maturity and skill."
  },
  {
    id: 4,
    title: "Harry Potter and the goblet of fire",
    author: "J.K.Rowling",
    price: "800 PKR",
    image: "/img/books/english/hp4.webp",
    category: "english",
    description: "Hogwarts hosts the Triwizard Tournament, a magical competition between three schools, and Harry is unexpectedly chosen as a fourth participant. Facing dangerous tasks, including battling a dragon and navigating a deadly maze, Harry shows bravery and ingenuity. The tournament ends in tragedy when Voldemort returns to power, killing a fellow competitor, Cedric Diggory, and using Harry’s blood to restore his physical form. The book marks a dark turning point as Voldemort’s threat becomes imminent."
  },
  {
    id: 5,
    title: "Harry Potter and the order of phoenix",
    author: "J.K.Rowling",
    price: "900 PKR",
    image: "/img/books/english/hp5.webp",
    category: "english",
    description: "As Voldemort’s return is denied by the wizarding government, Harry faces skepticism and hostility. He learns about the Order of the Phoenix, a secret group resisting Voldemort. Meanwhile, Hogwarts is under the oppressive rule of Dolores Umbridge, a Ministry official. Harry leads his friends in forming Dumbledore’s Army to prepare for the looming war. The story culminates in a battle at the Ministry of Magic, where Harry witnesses the death of Sirius Black and gains insight into a prophecy linking him to Voldemort."
  },
  {
    id: 6,
    title: "Harry Potter and the half blood prince",
    author: "J.K.Rowling",
    price: "950 PKR",
    image: "/img/books/english/hp6.webp",
    category: "english",
    description: "In his sixth year, Harry delves into Voldemort’s past, learning about Horcruxes—objects containing pieces of Voldemort’s soul. Guided by Professor Dumbledore, Harry uncovers clues vital to Voldemort’s defeat. Harry also grows closer to Ginny Weasley, and tensions rise as Draco Malfoy takes on a dangerous mission. The book ends tragically when Dumbledore is killed by Severus Snape, leaving Harry determined to find and destroy the remaining Horcruxes on his own."
  },
  {
    id: 7,
    title: "Harry Potter and the deathly hallows",
    author: "J.K.Rowling",
    price: "1000 PKR",
    image: "/img/books/english/hp7.webp",
    category: "english",
    description: "Harry, Ron, and Hermione abandon Hogwarts to hunt Voldemort’s Horcruxes. Their journey is fraught with danger, loss, and revelations, including the truth about Snape’s loyalty and sacrifices. The story climaxes in the Battle of Hogwarts, where Harry confronts Voldemort and learns he is a Horcrux himself. Sacrificing himself, Harry dies briefly but returns to defeat Voldemort once and for all. The series concludes with hope and closure as peace is restored to the wizarding world."
  },
  {
    id: 8,
    title: "The Hobbit",
    author: "J.R.R.Tolkien",
    price: "1500 PKR",
    image: "/img/books/english/hobbit.jpg",
    category: "english",
    description: "The Hobbit is a beloved english fantasy novel that serves as a prelude to Tolkien's The Lord of the Rings. The story follows Bilbo Baggins, a timid and comfort-loving hobbit who is thrust into an adventure by Gandalf, a wizard, and a group of dwarves seeking to reclaim their homeland from the dragon Smaug. Reluctantly, Bilbo joins the company as a burglar. They face numerous challenges, including trolls, goblins, and spiders, on their journey to the Lonely Mountain. Bilbo's cleverness and courage grow throughout the story, especially when he encounters Gollum and acquires the One Ring, a magical object that plays a pivotal role in future events. Ultimately, Bilbo aids the dwarves in their quest and demonstrates his wit and bravery, transforming from a simple hobbit into an unlikely hero."
  },
  {
    id: 9,
    title: "Ikigai",
    author: "Héctor García and Francesc Miralles",
    price: "400 PKR",
    image: "/img/books/english/ikigai.jpeg",
    category: "english",
    description: "Ikigai by Héctor García and Francesc Miralles explores the Japanese concept of (Ikigai) which translates to (reason for being). The book delves into how finding one’s purpose can lead to a long, fulfilling, and happy life. Drawing inspiration from Okinawa, Japan—a region with the highest population of centenarians—the authors share insights into longevity, well-being, and purpose."
  },
  {
    id: 10,
    title: "Narnia",
    author: "C.S.Lewis",
    price: "1250 PKR",
    image: "/img/books/english/narnia.jpg",
    category: "english",
    description: "The Chronicles of Narnia is a fantasy series consisting of seven books, with The Lion, the Witch, and the Wardrobe being the most famous. It transports readers to the magical land of Narnia, where talking animals, mythical creatures, and epic battles between good and evil unfold. The series is rich with Christian allegory, themes of redemption, courage, and friendship. Four siblings—Peter, Susan, Edmund, and Lucy—stumble upon Narnia through a magical wardrobe. They find Narnia under the spell of the White Witch, who has plunged it into eternal winter. With the help of Aslan, the noble lion and true king of Narnia, they lead a rebellion against the Witch, restoring peace and springtime to the land."
  },
  ]

  export async function GET(req: Request) {
      const url = new URL(req.url);
      const pathSegments = url.pathname.split("/");
    
      const id = pathSegments[pathSegments.length - 1]; 
    
      if (id && !isNaN(Number(id))) {
        const book = books.find((book) => book.id === parseInt(id, 10));  
        if (book) {
          return NextResponse.json(book);  
        } else {
          return NextResponse.json({ error: "Book not found" }, { status: 404 });  
        }
      } else {
        return NextResponse.json({ error: "Invalid ID" }, { status: 400 });  
      }
    }