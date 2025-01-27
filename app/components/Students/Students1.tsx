'use client'
import * as React from "react"

import { Card, CardContent } from "@/app/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel"

export default function Students1() {

  const postData = [
    {
      profession: 'UX/UI Designer',
      name: 'Andrew Williams',
      imgSrc: '/assets/students/user-1.jpg',
      starimg: '/assets/students/stars.png',
      detail: "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!"
    },
    {
      profession: 'UX/UI Designer',
      name: 'Cristian Doru Barin',
      imgSrc: '/assets/students/user-2.jpg',
      starimg: '/assets/students/stars.png',
      detail: "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!"
    },
    {
      profession: 'UX/UI Designer',
      name: 'Tanzeel Ur Rehman',
      imgSrc: '/assets/students/user-3.jpg',
      starimg: '/assets/students/stars.png',
      detail: "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!"
    },
    {
      profession: 'UX/UI Designer',
      name: 'Andrew Williams',
      imgSrc: '/assets/students/user-1.jpg',
      starimg: '/assets/students/stars.png',
      detail: "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!"
    },
  ]

  return (
    <div className="mb-44 justify-center">

      <Carousel className="w-full max-w-80 max-auto m-auto bg-gray-50">
        <CarouselContent>
          {
            postData.map((data, i) => (
              <>
                <CarouselItem key={i}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="aspect-square items-center justify-center ">
                        <img src={data.imgSrc} className="w-24 rounded-full justify-center m-auto p-4" />
                        <p className="text-center -mt-2 font-bold">{data.profession}</p>
                        <h1 className="font-bold text-center mt-1">{data.name}</h1>
                        <div className="justify-items-center">
                          <p className="text-center mt-2 text-gray-700 tracking-wide">{data.detail}</p>
                        </div>
                        <div className="mt-8 justify-items-center">
                          <img src='/assets/students/stars.png' />
                        </div>


                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>


      {/* <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}

    </div>
  )
}
