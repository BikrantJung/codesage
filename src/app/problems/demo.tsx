"use client";
import { Highlight } from '@/components/shared/syntax-highlighter';
import React from 'react'

function Demo({data}:{data:any}) {
  console.log("DATA IN DEMO",data)
  return (
    <div>
        <Highlight codeString={JSON.stringify(data)} language='javascript' parser='babel' />
    </div>
  )
}

export default Demo