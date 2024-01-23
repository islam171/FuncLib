import styles from './Search.module.css'
import { useState } from 'react'
import { MdSearch } from 'react-icons/md'

const Search = () => {
	const [search, setSearch] = useState('')

	return (
		<div className={styles.Search}>
			<span>
				<MdSearch />
			</span>
			<input
				type='text'
				value={search}
				onChange={e => setSearch(e.target.value)}
				placeholder={'Search'}
			/>
		</div>
	)
}

export default Search
