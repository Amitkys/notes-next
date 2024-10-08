"use client"
import { useRef } from "react"
import axios from "axios";
import { useRouter } from "next/navigation";

export default function add() {

    const titleRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const router = useRouter();

    async function submitHandler() {
        const title = titleRef.current?.value;
        const content = contentRef.current?.value;
        await axios.post('/api/add', {
            title,
            content
        })
        router.push('/');
    }
    return (
        <div>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text font-semibold text-[19px]">What is your name?</span>
                </div>
                <input
                    ref={titleRef}
                    type="text"
                    placeholder="Type here"
                    className="input input-md text-lg border-2 border-gray-700 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:border-gray-500 focus:ring-0 focus:ring-gray-500"
                />
            </label>
            {/* 2nd labe  */}
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text font-semibold text-[19px]">What is your name?</span>
                </div>
                <textarea
                    ref={contentRef}
                    placeholder="Type here"
                    className="textarea  text-lg border-2 border-gray-700 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:border-gray-500 focus:ring-0 focus:ring-gray-500"
                />
            </label>
            <button onClick={submitHandler} className="btn btn-sm btn-success text-black mt-3">Add Notes</button>

        </div>
    )
}