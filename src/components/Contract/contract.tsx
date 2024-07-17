"use client"

import React from 'react'
import { ReactComponent as EmailIcon } from '@/assets/svg/email-icon.svg'
import { ReactComponent as TelIcon } from '@/assets/svg/phone-icon.svg'
import { ReactComponent as LineIcon } from '@/assets/svg/line-icon.svg'
import { ReactComponent as PointOfInterest } from '@/assets/svg/point-of-interest-icon.svg'
import { motion } from 'framer-motion'

function Contract() {
  return (
    <section id="contract" className='flex justify-center items-center min-w-[600px]'>
      <div className='flex justify-center items-center w-[50%] h-[20rem] min-w-fit rounded-md bg-slate-400 shadow-lg shadow-slate-500'>
        <div id='contract-container' className='grid grid-cols-1'>
          <div className='flex items-center justify-center mb-[30px]'>
            <p className='text-4xl font-bold ml-[10px]'>Contract</p>
          </div>
          <div className='grid grid-cols-[30px_auto] items-center'>
            <motion.div 
              animate={{
                rotate: [0, 20, 0, 20, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              <EmailIcon width={20} height={20}></EmailIcon>
            </motion.div>
            <p><span className='font-medium'>Email :</span> haris_are@outlook.com</p>
          </div>
          <div className='grid grid-cols-[30px_auto] items-center'>
            <motion.div 
              animate={{
                rotate: [20, 0, 20, 0, 20]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              <TelIcon width={20} height={20}></TelIcon>
            </motion.div>
            <p><span className='font-medium'>Tel :</span> (+66)086-968-5211</p>
          </div>
          <div className='grid grid-cols-[30px_auto] items-center'>
            <motion.div 
              animate={{
                rotate: [0, 20, 0, 20, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <LineIcon width={25} height={25}></LineIcon>
            </motion.div>
            <p><span className='font-medium'>Line :</span> haris_are</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contract