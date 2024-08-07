import React from 'react'
import CLangIcon from './programming-icons/c'
import CPlusPlusIcon from './programming-icons/cplusplus';
import PythonIcon from './programming-icons/python';
import JavaScriptIcon from './programming-icons/javascript';
import TypescriptIcon from './programming-icons/typescript';

const ProgrammingIconsRibbon = () => {
  const iconProps = {
    height: 100,
    width: 100
  };

  return (
    <>
      <div className="h-10" /> {/* Spacer */}
      <div className='relative flex justify-center gap-8'>
        <CLangIcon {...iconProps} />
        <CPlusPlusIcon {...iconProps} />
        <PythonIcon {...iconProps} />
        <JavaScriptIcon {...iconProps} />
        <TypescriptIcon {...iconProps} />
      </div>
      <div className="h-10" /> {/* Spacer */}
    </>
  )
}

export default ProgrammingIconsRibbon