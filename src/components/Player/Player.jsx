import styles from './Player.module.css'
import { usePlayer } from '../../../hooks/usePlayer.js'
import cn from 'classnames'

import * as MaterialIcon from 'react-icons/md'

const Player = ({ videoUrl }) => {
	const { video, actions, ref } = usePlayer()

	return (
		<div
			className={cn(styles.Player, actions.isFull ? styles.fullscreen : '')}
			ref={ref.playerRef}
		>
			<div className={styles.inner}>
				{!video.isPlaying ? (
					<div className={styles.playInner} onClick={actions.toggleVideo}>
						<div className={styles.playBtn}>
							<MaterialIcon.MdPlayArrow />
						</div>
					</div>
				) : (
					<>
						<div
							className={styles.rightInner}
							onDoubleClick={actions.forward}
						></div>
						<div
							className={styles.leftInner}
							onDoubleClick={actions.back}
						></div>
					</>
				)}
			</div>
			<video
				src={`${videoUrl}#t=0.08`}
				ref={ref.videoRef}
				preload='metadata'
				data-fullscreen={false}
			></video>

			<div className={styles.progressBar} ref={ref.progressRef}>
				<div style={{ width: `${video.progress}%` }}></div>
			</div>

			<div className={styles.control}>
				<div>
					<MaterialIcon.MdHistory onClick={actions.back} />
					{video.isPlaying ? (
						<MaterialIcon.MdPause onClick={actions.toggleVideo} />
					) : (
						<MaterialIcon.MdPlayArrow onClick={actions.toggleVideo} />
					)}

					<MaterialIcon.MdUpdate onClick={actions.forward} />
					<div className={styles.time}>
						<p>
							{(Math.floor(video.currentTime / 60) > 10
								? Math.floor(video.currentTime / 60)
								: Math.floor(video.currentTime / 60) + '0') +
								':' +
								('0' + Math.floor(video.currentTime % 60)).slice(-2)}
						</p>
						<p>/</p>
						<p>
							{(Math.floor(video.videoTime / 60) > 10
								? Math.floor(video.videoTime / 60)
								: Math.floor(video.videoTime / 60) + '0') +
								':' +
								('0' + Math.floor(video.videoTime % 60)).slice(-2)}
						</p>
					</div>
					<div className={styles.volume}>
						{video.muted ? (
							<MaterialIcon.MdVolumeOff onClick={actions.muffleTarget} />
						) : (
							<MaterialIcon.MdVolumeUp onClick={actions.muffleTarget} />
						)}
						<div className={styles.volumeSlider}>
							<div className={styles.volumeProgress} ref={ref.volumeRef}>
								<div
									style={{
										width: `${ref.videoRef.current?.muted ? 0 : video.volume * 100}%`
									}}
								></div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<MaterialIcon.MdFullscreen onClick={actions.fullScreen} />
				</div>
			</div>
		</div>
	)
}

export default Player
