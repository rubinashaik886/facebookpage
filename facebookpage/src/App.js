import MainPage from './Components/MainPage';
import Sidebar from './Components/Sidebar';
import ActivityBar from './Components/ActivityBar'


function App() {
  return (
    <div>
      <MainPage />
      <Sidebar></Sidebar>
      <ActivityBar align="right"/>
    </div>
  );
}

export default App;
