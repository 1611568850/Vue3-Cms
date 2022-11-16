import { ref } from 'vue'
import PageTable from '@/components/page-table/src/page-table.vue'

export function usePageSearch() {
  const pageTable = ref<InstanceType<typeof PageTable>>()

  // 实现搜索功能
  const handelSearchClick = (queryInfo: any): void => {
    pageTable.value?.pageTableData(queryInfo)
    // console.log('---')
  }
  const handelResetClick = (): void => {
    // console.log('---')
    pageTable.value?.pageTableData()
  }
  return [pageTable, handelSearchClick, handelResetClick]
}
