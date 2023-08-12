import './App.css';
import CountDownList from './components/CountDownList/CountDownList';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

const dates = [
  {
    title: 'التقديم',
    date: '2023-08-07T06:00:00',
  },
  {
    title: 'الكشف الطبي',
    date: '2023-08-16T06:00:00',
  },
  {
    title: 'الإرجة',
    date: '2023-09-01T06:00:00',
  },
  {
    title: 'التدريب',
    date: '2023-09-15T06:00:00',
  },
  {
    title: 'التجنيد',
    date: '2023-09-30T06:00:00',
  },
];

function App() {
  return (
    <div className="App">
      <Nav />
      <CountDownList dates={dates} />
      <Footer />
    </div>
  );
}

export default App;
