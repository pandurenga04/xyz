import type { Metadata } from "next"
import ProductsContent from "@/components/products-content"

export const metadata: Metadata = {
  title: "Products | SDEC - Sri Durgai Eswari Constructions",
  description: "Premium construction product catalog coming soon. Discover our upcoming range of high-quality construction materials and equipment.",
}

export default function ProductsPage() {
  return <ProductsContent />
}
