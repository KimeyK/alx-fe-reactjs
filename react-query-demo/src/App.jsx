import { QueryClient, QueryClientProvider } from 'react-query'
import PostsComponent from './components/PostsComponent.jsx'

// Create one QueryClient for the app
const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
        <h1>React Query Demo (JSONPlaceholder)</h1>
        <p style={{ color: '#555' }}>
          Shows fetching, caching, and refetching of posts from JSONPlaceholder.
        </p>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  )
}
