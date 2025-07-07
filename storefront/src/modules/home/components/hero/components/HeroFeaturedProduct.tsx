'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    title: 'Collier Or 18K',
    image: 'https://picsum.photos/1200/600?random=1',
    slug: 'collier-or-18k',
  },
  {
    id: 2,
    title: 'Bracelet Argent',
    image: 'https://picsum.photos/1200/600?random=2',
    slug: 'bracelet-argent',
  },
  {
    id: 3,
    title: 'Bague Diamant',
    image: 'https://picsum.photos/1200/600?random=3',
    slug: 'bague-diamant',
  },
  {
    id: 4,
    title: 'Boucles Perle',
    image: 'https://picsum.photos/1200/600?random=4',
    slug: 'boucles-perle',
  },
]

export default function HeroCarouselPro() {
  return (
    <div className="w-full">
      {/* Hero Slideshow */}
      <div className="relative w-full h-[500px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4 text-center">
                  <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {product.title}
                  </motion.h2>
                  <Link
                    href={`/products/${product.slug}`}
                    className="px-8 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition"
                  >
                    Voir le produit
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}