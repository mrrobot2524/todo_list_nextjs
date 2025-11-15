import ThemeToggle from './components/ThemeToggle';
import ToDoApp from './components/ToDoApp';

const Home = () => {
    return (
        <div className='app'>
            <header className='flex justify-between mb-5 border-b'>
                <h1>Todo - Next.js (Client)</h1>
                <ThemeToggle/>
            </header>
            <ToDoApp/>
        </div>
    );
}
export default Home;