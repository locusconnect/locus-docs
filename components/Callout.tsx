import React from 'react'

type CalloutProps = {
  children: React.ReactNode
  type?: 'info' | 'warning' | 'error'
  emoji?: string
}

const typeStyles = {
  info: 'bg-blue-50 border-blue-200 text-blue-800',
  warning: 'bg-amber-50 border-amber-200 text-amber-800',
  error: 'bg-red-50 border-red-200 text-red-800'
}

export function Callout({ children, type = 'info', emoji }: CalloutProps) {
  return (
    <div className={`my-6 flex rounded-lg border p-4 ${typeStyles[type]}`}>
      {emoji && <div className="mr-4 flex select-none text-2xl">{emoji}</div>}
      <div className="w-full min-w-0">{children}</div>
    </div>
  )
} 