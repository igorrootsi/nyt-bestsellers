import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { BookLists } from './BookLists';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BookLists />
      </div>
    </QueryClientProvider>
  );
}

export default App;
