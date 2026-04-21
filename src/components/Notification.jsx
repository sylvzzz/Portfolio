import { createContext, useContext, useState, useCallback } from "react"
import { Info } from "lucide-react"

const NotificationContext = createContext(() => {})

export function useNotification() {
  return useContext(NotificationContext)
}

export function NotificationProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const notify = useCallback((t, d) => {
    setTitle(t)
    setDescription(d)
    setOpen(true)
    setTimeout(() => setOpen(false), 4000)
  }, [])

  return (
    <NotificationContext.Provider value={notify}>
      {children}
      {open && (
        <div className="fixed top-0 left-0 right-0 h-fit pointer-events-none flex items-start justify-center pt-10 px-4 z-[9999]">
          <div className="bg-[#1a1a1f] border border-gray-700 rounded-lg p-3 flex items-start gap-3 max-w-sm w-full pointer-events-auto">
            <Info className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white text-sm">{title}</p>
              <p className="text-gray-400 text-sm mt-0.5">{description}</p>
            </div>
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  )
}