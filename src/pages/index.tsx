export default function Home() {
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to right, #00b4db, #0083b0)',
      color: 'black',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Hello, Brother David!</h1>
      <p style={{ fontSize: '1.25rem' }}>Welcome to my web page. Where's YOUR web page? Again.</p>
    </div>
  )
}