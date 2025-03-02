// MENTORS DATA

import Link from "next/link";
import { Button } from "../ui/moving-border";
import Image from "next/image";

interface Product {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    color: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Senior UX Designer',
        href: '#',
        imageSrc: '/assets/mentor/boy1.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Shoo Thar Mein',
    },
    {
        id: 2,
        name: 'Photoshop Instructor',
        href: '#',
        imageSrc: '/assets/mentor/boy2.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Cristian Doru Barin',
    },
    {
        id: 3,
        name: 'SEO Expert',
        href: '#',
        imageSrc: '/assets/mentor/boy3.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Tanzeel Ur Rehman',
    }
]

const Mentor = () => {
    return (
        <div id="mentors-section" className="mx-auto max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">

            <div className='sm:flex justify-between items-center mb-12'>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-blue-900 my-4">Meet with our Mentors</h2>
                <div>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white text-blue-900 hover:bg-green-100 border-neutral-200 dark:border-slate-800 cursor-pointer"
                    >
                        <Link href="/mentors">Explore Our Mentors</Link>
                    </Button>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {products.map((product) => (
                    <div key={product.id} className="group relative">
                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                            <Image
                                width={0} height={0}
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-center ">
                            <div>
                                <div className='border border-white rounded-lg -mt-8 bg-white p-2 mentorShadow'>
                                    <h3 className="text-sm text-gray-700 text-center">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                </div>
                                <p className="mt-3 text-2xl font-semibold text-offblack text-center">{product.color}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Mentor;
