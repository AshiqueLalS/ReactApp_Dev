import React from 'react'

function Footer() {
  return (
    <>
        <footer >
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-dark' href='#'>
                    Ecommerce.com
                </a>
            </div>
        </footer>
    </>
    
  )
}

export default Footer