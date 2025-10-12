import { useState } from 'react'
import { useQuery } from 'react-query'

// Fetch function used by React Query
async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

export default function PostsComponent() {
  const [visible, setVisible] = useState(true)

  // React Query handles loading, error, caching, and stale times
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
    dataUpdatedAt,
  } = useQuery(['posts'], fetchPosts, {
    // Keep data "fresh" for 10s; navigate away & back to see cache behavior
    staleTime: 10_000,
    // Cache for 5 minutes
    cacheTime: 5 * 60_000,
  })

  return (
    <div style={{ marginTop: 24 }}>
      <div style={{ marginBottom: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button onClick={() => setVisible(v => !v)}>
          {visible ? 'Hide list (unmount)' : 'Show list (mount)'}
        </button>
        <button onClick={() => refetch()}>Refetch now</button>
        {isFetching && <span style={{ color: '#888' }}> (fetching…)</span>}
      </div>

      {visible && (
        <div>
          {isLoading && <p>Loading posts…</p>}
          {isError && <p style={{ color: 'crimson' }}>Error: {error.message}</p>}

          {data && (
            <>
              <p style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>
                Cache last updated: {new Date(dataUpdatedAt).toLocaleTimeString()}
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 12, padding: 0, listStyle: 'none' }}>
                {data.slice(0, 12).map(post => (
                  <li key={post.id} style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12 }}>
                    <h3 style={{ marginTop: 0, marginBottom: 6 }}>{post.title}</h3>
                    <p style={{ margin: 0, color: '#555' }}>{post.body}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  )
}
