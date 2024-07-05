
"use client";
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../style/style.css"
import Image from "next/image";


export const Slider = () => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 4000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
                <div className="keen-slider" ref={sliderRef}>
                    <div className="keen-slider__slide w-full ">
                        <Image className="rounded-3xl" width={500} height={500} src="https://images.pexels.com/photos/7414108/pexels-photo-7414108.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
                    </div>
                    <div className="keen-slider__slide">
                        <Image width={500} className="rounded-3xl" height={500} src="https://images.pexels.com/photos/7414113/pexels-photo-7414113.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
                    </div>
                    <div className="keen-slider__slide">
                        <Image width={500} className="rounded-3xl" height={500} src="https://images.pexels.com/photos/7414210/pexels-photo-7414210.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
                    </div>
                    <div className="keen-slider__slide ">
                        <Image width={500} className="rounded-3xl" height={500} src="https://images.pexels.com/photos/7414217/pexels-photo-7414217.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
                    </div>
                    <div className="keen-slider__slide ">
                        <Image width={500} className="rounded-3xl" height={500} src="https://images.pexels.com/photos/7414020/pexels-photo-7414020.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
                    </div>
                    <div className="keen-slider__slide">
                        <Image width={500} className="rounded-3xl" height={500} src="https://images.pexels.com/photos/7414108/pexels-photo-7414108.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
                    </div>
                </div>
    )
}
