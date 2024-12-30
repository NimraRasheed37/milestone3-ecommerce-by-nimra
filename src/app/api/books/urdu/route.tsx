// app/api/urdu-novels/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const books = [
    {
      id: 1,
      title: "Peer-e-Kamil",
      author: "Umera Ahmed",
      price: "1200 PKR",
      image: "/img/books/urdu/peer.jpg",
      category: "urdu",
      categoryId: 4,
      description: "**“Peer-e-Kamil”** by Umera Ahmed is a standout work in Urdu literature, known for its depth beyond the usual romance novel. This book explores themes of faith, love, and self-discovery, leaving readers with a profound sense of reflection.\nThe story follows two central characters: Salaar Sikandar and Imama Hashim. Salaar is a brilliant young man with a restless spirit, constantly questioning the meaning of life. In contrast, Imama comes from a stable, religious background and carries a quiet strength. Their lives intersect in an unexpected way, sparking an intense journey for both.\nAs the plot unfolds, Salaar undergoes a powerful transformation, shifting from internal conflict to finding inner peace. Imama, a devout and resilient woman, faces hardships due to her steadfast commitment to her beliefs.\nThis novel is far more than a love story; it’s a tale of spiritual awakening and profound change. Set against the varied landscapes of Islamabad, America, Paris, and Lahore, the story brings a unique, immersive feel to the journey of these characters."
    },
    {
      id: 2,
      title: "Jannat key Pattay",
      author: "Nemrah Ahmed",
      price: "1000 PKR",
      image: "/img/books/urdu/jannat.jpg",
      category: "urdu",
      categoryId: 4,
      description: "Haya Suleman, an LLB (Hons) student, receives a scholarship to study in Turkey, but her plans take a dark turn when a private video of her surfaces online. Desperate to keep it from her traditional family, she contacts a Cyber Crime Cell officer who offers help—but he knows more about her than he should.\nAs Haya navigates this mystery, she faces the challenge of removing the video, going to Turkey, and possibly meeting the one person she's been searching for. *Jannat Kay Pattay* (Leaves of Heaven) is a thrilling ride filled with secrets, surprises, and twists that will keep you guessing until the end."
    },
    {
      id: 3,
      title: "Haalim",
      author: "Nemrah Ahmed",
      price: "3000 PKR",
      image: "/img/books/urdu/haalim.jpg",
      category: "urdu",
      categoryId: 4,
      description: "**Haalim** revolves around dream interpretation and the intriguing concept of time travel. Set primarily in Malaysia and the historical Malaka, the narrative intertwines the lives of its central characters – Fateh, Taalia, and Adam – against the backdrop of political maneuvers. Fateh is an aspiring politician, eager to change the political landscape of Malaysia, Taalia is a con artist with various identities, and Adam, a man struggling with self-esteem issues. These characters, despite their differences, share entwined storylines and evolve through their personal growth throughout the novel."
    },
    {
      id: 4,
      title: "Khud se khuda tak",
      author: "Muhammad Nasir Iftikhar",
      price: "800 PKR",
      image: "/img/books/urdu/khudatak.jpg",
      category: "urdu",
      categoryId: 4,
      description: "Khud Se Khuda Tak is a spiritual and philosophical book by Muhammad Nasir Iftikhar that guides readers on the path of self-awareness and closeness to God. It emphasizes introspection, simplicity, and the understanding of one’s inner self to attain divine connection. The book discusses profound topics like the purpose of life, spirituality, and the significance of surrendering to God’s will, offering deep insights into the journey from the self (khud) to the divine (khuda)."
    },
    {
      id: 5,
      title: "Namal",
      author: "Nemrah Ahmed",
      price: "3300 PKR",
      image: "/img/books/urdu/namal.jpeg",
      category: "urdu",
      categoryId: 4,
      description: "The novel is named after a chapter in the Quran, Surah An-Naml, which means “The Ants”. The author has skillfully woven the verses and meanings of this surah into the plot and the characters of the novel. The novel revolves around a multiple murder case. Faris Ghazi, an intelligence officer, is accused of killing his step-brother, his wife, and attempting to kill his cousin Zumar Yusuf. However, his nephew Saadi Yusuf believes in his innocence and fights to prove it in court. On the other hand, Zumar, who is a district attorney and lost her kidneys in the attack, is convinced that Faris is guilty and wants him to pay for his crimes. Hashim Kardaar is the real culprit behind the murders. He is a corrupt lawyer and oil tycoon, and also happens to be Faris’s first cousin with a personal vendetta against him. Hashim and his mother Jawahirat become caught up in a complex web of conspiracies and deception. They manipulate reality and create misunderstandings among the characters."
    },
    {
      id: 6,
      title: "Usri yusra",
      author: "Husna Hussain",
      price: "950 PKR",
      image: "/img/books/urdu/usri-yusra.jpg",
      category: "urdu",
      categoryId: 4,
      description: "Usri Yusra is a tale of hope, endurance, and faith, inspired by the Quranic verse, “Indeed, with hardship comes ease”. The novel narrates the struggles and resilience of its protagonist as they navigate through life's adversities, finding solace and strength in their unwavering belief in God. It’s a heartwarming story of how patience and trust in divine plans can lead to triumph over difficulties.",
    },
    {
      id: 7,
      title: "Raja Gidh",
      author: "Bano Qudsia",
      price: "1100 PKR",
      image: "/img/books/urdu/raja-gidh.png",
      category: "urdu",
      categoryId: 4,
      description: "Raja Gidh is a philosophical masterpiece that delves into the concepts of morality, forbidden love, and the psychological effects of greed and materialism. The story is told through the life of Qayyum, who becomes infatuated with Seemi, a woman he can never have. The narrative interweaves human actions with allegorical references to vultures (Gidh) to discuss ethical decay in society. The novel explores the consequences of breaking moral boundaries and the spiritual suffering that follows.",
      },
    {
      id: 8,
      title: "Sulphite",
      author: "Noor Rajpoot",
      price: "500 PKR",
      image: "/img/books/urdu/sulphite.jpg",
      category: "urdu",
      categoryId: 4,
      description: "**Sulphite** is a gripping novel that delves deep into the complexities of human emotions, mental health, and relationships. The plot centers on a young woman, Meher, who struggles with her own identity and place in the world. After a tragic event that alters her life, she embarks on a journey of self-discovery, navigating a web of societal expectations, family pressure, and personal trauma. The novel explores themes of healing, personal growth, and the struggle to find meaning in a chaotic world. Through Meher's journey, readers are reminded of the importance of self-acceptance and the power of perseverance."
    },
    {
      id: 9,
      title: "Aks",
      author: "Umera Ahmed",
      price: "700 PKR",
      image: "/img/books/urdu/aks.jpg",
      category: "urdu",
      categoryId: 4,
      description: "**Aks** is a compelling story about identity, self-reflection, and the complexities of the human soul. The novel follows the journey of a young woman named Sana, who struggles to find her true self amidst the expectations of society and her family. As Sana grapples with her inner demons, she begins to question the very nature of her existence. The story is a beautiful exploration of the inner world of its characters and their quest for peace, truth, and understanding. Through Sana's transformation, the novel highlights the importance of embracing one’s true self, no matter the consequences."
    },
    {
      id: 10,
      title: "Main Anmol",
      author: "Nemrah Ahmed",
      price: "1500 PKR",
      image: "/img/books/urdu/anmol.jpg",
      category: "urdu",
      categoryId: 4,
      description: "The book is as precious as its name indicates Main Anmol (I Am Precious) This title gives you a sense of self-worth, and makes you think that how much different and unique you're in your own way. This is one of the great self-help book, and the author has done her best to help you in your spiritual as well as psychological journey to your true-self"
    }
  ];
  

  return NextResponse.json(books);
}
