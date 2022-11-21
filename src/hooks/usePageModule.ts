import PageModal from '@/components/page-modal/index'
import { ref } from 'vue'
import useRootStore from '@/stores/main/root/root'
const RootStore = useRootStore()
type callBackFn = () => void
export function usePageModule(newCb?: callBackFn, newEb?: callBackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  // 新增的操作
  const EmitChangeDialog = () => {
    console.log('xinzeng')
    if (pageModalRef.value) {
      defaultInfo.value = {}
      pageModalRef.value.dialogVisible = true
    }
    newCb && newCb()
  }
  //编辑的操作
  const EmiteEditorUser = (item: any) => {
    defaultInfo.value = { ...item }
    console.log('user页面中', defaultInfo.value)
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    console.log(pageModalRef.value?.dialogVisible)
    newEb && newEb()
    // console.log(item)
  }
  return [pageModalRef, EmitChangeDialog, EmiteEditorUser, defaultInfo]
}
