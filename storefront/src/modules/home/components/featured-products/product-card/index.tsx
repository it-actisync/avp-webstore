import Link from 'next/link'
import Image from 'next/image'


export type Product = {
  id: string
  title: string
  image: string
  slug: string
  price: number
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block border rounded overflow-hidden shadow hover:shadow-lg transition"
    >
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        {product.price && (
          <p className="text-gray-700 mb-4">{product.price} €</p>
        )}
        <span className="inline-block px-4 py-2 bg-black text-white text-sm">
          Voir le produit
        </span>
      </div>
    </Link>
  )
}
