"use client";
import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image";

export const BannerSlider = () => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: false,
        mode: "snap",
        rtl: false,
        slides: { perView: "auto" },
    })

    return (
        <div ref={sliderRef} className="keen-slider max-w-6xl w-full " >
          
            <div
                className="keen-slider__slide "
                style={{ maxWidth: 250, minWidth: 200 }}
            >
                <Image className="rounded-3xl" width={200} height={200} src="https://media.istockphoto.com/id/975121882/photo/people-inserting-coins-into-piggybank.jpg?b=1&s=612x612&w=0&k=20&c=BK2Kp7dC2Y5VhgnTgyBw2kLkFJ3-XR5yes83PvDYduM=" alt="logo" />
            </div>
            <div
                className="keen-slider__slide  mx-2"
                style={{ maxWidth: 350, minWidth: 300 }}
            >
                <Image className="rounded-3xl" width={400} height={400} src="https://media.istockphoto.com/id/1338489163/photo/crowdfunding-and-business-philanthropy.jpg?b=1&s=612x612&w=0&k=20&c=3h__x2pzNyOB8qNl6LNAGBQgsVo-4KI1n_VGNBJRnx4=" alt="logo" />
            </div>
            <div
                className="keen-slider__slide "
                style={{ maxWidth: 600, minWidth: 600 }}
            >
                <Image className="rounded-3xl" width={600} height={600} src="https://media.istockphoto.com/id/681739776/photo/top-view-of-business-team-working-at-trendy-loft-office-young-mixed-race-group-of-people-puts.jpg?b=1&s=612x612&w=0&k=20&c=esCzEU0I9XNz7sB6mJtnjGCYu_LSxudOd3bghgbxi6c=" alt="logo" />
            </div>
            <div
                className="keen-slider__slide"
                style={{ maxWidth: 150, minWidth: 150 }}
            >
                <Image className="rounded-3xl" width={400} height={400} src="https://media.istockphoto.com/id/1168369576/photo/people-hands-throwing-coins-in-piggy-bank-for-crowdfunding.jpg?b=1&s=612x612&w=0&k=20&c=aBlVbvjk_JVbRNLli2uFGNQGBezORP-9HlXcB5vmcgg=" alt="logo" />
            </div>
            <div
                className="keen-slider__slide "
                style={{ maxWidth: 75, minWidth: 75 }}
            >
                <Image className="rounded-3xl" width={400} height={400} src="https://media.istockphoto.com/id/1369579737/photo/funding-financing-business-project.jpg?b=1&s=612x612&w=0&k=20&c=jqt0fLby2m-VKF1BTWSGZtF1L5v9cOnxKUmfFq40ny8=" alt="logo" />
            </div>
        </div>
    )
}
