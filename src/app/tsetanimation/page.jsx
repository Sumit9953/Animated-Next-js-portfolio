"use client"

import React from 'react'

import {motion} from "framer-motion"

const TestPage = () => {

    const variants = {
        variant1: {
            x: 400,
            y: 300,
            opacity: 0.5,
            transition:{
                duration: 3
            }
        },
        variant2:{
            x: 100,
            y: -300,
            opacity: 0.5,
        }
    }

  return (
    <div className='h-full flex justify-center items-center'>
        <motion.div
            className='w-96 h-96 bg-red-400 rounded'
            // initial={{x: -100}}
            variants={variants}
            animate="variant1"
            // transition={{delay:2 , duration:4}}
        >
        </motion.div>
    </div>
  )
}

export default TestPage