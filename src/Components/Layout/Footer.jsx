import React from 'react'

function Footer() {
    const fullyear = new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
        <div>
            <svg 
            width='50'
            height='50'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
            className='inline-block fill-current text-white'

            >
            <path d="M10 2h2v4h4V2h2v4h4v2h-4v4h4v2h-4v4h4v2h-4v4h-2v-4h-4v4h-2v-4H6v4H4v-4H0v-2h4v-4H0v-2h4V8H0V6h4V2h2v4h4V2zM6 8v4h4V8H6zm0 8h4v-4H6v4zm8-4h-4v4h4v-4zm0-4h-4v4h4V8z"/>

            </svg>
            <p className='text-white'>Copyright &copy; {fullyear} All Rights Reseverd </p>
        </div>
   

    </footer>
  )
}

export default Footer