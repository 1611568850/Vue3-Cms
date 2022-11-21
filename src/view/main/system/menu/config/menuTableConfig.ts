const menuTableConfig = {
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '系统总览', minWidth: '100' },
    { prop: 'type', label: '类型', minWidth: '60' },
    {
      prop: 'url',
      label: '路由地址',
      minWidth: '100',
      slotName: 'oldPrice'
    },
    { prop: 'icon', label: '路由icon', minWidth: '100' },
    { prop: 'permission', label: '用户权限', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  showPagination: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  }
}
export default menuTableConfig
