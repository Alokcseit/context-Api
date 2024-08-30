import UserContextProvider from './context/UserContextProvider';
import Login from './Login';
import Profile from './Profile';
function App() {
  return (
     <UserContextProvider>
      <Login></Login>
      <Profile></Profile>
     </UserContextProvider>
    
  );
}

export default App;
