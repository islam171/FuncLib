import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export const usePlayer = () => {
	const videoRef = useRef(null)
	const progressRef = useRef(null)
	const volumeRef = useRef(null)
	const playerRef = useRef(null)

	const [isPlaying, setIsPlaying] = useState(false)
	const [muted, setMuted] = useState(videoRef?.current?.muted)
	const [currentTime, setCurrentTime] = useState(0)
	const [videoTime, setVideoTime] = useState(0)
	const [progress, setProgress] = useState(0)
	const [volume, setVolume] = useState(0)

	useEffect(() => {
		const fullTime = videoRef?.current?.duration
		if (fullTime) setVideoTime(fullTime)
	}, [videoRef?.current?.duration])

	const toggleVideo = useCallback(() => {
		if (!isPlaying) {
			videoRef.current?.play()
			setIsPlaying(true)
		} else {
			videoRef.current?.pause()
			setIsPlaying(false)
		}
	}, [isPlaying])

	useEffect(() => {
		const video = videoRef?.current
		if (!video) return

		const updateProgressBar = () => {
			setCurrentTime(video?.currentTime)
			setProgress((video?.currentTime / videoTime) * 100)
			setVolume(video?.volume)
		}

		video?.addEventListener('timeupdate', updateProgressBar)

		return () => {
			video?.removeEventListener('timeupdate', updateProgressBar)
		}
	}, [videoTime])

	const forward = () => {
		videoRef.current && (videoRef.current.currentTime += 10)
	}
	const back = () => {
		videoRef.current && (videoRef.current.currentTime -= 10)
	}

	const fullScreen = useCallback(() => {
		const player = playerRef.current
		if (!player) return

		if (document.fullscreenElement !== null) {
			document.exitFullscreen()
		} else {
			if (player?.requestFullscreen) {
				player.requestFullscreen()
			} else if (player.msRequestFullscreen) {
				player.msRequestFullscreen()
			} else if (player.mozRequestFullscreen) {
				player.mozRequestFullscreen()
			} else if (player.webkitRequestFullscreen) {
				player.webkitRequestFullscreen()
			}
		}
	}, [])

	useEffect(() => {
		const handleKeyDown = e => {
			switch (e.key) {
				case ' ': {
					e.preventDefault()
					toggleVideo()
					break
				}
				case 'f':
					fullScreen()
					break
				case 'ArrowRight':
					forward()
					break
				case 'ArrowLeft':
					back()
					break
				default:
					return
			}
		}
		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [toggleVideo])

	useEffect(() => {
		const progress = progressRef?.current
		const video = videoRef?.current

		const clickProgressBar = e => {
			const timelineWidth = progress.clientWidth
			video.currentTime = (e.offsetX / timelineWidth) * video.duration
		}

		progress.addEventListener('click', clickProgressBar)
		return () => progress.removeEventListener('click', clickProgressBar)
	}, [])

	useEffect(() => {
		const volume = volumeRef?.current
		const video = videoRef?.current

		const clickProgressBar = e => {
			const volumeWidth = volume.clientWidth
			video.volume = e.offsetX / volumeWidth
		}

		volume.addEventListener('click', clickProgressBar)
		return () => volume.removeEventListener('click', clickProgressBar)
	}, [])

	const muffleTarget = () => {
		const video = videoRef?.current
		setMuted(!video.muted)
		video.muted = !video.muted
	}

	return useMemo(
		() => ({
			ref: { videoRef, playerRef, progressRef, volumeRef },
			actions: { forward, back, toggleVideo, fullScreen, muffleTarget },
			video: { isPlaying, progress, currentTime, videoTime, volume, muted }
		}),
		[currentTime, progress, isPlaying, videoTime, toggleVideo, muted]
	)
}
