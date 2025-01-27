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
import Image from "next/image"

export default function WhyChooseUs1() {

  const content = [
    {
      img: (
        <div>
          <img src="https://t3.ftcdn.net/jpg/05/17/10/72/240_F_517107230_41yiWbPI4WTTzNEEJO6ceY4o5lXSvsYZ.jpg" alt="lms-icon" />
        </div>
      ),
      title: 'Experienced and Certified Trainers.',
      desc: 'Learn from industry veterans who bring a wealth of knowledge and expertise to the table. Our trainers are not just educator, they are mentors who guide you towards success.'
    },
    {

    }
  ]

  return (
    <>
      <div className="w-4/5 mx-auto">
        <div className="border">
          <Carousel className="max-w-5xl mx-auto ">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="flex border gap-2">
                      <CardContent className="flex aspect-square items-center justify-center p-6 border w-1/2">
                        {
                          content.map((content, index)=>(
                            <>
                            {content.img}
                            </>
                          ))
                        }
                      </CardContent>
                      <CardContent className="border w-80 h-80">
                        {
                          content.map((content, index) => (
                            <>
                              <h1 className="font-semibold tracking-tight mt-10 text-center text-2xl">{content.title}</h1>
                              <p className="text-gray-800 justify-between mt-8 tracking-wide">{content.desc}</p>
                            </>
                          ))
                        }
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  )
}
