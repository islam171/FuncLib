import { useEffect, useState } from 'react'

export const useUpload = old => {
	const [image, setImage] = useState(null)
	const [view, setView] = useState(old)

	const onload = () => {
		let fileReader,
			isCancel = false
		if (image) {
			fileReader = new FileReader()
			fileReader.onload = e => {
				const { result } = e.target
				if (result && !isCancel) {
					setView(result)
				}
			}
			fileReader.readAsDataURL(image)
		}
		return () => {
			isCancel = true
			if (fileReader && fileReader.readyState === 1) {
				fileReader.abort()
			}
		}
	}

	useEffect(() => {
		onload()
	}, [image])

	return { image, setImage, view }
}
