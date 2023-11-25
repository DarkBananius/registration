import styles from './App.module.css';
import { Form } from './components';

export const App = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.registration}>
				<Form />
			</div>
		</div>
	);
};