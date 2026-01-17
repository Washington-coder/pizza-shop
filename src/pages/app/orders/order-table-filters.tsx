import { Input } from '@/components/ui/input'

export function OrderTableFilters() {
  return (
    <form className="flex items-center gap-4 font-semibold">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
    </form>
  )
}
