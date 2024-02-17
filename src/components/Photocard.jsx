import React, { useState } from 'react'
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import 'yet-another-react-lightbox/styles.css';
import CustomImage from './CustomImage';

export default function Photocard({ photos, thumb }) {
    const [index, setIndex] = useState(-1);
    return (
        <>
            <PhotoAlbum
                layout="masonry"
                photos={photos}
                targetRowHeight={150}
                renderPhoto={CustomImage}
                sizes={{ size: "calc(100vw - 240px)" }}
                onClick={({ index: current }) => setIndex(current)}
            />
            <Lightbox
                index={index}
                slides={photos}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </>

    )
}
