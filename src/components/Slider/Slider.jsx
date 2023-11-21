import styles from './Slider.module.scss'
import {useEffect, useRef, useState} from "react";

const Slider = ({items, width}) => {

    const slider = useRef(null)
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)

    const [currentIndex, setCurrentIndex] = useState(0)
    const itemWidth = width / 4

    useEffect(() => {
        slider.current.childNodes.forEach((element) => {
            element.style = `transform: translate(-${currentIndex*itemWidth}px); min-width: ${itemWidth}px; `
        })
    }, [currentIndex, itemWidth])

    const prevHandler = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? currentIndex : currentIndex - 1
        setNext(false)
        isFirstSlide ? setPrev(true) : setPrev(false)
        setCurrentIndex(newIndex)
    }
    const nextHandler = () => {
        const isLastSlide = currentIndex === items.length - 4
        setPrev(false)
        const newIndex = isLastSlide ? currentIndex : currentIndex + 1
        isLastSlide ? setNext(true) : setPrev(false)
        setCurrentIndex(newIndex)
    }

    return <>
        <div className={styles.slider} style={{width: `${width}px`}}>
            <button className={styles.slider__button} disabled={prev} onClick={prevHandler}>{'<'}</button>
            <div className={styles.slider__track} ref={slider}>
                {items.map((item, index) => (
                    <div className={styles.slider__item} style={{minWidth: `${itemWidth}`}}>
                        <div className={styles.slider__body}>{index}</div>
                    </div>
                ))}
            </div>
            <button className={styles.slider__button_right} disabled={next} onClick={nextHandler}>{'>'}</button>
        </div>
    </>
}

export default Slider