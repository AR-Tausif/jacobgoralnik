import { Search, Filter, Download, Plus } from "lucide-react"
import ProductsTable from "../_components/products-table"
import { ReactNode } from "react"


export default function ProductsLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}
