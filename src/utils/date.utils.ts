import { format } from 'date-fns'

export class DateUtils {
  static IsoToBr(date: Date): string | null {
    if (!date) return null
    return format(date, 'dd/MM/yyyy')
  }
}
