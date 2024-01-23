import styles from './Gallery.module.css'
import { Link } from 'react-router-dom'
import cn from 'classnames'

const GalleryItem = ({ item, variant }) => {
	return (
		<Link
			to={item.link}
			className={cn(styles.item, {
				[styles.withText]: item.content,
				[styles.horizontal]: variant === 'horizontal',
				[styles.vertical]: variant === 'vertical'
			})}
		>
			<img src={item.src} alt={item.title} />

			{item.content && (
				<div className={styles.content}>
					<div className={styles.title}>{item.title}</div>
					<div className={styles.subTitle}>{item.content.subTitle}</div>
				</div>
			)}
		</Link>
	)
}

export default GalleryItem
