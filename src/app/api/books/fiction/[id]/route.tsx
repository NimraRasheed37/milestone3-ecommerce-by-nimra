// app/api/fiction/route.ts
import { NextResponse } from "next/server";

const books = [
  {
    id: 1,
    title: "Namal",
    author: "Nemrah Ahmed",
    price: "3300 PKR",
    image: "/img/books/fiction/namal.jpeg",
    category: "fiction",
    description: "The novel is named after a chapter in the Quran, Surah An-Naml, which means “The Ants”. The author has skillfully woven the verses and meanings of this surah into the plot and the characters of the novel. The novel revolves around a multiple murder case. Faris Ghazi, an intelligence officer, is accused of killing his step-brother, his wife, and attempting to kill his cousin Zumar Yusuf. However, his nephew Saadi Yusuf believes in his innocence and fights to prove it in court. On the other hand, Zumar, who is a district attorney and lost her kidneys in the attack, is convinced that Faris is guilty and wants him to pay for his crimes. Hashim Kardaar is the real culprit behind the murders. He is a corrupt lawyer and oil tycoon, and also happens to be Faris’s first cousin with a personal vendetta against him. Hashim and his mother Jawahirat become caught up in a complex web of conspiracies and deception. They manipulate reality and create misunderstandings among the characters."
  },
  {
    id: 2,
    title: "Usri yusra",
    author: "Husna Hussain",
    price: "950 PKR",
    image: "/img/books/urdu/usri-yusra.jpg",
    category: "fiction",
    description: "Usri Yusra is a tale of hope, endurance, and faith, inspired by the Quranic verse, “Indeed, with hardship comes ease”. The novel narrates the struggles and resilience of its protagonist as they navigate through life's adversities, finding solace and strength in their unwavering belief in God. It’s a heartwarming story of how patience and trust in divine plans can lead to triumph over difficulties.",
  },
  {
    id: 3,
    title: "Sulphite",
    author: "Noor Rajpoot",
    price: "500 PKR",
    image: "/img/books/fiction/sulphite.jpg",
    category: "fiction",
    description: "**Sulphite** is a gripping novel that delves deep into the complexities of human emotions, mental health, and relationships. The plot centers on a young woman, Meher, who struggles with her own identity and place in the world. After a tragic event that alters her life, she embarks on a journey of self-discovery, navigating a web of societal expectations, family pressure, and personal trauma. The novel explores themes of healing, personal growth, and the struggle to find meaning in a chaotic world. Through Meher's journey, readers are reminded of the importance of self-acceptance and the power of perseverance."
  },
    {
      id: 4,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: "300 PKR",
      image: "/img/books/fiction/alchemist.jpg",
      category: "fiction",
      description: "The Alchemist by Paulo Coelho is a philosophical novel about a young shepherd named Santiago, who embarks on a journey to find treasure near the Egyptian pyramids after having a recurring dream. Along the way, he learns valuable lessons about pursuing his Personal Legend, listening to his heart, and recognizing the interconnectedness of all things. With the guidance of mentors like Melchizedek, an alchemist, and others he meets on his journey, Santiago discovers that the true treasure lies not in material wealth but in personal growth and self-discovery. The novel emphasizes following one's dreams, embracing challenges, and finding purpose in life.",
    },
    {
      id: 5,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: "500 PKR",
      image: "/img/books/fiction/p&p.jpg",
      category: "fiction",
      description: "Pride and Prejudice by Jane Austen is a classic novel that follows the life of Elizabeth Bennet, a sharp-witted and independent young woman, and her complex relationship with the wealthy and reserved Mr. Darcy. Initially, Elizabeth judges Darcy as arrogant and prideful, while Darcy views Elizabeth as beneath him. However, as their paths cross and they get to know each other better, both characters confront their own prejudices and misconceptions. Through misunderstandings, social expectations, and personal growth, they ultimately realize their deep love for each other. The novel explores themes of love, class, social expectations, and personal growth.",
    },
  ];
  
// Handle GET request for specific book by ID
export async function GET(req: Request) {
    const url = new URL(req.url);
    const pathSegments = url.pathname.split("/");
  
    const id = pathSegments[pathSegments.length - 1];  // Extract the book ID from the URL
  
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