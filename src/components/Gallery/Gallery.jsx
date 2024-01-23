import styles from './Gallery.module.css'
import GalleryItem from './GalleryItem.jsx'

const Gallery = ({ items }) => {
	return (
		<div className={styles.Gallery}>
			{items.map(item => (
				<GalleryItem item={item} variant={'vertical'} />
			))}
		</div>
	)
}

export default Gallery
