import Link from "next/link";

export default function Categories() {
  return (
    <div className="p-8 bg-gray-50 mx-auto">
      <h2 className="text-3xl font-bold text-center text-red-900 mb-8">
        Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4  gap-4 ">
        <Link className="categories" href="/urdu">
          Urdu
        </Link>
        <Link className="categories" href="/english">
          English
        </Link>
        <Link className="categories" href="/fiction">
          Fiction
        </Link>
        <Link className="categories" href="/fantasy">
          Fantasy
        </Link>
      </div>
    </div>
  );
}
