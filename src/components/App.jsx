/* eslint-disable no-case-declarations */

import Header from './Header';
import MainPart from './MainPart';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import FinishedScreen from './FinishedScreen';
import Footer from './Footer';
import Timer from './Timer';
import { useQuiz } from '../contexts/QuizContext';

function App() {
	const { status } = useQuiz();

	return (
		<div className='app'>
			<Header />

			<MainPart>
				{status === 'loading' && <Loader />}
				{status === 'ready' && <StartScreen />}
				{status === 'error' && <Error />}

				{status === 'active' && (
					<>
						<Progress />

						<Question />

						<Footer>
							<Timer />

							<NextButton />
						</Footer>
					</>
				)}

				{status === 'finished' && <FinishedScreen />}
			</MainPart>
		</div>
	);
}

export default App;
