import { ViewListSearchRoot } from '@/components/view-list-search/view-list-search-root'
import { ViewListSearchDataHeader } from '@/components/view-list-search/view-list-search-data-header'
import { ViewListSearchDataContent } from '@/components/view-list-search/view-list-search-data-content'
import { ViewListSearchFilter } from '@/components/view-list-search/view-list-search-filter'
import { ViewListSearchData } from '@/components/view-list-search/view-list-search-data'
import { ViewListSearchDataTitle } from '@/components/view-list-search/view-list-search-data-title'

export const ViewListSearch = {
  Root: ViewListSearchRoot,
  Data: {
    Root: ViewListSearchData,
    Header: ViewListSearchDataHeader,
    Title: ViewListSearchDataTitle,
    Content: ViewListSearchDataContent,
  },
  Filter: ViewListSearchFilter,
}
