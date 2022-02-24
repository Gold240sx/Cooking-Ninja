import { useEffect, useState, useRef } from "react";
import Image from "./image"
import useFetchImage from "../hooks/useFetchImage";

export default function Images() {
    const [images, setImages] = useFetchImage();
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const [newImageUrl, setNewImageUrl] = useState("");

    function handleRemove(index) {
        setImages([
            ...images.slice(0, index),
            ...images.slice(index +1, images.length),
        ])
    }


    function ShowImage() {
        return images.map((img, index) => (
            <Image
                image= {img.urls.regular}
                handleRemove={handleRemove}
                index={index}
                key={index}
            />
        ))
    }

    function handleAdd() {
        if (!newImageUrl === "") {
            setImages([newImageUrl, ...images])
            setNewImageUrl("")
        }
    }

    function handleChange(event) {
        setNewImageUrl(event.target.value)
    }

    return (
        <section>
            <div className="gap-0" style={{ columnCount: 3}}>
                <ShowImage />
            </div>
            <div className="flex justify-between my-5">
                <div className="w-full">
                    <input
                        type="text"
                        id="inputBox"
                    ></input>

                </div>
            </div>

        </section>
    )


}

// components: Images.js, and hooks: useFetchImage.js, and Image.js are all related
// url = https://www.youtube.com/watch?v=h807ZAth2KQ (Tailwind CSS)