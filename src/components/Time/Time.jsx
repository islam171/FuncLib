const Time = () => {

    const time = new Date()

    const day = time.getDate()
    const month = time.getMonth()
    const year = time.getFullYear()

    return <div className={"time"}>
        <div>{day}</div>/
        <div>{month}</div>/
        <div>{year}</div>
    </div>
}

export default Time