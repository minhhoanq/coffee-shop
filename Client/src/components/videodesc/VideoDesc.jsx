import React, { useRef } from "react";

import './video-desc.scss';
import Modal, {ModalContent} from '../modal/Modal';

const VideoDesc = () => {

    const setModalActive = () => {
        const modal = document.querySelector('#modal');
        const videoSrc = 'https://www.youtube.com/embed/zNazdgaFHFY';
        modal.querySelector('.modal__content > iframe').setAttribute('src', videoSrc);
        modal.classList.toggle('active');
    }

    return (
        <div className="video-desc">
            <div className="video-desc__wrapper">
                <div className="video-desc__wrapper__left" onClick={setModalActive}>
                    <img src="https://weaverscoffee.com/cdn/shop/files/John_Weaver_Master_Coffee_Roaster_leans_over_45_kilo_Probat_Coffee_roaster_with_fifty_gallon_buckets_filled_with_roasted_coffee_beans_in_the_foreground_1200x.jpg?v=1686799882" alt=""/>
                </div>
                <div className="video-desc__wrapper__right">
                    <div className="video-desc__wrapper__right__title">WHO WE ARE</div>
                    <div className="video-desc__wrapper__right__desc">We are a dedicated team of professionals concentrating on creating the world’s most delicious coffee and tea. We are Social Entrepreneurs who believe in giving back to our local economy and global economy. Locally, we donate a percentage of sales from three of our coffee's: Astral Blend Coffee to Dr. Susan Love Research Foundation, Hakrz Delight Coffee to Black Girls Code and Pride Blend Coffee to SF AIDS Foundation.</div>
                    <div className="video-desc__wrapper__right__btn">Read More</div>
                </div>
            </div>
            <VideoModal/>
        </div>
    )
};

const VideoModal = () => {

    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src', '');

    return (
        <Modal active={false} id={'modal'}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width={"100%"} height={"500px"} title="video"></iframe>
            </ModalContent>
        </Modal>
    )
}

export default VideoDesc;