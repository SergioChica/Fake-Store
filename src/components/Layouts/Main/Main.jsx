import React from 'react'

export const Main = ({children}) => {
  return (
    <main className='min-h-full h-auto w-full flex flex-col flex-1 items-center pt-[30px] pb-[30px] relative'>{children}</main>
  )
}
